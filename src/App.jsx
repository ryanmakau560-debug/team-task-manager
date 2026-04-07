import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login"; // Person 1 will add this
import { useSelector } from "react-redux";

function App() {
  // Get auth state from Redux (Person 1 will manage this)
  const isLoggedIn = useSelector((state) => state.auth?.loggedIn);

  return (
    <Router>
      <Routes>
        {/* Login page */}
        <Route path="/login" element={<Login />} />

        {/* Dashboard (protected) */}
        <Route
          path="/dashboard"
          element={
            isLoggedIn ? <Dashboard /> : <Navigate to="/login" replace />
          }
        />

        {/* Default redirect to dashboard or login */}
        <Route
          path="*"
          element={
            isLoggedIn ? <Navigate to="/dashboard" replace /> : <Navigate to="/login" replace />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;