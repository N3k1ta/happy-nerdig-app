"use client";
import { useState } from 'react';

export default function VideoPage({ module }) {

  if (!module.video) {
    return null;
  }

  const videoKeys = Object.keys(module.video);

  if (videoKeys.length === 0) {
    return null;
  }

  const [activeTab, setActiveTab] = useState(videoKeys[0]);

  return (
    <>
      {videoKeys.length > 0 && (
        <div className="video-tabs-container w-[560px] h-[315px] font-geist-thin ">
          {/* Tabs */}
          <div className="tabs flex justify-center gap-4 ">
            {videoKeys.map((key, index) => (
              <button
                key={module.video[key].id}
                onClick={() => setActiveTab(key)}
                className={`px-4 py-2  ${activeTab === key ? 'border-[#D1D3D6] text-gray-200' : 'border-gray-300 text-gray-500'} rounded-md`}
              >
                Video {index + 1}
              </button>
            ))}
          </div>

          {/* Video display */}
          <div className="video-container border-red-500 my-6 ">
            <iframe
              key={module.video[activeTab].id}
              width="560"
              height="315"
              src={module.video[activeTab].url}
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}
