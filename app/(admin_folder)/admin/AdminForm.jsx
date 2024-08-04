"use client"
import { useState } from 'react'
import "./AdminForm.css"
import { supabase } from '@/app/lib/supabaseClient'

export default function AdminForm() {
  const [modulName, setModulName] = useState('')
  const [modulType, setModulType] = useState('')
  const [modulPrice, setModulPrice] = useState('')
  const [modulTypeView, setModulTypeView] = useState('')
  const [modulDiscription, setModulDiscription] = useState('')
  const [modulTechDim, setModulTechDim] = useState('')
  const [modulTechCD, setModulTechCD] = useState('')
  const [modulImage1, setModulImage1] = useState(null)
  const [modulImage2, setModulImage2] = useState(null)
  const [modulVideoLink1, setModulVideoLink1] = useState('')
  const [modulVideoLink2, setModulVideoLink2] = useState('')
  const [modulVideoLink3, setModulVideoLink3] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    const uploadImage = async (imageFile) => {
      if (!imageFile) {
        console.log("No file selected for upload")
        return null
      }
      console.log("Uploading file:", imageFile.name)
      const filePath = `${imageFile.name}`
      const { data, error } = await supabase.storage.from('hn-modules-photos').upload(filePath, imageFile)

      if (error) {
        console.error("Error uploading file:", error)
        throw error
      }
      const publicUrl = supabase.storage.from('hn-modules-photos').getPublicUrl(filePath)
      console.log("File uploaded, public URL:", publicUrl)
      return publicUrl
    }

    try {
      const photo1Url = await uploadImage(modulImage1)
      const photo2Url = await uploadImage(modulImage2)

      console.log('Photo 1 URL:', photo1Url)
      console.log('Photo 2 URL:', photo2Url)

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
      }]).select().single()

      if (error) {
        console.error('Error inserting data:', error)
      } else {
        console.log('Module added successfully:', data)
      }
    } catch (error) {
      console.error('Error uploading files or inserting data:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <form className="module-form p-4" onSubmit={handleSubmit}>
        <div className='line'>
          <label>
            <label className="mr-2 w-20">Module Name</label>
            <input className='input'

              type="text"
              onChange={(e) => setModulName(e.target.value)}
              value={modulName}
            />
          </label>
        </div>
        <div className='line'>
          <label>
            <label className="mr-2 w-20">Module Type</label>
            <input className='input'

              type="text"
              onChange={(e) => setModulType(e.target.value)}
              value={modulType}
            />
          </label>
        </div>
        <div className='line'>
          <label>
            <label className="mr-2 w-20">Module Price</label>
            <input className='input'

              type="text"
              onChange={(e) => setModulPrice(e.target.value)}
              value={modulPrice}
            />
          </label>
        </div>
        <div className='line'>
          <label>
            <label>Module Type View</label>
            <input className='input'

              type="text"
              onChange={(e) => setModulTypeView(e.target.value)}
              value={modulTypeView}
            />
          </label>
        </div>
        <div className='line'>
          <label>
            <label>Module Description</label>
            <input className='input'

              type="text"
              onChange={(e) => setModulDiscription(e.target.value)}
              value={modulDiscription}
            />
          </label>
        </div>
        <div className='line'>
          <label>
            <label>Module Tech Dimensions</label>
            <input className='input'

              type="text"
              onChange={(e) => setModulTechDim(e.target.value)}
              value={modulTechDim}
            />
          </label>
        </div>
        <div className='line'>
          <label>
            <label>Module Tech CD</label>
            <input className='input'

              type="text"
              onChange={(e) => setModulTechCD(e.target.value)}
              value={modulTechCD}
            />
          </label>
        </div>
        <div className='line'>
          <label>
            <label>Module Image 1</label>
            <input className='input'

              type="file"
              onChange={(e) => setModulImage1(e.target.files[0])}
            />
          </label>
        </div>
        <div className='line'>
          <label>
            <label>Module Image 2</label>
            <input className='input'

              type="file"
              onChange={(e) => setModulImage2(e.target.files[0])}
            />
          </label>
        </div>
        <div className='line'>
          <label>
            <label>Module Video Link 1</label>
            <input className='input'

              type="text"
              onChange={(e) => setModulVideoLink1(e.target.value)}
              value={modulVideoLink1}
            />
          </label>
        </div>
        <div className='line'>
          <label>
            <label>Module Video Link 2</label>
            <input className='input'

              type="text"
              onChange={(e) => setModulVideoLink2(e.target.value)}
              value={modulVideoLink2}
            />
          </label>
        </div>
        <div className='line'>
          <label>
            <label>Module Video Link 3</label>
            <input className='input'

              type="text"
              onChange={(e) => setModulVideoLink3(e.target.value)}
              value={modulVideoLink3}
            />
          </label>
        </div>
        <div className='flex justify-center'>
          <button className="btn m-4" type="submit" disabled={isLoading}>
            {isLoading ? 'Adding...' : 'Add Module'}
          </button>
        </div>
      </form>
    </>
  )
}
