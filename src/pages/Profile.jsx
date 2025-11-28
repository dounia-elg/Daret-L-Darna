import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useDispatch } from 'react-redux';
import { updateUser } from '../store/slices/authSlice';
import API from '../api/axios';
import { Link } from 'react-router-dom';

const Profile = () => {
    const { user, logout } = useAuth();
    const dispatch = useDispatch();

    const [isEditing, setIsEditing] = useState(false);
    const [form, setForm] = useState({
        username: user?.username || '',
        firstName: user?.firstName || '',
        lastName: user?.lastName || '',
        email: user?.email || '',
        phone_number: user?.phone_number || '',
        role: user?.role || 'particulier',
        displayName: user?.displayName || '',
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        try {
            const res = await API.put('/users/profile', form);

            dispatch(updateUser(res.data.user));

            setSuccess('Profil mis à jour avec succès!');
            setIsEditing(false);
        } catch (err) {
            setError(err.response?.data?.message || 'Erreur serveur');
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#fff8ef] to-[#f2e7da]">
            {/* Header */}
            <header className="border-b border-[#d7c3b4] bg-white/70 backdrop-blur">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
                    <Link to="/" className="text-xs uppercase tracking-[0.3em] text-[#9c6b5c]">
                        ← Retour à l'accueil
                    </Link>
                    <button
                        onClick={logout}
                        className="rounded-full border border-red-400 px-5 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50"
                    >
                        Déconnexion
                    </button>
                </div>
            </header>

            {/* Main Profile Section */}
            <div className="mx-auto max-w-4xl px-6 py-16">
                {/* Profile Card with glassmorphism */}
                <div className="overflow-hidden rounded-[3rem] border border-[#f0e4d9] bg-white/80 shadow-2xl shadow-[#d6c2b4]/60 backdrop-blur">

                    {/* Profile Header */}
                    <div className="relative bg-gradient-to-r from-[#d9b08c] to-[#b4846c] px-8 py-12">
                        <div className="absolute inset-0 opacity-20">
                            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-white/30 blur-3xl" />
                            <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-white/30 blur-3xl" />
                        </div>

                        <div className="relative flex items-center gap-6">
                            {/* Avatar */}
                            <div className="h-24 w-24 overflow-hidden rounded-full border-4 border-white shadow-xl">
                                {user?.picture ? (
                                    <img src={user.picture} alt={user.displayName || user.firstName} className="h-full w-full object-cover" />
                                ) : (
                                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#9c6b87] to-[#7a5368] text-3xl font-bold text-white">
                                        {(user?.firstName?.[0] || user?.username?.[0] || 'U').toUpperCase()}
                                    </div>
                                )}
                            </div>

                            {/* Name & Role */}
                            <div className="flex-1">
                                <h1 className="text-3xl font-bold text-[#2d1e16]">
                                    {user?.displayName || `${user?.firstName || ''} ${user?.lastName || ''}`.trim() || user?.username}
                                </h1>
                                <p className="mt-1 text-sm uppercase tracking-[0.3em] text-[#5f4638]">
                                    {user?.role === 'employé' ? 'Employé' : 'Particulier'}
                                </p>
                            </div>

                            {!isEditing && (
                                <button
                                    onClick={() => setIsEditing(true)}
                                    className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-[#3c2a22] shadow-lg transition hover:bg-[#f6ebe0]"
                                >
                                    ✏️ Modifier
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Alerts */}
                    {error && (
                        <div className="mx-8 mt-6 rounded-2xl border border-[#f3c3c0] bg-[#fff0ed] px-6 py-4 text-sm text-[#a8483a]">
                            ⚠️ {error}
                        </div>
                    )}

                    {success && (
                        <div className="mx-8 mt-6 rounded-2xl border border-[#c3f3c0] bg-[#edfff0] px-6 py-4 text-sm text-[#3a8a48]">
                            ✅ {success}
                        </div>
                    )}

                    {/* Profile Content */}
                    <div className="p-8">
                        {!isEditing ? (
                            // Display Mode
                            <div className="grid gap-6 md:grid-cols-2">
                                {/* Username */}
                                <div className="rounded-2xl border border-[#f0e4d9] bg-[#f9efe3] p-6">
                                    <p className="text-xs uppercase tracking-[0.3em] text-[#9c6b5c]">Nom d'utilisateur</p>
                                    <p className="mt-2 text-lg font-semibold text-[#2d1e16]">{user?.username || '—'}</p>
                                </div>

                                {/* Email */}
                                <div className="rounded-2xl border border-[#f0e4d9] bg-[#f9efe3] p-6">
                                    <p className="text-xs uppercase tracking-[0.3em] text-[#9c6b5c]">Email</p>
                                    <p className="mt-2 text-lg font-semibold text-[#2d1e16]">{user?.email || '—'}</p>
                                </div>

                                {/* First Name */}
                                <div className="rounded-2xl border border-[#f0e4d9] bg-[#f9efe3] p-6">
                                    <p className="text-xs uppercase tracking-[0.3em] text-[#9c6b5c]">Prénom</p>
                                    <p className="mt-2 text-lg font-semibold text-[#2d1e16]">{user?.firstName || '—'}</p>
                                </div>

                                {/* Last Name */}
                                <div className="rounded-2xl border border-[#f0e4d9] bg-[#f9efe3] p-6">
                                    <p className="text-xs uppercase tracking-[0.3em] text-[#9c6b5c]">Nom</p>
                                    <p className="mt-2 text-lg font-semibold text-[#2d1e16]">{user?.lastName || '—'}</p>
                                </div>

                                {/* Display Name */}
                                <div className="rounded-2xl border border-[#f0e4d9] bg-[#f9efe3] p-6">
                                    <p className="text-xs uppercase tracking-[0.3em] text-[#9c6b5c]">Nom affiché</p>
                                    <p className="mt-2 text-lg font-semibold text-[#2d1e16]">{user?.displayName || '—'}</p>
                                </div>

                                {/* Phone */}
                                <div className="rounded-2xl border border-[#f0e4d9] bg-[#f9efe3] p-6">
                                    <p className="text-xs uppercase tracking-[0.3em] text-[#9c6b5c]">Téléphone</p>
                                    <p className="mt-2 text-lg font-semibold text-[#2d1e16]">{user?.phone_number || '—'}</p>
                                </div>

                                {/* Role */}
                                <div className="rounded-2xl border border-[#f0e4d9] bg-[#f9efe3] p-6">
                                    <p className="text-xs uppercase tracking-[0.3em] text-[#9c6b5c]">Rôle</p>
                                    <p className="mt-2 text-lg font-semibold capitalize text-[#2d1e16]">
                                        {user?.role === 'admin' ? 'Administrateur' : user?.role === 'employé' ? 'Employé' : 'Particulier'}
                                    </p>
                                </div>

                                {/* Email Verified */}
                                <div className="rounded-2xl border border-[#f0e4d9] bg-[#f9efe3] p-6">
                                    <p className="text-xs uppercase tracking-[0.3em] text-[#9c6b5c]">Email vérifié</p>
                                    <p className="mt-2 text-lg font-semibold text-[#2d1e16]">
                                        {user?.email_verified ? ' Oui' : ' Non'}
                                    </p>
                                </div>
                            </div>
                        ) : (
                            // Edit Mode
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid gap-6 md:grid-cols-2">
                                    {/* Username */}
                                    <div>
                                        <label className="block text-sm font-medium text-[#7f5b4c]">
                                            Nom d'utilisateur
                                        </label>
                                        <input
                                            type="text"
                                            name="username"
                                            value={form.username}
                                            onChange={handleChange}
                                            required
                                            className="mt-2 w-full rounded-xl border border-[#e3d3c6] bg-white px-4 py-3 text-[#2d1e16] transition focus:border-[#9c6b87] focus:outline-none focus:ring-2 focus:ring-[#9c6b87]/20"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="block text-sm font-medium text-[#7f5b4c]">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            required
                                            className="mt-2 w-full rounded-xl border border-[#e3d3c6] bg-white px-4 py-3 text-[#2d1e16] transition focus:border-[#9c6b87] focus:outline-none focus:ring-2 focus:ring-[#9c6b87]/20"
                                        />
                                    </div>

                                    {/* First Name */}
                                    <div>
                                        <label className="block text-sm font-medium text-[#7f5b4c]">
                                            Prénom
                                        </label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={form.firstName}
                                            onChange={handleChange}
                                            className="mt-2 w-full rounded-xl border border-[#e3d3c6] bg-white px-4 py-3 text-[#2d1e16] transition focus:border-[#9c6b87] focus:outline-none focus:ring-2 focus:ring-[#9c6b87]/20"
                                        />
                                    </div>

                                    {/* Last Name */}
                                    <div>
                                        <label className="block text-sm font-medium text-[#7f5b4c]">
                                            Nom
                                        </label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={form.lastName}
                                            onChange={handleChange}
                                            className="mt-2 w-full rounded-xl border border-[#e3d3c6] bg-white px-4 py-3 text-[#2d1e16] transition focus:border-[#9c6b87] focus:outline-none focus:ring-2 focus:ring-[#9c6b87]/20"
                                        />
                                    </div>

                                    {/* Display Name */}
                                    <div>
                                        <label className="block text-sm font-medium text-[#7f5b4c]">
                                            Nom affiché
                                        </label>
                                        <input
                                            type="text"
                                            name="displayName"
                                            value={form.displayName}
                                            onChange={handleChange}
                                            className="mt-2 w-full rounded-xl border border-[#e3d3c6] bg-white px-4 py-3 text-[#2d1e16] transition focus:border-[#9c6b87] focus:outline-none focus:ring-2 focus:ring-[#9c6b87]/20"
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div>
                                        <label className="block text-sm font-medium text-[#7f5b4c]">
                                            Téléphone
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone_number"
                                            value={form.phone_number}
                                            onChange={handleChange}
                                            maxLength={20}
                                            className="mt-2 w-full rounded-xl border border-[#e3d3c6] bg-white px-4 py-3 text-[#2d1e16] transition focus:border-[#9c6b87] focus:outline-none focus:ring-2 focus:ring-[#9c6b87]/20"
                                        />
                                    </div>

                                    {/* Role */}
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-[#7f5b4c]">
                                            Rôle
                                        </label>
                                        <select
                                            name="role"
                                            value={form.role}
                                            onChange={handleChange}
                                            className="mt-2 w-full rounded-xl border border-[#e3d3c6] bg-white px-4 py-3 text-[#2d1e16] transition focus:border-[#9c6b87] focus:outline-none focus:ring-2 focus:ring-[#9c6b87]/20"
                                        >
                                            <option value="particulier">Particulier</option>
                                            <option value="employé">Employé</option>
                    
                                        </select>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-4 pt-4">
                                    <button
                                        type="submit"
                                        className="flex-1 rounded-2xl bg-gradient-to-r from-[#d9b08c] to-[#b4846c] px-6 py-4 text-base font-semibold text-[#2d1e16] shadow-lg shadow-[#d9b08c]/40 transition hover:translate-y-0.5"
                                    >
                                        💾 Enregistrer
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => {
                                            setIsEditing(false);
                                            setForm({
                                                username: user?.username || '',
                                                firstName: user?.firstName || '',
                                                lastName: user?.lastName || '',
                                                email: user?.email || '',
                                                phone_number: user?.phone_number || '',
                                                role: user?.role || 'particulier',
                                                displayName: user?.displayName || '',
                                            });
                                            setError('');
                                            setSuccess('');
                                        }}
                                        className="flex-1 rounded-2xl border border-[#c09a89] px-6 py-4 text-base font-semibold text-[#3c2a22] transition hover:bg-white/60"
                                    >
                                        ✖️ Annuler
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>

                {/* Additional Info Card */}
                <div className="mt-8 rounded-3xl border border-[#f0e4d9] bg-white/90 p-8 shadow-xl shadow-[#d6c2b4]/40 backdrop-blur">
                    <p className="text-xs uppercase tracking-[0.4em] text-[#9c6b5c]">
                        Informations système
                    </p>
                    <div className="mt-6 grid gap-4 text-sm md:grid-cols-3">
                        <div className="rounded-2xl bg-[#f9efe3] px-4 py-3">
                            <p className="text-xs text-[#9c6b5c]">Compte actif</p>
                            <p className="mt-1 font-semibold text-[#2d1e16]">
                                {user?.isActive ? ' Oui' : ' Non'}
                            </p>
                        </div>
                        <div className="rounded-2xl bg-[#f9efe3] px-4 py-3">
                            <p className="text-xs text-[#9c6b5c]">Dernière connexion</p>
                            <p className="mt-1 font-semibold text-[#2d1e16]">
                                {user?.last_login_at ? new Date(user.last_login_at).toLocaleDateString('fr-FR') : '—'}
                            </p>
                        </div>
                        <div className="rounded-2xl bg-[#f9efe3] px-4 py-3">
                            <p className="text-xs text-[#9c6b5c]">Membre depuis</p>
                            <p className="mt-1 font-semibold text-[#2d1e16]">
                                {user?.createdAt ? new Date(user.createdAt).toLocaleDateString('fr-FR') : '—'}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
