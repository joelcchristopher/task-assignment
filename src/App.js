import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Home from './components/Home';
import Kanban from './components/Kanban';

function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const handleAuthentication = (status) => {
    setIsAuthenticated(status);
  };

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} />
      <Routes>
        <Route path="/" element={isAuthenticated ? <Kanban /> : <Navigate to="/signin" />} />
        <Route path="/signup" element={<SignUp onAuthenticate={handleAuthentication} />} />
        <Route path="/signin" element={<SignIn onAuthenticate={handleAuthentication} />} />
      </Routes>
    </Router>
  );
}

export default App;
