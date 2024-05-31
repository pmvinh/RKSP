import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Body from './components/Body';
import './components/styles.css';

const HomePage = () => {
    return (
        <div>
            <Header title="Banunu" />
            <Navigation />
            <Body
            title="Welcome to Banunu home page!"
            text="This is the homepage of our awesome website."
            >
            </Body>
        </div>
    );
};

export default HomePage;
