import React from "react";
import { Carousel } from "react-bootstrap";

const Slider = () => {
  return (
    <>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src="https://i.ibb.co/k1RY0rH/slider-1.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>TEAM WORKOUTS</h3>

            <p>
              Full-body workouts designed to build strength and endurance, using
              the energy of the group and the expertise of the certified
              personal trainer to maximize your results.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src="https://i.ibb.co/yp8LB74/slider-2.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>PERSONAL TRAINING</h3>
            <p>
              One-on-one personalized workouts with a certified personal trainer
              designed to make you stronger from the inside out.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src="https://i.ibb.co/9bjdWFj/slider-3.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>FITNESS CONSULTATION</h3>

            <p>
              Through a short survey, conversation and a movement assessment,
              our team will prescribe the perfect program to get you started and
              on track to meet your fitness goals.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Slider;
