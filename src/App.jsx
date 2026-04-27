import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Page Imports
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

// Component Imports
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  // We pull the authentication status from our Redux store
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <Router>
      <Routes>
        {/* 1. LOGIN ROUTE: Accessible by everyone */}
        <Route path="/login" element={<Login />} />
        
        {/* 2. DASHBOARD ROUTE: Wrapped in our ProtectedRoute guard */}
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        />

        {/* 3. REDIRECT LOGIC: 
             If a user goes to any other link (like the homepage /):
             - If logged in: Send to Dashboard
             - If logged out: Send to Login 
        */}
        <Route 
          path="*" 
          element={
            isAuthenticated ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <Navigate to="/login" replace />
            )
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;