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
        <>
            <section className='home'>
                <img className='background-image' src={require('../assets/home1.jpg')} />
                <div className='intro'>
                    <h2>
                        Hi, I'm Naseem Izzat, 
                        <span>Welcome to My Portfolio</span>
                    </h2>
                    <button>CLICK ME</button>
                </div>
            </section>
        </>
    )
}