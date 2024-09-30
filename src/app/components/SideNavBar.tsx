import {
  ClipboardDocumentCheckIcon,
  ClipboardDocumentListIcon,
  CogIcon,
  ExclamationCircleIcon,
  HomeIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/16/solid";
import { ClipboardList, LogOut } from "lucide";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="h-screen bg-yellow-600 p-4 w-60">
      <ul className="space-y-8">
        {/* Dashboard */}
        <li className="flex items-center space-x-2">
          <HomeIcon className="h-6 w-6" />
          <span className="text-black">
            <Link href="./dashboard">Dashboard</Link>
          </span>
        </li>
        {/* Products */}
        <li className="flex items-center space-x-2">
          <ShoppingBagIcon className="h-6 w-6" />
          <span className="text-black">
            <Link href="./product">Product</Link>
          </span>
        </li>
        {/* Categories */}
        <li className="flex items-center space-x-2">
          <ClipboardDocumentCheckIcon className="h-6 w-6" />
          <span className="text-black">
            <Link href="./categories">Categories</Link>
          </span>
        </li>
        {/* Orders */}
        <li className="flex items-center space-x-2">
          <ClipboardDocumentListIcon className="h-6 w-6" />
          <span className="text-black">Orders</span>
        </li>
        {/* Admins */}
        <li className="flex items-center space-x-2">
          <UserIcon className="h-6 w-6" />
          <span className="text-black">
            <Link href="./admin-page">Admins</Link>
          </span>
        </li>
        {/* Settings */}
        <li className="flex items-center space-x-2">
          <CogIcon className="h-6 w-6" />
          <span className="text-black">Settings</span>
        </li>
        {/* Log Out */}
        <li className="flex items-center space-x-2">
          <ExclamationCircleIcon className="h-6 w-6" />
          <span className="text-black">Log Out</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
