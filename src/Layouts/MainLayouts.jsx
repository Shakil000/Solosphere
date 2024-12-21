import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import Banner from '../components/Banner';

const MainLayouts = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
                <section>
                    <Banner></Banner>
                </section>
            <main>
            <Outlet></Outlet>
            </main>
            <footer>
               
            </footer>
        </div>
    );
};

export default MainLayouts;