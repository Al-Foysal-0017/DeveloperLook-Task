
  
export default function Container({ children, className = "" }) {
    return (
    //   <div className={`max-w-7xl mx-auto px-4 md:px-8 ${className}`}>
      <div style={{maxWidth:'1920px ', paddingLeft:'32px', paddingRight:'32px'}} className={` 
          mx-auto ${className}`}>
        {children}
      </div>
    );
  }