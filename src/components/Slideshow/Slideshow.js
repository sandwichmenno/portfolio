import React from "react";
import Carousel from "framer-motion-carousel";

const Slideshow = ({ images }) => (
    <Carousel>
        {images.map((image, i) => (
            <img
                draggable="true"
                src={image}
                key={i}
                width="100%"
                alt=""
            />
        ))}
    </Carousel>
)

export default Slideshow;
