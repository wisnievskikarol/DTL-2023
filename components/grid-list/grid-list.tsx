import React from "react";

const GridList = () => {
  return (
    <div
      id="OurStory"
      className="py-9 px-4 md:py-12 md:px-6 lg:py-16 lg:px-20 2xl:container 2xl:mx-auto"
    >
      <h1 className="pb-4 text-3xl font-bold leading-9 text-gray-100 lg:text-4xl">
        Usługi
      </h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-200 p-4">
          {/*<Image src="/image2.jpg" alt="Sample image 2" width={300} height={200} />*/}
          <img
            className="h-full w-full"
            src="https://i.ibb.co/FhgPJt8/Rectangle-116.png"
            alt="A group of People"
          />
          <p className="mt-2">
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="bg-gray-200 p-4">
          {/*<Image src="/image3.jpg" alt="Sample image 3" width={300} height={200} />*/}
          <img
            className="h-full w-full"
            src="https://i.ibb.co/FhgPJt8/Rectangle-116.png"
            alt="A group of People"
          />
          <p className="mt-2">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="bg-gray-200 p-4">
          {/*<Image src="/image4.jpg" alt="Sample image 4" width={300} height={200} />*/}
          <img
            className="h-full w-full"
            src="https://i.ibb.co/FhgPJt8/Rectangle-116.png"
            alt="A group of People"
          />
          <p className="mt-2">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
        <div className="bg-gray-200 p-4">
          {/*<Image src="/image5.jpg" alt="Sample image 5" width={300} height={200} />*/}
          <img
            className="h-full w-full"
            src="https://i.ibb.co/FhgPJt8/Rectangle-116.png"
            alt="A group of People"
          />
          <p className="mt-2">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="bg-gray-200 p-4">
          {/*<Image src="/image6.jpg" alt="Sample image 6" width={300} height={200} />*/}
          <img
            className="h-full w-full"
            src="https://i.ibb.co/FhgPJt8/Rectangle-116.png"
            alt="A group of People"
          />
          <p className="mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GridList;
