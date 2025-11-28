import React, { useState } from "react";
import API from "../api/axios";
import InputField from "../components/InputField";
import Button from "../components/Button";
import photoHero from "../assets/home/photo5.avif";
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../store/slices/authSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await API.post("/auth/login", form);
      // console.log("User logged in:", res.data);
      // if (res.data.token) {
      //   localStorage.setItem("token", res.data.token);
      // }
      
      dispatch(loginSuccess({
      user: res.data.user,
      token: res.data.token
    }));

    alert("Connexion réussie!!!");
    navigate("/");

    } catch (err) {
      setError(err.response?.data?.message || "Erreur serveur");
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-[#fff8ef] to-[#f2e7da] px-4 py-10 text-[#2d1e16]">
      <div className="mx-auto flex max-w-6xl flex-col overflow-hidden rounded-[4xl] border border-[#f0e4d9] bg-white/70 shadow-2xl shadow-[#d6c2b4]/50 lg:flex-row">
        <aside
          className="relative flex-1 min-h-80 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(120deg, rgba(13, 9, 6, 0.4), rgba(13, 9, 6, 0.1)), url(${photoHero})`,
          }}
        >
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#1d1410]/30" />
          <div className="relative flex h-full flex-col justify-between p-8 text-white">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-[#f5d5c4]">Daret L'Darna</p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight">Bienvenue sur votre espace Daret L'Darna</h1>
            </div>
            <p className="text-sm text-[#f5e9e0]">Accédez à vos annonces, groupes TireLire et outils de financement en un clic.</p>
          </div>
        </aside>

        <div className="flex flex-1 items-center justify-center bg-white/80 px-6 py-10">
          <div className="w-full max-w-md rounded-[28px] border border-white/80 bg-white/90 p-8 shadow-xl shadow-[#d6c2b4]/40">
            <div className="space-y-3 text-center">
              <h2 className="text-2xl font-semibold text-[#2d1e16]">Se connecter</h2>
              <p className="text-sm text-[#6a4f42]">Connectez-vous pour accéder à votre compte Daret L'Darna</p>
            </div>
            {error && (
              <p className="mt-4 rounded-2xl border border-[#f3c3c0] bg-[#fff0ed] px-4 py-2 text-sm text-[#a8483a]">{error}</p>
            )}

            <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
              <InputField
                label="Email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <InputField
                label="Mot de passe"
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
              />
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-[#6a4f42]">
                  <input type="checkbox" className="rounded border-[#e3d3c6] text-[#9c6b87] focus:ring-[#9c6b87]" />
                  <span>Se souvenir de moi</span>
                </label>
                <a href="/forgot-password" className="text-[#9c6b87] hover:underline">
                  Mot de passe oublié ?
                </a>
              </div>
              <Button
                className="w-full rounded-xl bg-[#9c6b87] py-3 text-sm font-semibold text-white shadow-lg shadow-[#9c6b87]/30 transition hover:opacity-90"
                type="submit"
              >
                Se connecter
              </Button>
            </form>

            <div className="mt-6 text-center text-sm text-[#6a4f42]">
              <p>
                Vous n'avez pas de compte ?{" "}
                <a href="/register" className="font-semibold text-[#9c6b87] hover:underline">
                  Créer un compte
                </a>
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-[#f0e4d9] bg-[#fff8ef] p-4 text-sm text-[#6a4f42]">
              <p className="font-semibold text-[#3c2a22]">Connexion SSO</p>
              <p className="mt-1">Connectez-vous avec votre compte entreprise ou via OAuth si configuré.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

