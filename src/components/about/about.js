import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

import './about.scss';

function About() {
    useEffect(() => {
        $('.about').fadeIn(1000);
    },[])
    return (
        <section className='about'>
            <button className='btn__info'>ABOUT ME</button>
            <div className='star'></div>
            <div className='star'></div>
            <div className='star'></div>
            <div className='star'></div>
            <div className='star'></div>
            <div className='star'></div>
            <div className='star'></div>
            <div className='star'></div>
            <Link to='/' className='pre btn__home'><i className='fa fa-angle-left'></i><span>HOME</span></Link>
            <Link to='/contactUs' className='next btn__contact'><span>CONTACT</span><i className='fa fa-angle-right'></i></Link>
        </section>
    )
}

export default About