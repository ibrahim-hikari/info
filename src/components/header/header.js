import React, { useEffect } from 'react';
import $ from 'jquery';

import './header.scss';
import always from '../assets/always.mp4'

function Header() {

    useEffect(() => {
        let audio = document.querySelector('audio');
        $('.fa-volume-up').click(function (e) {
            e.preventDefault();
            $('audio').prop('muted', true);
            // $('iframe').prop('muted', true);
            $('.fa-volume-up').css('disply', 'none');
            $('.fa-volume-mute').css('disply', 'unset');
        });

        $('.fa-volume-mute').click(function (e) {
            e.preventDefault();
            $('audio').prop('muted', false);
            // $('iframe').prop('muted', false);
            $('.fa-volume-up').css('disply', 'unset');
            $('.fa-volume-mute').css('disply', 'none');
        });


        let isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
        if (!isChrome) {
            console.log('It is not Chrome')
            // $('#playAudio').remove();
        } else {
            // $('#iframeAudio').remove();
            console.log('It is Chrome')
        }
        console.log('hello', isChrome)
    }, []);

    const muteFunc = () => {
        let audio = document.getElementById('playAudio');
        audio.setAttribute('mute', true);

        $('#mute-icon').fadeOut(500);
        $('#unmute-icon').fadeIn(500);
    }
    
    const unMuteFunc = () => {
        let audio = document.getElementById('playAudio')
        audio.setAttribute('mute', false)
        
        $('#mute-icon').fadeIn(500);
        $('#unmute-icon').fadeOut(500);
    }

    return (
        <header>
            <div className='logo'>
                <h1>Naseem Izzat</h1>
                <h3>curriculum vitae</h3>
            </div>
            <i className='fas fa-volume-up' id='mute-icon' onClick={muteFunc}></i>
            <i className='fas fa-volume-mute' id='unmute-icon' onClick={unMuteFunc}></i>
            <audio src={always} loop autoPlay id='playAudio' ></audio>
            {/* <iframe src={always} allow='autoplay' style={{ display: 'none' }} id='iframeAudio'></iframe> */}
        </header>
    )
}

export default Header;