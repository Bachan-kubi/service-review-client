import React from "react";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const AllServicesCard = ({ allService }) => {
  const { title, price, description, img } = allService;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      {/* <figure className="px-10 pt-10 w-96">
        <img
          src={img}
          alt="service pic"
          className="rounded-xl"
        />
      </figure> */}
      <PhotoProvider>
        <PhotoView src={img}>
          <img style={{cursor:"pointer"}} src={img} alt="" />
        </PhotoView>
      </PhotoProvider>
      {/* <figure className="px-10 pt-10 w-96">
        <img
          src={img}
          alt="service pic"
          className="rounded-xl"
        />
      </figure> */}
      <div className="card-body items-center text-center">
        <h2 className="card-title">Service Name: {title}</h2>
        <h2 className="card-title">Price: {price}</h2>
        <p>{description}</p>
        {/* <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div> */}
      </div>
    </div>
  );
};

export default AllServicesCard;
