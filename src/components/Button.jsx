import React from "react";

const Button =({ children, type = "button", onClick, className }) =>{
    return (
        <button 
            type={type}
            onClick={onClick}
            className={`rounded-xl bg-[#9c6b87] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#9c6b87]/30 transition hover:opacity-90 ${className}`}
        >
            {children}
            
        </button>
    );
};

export default Button;