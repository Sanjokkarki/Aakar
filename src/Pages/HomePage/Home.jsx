import React from 'react';
import BodyLayout from '../../Components/BodyLayout';
import Herosection from './HomeComponents/HeroSection/Herosection';
import Banner from '../../Components/Banner';
import AakarDefination from './HomeComponents/AakarDefination/AakarDefination';

const Home = () => {
    return (
        <BodyLayout>
            <Herosection />
            <Banner />
            <AakarDefination />
        </BodyLayout>
    );
};

export default Home;
