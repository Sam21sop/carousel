import React from "react";
import Slider from "react-slick";
import data from "../data/data";
import Card from "./Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ThirdVarient = () => {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <div className="slider-container">
            <Slider {...settings}>
                {
                    data.map((user, index) => (
                        <div key={index}  className="sm:px-4 sm:py-6 px-4 py-4">
                            <Card data={user} />
                        </div>
                    ))
                }
            </Slider>
        </div>
    );
}

export default ThirdVarient