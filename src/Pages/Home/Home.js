import React from 'react';
import About from '../About/About';
// import Login from '../Login/Login';
import Banner from './Banner/Banner';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner />
            <Services />
            <About />
            {/* <Login /> */}
        </div>
    );
};

export default Home;