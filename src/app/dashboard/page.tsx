import { auth, currentUser } from "@clerk/nextjs/server";
import React from "react";
import Sidebar from "../components/SideNavBar";

export default async function DashboardPage() {
  const { userId } = auth();
  console.log(userId);
  if (!userId) {
    return <div>You are not logged in.</div>;
  }
  const user = await currentUser();
  return (
    <div className="flex h-screen">
      <div className="container mx-auto p-4">
        <h1 className="text-xl font-bold mb-6">Orders</h1>
        {/* Orders Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {/* Order: Today */}
          <div className="bg-gray-200 text-center p-4">
            <h2 className="text-lg font-bold">Today</h2>
            <p className="text-3xl font-bold">3</p>
            <p className="text-sm text-gray-600">2 orders today</p>
          </div>
          {/* Order: This Week */}
          <div className="bg-gray-200 text-center p-4">
            <h2 className="text-lg font-bold">This Week</h2>
            <p className="text-3xl font-bold">3</p>
            <p className="text-sm text-gray-600">25 orders today</p>
          </div>
          {/* Order: This Month */}
          <div className="bg-gray-200 text-center p-4">
            <h2 className="text-lg font-bold">This Month</h2>
            <p className="text-3xl font-bold">3</p>
            <p className="text-sm text-gray-600">32 orders today</p>
          </div>
        </div>

        <h1 className="text-xl font-bold mb-6">Revenue</h1>
        {/* Revenue Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Revenue: Today */}
          <div className="bg-gray-200 text-center p-4">
            <h2 className="text-lg font-bold">Today</h2>
            <p className="text-3xl font-bold">$85 765</p>
            <p className="text-sm text-gray-600">2 orders today</p>
          </div>
          {/* Revenue: This Week */}
          <div className="bg-gray-200 text-center p-4">
            <h2 className="text-lg font-bold">This Week</h2>
            <p className="text-3xl font-bold">$226 6000</p>
            <p className="text-sm text-gray-600">25 orders today</p>
          </div>
          {/* Revenue: This Month */}
          <div className="bg-gray-200 text-center p-4">
            <h2 className="text-lg font-bold">This Month</h2>
            <p className="text-3xl font-bold">$220 093</p>
            <p className="text-sm text-gray-600">32 orders today</p>
          </div>
        </div>
      </div>
    </div>
  );
}
