import React, { useState } from 'react';
// mui
import { Typography, Box, Stack } from "@mui/material";
// carousel
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// components
import Title from './Title';
import Paragraph from './Paragraph';
import Navbar from './navbar';
import WhatsAppFloatingButton from './WhatsAppFloatingButton';
import Footer from './footer';

export const Gallery = () => {
    
    const [currentIndex, setCurrentIndex] = useState();

    const imageData = [
        {
            alt: 'image1',
            url: 'https://i.imgur.com/KLLhpmR.jpeg'
        },
        {
            alt: 'image2',
            url: 'https://i.imgur.com/BasLo35.jpeg'
        },
        {
            alt: "image3",
            url: 'https://i.imgur.com/sizmccr.jpeg'
        },
        {
            alt: "image4",
            url: 'https://i.imgur.com/gvp2hcr.jpeg'
        },
        {
            alt: "image5",
            url: 'https://i.imgur.com/s0L3tkC.jpeg'
        },
    ];
  
    const renderSlides = imageData.map((image) => (
        <div key={image.alt}>
            <img src={image.url} alt={image.alt} />
        </div>
    ));

    const handleChange = (index) => {
        setCurrentIndex(index);
    };

    return (
        <Stack
            direction="column"
            justifyContent="space-between"
            alignItems="center"
            sx={{ minHeight: '100vh', display: 'flex',  }}
        >
            
            <Box sx={{ paddingBottom: 15 , width: '100%', mt: 'auto' }}>
            <Navbar />
            </Box>
            <Box
                component="section"
                sx={{ paddingtop:30 , paddingBottom: 3, flexGrow: 1,  }}
            >
                <Title text="evenement - infermiere 2024-06-02" textAlign="center" />
                <Paragraph
                    text={
                        'We have more than 5000 reviews and our customers trust in our quality products and services. If you are interested, contact us.'
                    }
                    maxWidth="sm"
                    mx="auto"
                    textAlign="center"
                />
            </Box>
            
            <Box sx={{ maxWidth: 700, width: '100%' }}>
                <Carousel
                    centerSlidePercentage={40}
                    thumbWidth={180}
                    dynamicHeight={false}
                    centerMode={false}
                    showArrows={false}
                    autoPlay={false}
                    infiniteLoop={true}
                    selectedItem={imageData[currentIndex]}
                    onChange={handleChange}
                    className="carousel-container"
                >
                    {renderSlides}
                </Carousel>
            </Box>
            <WhatsAppFloatingButton />
            <Box sx={{ width: '100%', mt: 'auto' }}>
                <Footer />
            </Box>
        </Stack>
    );
};

export default Gallery;
