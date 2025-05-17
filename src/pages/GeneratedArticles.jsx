import React from "react";
import { ArticleTabs } from "../components/articles/ArticleTabs";

export function GeneratedArticles() {
  return (
    <div className="w-full max-w-screen-xl mx-auto space-y-4">
      <div className="text-xs sm:text-sm text-gray-500 mb-1 sm:mb-2 flex items-center overflow-x-auto whitespace-nowrap pb-1">
        <span>Dashboard</span>
        <span className="mx-2">/</span>
        <span className="font-medium text-gray-900">Generated Articles</span>
      </div>
      <ArticleTabs />
    </div>
  );
}