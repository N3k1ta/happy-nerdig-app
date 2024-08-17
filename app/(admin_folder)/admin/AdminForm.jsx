"use client";
import { useState, useEffect } from 'react';
import { handleSubmit } from '@/app/components/adminFormFunctions';
import { useRouter } from 'next/navigation';
import { supabase } from '@/app/lib/supabaseClient';

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
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const { data: sessionData, error } = await supabase.auth.getSession();
      console.log("AdminForm sessionData:", sessionData);
      if (error) {
        console.error("Error fetching session:", error);
      } else {
        if (sessionData?.session) {
          const { data: userData, error: userError } = await supabase.auth.getUser();
          if (userError) {
            console.error("Error fetching user:", userError);
          } else {
            console.log("User fetched successfully:", userData.user);
            setUser(userData.user);
          }
        } else {
          console.log("No session found in AdminForm");
        }
      }
      setLoading(false);
    };
    checkUser();
  }, []);

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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>You need to be authenticated to access this form.</div>;
  }

  return (
    <div className="min-h-screen max-w-7xl mx-auto p-4">
      <form 
        className="font-geist-thin border rounded-md h-fit w-fit text-white p-4"
        onSubmit={(e) => handleSubmit(e, state, setIsLoading, router)}
      >
        <div className="text-center">
          <h1>Create New Module</h1>
        </div>
        
        {/* Module Name */}
        <div className="line m-4 mx-6 mr-12">
          <label>
            <span>Module Name</span>
            <input
              className="input mx-5 bg-slate-600 text-white min-w-full p-2"
              type="text"
              onChange={(e) => setModulName(e.target.value)}
              value={modulName}
              required
            />
          </label>
        </div>

        {/* Module Type */}
        <div className="line m-4 mx-6 mr-12">
          <label>
            <span>Module Type</span>
            <input
              className="input mx-5 bg-slate-600 text-white min-w-full p-2"
              type="text"
              onChange={(e) => setModulType(e.target.value)}
              value={modulType}
              required
            />
          </label>
        </div>

        {/* Module Price */}
        <div className="line m-4 mx-6 mr-12">
          <label>
            <span>Module Price</span><span className="text-red-400">(numbers only)</span>
            <input
              className="input mx-5 bg-slate-600 text-white min-w-full p-2"
              type="text"
              onChange={(e) => setModulPrice(e.target.value)}
              value={modulPrice}
            />
          </label>
        </div>

        {/* Module Type View */}
        <div className="line m-4 mx-6 mr-12">
          <label>
            <span>Module Type View</span>
            <input
              className="input mx-5 bg-slate-600 text-white min-w-full p-2"
              type="text"
              onChange={(e) => setModulTypeView(e.target.value)}
              value={modulTypeView}
              required
            />
          </label>
        </div>

        {/* Module Description */}
        <div className="line m-4 mx-6 mr-12">
          <label>
            <span>Module Description</span>
            <textarea
              className="input mx-5 bg-slate-600 text-white min-w-full p-2"
              onChange={(e) => setModulDiscription(e.target.value)}
              value={modulDiscription}
              required
            />
          </label>
        </div>

        {/* Module Tech Dimensions */}
        <div className="line m-4 mx-6 mr-12">
          <label>
            <span>Module Tech Dimensions</span>
            <textarea
              className="input mx-5 bg-slate-600 text-white min-w-full p-2"
              onChange={(e) => setModulTechDim(e.target.value)}
              value={modulTechDim}
            />
          </label>
        </div>

        {/* Module Tech CD */}
        <div className="line m-4 mx-6 mr-12">
          <label>
            <span>Module Tech CD</span>
            <textarea
              className="input mx-5 bg-slate-600 text-white min-w-full p-2"
              onChange={(e) => setModulTechCD(e.target.value)}
              value={modulTechCD}
            />
          </label>
        </div>

        {/* Module Image 1 */}
        <div className="line m-4 mx-6 mr-12">
          <label>
            <span>Module Image 1</span><span className="text-red-400"> (.jpg file &lt; 50Mb)</span>
            <input
              className="input mx-5 bg-slate-600 text-white min-w-full p-2"
              type="file"
              onChange={(e) => setModulImage1(e.target.files[0])}
              required
            />
          </label>
        </div>

        {/* Module Image 2 */}
        <div className="line m-4 mx-6 mr-12">
          <label>
            <span>Module Image 2</span><span className="text-red-400"> (.jpg file &lt; 50Mb)</span>
            <input
              className="input mx-5 bg-slate-600 text-white min-w-full p-2"
              type="file"
              onChange={(e) => setModulImage2(e.target.files[0])}
            />
          </label>
        </div>

        {/* Module Video Links */}
        <div className="line m-4 mx-6 mr-12">
          <label>
            <span>Module Video Link 1</span><span className="text-red-400"> (embed format only)</span>
            <input
              className="input mx-5 bg-slate-600 text-white min-w-full p-2"
              type="text"
              onChange={(e) => setModulVideoLink1(e.target.value)}
              value={modulVideoLink1}
            />
          </label>
        </div>

        <div className="line m-4 mx-6 mr-12">
          <label>
            <span>Module Video Link 2</span><span className="text-red-400"> (embed format only)</span>
            <input
              className="input mx-5 bg-slate-600 text-white min-w-full p-2"
              type="text"
              onChange={(e) => setModulVideoLink2(e.target.value)}
              value={modulVideoLink2}
            />
          </label>
        </div>

        <div className="line m-4 mx-6 mr-12">
          <label>
            <span>Module Video Link 3</span><span className="text-red-400"> (embed format only)</span>
            <input
              className="input mx-5 bg-slate-600 text-white min-w-full p-2"
              type="text"
              onChange={(e) => setModulVideoLink3(e.target.value)}
              value={modulVideoLink3}
            />
          </label>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            className="btn m-4 bg-blue-500 text-white p-2 rounded"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? 'Adding...' : 'Add Module'}
          </button>
        </div>
      </form>
    </div>
  );
}
