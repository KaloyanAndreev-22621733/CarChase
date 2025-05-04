import React from 'react';
import './App.css';
import "./index.css";
import LandingHeader from './components/Landing/LandingHeader';
import LandingBanner from './components/Landing/LandingBanner';
import LandingSearchBox from './components/Landing/LandingSearchBox';
import BrowseType from './components/Landing/BrowseType';
import WhyUsSection from './components/Landing/WhyUsSection';
import ReviewsSection from './components/Landing/ReviewsSection';
import ContactUs from './components/Landing/ContactUs';
import Footer from './components/Landing/Footer';

function App() {
  return (
    <div className="App">
      <LandingHeader></LandingHeader>
      <LandingBanner></LandingBanner>
      <LandingSearchBox></LandingSearchBox>
      <BrowseType></BrowseType>
      <WhyUsSection></WhyUsSection>
      <ReviewsSection></ReviewsSection>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
}

export default App;
