import React from "react";

const InputField = ({ label, type, name, placholder, value, onChange, required }) =>{
    return (
        <div className="">
            <label className="">{label}</label>
            <input 
                type={type}
                name={name}
                placholder={placholder}
                value={value}
                onChange={onChange}
                required={required}
            />
        </div>
    );
};

export default InputField;