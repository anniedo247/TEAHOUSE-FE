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
        "We offer only full leaf teas dried by the sun with love and care. Full leaf teas, select herbs, real fruit pieces, essential oils and all natural flavors. Never tea fanning's and dust.",
    },
    {
      image:
        "https://res.cloudinary.com/dbxawxez9/image/upload/v1617639547/teaHouse/photo-1528696892704-5e1122852276_b1oyjn.jpg",
      title: "HAPPINESS IN A CUP",
      description:
        "A cup of tea a day keeps worries away. Find your favorite flavors and start a healthy morning routine with the best selection of tea plants from East Asia.",
    },

    {
      image:
        "https://res.cloudinary.com/dbxawxez9/image/upload/v1617691832/teaHouse/photo-1579042400781-10af46e0d081_bc1py3.jpg",
      title: "LOVELY HEALTHY HERBS",
      description:
        "Herbal teas have been in the public eye as a typical tea and not a tisane for centuries. Tisanes are a beverage that is both caffeine free and made without any traditional tea leaves. Instead, they contain fresh or dried flowers, leaves, fruits, seeds and/or herbs that are steeped in boiling water.",
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
              <Container style={{width:"50%", marginTop:"200px",marginLeft:"40px"}}>
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
