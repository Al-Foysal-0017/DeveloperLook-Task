"use client";
import { useState } from "react";

const Card = ({ number, title, descriptionTitle, description, bgColor, bgColor2, imgLink, videoLink, textColor = "text-black" }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div style={{background:`${bgColor2}`}} className={`w-full min-h-[500px] md:min-h-[600px] h-[85vh] ${bgColor} ${textColor} rounded-[2.5rem] p-8 md:p-16 flex flex-col justify-between sticky top-24 shadow-2xl mb-10`}>
      <div className="flex justify-between items-start">
        <div >
          <button className="bg-white mt-4 px-2 py-1 rounded-sm font-medium text-md ">
            Expertise
          </button>
          <h1 className="mt-5 text-5xl md:text-8xl font-semibold leading-[0.9] tracking-tighter text-black">
            {title}
          </h1>
        </div>
        <div style={{color:"#EAE4D8"}} className="text-5xl md:text-8xl font-bold uppercase leading-none text-right max-w-md">
          {number}
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-end gap-8">
        <div>
          <div className="text-lg md:text-xl font-bold max-w-sm leading-snug">{descriptionTitle}</div>
          <p className="pt-3 text-md md:text-md max-w-sm leading-snug">{description}</p>
            <button className="bg-white mt-4 flex items-center gap-2 px-1 py-1 rounded-xl font-semibold text-sm hover:bg-black hover:text-white transition-all duration-300 group">
              Meer over {title} 
              <span className="w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                →
              </span>
            </button>
        </div>
        <div style={{borderRadius:'24px',borderColor:"#FA5425", }} className="border-6 relative w-[16vw] h-[24vw] rounded-4xl overflow-hidden rotate-4 hover:rotate-0 transition-transform duration-300 shadow-xl z-20 -ml-4">
          {/* Thumbnail Image */}
          {!loaded && (
            <img
              src={imgLink}
              alt="thumbnail"
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
          {/* Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            onLoadedData={() => setLoaded(true)}
            className="w-full h-full object-cover"
          >
            <source
              src={videoLink}
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Card;




