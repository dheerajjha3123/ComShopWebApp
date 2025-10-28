import React from 'react';
import ProductSection from './ProductSection';
import ServicesSection from './ServicesSection';
import WorkPage from './WorkPage';
import TesTimonial from './TesTimonial';
import BlogPage from './BlogPage';
import TeamPages from './TeamPages';
import ContactPage from './ContactPage';
import HeroSection from './HeroSection';
import FaQPage from './FaQPage';

const Home = () => {
    return (
        <>
       
        <HeroSection />
         <ProductSection/>
        <ServicesSection/>
        <WorkPage/>
        <TesTimonial/>
        <BlogPage/>
        <TeamPages/>
        <FaQPage/>
        <ContactPage/>
        
       
        
        </>
    );
}

export default Home;
