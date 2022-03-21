/* This React Component manages the layout and display of the images and questions for the quiz */
import React from 'react';

export const ImageLayout: React.FC = () => {
    const imageUrl: string = require('./Eday.jpg');

    return(
        <div>
            <img alt='Two Engineers' style={{width: 100, height: 100 }} src={imageUrl}></img>
        </div>
    );
}
