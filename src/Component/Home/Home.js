import React from 'react';
import ContactUs from '../Contact-us/ContactUs';
import AboutUs from '../AboutUs/AboutUs';
import WhoWeAre from '../WhoWeAre/WhoWeAre.js'


function Home() {
    return (
        <div>
            <h1>Home</h1>
            <AboutUs />
            <WhoWeAre />
            <ContactUs />
           

            
        </div>
    )
    
}

export default Home