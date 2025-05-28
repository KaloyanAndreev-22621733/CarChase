// src/routes/ProtectedRoute.tsx
import React, { JSX } from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const userId = localStorage.getItem("userId");

  if (!userId) {
    // Если нет userId — редирект на логин
    return <Navigate to="/auth/login" replace />;
  }

  // Если есть userId — отображаем защищённый маршрут
  return children;
};

export default ProtectedRoute;