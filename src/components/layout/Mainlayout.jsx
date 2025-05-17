import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Menu, X } from "lucide-react";

export function MainLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <div className="hidden md:block md:w-64 md:flex-shrink-0">
        <Sidebar />
      </div>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 flex md:hidden">
          <div 
            className="fixed inset-0 bg-gray-600 bg-opacity-75" 
            onClick={toggleMobileMenu}
            aria-hidden="true"
          ></div>
          
          <div className="relative flex w-full max-w-xs flex-1 flex-col bg-white">
            <div className="absolute top-0 right-0 pt-2 pr-2">
              <button
                type="button"
                className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                onClick={toggleMobileMenu}
              >
                <span className="sr-only">Close sidebar</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <Sidebar />
          </div>
        </div>
      )}

      <div className="flex-1 overflow-auto">
        <div className="sticky top-0 z-10 flex items-center bg-white shadow-sm md:hidden">
          <button
            type="button"
            className="p-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            onClick={toggleMobileMenu}
          >
            <span className="sr-only">Open sidebar</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="ml-3">
            <h1 className="text-lg font-medium">Dashboard</h1>
          </div>
        </div>
        
        <main className="p-4 sm:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}