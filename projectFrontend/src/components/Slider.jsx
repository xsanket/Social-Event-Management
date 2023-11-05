import React, { useRef } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../images/BeachCleaning.jpg';
import img2 from '../images/bloodDonation.jpg';
import img3 from '../images/marathon.jpg';
import '../App.css';

function Slider() {
  const carouselRef = useRef(null);

  const handlePrevClick = () => {
    if (carouselRef.current) {
      carouselRef.current.prev();
    }
  };

  const handleNextClick = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  return (
    <div className="ios-carousel" style={{ marginTop: '80px' }}>
      <Carousel data-bs-theme="dark" ref={carouselRef}>
        <Carousel.Item>
          <img src={img1} className="d-block w-100" alt="First slide" />
          <Carousel.Caption>
            <h5 className="ios-carousel-title">Beach Cleaning Event</h5>
            <p className="ios-carousel-description text-center" style={{  fontWeight: 'bold' }}>
              Our organization recently hosted a Beach Cleaning Event, promoting environmental responsibility and community engagement.
              Participants gathered to remove litter and plastic waste from our beautiful shoreline, fostering a cleaner, healthier environment for all. The event's success exemplified the positive impact of collective action in preserving our coastal ecosystems.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={img2} className="d-block w-100" alt="Second slide" />
          <Carousel.Caption>
            <h5 className="ios-carousel-title">Blood Donation Camp</h5>
            <p className="ios-carousel-description" style={{  fontWeight: 'bold' }}>
              Our organization organized a Blood Donation Camp, saving lives through voluntary blood contributions.
              Community members generously donated, helping those in need and reinforcing the spirit of altruism. The event showcased the power of compassion and solidarity in supporting our healthcare system and those facing medical challenges.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={img3} className="d-block w-100" alt="Third slide" />
          <Carousel.Caption>
            <h5 className="ios-carousel-title">Chhichore Marathon</h5>
            <p className="ios-carousel-description" style={{  fontWeight: 'bold' }}>
              Our organization recently hosted a Marathon Event, promoting fitness and community spirit.
              Participants of all ages joined, emphasizing health and unity. The event not only encouraged physical well-being but also raised funds for charitable causes, showcasing the positive impact of collective efforts on both individual health and community support.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="custom-carousel-controls">
        <button className="custom-carousel-control prev" onClick={handlePrevClick}>
          Previous
        </button>
        <button className="custom-carousel-control next" onClick={handleNextClick}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Slider;
