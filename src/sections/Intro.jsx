// import Container from "@/components/Container";

import Container from "@/components/Container";

// const Intro = () => {
//   return (
//     <Container className="bg-background py-24 md:py-32">
//       <div className=" ">
//         {/* Main Bold Text */}
//         <h2 className="max-w-6xl pl-0 md:pl-24 text-[1.5rem] md:text-[3.5rem] font-semibold leading-[1.1] tracking-tighter text-black mb-20">
//           Wij maken content die opvalt. Die blijft hangen. Die jouw doelgroep raakt en jouw merk in beweging brengt. Snel, krachtig en energiek.
//         </h2>

//         {/* Bottom Content Area */}
//         <div className="flex flex-col md:flex-row items-start gap-12 mt-10">
          
//           {/* Left Side: Small Image with Rounded Corners */}
//           <div className="w-48 h-60 md:w-64 md:h-80 shrink-0">
//             <img 
//               src="https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/6894757aa6dd3f84f6e463a2_Anniek%20Bril-p-800.webp" // আপনার public ফোল্ডারে ইমেজটি রাখুন
//               alt="Team member"
//               className="w-full h-full object-cover rounded-2xl shadow-lg"
//             />
//           </div>

//           {/* Center Side: Description and Button */}
//           <div className="w-full self-end">
//             <p className="max-w-xl text-xl md:text-2xl font-semibold leading-snug mb-8 text-black/90">
//               We stoppen niet bij mooie plaatjes en vette beelden. We maken het meetbaar. 
//               Zo weet je precies wat werkt en wat niet. Nooit meer content zonder strategie. 
//               Nooit meer content zonder resultaat.
//             </p>
            
//             <button className="flex items-center gap-3 px-1 py-1 border border-black rounded-xl font-semibold text-md hover:bg-black hover:text-white transition-all duration-300 group">
//               Leer ons kennen 
//               <span className="w-9 h-9 bg-black text-white rounded-lg flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
//                 →
//               </span>
//             </button>
//           </div>

//           {/* Right Side: Only Button */}
//           <div className="w-full flex justify-center self-end">
//             <button className="flex items-center gap-3 px-1 py-1 border-2 border-black rounded-xl font-semibold text-md hover:bg-black hover:text-white transition-all duration-300 group">
//               <span style={{color:'#FA5425'}} className="w-9 h-9 rounded-lg flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
//               ↓
//               </span>
//             </button>
//           </div>

//         </div>
//       </div>
//     </Container>
//   );
// };

// export default Intro;



const Intro = () => {
  return (
    <Container className="bg-[#F5F2EA] px-[5vw] py-[10vw] overflow-hidden">
      <div className="max-w-[70%]">
        {/* Main Bold Text - text-[clamp(...)] ব্যবহার করা হয়েছে যেন জুম আউট করলেও নির্দিষ্ট সাইজের নিচে না নামে */}
        <h2 className="text-[clamp(2.5rem,4vw,5rem)] font-semibold leading-[0.9] tracking-tighter text-black mb-[8vw]">
          Wij maken content die opvalt. Die blijft hangen. Die jouw doelgroep raakt en jouw merk in beweging brengt. Snel, krachtig en energiek.
        </h2>

        {/* Bottom Content Area */}
        <div className="flex flex-col md:flex-row items-start gap-[5vw] mt-[5vw]">
          
          {/* Image Wrapper - w-[20vw] জুম আউট করলেও স্ক্রিনের ২০% জায়গা দখল করে থাকবে */}
          <div className="w-[60vw] md:w-[16vw] aspect-3/4 shrink-0">
            <img 
              src="https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/6894757aa6dd3f84f6e463a2_Anniek%20Bril-p-800.webp" 
              alt="Team member"
              className="w-full h-full object-cover rounded-[1vw] shadow-xl"
            />
          </div>

          {/* Right Side: Description and Button */}
          <div className="max-w-[45vw] self-end">
            <p className="text-[clamp(1.1rem,1.8vw,2.5rem)] font-medium leading-[1.2] mb-[4vw] text-black/90">
              We stoppen niet bij mooie plaatjes en vette beelden. We maken het meetbaar. 
              Zo weet je precies wat werkt en wat niet. Nooit meer content zonder strategie. 
              Nooit meer content zonder resultaat.
            </p>
            
            <button className="flex items-center gap-[1.5vw] px-[0.4vw] py-[0.3vw] border-[0.1vw] border-black rounded-xl font-semibold text-[clamp(0.8rem, 1.2vw, 1.2rem)] hover:bg-black hover:text-white transition-all duration-300 group tracking-tight">
              Leer ons kennen 
              <span className="w-[2.5vw] h-[2.5vw] min-w-[30px] min-h-[30px] bg-black text-white rounded-xl flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                →
              </span>
            </button>
            {/* <button className="flex items-center gap-3 px-1 py-1 border border-black rounded-xl font-semibold text-md hover:bg-black hover:text-white transition-all duration-300 group">
               Leer ons kennen 
               <span className="w-9 h-9 bg-black text-white rounded-lg flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                 →
               </span>
             </button> */}
          </div>

        </div>
      </div>
    </Container>
  );
};

export default Intro;