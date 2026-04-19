export default function Container({ children, className = "" }) {
    return (
      <div style={{maxWidth:'1920px ', paddingLeft:'32px', paddingRight:'32px'}} className={` 
          mx-auto ${className}`}>
        {children}
      </div>
    );
  }