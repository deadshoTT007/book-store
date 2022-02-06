import React from 'react';
import Header from '../modules/TopBar';
import Footer from '../modules/Footer';
const HomeLayout = (props) => {
    return (
        <div style={{boxSizing: 'border-box', overflowX:'hidden'}}>
            <Header />
            {props.children}
           {!props.footer && <Footer />} 
        </div>
    )
};

export default HomeLayout;