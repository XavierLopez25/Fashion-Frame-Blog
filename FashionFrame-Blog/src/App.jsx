import './styles/App.css';
import { LoginRegister } from './components/LoginRegister/LoginRegister';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './hooks/AuthContext';

import HomePage from './pages/HomePage';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginRegister />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
