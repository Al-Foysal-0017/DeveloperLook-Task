const Card = ({ number, title, description, bgColor, bgColor2, textColor = "text-black" }) => {
  return (
    <div style={{background:`${bgColor2}`}} className={`w-full min-h-[500px] md:min-h-[600px] ${bgColor} ${textColor} rounded-[2.5rem] p-8 md:p-16 flex flex-col justify-between sticky top-24 shadow-2xl mb-10`}>
      <div className="flex justify-between items-start">
        <span className="text-xl font-bold uppercase tracking-widest">{number}</span>
        <h3 className="text-4xl md:text-7xl font-black uppercase leading-none text-right max-w-md">
          {title}
        </h3>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-end gap-8">
        <p className="text-lg md:text-xl font-bold max-w-sm leading-snug">
          {description}
        </p>
        <button className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl hover:scale-110 transition-transform">
          →
        </button>
      </div>
    </div>
  );
};

export default Card;