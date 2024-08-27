"use client";
import { useState } from 'react';

export default function VideoPage({ modData }) {


  const videoKeys = Object.keys(modData.video);



  const [activeTab, setActiveTab] = useState(videoKeys[0]);


  return (
    <>
      {videoKeys.length > 0 && (
        <div className="video-tabs-container pl-12 w-[560px] h-[315px] font-geist-thin ">
          {/* Tabs */}
          <div className="tabs flex justify-center gap-4 ">
            {videoKeys.map((key, index) => (
              <button
                key={modData.video[key].id}
                onClick={() => setActiveTab(key)}
                className={`px-4 py-2  ${activeTab === key ? ' border-gray-300 text-gray-200' : '  border-gray-500 text-gray-500'} border-b  rounded-full`}
              >
                Video {index + 1}
              </button>
            ))}
          </div>

          {/* Video display */}
          <div className="video-container flex justify-center border-red-500 my-6 ">
            <iframe
              width="500" // Slightly bigger than 448
              height="281" // Height adjusted to keep the 16:9 aspect ratio
              src={modData.video[activeTab].url}
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}
