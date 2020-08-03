import React, { Component } from 'react';

import './Footer.scss';

class Footer extends Component {

    render() {
        return (
            <footer className="footer">
                <div className="footer__contents">
                    <a>ABOUT</a>
                    <a>CONTACT</a>
                    <a>INVESTORS</a>
                    <a>DEVELOPER</a>
                    <a>TERMS OF SERVICE</a>
                </div>
            </footer>
        )
    }
}

export default Footer;