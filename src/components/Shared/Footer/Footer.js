import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInfoCircle} from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
    return (
        <footer className="py-5 bg-secondary mt-5">
            <div className="row text-white container-fluid">
                <div className="col-md-6 d-flex justify-content-center p-3 my-3">
                    <a className="px-3" href="https://www.facebook.com/" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={faFacebook} size='3x' color='white' /></a>
                    <a className="px-3" href="https://www.youtube.com/" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={faYoutube} size='3x' color='red' /></a>
                    <a className="px-3" href="https://twitter.com/" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={faTwitter} size='3x' color='#1DA1F2' /></a>
                </div>
                <div className="col-md-6 d-flex justify-content-center align-items-center my-3">
                    <div>
                        <h5><FontAwesomeIcon icon={faInfoCircle}/> Contact Info</h5>
                        <p>10/120 Dhaka Cantonment Dhaka-1206</p>
                        <p>Email: saikat.fix@gmail.com</p>
                        <p>Phone: 01111111111</p>
                    </div>
                </div>
            </div>
            <div className="text-center text-white">
                <p>Expert-Electrician | &copy; {(new Date()).getFullYear()} --- All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;