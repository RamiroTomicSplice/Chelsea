import React from "react";

const TwoColumn = () => {
  return (
    <section className="pt-[80px] lg:pt-[122px] pb-[80px] lg:pb-[134px] item-center grid gap-y-[32px] grid-cols-1 lg:gap-y-0 lg:gap-x-[42px] lg:grid-cols-2 bg-areYouReadyImg bg-cover bg-center w-full">
      <div className="flex justify-center items-center">
        <h2 className="text-center text text-40 leading-48 md:text-72 md:leading-80 text-white">
          Are you ready?
        </h2>
      </div>
      <div className="flex justify-left flex-col items-center px-3 space-y-4 lg:space-y-0 lg:px-0 lg:flex-row lg:mt-0">
        <div className="lg:w-[50%] xl:w-[33.333%] min-w-[288px] lg:min-w-0 lg:px-[1.7857%]">
          <a
            href="/"
            className="font-united font-600 uppercase text-12 leading-20 rounded-48 inline-block  transition-all duration-300 text-center cursor-pointer text-white bg-black-100 hover:bg-black-gray pt-[15px] pb-[13px] w-full h-full"
          >
            Become A Member
          </a>
        </div>
        <div className="lg:w-[50%] xl:w-[33.333%] min-w-[288px] lg:min-w-0 lg:px-[1.7857%]">
          <a
            href="/"
            className="font-united font-600 uppercase text-12 leading-20 rounded-48 inline-block  transition-all duration-300 text-center cursor-pointer text-black-100 bg-sky-100 hover:bg-sky-shade  pt-[15px] pb-[13px] w-full h-full"
          >
            Schedule A Tour
          </a>
        </div>
      </div>
    </section>
  );
};

export default TwoColumn;
