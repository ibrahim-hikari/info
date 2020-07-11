import React, { useEffect } from 'react';
import $ from 'jquery'

export default function Info() {

    const getTime = () => {

        let h = new Date().getHours();
        let m = new Date().getMinutes();
        let s = new Date().getSeconds();

        $('.hour').html(h);
        $('.minute').html(m);
        $('.second').html(s);

        // let r = parseInt(s) * 1;
        // let g = parseInt(s) * 3;
        // let b = parseInt(s) * 5;

        // $('.search').css('background', `rgb(${r},${g},${b})`);
    };

    useEffect(() => {
        setInterval(getTime, 1000);

        $('.btn__info').click(function (e) {
            e.preventDefault();
            $('.btn__info').fadeOut(500);
        });


        // SECTION Btn //

        $('.btn__about').click(function (e) {
            e.preventDefault();
            $('.contactUs').fadeOut(1000);
            $('.clock-box').fadeOut(1000);
            $('.about').fadeIn(1000);
            // $('.about').css('z-index', 2);
        });

        $('.btn__home').click(function (e) {
            e.preventDefault();
            $('.clock-box').fadeIn(1000);
            // $('.clock-box').css('z-index', 2);
            $('.about').fadeOut(1000);
            $('.contactus').fadeOut(1000);
        });

        $('.btn__contact').click(function (e) {
            e.preventDefault();
            $('.contactus').fadeIn(1000);
            // $('.contactus').css('z-index', 2);
            $('.clock-box').fadeOut(1000);
            $('.about').fadeOut(1000);
        });
    }, []);

    return (
        <>
            <section className='clock-box' id='home'>
                {/* <h2>THE TIME NOW IS</h2> */}
                <div className='clock'>
                    <div><span className='hour'>00</span><span>Hours</span></div>
                    <div><span className='minute'>00</span><span>Minutes</span></div>
                    <div><span className='second'>00</span><span>Seconds</span></div>
                </div>
                <div className='clock-reverse'>
                    <div><span className='hour'>00</span><span>Hours</span></div>
                    <div><span className='minute'>00</span><span>Minutes</span></div>
                    <div><span className='second'>00</span><span>Seconds</span></div>
                </div>
                <span className='box'></span>
                <span className='box'></span>
                <span className='box'></span>
                <span className='box'></span>
                <span className='box'></span>
                <span className='box'></span>
                <span className='box'></span>
                <span className='box'></span>
                <button className='next btn__about'>ABOUT<span><i className='fa fa-angle-right'></i></span></button>
            </section>
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
                <button className='pre btn__home'><span><i className='fa fa-angle-left'></i></span>Home</button>
                <button className='next btn__contact'><span><i className='fa fa-angle-right'></i></span>Contact</button>
            </section>
            <section className='contactus'>
                <button className='pre btn__about'><span><i className='fa fa-angle-left'></i></span>About</button>
                <a href='tel:+962772373785'>+962772373785</a>
                <a href=''><i className='fa fa-envelope'></i>izzatnaseem30@gmail.com</a>
                <a href='https://goo.gl/maps/onndzjfDU1YEgJL76'><i className='fa fa-map-marker'></i>Amman, Jordan</a>
                <a href='https://github.com/naseem-qa'><i className='fa fa-github'></i></a>
                <a href='https://www.facebook.com/nasa.eq'><i className='fa fa-facebook'></i></a>
                <a href='https://www.linkedin.com/in/nassem-qatameen-cemp®-0b4654194'><i className='fa fa-linkedin'></i></a>
            </section>
        </>
    )
}
