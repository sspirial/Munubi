import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme'; // Import your custom theme
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import EducationPage from './pages/EducationPage';
import ContactPage from './pages/ContactPage';
// Remove default App.css import if you plan to fully rely on MUI or a new global style sheet
// import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* CssBaseline kickstarts an elegant, consistent, and simple baseline to build upon. */}
      <Router>
        {/* Navbar is outside the main flex container to allow sticky positioning */}
        <Navbar /> 
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: 'calc(100vh - 64px)', /* Adjust 64px to your Navbar height */ width: '100%', alignItems: 'center' }}>
          <main style={{ flex: 1, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '64px' /* Add padding to prevent content from hiding behind sticky navbar */ }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/education" element={<EducationPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
