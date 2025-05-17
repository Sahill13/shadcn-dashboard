import React, { useState } from "react";
import { ArticlesTable } from "./ArticlesTable";
import { articles } from "../../lib/data";

export function ArticleTabs() {
  const [activeTab, setActiveTab] = useState("generated");
  const [searchQuery, setSearchQuery] = useState("");
  
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  
  const filteredArticles = articles.filter(article => 
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.keyword.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const getArticlesByTab = (tab) => {
    switch (tab) {
      case "published":
        return filteredArticles.filter(a => a.status === "published");
      case "scheduled":
        return filteredArticles.filter(a => a.status === "scheduled");
      case "archived":
        return filteredArticles.filter(a => a.status === "archived");
      case "generated":
      default:
        return filteredArticles;
    }
  };

  return (
    <div className="space-y-4 bg-white rounded-md shadow-sm p-6">
      <h1 className="text-2xl font-bold">Articles</h1>
      <div className="border-b-0">
        <div className="flex space-x-1 rounded-lg bg-blue-50 p-1">
          {["generated", "published", "scheduled", "archived"].map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`
                flex-1 px-4 py-2 text-sm font-medium rounded-md transition-colors
                ${activeTab === tab 
                  ? "bg-blue-500 text-white" 
                  : "text-gray-600 hover:bg-blue-100"}
              `}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)} Articles
            </button>
          ))}
        </div>
      </div>
      <div className="my-4">
        <input
          type="text"
          placeholder="Search for Title & Keywords..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full max-w-sm px-3 py-2 border border-gray-200 rounded-md"
        />
      </div>
      <div className="mt-4">
        <ArticlesTable 
          articles={getArticlesByTab(activeTab)} 
          isLoading={false}
        />
      </div>
    </div>
  );
}