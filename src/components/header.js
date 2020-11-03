import React from 'react';

const Header = (props) => {
    return (
        <header>
            <div className='logo__container'>
                <h1 className='logo'>
                    ibrahim <span>ajarmeh</span>
                </h1>
            </div>
            <nav className='main__nav'>
                <ul>
                    <li><a href='/#'>Home</a></li>
                    <li><a href='/#'>Projects</a></li>
                    <li><a href='/#'>Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;