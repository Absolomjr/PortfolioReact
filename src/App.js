import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

// Import components
import ResultsComponent from './components/ResultsComponent';
import GeneralComponent from './components/GeneralComponent';
import AboutComponent from './components/AboutComponents';
import CareerGoals from './components/CareerGoals';
import ProfileComponent from './components/ProfileComponent';
import MyHobbiesComponent from './components/MyHobbiesComponent';
import ContactComponent from './components/ContactComponent';
import FavLinks from './components/FavLinks';
import Login from './components/Login';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load theme preference from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.body.classList.add('dark-mode');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light');
  };

  const handleLogin = (credentials) => {
    if (credentials.username === "admin" && credentials.password === "password") {
      setIsAuthenticated(true);
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={
          !isAuthenticated ? 
          <Login onLogin={handleLogin} isDarkMode={isDarkMode} /> : 
          <Navigate to="/portfolio" />
        } />
        <Route path="/portfolio" element={
          isAuthenticated ? (
            <div className={`portfolio-container ${isDarkMode ? 'dark-mode' : ''}`}>
              <nav className="portfolio-nav">
                <div className="nav-logo">AO</div>
                <div className="nav-controls">
                  <button 
                    className="theme-toggle"
                    onClick={toggleTheme}
                    aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                  >
                    {isDarkMode ? '☀️' : '🌙'}
                  </button>
                  <button 
                    className="logout-btn"
                    onClick={() => setIsAuthenticated(false)}
                  >
                    Logout
                  </button>
                </div>
              </nav>
              
              <div className="App">
                <AboutComponent />
                <CareerGoals />
                <ResultsComponent />
                <GeneralComponent />
                <ProfileComponent />
                <MyHobbiesComponent />
                <ContactComponent />
                <FavLinks />
              </div>
            </div>
          ) : (
            <Navigate to="/login" />
          )
        } />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;