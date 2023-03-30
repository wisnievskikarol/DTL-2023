import React from "react";
import Image from "next/image";

const Card = ({
  ImageURL,
  title,
  description,
}: {
  ImageURL?: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="max-w-sm rounded-lg ">
      {/*<Image*/}
      {/*  src={ImageURL}*/}
      {/*  alt="Precedent logo"*/}
      {/*  width="200"*/}
      {/*  height="50"*/}
      {/*  className="rounded-sm  "*/}
      {/*/>*/}
      <a href="#">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-100 dark:text-white">
          {title}
        </h5>
      </a>
      <p className="mb-3 text-justify font-normal text-gray-500 dark:text-gray-400">
        {description}
      </p>
      {/*<a*/}
      {/*  href="#"*/}
      {/*  className="inline-flex items-center text-blue-600 hover:underline"*/}
      {/*>*/}
      {/*  See our guideline*/}
      {/*  <svg*/}
      {/*    className="ml-2 h-5 w-5"*/}
      {/*    fill="currentColor"*/}
      {/*    viewBox="0 0 20 20"*/}
      {/*    xmlns="http://www.w3.org/2000/svg"*/}
      {/*  >*/}
      {/*    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>*/}
      {/*    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>*/}
      {/*  </svg>*/}
      {/*</a>*/}
    </div>
  );
};

export default Card;
