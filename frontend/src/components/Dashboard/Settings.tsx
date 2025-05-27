import React, { useEffect, useState } from 'react';
import { User, Mail, LayoutGrid, SunMoon, Settings as CogIcon } from 'lucide-react';

function Settings() {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john@example.com');
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });
  const [itemsPerPage, setItemsPerPage] = useState(10);

  
  // Эффект для применения темы 
  useEffect(() => {
    const root = window.document.documentElement;

    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    // Если хочешь поддерживать system theme:
    if (theme === 'system') {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      root.classList.toggle('dark', systemPrefersDark);
    }
  }, [theme]);

  function handleSave() {
    alert(`Settings saved!\nTheme: ${theme}\nItems per page: ${itemsPerPage}`);
  }


  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-2xl mx-auto text-gray-900 dark:text-white transition-colors">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <CogIcon size={24} />
        System Settings
      </h2>

      <div className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium">Name</label>
          <div className="flex items-center mt-1">
            <User className="text-gray-400 mr-2" size={18} />
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium">Email</label>
          <div className="flex items-center mt-1">
            <Mail className="text-gray-400 mr-2" size={18} />
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
        </div>

        {/* Theme */}
        <div>
          <label className="block text-sm font-medium">Theme</label>
          <div className="flex items-center mt-1">
            <SunMoon className="text-gray-400 mr-2" size={18} />
            <select
              value={theme}
              onChange={e => setTheme(e.target.value)}
              className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="system">System default</option>
            </select>
          </div>
        </div>

        {/* Items per page */}
        <div>
          <label className="block text-sm font-medium">Items per page</label>
          <div className="flex items-center mt-1">
            <LayoutGrid className="text-gray-400 mr-2" size={18} />
            <select
              value={itemsPerPage}
              onChange={e => setItemsPerPage(Number(e.target.value))}
              className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
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