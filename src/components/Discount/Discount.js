import React, { useState, useEffect } from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import ReusableButton from '../Utils/ReusableButton';

const Discount = () => {
    const endPercentage = 40;
    const [startPercentage, setStartPercentage] = useState(0);

    const percentage = () => {
        if(startPercentage < endPercentage) {
            setStartPercentage(prevCount => prevCount + 1)
        }
    }

    useEffect(() => {
        if(startPercentage > 0 && startPercentage < endPercentage){
            setTimeout(() => {
                setStartPercentage(prevCount => prevCount + 1)
            }, endPercentage)
        }
    }, [startPercentage])

    return (
        <div className="center_wrapper">
            <div className="discount_wrapper">
                <Fade
                    onVisibilityChange={ (inView) => {
                        if(inView){
                            percentage()
                        }
                    }}
                >
                    <div className="discount_percentage">
                        <span>{startPercentage}%</span>
                        <span>Off</span>
                    </div>
                </Fade>

                <Slide right>
                    <div className="discount_description">
                        <h3>Early Bird Special! Get your tickets before 30 October!</h3>
                        <p>Hurry - While Supplies Last! Limit 2 per Customer.</p>

                        <ReusableButton 
                            text="Purchase Tickets"
                            link="https://github.com/adamdubey/venue-webapp"
                            size="small"
                            style={{
                                background: '#FFA800',
                                color: '#FFFFFF'
                            }}
                            iconTicket={true}
                        />
                    </div>

                </Slide>

            </div>

        </div>
    )
}

export default Discount;
