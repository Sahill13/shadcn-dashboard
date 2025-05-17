import React from "react";
import { Link } from "react-router-dom";

export function Dashboard() {
  return (
    <div className="space-y-3 sm:space-y-4 max-w-screen-xl mx-auto">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">Dashboard</h1>
      
      <p className="text-sm sm:text-base text-gray-600 max-w-prose">
        Welcome to your content management dashboard.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 pt-2">
        <Link 
          to="/articles/generated" 
          className="inline-flex items-center justify-center px-4 py-2.5 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-lg text-sm font-medium transition-colors"
        >
          Go to Generated Articles
          <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
        
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <h3 className="font-medium mb-1">Generated Articles</h3>
          <p className="text-2xl font-bold">24</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <h3 className="font-medium mb-1">Published Articles</h3>
          <p className="text-2xl font-bold">12</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <h3 className="font-medium mb-1">Scheduled</h3>
          <p className="text-2xl font-bold">5</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <h3 className="font-medium mb-1">Word Count</h3>
          <p className="text-2xl font-bold">24,500</p>
        </div>
      </div>
    </div>
  );
}