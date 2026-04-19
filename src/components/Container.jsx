export default function Container({ children, className = "" }) {
    return (
      <div className={` 
          mx-auto max-w-[1920px] px-3 sm:px-5 md:px-8 ${className}`}>
        {children}
      </div>
    );
  }