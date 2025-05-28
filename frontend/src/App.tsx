// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import SignIn from './pages/SignIn';
import MainLayout from './components/Dashboard/MainLayout';
import Profile from './components/Dashboard/Profile';
import Settings from './components/Dashboard/Settings';
import AddCar from './components/Dashboard/AddCar';
import SearchCar from './components/Dashboard/SearchCar';
import CarList from './components/Dashboard/CarList';
import CarDetails from './components/Dashboard/CarDetails';
import AboutUs from './components/AboutUs/AboutUs';
import AboutPage from './pages/AboutPage';
import Contact from './components/Contact/Contact';
import ContactPage from './pages/ContactPage';
import CarListings from './components/Dashboard/CarListings';
import ListingPage from './pages/ListingPage';
import ProtectedRoute from './ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/login" element={<LogIn/>} />
        <Route path="/auth/signin" element={<SignIn/>} />

        <Route path="/about-us" element={<AboutPage/>} />
        <Route path='/contact' element={<ContactPage/>} />

        <Route path='/listing' element={<ListingPage/>} />

        <Route element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }>
          <Route path="/profile" element={<Profile />} />
          <Route path="/add-car" element={<AddCar />} />
          <Route path="/search-car" element={<SearchCar />} />
          <Route path="/car-list" element={<CarList />} />
          <Route path="/car/:id" element={<CarDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}


export default App;