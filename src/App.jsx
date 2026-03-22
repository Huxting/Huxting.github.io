import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Blog from './pages/Blog';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          {/* Fallback route */}
          <Route path="*" element={<Home />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
