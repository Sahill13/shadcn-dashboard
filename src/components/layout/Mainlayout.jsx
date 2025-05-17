import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";

export function MainLayout() {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <div className="hidden md:block md:w-64">
        <Sidebar />
      </div>
      <div className="flex-1 overflow-auto">
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}