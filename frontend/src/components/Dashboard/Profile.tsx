import React, { useEffect, useState } from 'react';
import { Mail, Lock, Info } from 'lucide-react';

interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  bio: string;
}

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState<UserData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '********',
    bio: 'Frontend developer with passion for clean UI and smooth UX.',
  });

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (userId) {
      fetch(`http://localhost:8080/app/profile/${userId}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Failed to fetch user data');
          }
          return res.json();
        })
        .then((data) => {
          setUserData((prev) => ({
            ...prev,
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
          }));
        })
        .catch((err) => {
          console.error('Ошибка при получении данных:', err);
        });
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-gradient-to-br from-white to-purple-50 p-8 rounded-2xl shadow-xl border border-purple-100">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-extrabold text-gray-800">
          {userData.firstName} {userData.lastName}
        </h1>
        <p className="text-gray-500 italic">{userData.bio}</p>

        <button
          onClick={() => setIsEditing(!isEditing)}
          className="mt-4 px-4 py-2 text-sm bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition"
        >
          {isEditing ? 'Save' : 'Edit'}
        </button>
      </div>

      <div className="grid grid-cols-1 gap-5">
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <Mail size={18} /> Email
          </label>
          <input
            type="email"
            name="email"
            value={userData.email}
            readOnly={!isEditing}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:ring-2"
          />
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <Lock size={18} /> Password
          </label>
          <input
            type="password"
            name="password"
            value={userData.password}
            readOnly={!isEditing}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:ring-2"
          />
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <Info size={18} /> About
          </label>
          <textarea
            name="bio"
            rows={3}
            value={userData.bio}
            readOnly={!isEditing}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:ring-2 resize-none"
          />
        </div>
      </div>
    </div>
  );
}

export default Profile;