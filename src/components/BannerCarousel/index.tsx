import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export const BannerCarousel = () => {
    
        return (
            <Carousel  autoPlay={true} showThumbs={false} showStatus={false} infiniteLoop={true}>
                <div>
                    <img src="/images/banner2.png" />                    
                </div>
                <div>
                    <img src="/images/banner3.png" />                    
                </div>
                <div>
                    <img src="/images/banner2.png" />                    
                </div>
            </Carousel>
        )
    
}


