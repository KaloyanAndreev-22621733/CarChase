import React from "react";
import Header from "../Header";
import LandingBanner from "../components/Landing/LandingBanner";
import LandingSearchBox from "../components/Landing/LandingSearchBox";
import WhyUsSection from "../components/Landing/WhyUsSection";
import BrowseType from "../components/Landing/BrowseType";
import ReviewsSection from "../components/Landing/ReviewsSection";
import ContactUs from "../ContactUs";
import Footer from "../Footer";

function Home() {
    return (
        <>
        <Header />
        <LandingBanner />
        <LandingSearchBox />
        <BrowseType />
        <WhyUsSection />
        <ReviewsSection />
        <ContactUs />
        <Footer />
      </>
    );
}

export default Home;