import React from 'react';
import { Route } from 'react-router-dom';

// import './style.scss'

import Header from './header/header.js'
import Home from './home/home.js';
import About from './about/about.js';
import ContactUs from './contact/contactUs.js';


function App() {
    console.log('jj',<About />)
    return (
        <>
            <Header />
            <Route exact path='/' render={() => <Home />}></Route>
            <Route exact path='/about' render={() => <About />}></Route>
            <Route exact path='/contactus' render={() => <ContactUs />}></Route>
        </>
    )
}

export default App;