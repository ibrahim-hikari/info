import React from 'react';

import Header from './header';
import Home from './home';
import About from './about';

import './app.scss'

export default function App(props) {
    return (
        <>
            <Header />
            <Home />
            <About />
        </>
    )
}