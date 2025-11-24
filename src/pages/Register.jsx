import React , { useState } from "react";
import API from "../api/axios";
import InputField from "../components/InputField";
import Button from "../components/Button";
import photoHero from "../assets/home/photo4.avif";

const Register = () =>{
    const [form, setForm]= useState({ firstName:"", lastName: "", email:"", password:"", confirmPassword: "" });

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
            setForm({ firstName:"", lastName: "", email:"", password:"", confirmPassword: "" });
        }catch(err){
            setError(err.response?.data?.message || "Erreur serveur");
        }
    };

  return (
    <div className="min-h-screen bg-linear-to-b from-[#fff8ef] to-[#f2e7da] px-4 py-10 text-[#2d1e16]">
      <div className="mx-auto flex max-w-6xl flex-col overflow-hidden rounded-[32px] border border-[#f0e4d9] bg-white/70 shadow-2xl shadow-[#d6c2b4]/50 lg:flex-row">
        <aside
          className="relative flex-1 min-h-[320px] bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(120deg, rgba(13, 9, 6, 0.4), rgba(13, 9, 6, 0.1)), url(${photoHero})`,
          }}
        >
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#1d1410]/30" />
          <div className="relative flex h-full flex-col justify-between p-8 text-white">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-[#f5d5c4]">Daret L'Darna</p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight">Un seul compte pour vos annonces et vos cercles TireLire.</h1>
            </div>
            <p className="text-sm text-[#f5e9e0]">SSO sécurisé, KYC intégré et accès immédiat aux modules Darna +TireLire.</p>
          </div>
        </aside>

        <div className="flex flex-1 items-center justify-center bg-white/80 px-6 py-10">
          <div className="w-full max-w-md rounded-[28px] border border-white/80 bg-white/90 p-8 shadow-xl shadow-[#d6c2b4]/40">
          <div className="space-y-3 text-center">
              <h2 className="text-2xl font-semibold text-[#2d1e16]">Créer mon compte Daret L'Darna</h2>
              <p className="text-sm text-[#6a4f42]">Un seul login pour vos annonces, chats et cercles d’épargne.</p>
            </div>
            {error && (
              <p className="rounded-2xl border border-[#f3c3c0] bg-[#fff0ed] px-4 py-2 text-sm text-[#a8483a]">{error}</p>
            )}

            <form className="space-y-5" onSubmit={handleSubmit}>
              <InputField label="Prenom" type="text" name="firstName" value={form.firstName} onChange={handleChange} required />
              <InputField label="Nom" type="text" name="lastName" value={form.lasttName} onChange={handleChange} required />
              <InputField label="Email" type="email" name="email" value={form.email} onChange={handleChange} required />
              <InputField label="Mot de passe" type="password" name="password" value={form.password} onChange={handleChange} required />
              <InputField label="Confirm Mot de passe" type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} required />
              <Button className="w-full rounded-xl bg-[#9c6b87] py-3 text-sm font-semibold text-white shadow-lg shadow-[#9c6b87]/30 transition hover:opacity-90" type="submit">S'inscrire</Button>
            </form>

            <div className="mt-6 rounded-2xl border border-[#f0e4d9] bg-[#fff8ef] p-4 text-sm text-[#6a4f42]">
              <p className="font-semibold text-[#3c2a22]">Accès partenaires & SSO</p>
              <p className="mt-1">Vous disposez déjà d'un accès entreprise ou admin ? Utilisez la même identité pour connecter vos équipes Daret L'Darna.</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
