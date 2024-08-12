import { supabase } from '@/app/lib/supabaseClient';

export const uploadImage = async (imageFile, folderName) => {
  if (!imageFile) {

    console.log("No file selected for upload");

    return null;
  }

  // Define the path

  const filePath = `${folderName}/${imageFile.name}`;

  // Upload the file to the specified path in the bucket

  const { data, error } = await supabase.storage.from('hn-modules-photos-main').upload(filePath, imageFile);

  if (error) {
    console.error("Error uploading file:", error);
    throw error;
  }

  // Generate a signed URL with long expiration
  const { data: signedUrlData, error: signedUrlError } = await supabase
    .storage
    .from('hn-modules-photos-main')
    .createSignedUrl(filePath, 60 * 60 * 24 * 365 * 333); // Expires in 333 years

  if (signedUrlError) {
    console.error("Error generating signed URL:", signedUrlError);
    throw signedUrlError;
  }

  return signedUrlData.signedUrl;
};




export const handleSubmit = async (e, state, setIsLoading, router) => {
  e.preventDefault();
  setIsLoading(true);

  const {
    modulName,
    modulPrice,
    modulType,
    modulTypeView,
    modulDiscription,
    modulTechDim,
    modulTechCD,
    modulImage1,
    modulImage2,
    modulVideoLink1,
    modulVideoLink2,
    modulVideoLink3
  } = state;

  // Convert module name to a folder name
  const newFolderName = `hn-${modulName.replace(/\s+/g, '-').toLowerCase()}`;

  try {
    const photo1Url = await uploadImage(modulImage1, newFolderName);
    const photo2Url = await uploadImage(modulImage2, newFolderName);


    const { data, error } = await supabase.from('happy-nerding-modules').insert([{
      name: modulName,
      price: modulPrice,
      type: modulType,
      type_view: modulTypeView,
      discript: modulDiscription,
      tech_dim: modulTechDim,
      tech_cd: modulTechCD,
      image_url_bk: photo1Url,
      image_url_w: photo2Url,
      videolink1: modulVideoLink1,
      videolink2: modulVideoLink2,
      videolink3: modulVideoLink3,
    }]).select().single();

    if (error) {
      console.error('Error inserting data:', error);
    } else {
      console.log('Insert successful:', data);
      const newModuleId = data.id;
      router.push(`/modules/${newModuleId}`);
    }
  } catch (error) {
    console.error('Error uploading files or inserting data:', error);
  } finally {
    setIsLoading(false);
  }
};
