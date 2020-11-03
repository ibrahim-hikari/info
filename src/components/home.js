import React, { useEffect } from 'react';

export default function Home(props) {

    useEffect(() => {
        function calcVH() {
            var vH = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
            document.querySelector('.home').setAttribute('style', 'height:' + vH + 'px;');
            // console.log('vh', vH);
        }

        calcVH();
        window.addEventListener('onorientationchange', calcVH, true);
    }, [])
    return (
        <section className='home'>
            <div className='intro'>
                <p className=''>
                    Welcome to my humble PORTFOLIO
                </p>
            </div>
            <div className='backgrounnd-image'></div>
        </section>
    )
}