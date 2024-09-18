import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Cookies from 'js-cookie';

// Komponen PrivateRoute yang memeriksa cookie token
const PrivateRoute = () => {
  const token = Cookies.get('token');

  // Jika token tidak ada, arahkan ke halaman login
  if (!token) {
    return <Navigate to="/" />;
  }

  // Jika token ada, render komponen anak (halaman kategori)
  return <Outlet />;
};

export default PrivateRoute;
