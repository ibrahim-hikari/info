import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import './contactUs.scss'

function ContactUs() {

    useEffect(() => {
        $('.contactus').fadeIn(1000);
    }, []);

    return (
        <section className='contactus'>
            <Link to='/about' className='pre btn__about'><i className='fa fa-angle-left'></i><span>ABOUT</span></Link>
            <div className='container'>
                <a href='tel:+962772373785'><i className='fa fa-contact fa-phone'></i>:+962772373785</a>
                <a href='mailto:izzatnaseem30@gmail.com'><i className='fa fa-contact fa-envelope'></i>:izzatnaseem30@gmail.com</a>
                <a href='https://goo.gl/maps/onndzjfDU1YEgJL76'><i className='fa fa-contact fa-map-marker'></i>:Amman,Jordan</a>
                <div className='social'>
                    <a href='https://github.com/naseem-qa'><i className='fa fa-github'></i></a>
                    <a href='https://www.facebook.com/nasa.eq'><i className='fa fa-facebook'></i></a>
                    <a href='https://www.linkedin.com/in/nassem-qatameen-cemp®-0b4654194'><i className='fa fa-linkedin'></i></a>
                </div>
            </div>
            <i className='fa fa-flying fa-whatsapp'></i>
            <i className='fa fa-flying fa-facebook'></i>
            <i className='fa fa-flying fa-instagram'></i>
            <i className='fa fa-flying fa-linkedin'></i>
            <i className='fa fa-flying fa-github'></i>
            <i className='fa fa-flying fa-twitter'></i>
            <i className='fa fa-flying fa-send'></i>
            <i className='fa fa-flying fa-skype'></i>
        </section>
    )
}

export default ContactUs;