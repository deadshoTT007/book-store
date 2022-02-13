import React from 'react';
import Header from '../modules/TopBar';
import Footer from '../modules/Footer';
import StickyBottomNavBar from '../elements/StickyBottomNavbar';
const HomeLayout = (props) => {
    return (
        <div style={{boxSizing: 'border-box', overflowX:'hidden'}}>
            <Header />
            {props.children}
            <Footer /> 
           <StickyBottomNavBar/>
        </div>
    )
};

export default HomeLayout;