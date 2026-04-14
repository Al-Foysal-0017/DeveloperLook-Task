const Intro = () => {
  return (
    <section className="bg-background px-6 md:px-12 py-24 md:py-32">
      <div className="max-w-6xl">
        {/* Main Bold Text */}
        <h2 className="text-[1.5rem] md:text-[3rem] font-black leading-[1.1] tracking-tighter text-black uppercase mb-20">
          Wij maken content die opvalt. Die blijft hangen. Die jouw doelgroep raakt en jouw merk in beweging brengt. Snel, krachtig en energiek.
        </h2>

        {/* Bottom Content Area */}
        <div className="flex flex-col md:flex-row items-start gap-12 mt-10">
          
          {/* Left Side: Small Image with Rounded Corners */}
          <div className="w-48 h-60 md:w-64 md:h-80 shrink-0">
            <img 
              src="https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/6894757aa6dd3f84f6e463a2_Anniek%20Bril-p-800.webp" // আপনার public ফোল্ডারে ইমেজটি রাখুন
              alt="Team member"
              className="w-full h-full object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Right Side: Description and Button */}
          <div className="max-w-xl self-end">
            <p className="text-xl md:text-2xl font-bold leading-snug mb-8 text-black/90">
              We stoppen niet bij mooie plaatjes en vette beelden. We maken het meetbaar. 
              Zo weet je precies wat werkt en wat niet. Nooit meer content zonder strategie. 
              Nooit meer content zonder resultaat.
            </p>
            
            <button className="flex items-center gap-3 px-6 py-3 border-2 border-black rounded-full font-bold text-sm hover:bg-black hover:text-white transition-all duration-300 group">
              Leer ons kennen 
              <span className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                →
              </span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Intro;