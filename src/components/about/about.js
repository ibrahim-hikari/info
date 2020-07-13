import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

import './about.scss';

function About() {

    useEffect(() => {
        $('.about').fadeIn(1000);


        $('.btn__info').click(e => {
            e.preventDefault();
            $('.btn__info').fadeOut(500);
            $('.info').fadeIn(500);
        });

        $('.btn__exp').click(function (e) {
            e.preventDefault();
            $('.exp').fadeIn();
            $('.btn__exp').fadeOut();
            $('.btn__edu').fadeOut();
            $('.btn__skill').fadeOut();
        });

        $('.btn__edu').click(function (e) {
            e.preventDefault();
            $('.edu').fadeIn();
            $('.btn__exp').fadeOut();
            $('.btn__edu').fadeOut();
            $('.btn__skill').fadeOut();
        });

        $('.btn__skill').click(e => {
            e.preventDefault();
            $('.skill').fadeIn();
            $('.btn__exp').fadeOut();
            $('.btn__edu').fadeOut();
            $('.btn__skill').fadeOut();
        });

        $('.btn__back').click(e => {
            e.preventDefault();
            $('.edu').fadeOut();
            $('.exp').fadeOut();
            $('.skill').fadeOut();
            $('.btn__exp').fadeIn();
            $('.btn__edu').fadeIn();
            $('.btn__skill').fadeIn();
        });



        $('.fa-angle-down').click(e => {
            e.preventDefault();
            $('.edu-details:nth-child(2)').css('top', '50%');
            $('.edu-details:nth-child(1)').css('top', '150%');
        });

        $('.fa-angle-up').click(e => {
            e.preventDefault();
            $('.edu-details:nth-child(2)').css('top', '150%');
            $('.edu-details:nth-child(1)').css('top', '50%');
        });

    }, []);

    return (
        <section className='about'>
            <button className='btn__info'>ABOUT ME</button>

            <div className='info'>

                <button className='btn btn__edu'>education</button>
                <div className='card edu'>
                    <div className='edu-details'>
                        <h2>Full Stack JS development - Boot Camp</h2>
                        <h3>Abdul Aziz Al Ghurair School of Advanced Computing (ASAC), Amman (Jordan)</h3>
                        <p>Sep 2019 - May 2020</p>
                        <i className='fa fa-angle-down'></i>
                        <button className='down btn__back'>back</button>
                    </div>
                    <div className='edu-details'>
                        <button className='up btn__back'>back</button>
                        <i className='fa fa-angle-up'></i>
                        <h2>B.Sc Electrical Power Engineering</h2>
                        <h3>Tafilah Technical University</h3>
                        <p>Sep 2019 - May 2020</p>
                    </div>
                </div>

                <button className='btn btn__exp'>experience</button>
                <div className='card exp'>
                    <div className=''>
                        <h2>Marketing and Design Engineer</h2>
                        <h3>Future Energy Jo</h3>
                        <p>Dec 2015 - Dec 2016</p>
                    </div>

                    <div className=''>
                        <h2>Trainee. Scientific laboratory Technician</h2>
                        <h3>Tafilah Technical University</h3>
                        <p>Jan 2018 - Dec 2018</p>
                    </div>
                </div>

                <button className='btn btn__skill'>skills</button>
                <div className='card skill'>
                    <ul className='pro'>
                        <li>html5</li>
                        <li>css3</li>
                        <li>es6</li>
                        <li>jquery</li>
                        <li>postgress sql</li>
                        <li>node.js</li>
                        <li>mongoDB</li>
                        <li>react.js</li>
                        <li>redux</li>
                        <li>react hooks</li>
                    </ul>
                    <ul className='personal'>
                        <li>Hard working & multi-tasking</li>
                        <li>Leadership and high communication skills</li>
                        <li>Positive attitude</li>
                        <li>Ability to adapt and learn new technology</li>
                        <li>Confident problem solver and highly motivated individual</li>
                    </ul>
                </div>
            </div>
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