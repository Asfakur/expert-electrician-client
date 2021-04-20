import React from 'react';
import './HeaderMain.css';

const HeaderMain = () => {
    return (
        <div className="top-banner d-flex align-items-center justify-content-center">
            <div className="text-center">
                <h1>Welcome to <span style={{ color: '#ffc107' }}>Expert Electrician</span></h1>
                <p>We provide your desired electric service at affordable prices</p>
            </div>

        </div>
    );
};

export default HeaderMain;