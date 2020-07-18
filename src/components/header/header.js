import React, { useEffect } from 'react';
import $ from 'jquery';

import './header.scss';
import always from '../assets/always.mp4'

function Header() {

    useEffect(() => {
        let audio = document.querySelector('audio');
        $('.fa-music').click(function (e) {
            e.preventDefault();
            if (audio.muted === false) {
                $('audio').prop('muted', true);
                $('.fa-music::after').css('disply', 'unset');
                
            } else {
                $('audio').prop('muted', false);
                $('.fa-music::after').css('disply', 'none');
            }
        });
    }, []);

    return (
        <header>
            <div className='logo'>
                <h1>Naseem Izzat</h1>
                <h3>curriculum vitae</h3>
            </div>
            <i className='fa fa-music'></i>
            <audio src={always} loop autoPlay ></audio>
        </header>
    )
}

export default Header;