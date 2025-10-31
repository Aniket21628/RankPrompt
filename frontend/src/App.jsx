import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Reports from './pages/Reports';
import Profile from './pages/Profile';
import EarnCredits from './pages/EarnCredits';
import BuyCredits from './pages/BuyCredits';

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID || '';

function App() {
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/dashboard"
              element={<Navigate to="/reports/new" replace />}
            />
            <Route
              path="/reports"
              element={<Navigate to="/reports/new" replace />}
            />
            <Route
              path="/reports/new"
              element={
                <ProtectedRoute>
                  <Reports />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/earn-credits"
              element={
                <ProtectedRoute>
                  <EarnCredits />
                </ProtectedRoute>
              }
            />
            <Route
              path="/buy-credits"
              element={
                <ProtectedRoute>
                  <BuyCredits />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AuthProvider>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
