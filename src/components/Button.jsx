const Button = ({ children, variant = "black", className = "" }) => {
  const variants = {
    black: "bg-black text-white hover:bg-gray-800",
    pink: "bg-brandPink text-black hover:scale-105",
    outline: "border-2 border-black text-black hover:bg-black hover:text-white",
  };

  return (
    <button className={`px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 flex items-center gap-2 ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

export default Button;