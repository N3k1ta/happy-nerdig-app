"use client";
import "./CreateForm.css";
import { useState } from "react";

export default function CreateForm() {
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
    <form className="module-form" onSubmit={handleSubmit}>
      <label>
        <span>Module Name</span>
        <input
          required
          type="text"
          onChange={(e) => setModulName(e.target.value)}
          value={modulName}
        />
      </label>
      <label>
        <span>Module Type</span>
        <input
          required
          type="text"
          onChange={(e) => setModulType(e.target.value)}
          value={modulType}
        />
      </label>
      <label>
        <span>Module Price</span>
        <input
          required
          type="text"
          onChange={(e) => setModulPrice(e.target.value)}
          value={modulPrice}
        />
      </label>
      <label>
        <span>Module Type View</span>
        <input
          required
          type="text"
          onChange={(e) => setModulTypeView(e.target.value)}
          value={modulTypeView}
        />
      </label>
      <label>
        <span>Module Discription</span>
        <input
          required
          type="text"
          onChange={(e) => setModulDiscription(e.target.value)}
          value={modulDiscription}
        />
      </label>
      <label>
        <span>Module Tech Dimentions</span>
        <input
          required
          type="text"
          onChange={(e) => setModulTechDim(e.target.value)}
          value={modulTechDim}
        />
      </label>
      <label>
        <span>Module Tech CD</span>
        <input
          required
          type="text"
          onChange={(e) => setModulTechCD(e.target.value)}
          value={modulTechCD}
        />
      </label>
      <label>
        <span>Module Image 1</span>
        <input
          required
          type="file"
          onChange={(e) => setModulImage1(e.target.files[0])}
        />
      </label>
      <label>
        <span>Module Image 2</span>
        <input
          required
          type="file"
          onChange={(e) => setModulImage2(e.target.files[0])}
        />
      </label>
      <label>
        <span>Module Video Link 1</span>
        <input
          required
          type="text"
          onChange={(e) => setModulVideoLink1(e.target.value)}
          value={modulVideoLink1}
        />
      </label>
      <label>
        <span>Module Video Link 2</span>
        <input
          required
          type="text"
          onChange={(e) => setModulVideoLink2(e.target.value)}
          value={modulVideoLink2}
        />
      </label>
      <label>
        <span>Module Video Link 3</span>
        <input
          required
          type="text"
          onChange={(e) => setModulVideoLink3(e.target.value)}
          value={modulVideoLink3}
        />
      </label>
      <button className="button-form" type="submit" disabled={isLoading}>
        {isLoading ? 'Adding...' : 'Add Module'}
      </button>
    </form>
  );
}
