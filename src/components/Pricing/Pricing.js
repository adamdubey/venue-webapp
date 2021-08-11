import React from 'react';
import ReusableButton from '../Utils/ReusableButton';
import { Zoom } from 'react-awesome-reveal';

const Pricing = () => {
    const priceState = {
        prices: [10, 50, 250],
        position: ['Street', 'Main Floor', 'Balcony'],
        description: [
            'You get to stand in the street and watch the show',
            'Hey! Look at you in the building!',
            'Someone knows how to have a good time'
        ],
        linkto:['https://github.com/adamdubey/venue-webapp', 'https://github.com/adamdubey/venue-webapp', 'https://github.com/adamdubey/venue-webapp'],
        delay: [500, 0, 500]
    }

    const showPricingBoxes = () => (
        priceState.prices.map((box, i) => (
            <Zoom key={i} className="pricing_item" delay={priceState.delay[i]}>
                <div className="pricing_inner_wrapper">
                    <div className="pricing_title">
                        <span>${priceState.prices[i]}</span>
                        <span>{priceState.position[i]}</span>
                    </div>
                    <div className="pricing_description">
                        {priceState.description[i]}
                    </div>
                    <div className="pricing_buttons">
                        <ReusableButton
                            text="Purchase"
                            style={{
                                color: '#FFFFFF'
                            }}
                            link={priceState.linkto[i]}
                        />
                    </div>
                </div>
            </Zoom>
        ))
    )
    

    return(
        <div className="bck_black">
            <div className="center_wrapper pricing_section">
                <h2>Pricing Tiers</h2>
                <div className="pricing_wrapper">
                    { showPricingBoxes() }
                </div>
            </div>
        </div>
    )
}

export default Pricing;
