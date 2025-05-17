import React, { useState } from "react";
import { ArrowUpDown, ChevronUp, ChevronDown } from "lucide-react";

export function ArticleTableSkeleton() {
  return (
    <div className="w-full animate-pulse">
      <div className="rounded-md border">
        <div className="h-10 bg-gray-200"></div>
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-16 border-t bg-gray-100"></div>
        ))}
      </div>
    </div>
  );
}

export function ArticlesTable({ articles, isLoading }) {
  const [selectedArticles, setSelectedArticles] = useState([]);
  const [sortField, setSortField] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");
  
  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(prev => prev === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };
  
  const toggleSelectAll = () => {
    if (selectedArticles.length === articles.length) {
      setSelectedArticles([]);
    } else {
      setSelectedArticles(articles.map(a => a.id));
    }
  };
  
  const toggleArticle = (id) => {
    setSelectedArticles(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id) 
        : [...prev, id]
    );
  };
  
  const sortedArticles = [...articles].sort((a, b) => {
    if (!sortField) return 0;
    
    const factor = sortDirection === "asc" ? 1 : -1;
    
    switch (sortField) {
      case "title":
        return a.title.localeCompare(b.title) * factor;
      case "keyword":
        return a.keyword.localeCompare(b.keyword) * factor;
      case "words":
        return (a.words - b.words) * factor;
      case "createdOn":
        return a.createdOn.localeCompare(b.createdOn) * factor;
      default:
        return 0;
    }
  });

  const renderSortIcon = (field) => {
    if (sortField !== field) {
      return <ArrowUpDown className="h-4 w-4 ml-1" />;
    }
    return sortDirection === "asc" 
      ? <ChevronUp className="h-4 w-4 ml-1" /> 
      : <ChevronDown className="h-4 w-4 ml-1" />;
  };
  
  if (isLoading) {
    return <ArticleTableSkeleton />;
  }

  return (
    <div className="w-full">
      <div className="rounded-md border">
        <table className="w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="w-10 px-3 py-3.5">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-blue-600"
                  checked={selectedArticles.length === articles.length && articles.length > 0}
                  onChange={toggleSelectAll}
                />
              </th>
              <th 
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 cursor-pointer"
                onClick={() => handleSort("title")}
              >
                <div className="flex items-center">
                  Article Title
                  {renderSortIcon("title")}
                </div>
              </th>
              <th 
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 cursor-pointer"
                onClick={() => handleSort("keyword")}
              >
                <div className="flex items-center">
                  Keyword [Traffic]
                  {renderSortIcon("keyword")}
                </div>
              </th>
              <th 
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 cursor-pointer w-[100px]"
                onClick={() => handleSort("words")}
              >
                <div className="flex items-center">
                  Words
                  {renderSortIcon("words")}
                </div>
              </th>
              <th 
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 cursor-pointer w-[140px]"
                onClick={() => handleSort("createdOn")}
              >
                <div className="flex items-center">
                  Created On
                  {renderSortIcon("createdOn")}
                </div>
              </th>
              <th className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900 w-[100px]">Action</th>
              <th className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900 w-[80px]">Publish</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {sortedArticles.length === 0 ? (
              <tr>
                <td colSpan={7} className="px-3 py-4 text-center text-sm text-gray-500">
                  No articles found.
                </td>
              </tr>
            ) : (
              sortedArticles.map(article => (
                <tr key={article.id} className="hover:bg-gray-50">
                  <td className="px-3 py-4 text-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-blue-600"
                      checked={selectedArticles.includes(article.id)}
                      onChange={() => toggleArticle(article.id)}
                    />
                  </td>
                  <td className="px-3 py-4 text-sm text-gray-900">{article.title}</td>
                  <td className="px-3 py-4 text-sm text-gray-600">
                    {article.keyword} {article.traffic}
                  </td>
                  <td className="px-3 py-4 text-sm text-gray-600">{article.words}</td>
                  <td className="px-3 py-4 text-sm text-gray-600">{article.createdOn}</td>
                  <td className="px-3 py-4 text-sm text-center">
                    <button className="inline-flex items-center justify-center rounded-md bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm border border-gray-300 hover:bg-gray-50 focus:outline-none">
                      View
                    </button>
                  </td>
                  <td className="px-3 py-4 text-sm text-center">
                    {article.status === "published" ? (
                      <div className="flex justify-center">
                        <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                      </div>
                    ) : (
                      <div className="flex justify-center text-gray-300">-</div>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      
      <div className="flex justify-between items-center mt-4">
        <div className="text-sm text-gray-500">
          Total: {articles.length} Article Titles | Show 
          <select className="mx-1 px-1 py-0.5 rounded border text-xs">
            <option>10</option>
            <option>25</option>
            <option>50</option>
          </select>
          entries per page
        </div>
        <div className="flex items-center space-x-2">
          <button className="inline-flex items-center justify-center rounded-md border border-gray-300 px-2 py-1 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none" disabled>
            <ChevronUp className="h-4 w-4 rotate-90" />
          </button>
          <span className="text-sm">1 / 1</span>
          <button className="inline-flex items-center justify-center rounded-md border border-gray-300 px-2 py-1 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none" disabled>
            <ChevronDown className="h-4 w-4 rotate-90" />
          </button>
        </div>
      </div>
    </div>
  );
}