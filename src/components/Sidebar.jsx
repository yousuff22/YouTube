import React from "react";
import { useSelector } from "react-redux";
import {
  Home,
  Video,
  Flame,
  Music,
  Gamepad2,
  Film,
  Trophy,
  Clock,
  Wifi,
} from "lucide-react"; // install via: npm install lucide-react

const SidebarSection = ({ title, items }) => (
  <div className="mb-6">
    {title && <h1 className="font-bold text-sm mb-2 text-gray-600">{title}</h1>}
    <ul className="space-y-2">
      {items.map(({ name, icon: Icon }) => (
        <li
          key={name}
          className="flex items-center gap-2 text-sm text-gray-800 hover:bg-gray-100 p-2 rounded cursor-pointer"
        >
          <Icon size={18} />
          {name}
        </li>
      ))}
    </ul>
  </div>
);

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="p-4 shadow-lg w-56 h-screen overflow-y-auto bg-white">
      <SidebarSection
        items={[
          { name: "Home", icon: Home },
          { name: "Shorts", icon: Flame },
          { name: "Videos", icon: Video },
          { name: "Live", icon: Wifi },
        ]}
      />
      <SidebarSection
        title="Subscriptions"
        items={[
          { name: "Music", icon: Music },
          { name: "Sports", icon: Trophy },
          { name: "Gaming", icon: Gamepad2 },
          { name: "Movies", icon: Film },
        ]}
      />
      <SidebarSection
        title="Watch Later"
        items={[
          { name: "Music", icon: Music },
          { name: "Sports", icon: Trophy },
          { name: "Gaming", icon: Gamepad2 },
          { name: "Movies", icon: Film },
        ]}
      />
    </div>
  );
};

export default Sidebar;
