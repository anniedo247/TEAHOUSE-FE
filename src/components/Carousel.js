import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import { Container } from "react-bootstrap";

const Carousel = () => {
  const content = [
    {
      image:
        "https://res.cloudinary.com/dbxawxez9/image/upload/v1617119784/teaHouse/photo-1508533524178-76d7d51eb437_u54yfw.jpg",
      title: "THIS IS TEALICIOUS",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore. magna aliqua. Ut enim ad minim veniam.",
    },
    {
      image:
        "https://res.cloudinary.com/dbxawxez9/image/upload/v1617121600/teaHouse/sixteen-miles-out-IGI9o4B739U-unsplash_zu7cbp.png",
      title: "HAPPINESS IN A CUP",
      description:
        "A cup of tea a day keeps worries away. Find your favorite flavors and start a healthy morning routine with the best selection of tea plants from East Asia.",
    },

    {
      image:
        "https://res.cloudinary.com/dbxawxez9/image/upload/v1617121845/teaHouse/photo-1610643625267-aee6dae3ca22_uuyjqe.png",
      title: "LOVELY HEALTHY HERBS",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore. magna aliqua. Ut enim ad minim veniam.",
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
            <div className="w3-container w3-center w3-animate-zoom ">
              <Container style={{width:"50%",marginLeft:"0", marginTop:"200px"}}>
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              </Container>
              
            </div>
          </div>
        ))}
      </Slider>
      
    </div>
  );
};

export default Carousel;
