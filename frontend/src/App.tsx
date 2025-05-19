// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import SignIn from './pages/SignIn';
import MainLayout from './components/Dashboard/MainLayout';
import Profile from './components/Dashboard/Profile';
import Settings from './components/Dashboard/Settings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/login" element={<LogIn/>} />
        <Route path="/auth/signin" element={<SignIn/>} />

        {/* Эти страницы С layout */}
        <Route element={<MainLayout />}>
          <Route path="/profile" element={<Profile/>} />
          <Route path="/settings" element={<Settings/>} />
          {/* и т.д. */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;