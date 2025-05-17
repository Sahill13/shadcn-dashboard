import React from "react";
import { Link } from "react-router-dom";

export function Dashboard() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p>Welcome to your content management dashboard.</p>
      <Link to="/articles/generated" className="text-blue-500 underline">
        Go to Generated Articles
      </Link>
    </div>
  );
}