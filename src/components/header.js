import React from 'react';

export default function Header(props) {
    return (
        <header>
            <h1 className='logo'>Naseem Izzat</h1>
            <nav className='main__nav'>
                <ul>
                    <li><a href='/#'>Home</a></li>
                    <li><a href='/#'>About</a></li>
                    <li><a href='/#'>Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}