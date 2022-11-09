import React from "react";
import person from '../../assets2/carousel-2.jpg'
// import parts from '../../assets/images/about_us/parts.jpg'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const About = () => {
  return (
    <div className="hero my-20">
      <div className="hero-content flex-col lg:flex-row">
        <div className="relative w-1/2">
        <PhotoProvider>
          <PhotoView src={person}>
            <img style={{cursor:"pointer"}} src={person} alt="" />
          </PhotoView>
        </PhotoProvider>
        {/* <img
          src={person}
          className="w-4/5 rounded-lg shadow-2xl" alt='img'
        /> */}
        <img
          // src={parts}
          className="w-3/5 right-5 top-2/4 absolute rounded-lg shadow-2xl" alt=""
        />
        </div>
        <div className="w-1/2 mx-5">
            <h6 className="font-bold text-orange-700">About Us</h6>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            We are Qulified cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary bg-orange">Get More Info!</button>
        </div>
      </div>
    </div>
  );
};

export default About;
