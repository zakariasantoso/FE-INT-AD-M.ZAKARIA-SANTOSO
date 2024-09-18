import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginComponent from './components/LoginComponent';
import CategoryComponent from './components/CategoryComponent';
import Navigation from './components/Navigation';
import PrivateRoute from './components/PrivateRoute'; // Import PrivateRoute

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold text-center mb-8">My Blog</h1>
          <Navigation />
          <Routes>
            <Route path="/" element={<LoginComponent />} />
            {/* Gunakan PrivateRoute untuk melindungi rute kategori */}
            <Route element={<PrivateRoute />}>
              <Route path="/categories" element={<CategoryComponent />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
