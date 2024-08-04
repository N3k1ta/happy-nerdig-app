"use client";
import { useState } from 'react';
import "./AdminForm.css";
import { handleSubmit } from '@/app/components/adminFormFunctions';
import { useRouter } from 'next/navigation';

export default function AdminForm() {
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

  const router = useRouter()

  const state = {
    modulName,
    modulType,
    modulPrice,
    modulTypeView,
    modulDiscription,
    modulTechDim,
    modulTechCD,
    modulImage1,
    modulImage2,
    modulVideoLink1,
    modulVideoLink2,
    modulVideoLink3,
  };

  return (
    <>
      <form className="module-form p-4" onSubmit={(e) => handleSubmit(e, state, setIsLoading, router)}>
        <div className='text-center '>
          <h1>Create New Module</h1>
        </div>
        <div className='line'>
          <label>
            <label >Module Name</label>
            <input className='input'
              type="text"
              onChange={(e) => setModulName(e.target.value)}
              value={modulName}
              required
            />
          </label>
        </div>
        <div className='line'>
          <label>
            <label >Module Type</label>
            <input className='input'
              type="text"
              onChange={(e) => setModulType(e.target.value)}
              value={modulType}
              required
            />
          </label>
        </div>
        <div className='line'>
          <label>
            <label >Module Price</label>
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
              required
            />
          </label>
        </div>
        <div className='line'>
          <label>
            <label>Module Description</label>
            <textarea className='input'
              onChange={(e) => setModulDiscription(e.target.value)}
              value={modulDiscription}
              required
            />
          </label>
        </div>
        <div className='line'>
          <label>
            <label>Module Tech Dimensions</label>
            <textarea className='input'
              onChange={(e) => setModulTechDim(e.target.value)}
              value={modulTechDim}
            />
          </label>
        </div>
        <div className='line'>
          <label>
            <label>Module Tech CD</label>
            <textarea className='input'
              onChange={(e) => setModulTechCD(e.target.value)}
              value={modulTechCD}
            />
          </label>
        </div>
        <div className='line'>
          <label>
            <label>Module Image 1 </label><label className='text-red-400'>(.png file &lt; 50Mb)</label>
            <input className='input'
              type="file"
              onChange={(e) => setModulImage1(e.target.files[0])}
              required
            />
          </label>
        </div>
        <div className='line'>
          <label>
            <label>Module Image 2 </label><label className='text-red-400'>(.png file &lt; 50Mb)</label>
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
  );
}
