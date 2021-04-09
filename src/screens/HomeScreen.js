import React from 'react'
import './styles/HomeScreen.css'
import Navbar from '../components/Navbar';
import About from '../components/About';
import Featured from '../components/Featured';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function HomeScreen() {
    return (
        <div className='homeScreen'>
            <Navbar />
            <About />
            <Featured />
            <Experience />
            <Contact />
            <Footer />
        </div>
    )
}

export default HomeScreen
