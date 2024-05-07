import './styles/App.css'
import { LoginRegister } from './components/LoginRegister/LoginRegister'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from '../src/hooks/AuthContext'
import HomePage from './pages/HomePage'
import AdminPage from './pages/AdminPage'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginRegister />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute roles={['Administrador']}>
                <AdminPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
