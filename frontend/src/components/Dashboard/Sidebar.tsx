import React from 'react';
import { Car, Search, PlusCircle, Settings, User } from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white border-r shadow-md h-full">
      <div className="p-6 text-2xl font-bold text-purple-600 border-b">
        CarChase
      </div>
      <nav className="p-4 space-y-2">
        <SidebarLink href="/search-car" icon={<Search size={18} />} label="Search car" />
        <SidebarLink href="/add-car" icon={<PlusCircle size={18} />} label="Add car" />
        <SidebarLink href="/my-cars" icon={<Car size={18} />} label="My cars" />
        <SidebarLink href="/profile" icon={<User size={18} />} label="Profile" />
      </nav>
    </aside>
  );
};

const SidebarLink = ({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) => {
  return (
    <a
      href={href}
      className="flex items-center gap-3 px-4 py-2 rounded-md text-gray-700 hover:bg-purple-100 hover:text-purple-700 transition-colors duration-200"
    >
      {icon}
      <span>{label}</span>
    </a>
  );
};

export default Sidebar;