import React from 'react'
import CarListings from '../components/Dashboard/CarListings';
import Header from '../Header';
import Footer from '../Footer';

function ListingPage() {
    return (
        <>
        <Header></Header>
        <CarListings></CarListings>
        <Footer></Footer>
        </>
    )
}

export default ListingPage;