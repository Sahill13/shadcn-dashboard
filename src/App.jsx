import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { MainLayout } from "./components/layout/Mainlayout";
import { Dashboard } from "./pages/Dashboard";
import { GeneratedArticles } from "./pages/GeneratedArticles";


function App() {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="articles/generated" element={<GeneratedArticles />} />
          <Route path="articles" element={<Navigate to="/articles/generated" replace />} />
          <Route path="articles/*" element={<GeneratedArticles />} />
          <Route path="auto-blog" element={<GeneratedArticles />} />
          <Route path="internal-links" element={<GeneratedArticles />} />
          <Route path="free-backlinks" element={<GeneratedArticles />} />
          <Route path="integrations" element={<GeneratedArticles />} />
          <Route path="subscription" element={<GeneratedArticles />} />
          <Route path="affiliate" element={<GeneratedArticles />} />
          <Route path="help" element={<GeneratedArticles />} />
          <Route path="updates" element={<GeneratedArticles />} />
          <Route path="support" element={<GeneratedArticles />} />
          <Route path="profile" element={<GeneratedArticles />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;