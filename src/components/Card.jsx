"use client";
import { useState } from "react";

const Card = ({ number, title, descriptionTitle, description, bgColor, bgColor2, imgLink, videoLink, textColor = "text-black" }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div style={{background:`${bgColor2}`}} className={`w-full min-h-[500px] md:min-h-[600px] h-[85vh] ${bgColor} ${textColor} rounded-[2.5rem] p-8 md:p-16 flex flex-col justify-between sticky top-24 shadow-2xl mb-10`}>
      <div className="flex justify-between items-start">
        <div >
          <button className="bg-white mt-4 px-[1.2vw] py-[0.4vw] rounded-sm font-medium text-[1vw] ">
            Expertise
          </button>
          <h1 className="mt-[2vw] text-[9vw] md:text-8xl font-semibold leading-[0.9] tracking-tighter text-black">
            {title}
          </h1>
        </div>
        <div style={{color:"#EAE4D8"}} className="text-5xl md:text-8xl font-bold uppercase leading-none text-right max-w-md">
          {number}
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-end gap-8">
        <div>
          <div className="text-[4vw] md:text-[1.8vw] font-bold max-w-sm leading-snug">{descriptionTitle}</div>
          <p className="pt-[1.5vw] text-[3vw] md:text-[1.2vw] text-md md:text-md max-w-sm leading-snug">{description}</p>
            <button className="bg-white mt-4 flex items-center gap-2 px-1 py-1 rounded-xl font-semibold text-sm  hover:bg-black hover:text-white transition-all duration-300 group">
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




// "use client";
// import { useState } from "react";

// const Card = ({ number, title, descriptionTitle, description, bgColor, bgColor2, imgLink, videoLink, textColor = "text-black" }) => {
//   const [loaded, setLoaded] = useState(false);

//   return (
//     <div 
//       style={{ background: `${bgColor2}` }} 
//       className={`w-full min-h-[600px] h-[50vw] ${bgColor} ${textColor} rounded-[3vw] p-[5vw] flex flex-col justify-between sticky top-[6vw] shadow-2xl mb-[10vw] overflow-hidden`}
//     >
//       {/* Top Section */}
//       <div className="flex justify-between items-start w-full">
//         <div className="flex-1">
//           <button className="bg-white px-[1.2vw] py-[0.4vw] rounded-[0.4vw] font-bold text-[1vw] uppercase tracking-wider text-black">
//             Expertise
//           </button>
//           <h1 className="mt-[2vw] text-[9vw] font-black leading-[0.85] tracking-[-0.05em] text-black uppercase">
//             {title}
//           </h1>
//         </div>
        
//         <div 
//           style={{ color: "#EAE4D8" }} 
//           className="text-[9vw] font-black uppercase leading-[0.8] text-right opacity-90"
//         >
//           {number}
//         </div>
//       </div>
      
//       {/* Bottom Section */}
//       <div className="flex flex-col md:flex-row justify-between items-end gap-[4vw] relative z-10">
//         <div className="max-w-[40vw]">
//           <div className="text-[1.8vw] font-black leading-tight uppercase">
//             {descriptionTitle}
//           </div>
//           <p className="pt-[1.5vw] text-[1.2vw] font-medium leading-snug opacity-90 max-w-[35vw]">
//             {description}
//           </p>
          
//           <button className="bg-white  flex items-center mt-[3vw] gap-[1vw] pl-[1.8vw] pr-[0.6vw] py-[0.6vw] text-[1.1vw] rounded-full font-black  hover:bg-black hover:text-white transition-all duration-300 group uppercase shadow-md">
//             Meer over {title} 
//             <span className="w-[2.8vw] h-[2.8vw] min-w-[35px] min-h-[35px] bg-black text-white rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors ml-[0.5vw]">
//               →
//             </span>
//           </button>
//         </div>

//         {/* Video Container - Scalable & Rotated */}
//         <div 
//           style={{ borderColor: "#FA5425" }} 
//           className="border-[0.5vw] relative w-[20vw] h-[28vw] rounded-[2.5vw] overflow-hidden rotate-[5deg] hover:rotate-0 transition-all duration-500 shadow-2xl flex-shrink-0"
//         >
//           {/* Thumbnail Image */}
//           {!loaded && (
//             <img
//               src={imgLink}
//               alt="thumbnail"
//               className="absolute inset-0 w-full h-full object-cover"
//             />
//           )}
//           {/* Video */}
//           <video
//             autoPlay
//             loop
//             muted
//             playsInline
//             onLoadedData={() => setLoaded(true)}
//             className="w-full h-full object-cover"
//           >
//             <source src={videoLink} type="video/mp4" />
//           </video>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;


