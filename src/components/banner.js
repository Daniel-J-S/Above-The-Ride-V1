import React from 'react';
import Slider from 'react-slick';
import Img from 'gatsby-image';
import { Link } from 'gatsby';



export default function Banner ({ bannerData }) {
    const settings = {
      dots: false,
      speed: 3500,
      infinite: bannerData.images.length > 1,
      autoplay: bannerData.images.length > 1,
      autoplaySpeed: 5000,
      slidesToShow: bannerData.images.length,
      slidesToScroll: bannerData.images.length
    };

    /*

    TODO: consider using this later

    const messages = {
      0: 'Holiday Closure: Dec 25th, 26th & 27th',
      1: 'Vacation Closure: Jan 1st - 10th',
    }

    const handleTick = () => {
      setMessage(m => ++m % 2)
    }
    
    useEffect(() => {
      messageRef.current = handleTick;
    });
    
    useEffect(() => {
      const timerId = setInterval(() => {
        messageRef.current();
      }, 15000);
      return () => {
        clearInterval(timerId)
      }
    }, []);

    <div className="scroll-container">
      <p className="scroll-text" key={message}>
        <small>
          {messages[message]}
        </small>
      </p>
    </div>

    */

    return (
      <div className="slider-section">
        <Slider {...settings}>
            <div className="item">
              <div className="site-Banner">
                {bannerData.images.map((image, i) => (
                  <Img key={i} fluid={image.fluid} />
                ))}
                <div className="Banner-details">
                  <div>
                    <h1>{bannerData.title}</h1>
                    <Link to="/store">{bannerData.buttonLink}</Link>
                  </div>
                </div>
              </div>
            </div>
        </Slider>
      </div>
  );
}