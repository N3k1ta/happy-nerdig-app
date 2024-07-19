"use client"
import { useState } from 'react';

import "./AdminForm.css"

export default function AdminForm({ user }) {
  const [modulName, setModulName] = useState('');
  const [modulType, setModulType] = useState('');
  const [modulPrice, setModulPrice] = useState('');
  const [modulTypeView, setModulTypeView] = useState('');
  const [modulDiscription, setModulDiscription] = useState('');
  const [modulTechDim, setModulTechDim] = useState('');
  const [modulTechCD, setModulTechCD] = useState('');
  const [modulImage1, setModulImage1] = useState(null);
  const [modulImage2, setModulImage2] = useState(null);
  const [modulVideoLink1, setModulVideoLink1] = useState('');
  const [modulVideoLink2, setModulVideoLink2] = useState('');
  const [modulVideoLink3, setModulVideoLink3] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    ///////!!!
    console.log('Form Data:', { modulName, modulType });
    setIsLoading(true);

    const formData = new FormData();
    formData.append('modulName', modulName);
    formData.append('modulType', modulType);
    formData.append('modulPrice', modulPrice);
    formData.append('modulTypeView', modulTypeView);
    formData.append('modulDiscription', modulDiscription);
    formData.append('modulTechDim', modulTechDim);
    formData.append('modulTechCD', modulTechCD);
    formData.append('modulImage1', modulImage1); // Appending file
    formData.append('modulImage2', modulImage2); // Appending file
    formData.append('modulVideoLink1', modulVideoLink1);
    formData.append('modulVideoLink2', modulVideoLink2);
    formData.append('modulVideoLink3', modulVideoLink3);

    try {
      const response = await fetch('/api/modules/create', {
        method: 'POST',
        body: formData,
      });

      setIsLoading(false);

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Failed to create module:', errorData);
        alert(`Error: ${errorData.error}`);
        return;
      }

      const data = await response.json();
      console.log('Module created successfully:', data);
      alert('Module created successfully!');
    } catch (error) {
      setIsLoading(false);
      console.error('An error occurred:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <>
      <form className="module-form p-4" onSubmit={handleSubmit}>
        <div className='line'>
          <label>
            <label className="mr-2 w-20">Module Name</label>
            <input className='input'
              required
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
              required
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
              required
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
              required
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
              required
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
              required
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
              required
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
              required
              type="file"
              onChange={(e) => setModulImage1(e.target.files[0])}
            />
          </label>
        </div>
        <div className='line'>
          <label>
            <label>Module Image 2</label>
            <input className='input'
              required
              type="file"
              onChange={(e) => setModulImage2(e.target.files[0])}
            />
          </label>
        </div>
        <div className='line'>
          <label>
            <label>Module Video Link 1</label>
            <input className='input'
              required
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
              required
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
              required
              type="text"
              onChange={(e) => setModulVideoLink3(e.target.value)}
              value={modulVideoLink3}
            />
          </label>
        </div>
        <div className='flex justify-center'>
          <button className="btn m-4"
            type="submit"
            disabled={isLoading}>
            {isLoading ? 'Adding...' : 'Add Module'}
          </button>
        </div>
      </form>
    </>
  );
}
