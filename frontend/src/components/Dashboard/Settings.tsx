import React, { useState } from 'react';
import { User, Mail, LayoutGrid, SunMoon, Settings as CogIcon } from 'lucide-react';

function Settings() {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john@example.com');
  const [theme, setTheme] = useState('light');
  const [itemsPerPage, setItemsPerPage] = useState(10);

  function handleSave() {
    // В реальном приложении можно отправить настройки в локальное хранилище или API
    alert(`Settings saved!\nTheme: ${theme}\nItems per page: ${itemsPerPage}`);
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <CogIcon size={24} />
        System Settings
      </h2>

      <div className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <div className="flex items-center mt-1">
            <User className="text-gray-400 mr-2" size={18} />
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <div className="flex items-center mt-1">
            <Mail className="text-gray-400 mr-2" size={18} />
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
        </div>

        {/* Theme */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Theme</label>
          <div className="flex items-center mt-1">
            <SunMoon className="text-gray-400 mr-2" size={18} />
            <select
              value={theme}
              onChange={e => setTheme(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="system">System default</option>
            </select>
          </div>
        </div>

        {/* Items per page */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Items per page</label>
          <div className="flex items-center mt-1">
            <LayoutGrid className="text-gray-400 mr-2" size={18} />
            <select
              value={itemsPerPage}
              onChange={e => setItemsPerPage(Number(e.target.value))}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </select>
          </div>
        </div>

        {/* Save button */}
        <div className="mt-6">
          <button
            onClick={handleSave}
            className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default Settings;