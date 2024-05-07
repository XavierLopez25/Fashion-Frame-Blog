import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/AuthContext';

export default function ProtectedRoute({ children, roles }) {
  const { user } = useAuth();

  // Verifica si el usuario está cargado y si tiene alguno de los roles necesarios
  if (!user) {
    // Podrías retornar null o un componente de carga aquí
    return null; // o <LoadingComponent /> si tienes uno
  }

  const hasRequiredRole = roles.includes(user.role);

  if (!hasRequiredRole) {
    // Si el usuario no tiene el rol necesario, redirigir a login
    return <Navigate to="/login" />;
  }

  // Si el usuario cumple con los requisitos, renderiza el componente hijo
  return children;
}
