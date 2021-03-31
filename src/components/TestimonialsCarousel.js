import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faQuoteLeft} from "@fortawesome/free-solid-svg-icons"

const TestimonialsCarousel = () => {
  const content = [
    {
      image:
        "https://wallpapercave.com/wp/wp3469892.jpg",
      name: "YVONNE, VIC",
      description:
      "I received my order yesterday. I just wanted to say I was impressed at how well packed and organized it was. I will be ordering from you again. Thank you."    },
    {
      image:
        "https://wallpapercave.com/wp/wp3469892.jpg",
      name: "ASHLEY.",
      description:
        "I can honestly say I was pleasantly surprised, TeaHouse makes a beautiful cup of tea and I did find it made me feel relaxed after a stressful day at work.",
    },

    {
      image:
        "https://wallpapercave.com/wp/wp3469892.jpg",
      name: "ANNIE.DO",
      description:
        "I’ve never been much of a tea drinker but since my mum made me try the green tea plus I’ve been hooked. Thanks TeaHouse for the amazing product!",
    },
  ];
  return (
    <div>
      <Slider fade autoplay={3000}>
        {content.map((item, index) => (
          <div
            key={index}
            style={{
              background: `url('${item.image}') no-repeat center center`
            }}
          >
            <div className="w3-container text-center w3-animate-zoom ">
              <Container style={{width:"50%", marginTop:"100px"}}>
              <h1><FontAwesomeIcon icon={faQuoteLeft} color="gray"/></h1>
              <span style={{fontFamily:"'Montserrat', sans-serif",fontSize:"1.7rem",fontWeight:"400"}}>{item.description}</span>
              <h5 style={{fontFamily:"'Montserrat', sans-serif",fontSize:"19px",fontWeight:"600",marginTop:"20px"}}>{item.name}</h5>
              
              </Container>
              
            </div>
          </div>
        ))}
      </Slider>
      
    </div>
  );
};

export default TestimonialsCarousel;
