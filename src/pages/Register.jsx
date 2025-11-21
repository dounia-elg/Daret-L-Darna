import React , { useState } from "react";
import API from "../api/axios";
import InputField from "../components/InputField";
import Button from "../components/Button";

const Register = () =>{
    const [form, setForm]= useState({ username:"", email:"", password:""});

    const[error, setError] = useState("");

    const handleChange = (e) =>{
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError("");

        try{
            const res = await API.post("/auth/register", form);
            console.log("User registred:", res.data);
            alert("Inscription réussie!!!");
            setForm({ username:"", email:"", password:"" });
        }catch(err){
            setError(err.response?.data?.message || "Erreur serveur");
        }
    };

    return (
        <div>
            {error && <p className="">{error}</p>}
            <form onSubmit={handleSubmit}>
                <InputField label="Nom d'utilisateur" type="text" name="username" value={form.username} onChange={handleChange} required />
                <InputField label="Email" type="email" name="email" value={form.email} onChange={handleChange} required />
                <InputField label="Mot de passe" type="password" name="password" value={form.password} onChange={handleChange} required />
                <Button type="submit">S'inscrire</Button>
            </form>
        </div>
    )

    
};
export default Register;
