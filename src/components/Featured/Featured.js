import React from 'react';
import Carousel from '../Carousel/Carousel';
import Timer from '../Timer/Timer';

const Featured = () => {
    return (
        <div className="featured_container">
            <Carousel />
            <div className="artist_name">
                <div className="wrapper">
                    Ariana Grande
                </div>
            </div>
            <Timer />
        </div>
    )
}

export default Featured;
