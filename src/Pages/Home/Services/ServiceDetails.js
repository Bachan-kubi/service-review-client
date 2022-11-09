import React from "react";
import { useLoaderData } from "react-router-dom";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceDetails = () => {
  const { description, title, price, img } = useLoaderData();
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid cols-2 mt-4  text-orange-900'>
        <div>
        <h3 className="text-center text-3xl p-3">{title}</h3>
        <h5 className="text-center"><span className="text-2xl">Price</span>: ${price}</h5>
            <h3>{description}</h3>
        </div>
        {/* <div className='artboard artboard-horizontal phone-2'>
            <img className="w-3/4 p-3 rounded-md" src={img} alt="service-img" />
        </div> */}
        <div className='artboard artboard-horizontal phone-2'>
            <PhotoProvider>
                <PhotoView src={img}>
                <img style={{cursor:"pointer"}} className="w-3/4 p-3 rounded-md" src={img} alt="service-img" />
                </PhotoView>
            </PhotoProvider>
            {/* <img className="w-3/4 p-3 rounded-md" src={img} alt="service-img" /> */}
        </div>
    </div>
  );
};

export default ServiceDetails;
