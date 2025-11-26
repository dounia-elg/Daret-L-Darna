import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../store/slices/authSlice';
import API from '../../api/axios';
import InputField from '../../components/InputField';
import Button from '../../components/Button';

const Profile = () => {
  const { user, logout } = useAuth();
  const dispatch = useDispatch();
  
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
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
    <div className="min-h-screen bg-[#fff8ef] p-6">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 shadow-xl">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-[#2d1e16]">Mon Profil</h1>
          <button
            onClick={logout}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Déconnexion
          </button>
        </div>

        {error && (
          <p className="mb-4 rounded-2xl border border-[#f3c3c0] bg-[#fff0ed] px-4 py-2 text-sm text-[#a8483a]">
            {error}
          </p>
        )}

        {success && (
          <p className="mb-4 rounded-2xl border border-[#c3f3c0] bg-[#edfff0] px-4 py-2 text-sm text-[#3a8a48]">
            {success}
          </p>
        )}

        {!isEditing ? (
          //Affichage
          <div className="space-y-4">
            <div className="border-b border-gray-200 pb-4">
              <p className="text-sm text-gray-600">Prénom</p>
              <p className="text-lg font-semibold">{user?.firstName}</p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
              <p className="text-sm text-gray-600">Nom</p>
              <p className="text-lg font-semibold">{user?.lastName}</p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
              <p className="text-sm text-gray-600">Email</p>
              <p className="text-lg font-semibold">{user?.email}</p>
            </div>

            <div className="border-b border-gray-200 pb-4">
              <p className="text-sm text-gray-600">Rôle</p>
              <p className="text-lg font-semibold capitalize">{user?.role || 'Particulier'}</p>
            </div>

            <button
              onClick={() => setIsEditing(true)}
              className="w-full mt-6 bg-[#9c6b87] text-white py-3 rounded-xl hover:opacity-90"
            >
              Modifier le profil
            </button>
          </div>
        ) : (
          //edition
          <form onSubmit={handleSubmit} className="space-y-4">
            <InputField
              label="Prénom"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              required
            />

            <InputField
              label="Nom"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              required
            />

            <InputField
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <div className="flex gap-4 mt-6">
              <Button
                type="submit"
                className="flex-1 bg-[#9c6b87] text-white py-3 rounded-xl hover:opacity-90"
              >
                Enregistrer
              </Button>
              
              <button
                type="button"
                onClick={() => {
                  setIsEditing(false);
                  setForm({
                    firstName: user?.firstName || '',
                    lastName: user?.lastName || '',
                    email: user?.email || '',
                  });
                }}
                className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-xl hover:bg-gray-50"
              >
                Annuler
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Profile;