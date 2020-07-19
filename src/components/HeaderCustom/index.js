import React from 'react';
import { Header } from 'rsuite';
import Lottie from 'lottie-react-web';
import JSON from '../../assets/Logo.json';

export default () => (
    <Header>
        <Lottie
            options={{
                animationData: JSON,
                loop: false,
                autoplay: true,
            }}
            height={300}
        />
    </Header>
);
