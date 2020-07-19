import React from 'react';
import { Footer } from 'rsuite';
import PropTypes from 'prop-types';

const FooterCustom = ({ copyrightMessage }) => (
    <Footer>
        <div
            style={{
                display: 'flex',
                height: 80,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <p style={{ textAlign: 'center' }}>{copyrightMessage}</p>
        </div>
    </Footer>
);

FooterCustom.propTypes = {
    copyrightMessage: PropTypes.string.isRequired,
};

export default FooterCustom;
