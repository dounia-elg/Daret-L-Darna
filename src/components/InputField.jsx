import React from "react";

const InputField = ({ label, type, name, placholder, value, onChange, required }) =>{
    return (
        <div className="space-y-2">
            <label className="block text-sm font-medium text-[#7f5b4c]">{label}</label>
            <input 
                type={type}
                name={name}
                placholder={placholder}
                value={value}
                onChange={onChange}
                required={required}
                className="w-full rounded-xl border border-[#e3d3c6] bg-white px-4 py-3 text-[#2d1e16] placeholder:text-[#b8a399] focus:outline-none focus:ring-2 focus:ring-[#9c6b87]/30 focus:border-[#9c6b87] transition-all duration-200"
            />
        </div>
    );
};

export default InputField;