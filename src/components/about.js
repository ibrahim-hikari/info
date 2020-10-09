import React, { useEffect } from 'react';

export default function About(props) {

    useEffect(() => {
        function calcVH() {
            var vH = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
            document.querySelector('.about').setAttribute('style', 'height:' + vH + 'px;');
            // console.log('vh', vH);
        }

        calcVH();
        window.addEventListener('orientationchange', calcVH, true);
    }, [])

    return (
        <section className='about'>
            <div className='header'>
                about <span>me</span>
            </div>
            <div className='content'>

            </div>
        </section>
    )
}