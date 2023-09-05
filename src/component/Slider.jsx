

import React, { useState } from 'react';


function Slider() {
    const [currentSlider, setCurrentSlider] = useState(true);

    function handlePrev() {
        setCurrentSlider(pre => !pre);
    }

    function handleNext() {
        setCurrentSlider(pre => !pre);
    }

    return (
        <div className="slider_area owl-carousel d-block" >

            {currentSlider ? <div className="single_slider slider_one">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="slider_content">
                                <h1>Dual Front Camera <br /> <strong>Canvas Gear</strong></h1>
                                <h3>get up to</h3>
                                <h2>30% off</h2>
                                <p>Upgrade every 12 months</p>
                                <a href="#">shop now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> :
                <div className="single_slider slider_two d-block">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-12">
                                <div className="slider_content">
                                    <h1><strong>Nx80 Wireless </strong> <br />Headphones </h1>
                                    <h3>get up to</h3>
                                    <h2>30% off</h2>
                                    <p>20.3 Megapixels plus 80 Megapixel</p>
                                    <a href="#">shop now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }



            <div className="owl-nav">
                <div className="owl-prev" onClick={() => handlePrev()}><i className="fa fa-angle-left"></i></div>
                <div className="owl-next" onClick={() => handleNext()}><i className="fa fa-angle-right"></i></div>
            </div>

            <div className="owl-dots">
                <div className={currentSlider ? "owl-dot active" : "owl-dot"}><span></span></div>
                <div className={!currentSlider ? "owl-dot active" : "owl-dot"}><span></span></div>
            </div>
        </div>

    )
}

export default Slider;