import React from 'react';
import Slider from 'react-slick';
import Img from 'gatsby-image';
import { Link } from 'gatsby';



export default function Banner ({ BannerData }) {
    
    const settings = {
      dots: false,
      speed: 3500,
      infinite: false,
      autoplay: false,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1
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
          {BannerData.map((items, i) => (
            <div key={i} className="item">
              <div className="site-Banner">
                <Img fluid={items.node.image.fluid} />
                <div className="Banner-details">
                  <div>
                    <span className="sub-title">{items.node.subHeading}</span>
                    <h1>{items.node.title}</h1>
                    <Link to="/store">Shop Now</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
  );
}