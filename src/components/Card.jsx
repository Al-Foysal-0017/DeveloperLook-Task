"use client";
import { useState } from "react";

const Card = ({ number, title, descriptionTitle, description, bgColor, bgColor2, imgLink, videoLink, textColor = "text-black" }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div style={{background:`${bgColor2}`}} className={`w-full min-h-[500px] md:min-h-[600px] h-[85vh] ${bgColor} ${textColor} rounded-[2.5rem] p-8 md:p-16 flex flex-col justify-between sticky top-20 shadow-2xl mb-10`}>
      <div className="flex justify-between items-start">
        <div >
          <button className="bg-white mt-4 px-[1.2vw] py-[0.4vw] rounded-sm font-medium text-[1vw] ">
            Expertise
          </button>
          <h1 className="mt-[2vw] text-[8vw] md:text-8xl font-semibold leading-[0.9] tracking-tighter text-black">
            {title}
          </h1>
        </div>
        <div style={{color:"#EAE4D8"}} className="text-5xl md:text-8xl font-bold uppercase leading-none text-right max-w-md">
          {number}
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <div>
          <div className="text-[4vw] sm:text-[3vw] md:text-[1.8vw] font-bold max-w-sm leading-snug">
            {descriptionTitle}
          </div>
          <p className="pt-[1.5vw] text-[3vw] sm:text-[2vw] md:text-[1.2vw] text-md md:text-md max-w-sm leading-snug">{description}</p>
            <button className="buttonHover bg-white mt-4 flex items-center gap-2 px-1 py-1 rounded-xl font-medium md:font-semibold text-xs md:text-sm transition-all duration-300 group">
              Meer over {title} 
              <span className="w-6 h-6 md:w-8 md:h-8 bg-black text-white rounded-lg flex items-center justify-center transition-colors">
                →
              </span>
            </button>
        </div>
        <div className="w-full flex justify-end">
          <div style={{borderRadius:'24px',borderColor:"#FA5425", }} className="border-2 md:border-6 relative w-[28vw] h-[36vw] sm:w-[20vw] sm:h-[28vw] md:w-[16vw] md:h-[24vw] rounded-4xl overflow-hidden rotate-4 hover:rotate-0 transition-transform duration-300 shadow-xl z-20 -ml-4">
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
    </div>
  );
};

export default Card;

