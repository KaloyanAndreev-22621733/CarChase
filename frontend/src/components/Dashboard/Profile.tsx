import React from 'react';
import Avatar1 from '../../images/avatar1.png';

function Profile() {
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Аватар */}
        <div className="flex-shrink-0">
          <img
            src={Avatar1}
            alt="User avatar"
            className="w-40 h-40 rounded-full border-4 border-purple-500 shadow"
          />
        </div>

        {/* Информация о пользователе */}
        <div className="flex-1 w-full">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">User profile</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                value="Anna"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                readOnly
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Surname</label>
              <input
                type="text"
                value="Petrovna"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                readOnly
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                value="anna.petrovna@example.com"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                readOnly
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Address</label>
              <input
                type="text"
                value="some city some address"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                readOnly
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;