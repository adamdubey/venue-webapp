import React from 'react';

const Location = () => {
    return(
        <div className="location_wrapper">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.3914208720234!2d-122.39332408486474!3d37.780865719582344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580780bb8bf29%3A0x99bc68e4b37588d4!2sSlice%20House%20by%20Tony%20Gemignani!5e0!3m2!1sen!2sus!4v1628629861228!5m2!1sen!2sus" 
                width="100%" 
                height="500px" 
                frameBorder="0" 
                title="Google Maps"
                allowFullScreen
            ></iframe>
            <div className="location_tag">
                <div>
                    Location
                </div>
            </div>
        </div>
    )
}

export default Location;
