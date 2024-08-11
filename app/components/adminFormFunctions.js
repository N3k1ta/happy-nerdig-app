import { supabase } from '@/app/lib/supabaseClient';

export const uploadImage = async (imageFile) => {
  if (!imageFile) {
    console.log("No file selected for upload");
    return null;
  }
  const filePath = `${imageFile.name}`;
  const { data, error } = await supabase.storage.from('hn-modules-photos-main/'+ `${imageFile.name}`).upload(filePath, imageFile);

  if (error) {
    console.error("Error uploading file:", error);
    throw error;
  }

  const { data: publicUrlData } = supabase.storage.from('hn-modules-photos-main').getPublicUrl(filePath);
  return publicUrlData.publicUrl;
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

  try {
    const photo1Url = await uploadImage(modulImage1);
    const photo2Url = await uploadImage(modulImage2);


    const { data, error } = await supabase.from('happy-nerding-modules-main').insert([{
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
      const newModuleId = data.id;
      console.log('Module added successfully:');
      router.push(`/modules/${newModuleId}`);
    }
  } catch (error) {
    console.error('Error uploading files or inserting data:', error);
  } finally {
    setIsLoading(false);
  }
};
