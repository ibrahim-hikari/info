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
    }, []);

    return (
        <>
            <section className='clock-box'>
                <h2>THE TIME NOW IS</h2>
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
            </section>
        </>
    )
}
