import React from "react";
import Image from "next/image";

const Card = ({ title, description, image }) => {
  return (
    <div className="max-w-sm"> 
    <div className="mb-3 h-60 text-center bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}></div>
       <a href="#">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-100 dark:text-white">
          {title}
        </h5>
      </a>
      <div className="mb-3 text-center font-normal text-gray-500 dark:text-gray-400" >
        {description}
      </div>
    </div>
  );
};

export default Card;
