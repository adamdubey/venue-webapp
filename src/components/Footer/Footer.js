import React from 'react';
import { Fade } from 'react-awesome-reveal';

const Footer = () => {
    return (
        <footer className="bck_red">
            <Fade triggerOnce>
                <div className="font_righteous footer_logo_venue">Venue</div>
                <div className="footer_copyright">Venue 2021 - all rights reserved</div>
            </Fade>
        </footer>
    )
}

export default Footer;
