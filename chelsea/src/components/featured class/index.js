import React from "react";

const FeaturedClass = () => {
  return (
    <section className="pt-[50px] pb-[50px] lg:pt-[122px] lg:pb-[134px] item-center grid gap-y-[32px] grid-cols-1 lg:gap-y-0 lg:gap-x-[42px] lg:grid-cols-2 bg-black-100 bg-cover bg-center w-full">
      <div className="justify-self-center">
        <div className="bg-cobalt-100 h-[500px] md:w-[700px] lg:w-[600px] w-full"></div>
        <div className="flex justify-end items-center relative mt-[-10%]">
          <div className="grid grid-cols-1 justify-left bg-black-100 w-[500px] p-6">
            <p class="label--largeBold text-left text-sky-100">
              Fitness on-demand
            </p>
            <h4 class="mt-4 lg:mt-6 text-white text-left">
              Something For Everyone
            </h4>
            <div class="flex text-left items-center space-x-4 relative border--main group cursor-pointer xl:pr-[50px] mt-[30.5px] lg:mt-[34.5px]">
              <div class="border--increase "></div>
              <a
                href="/"
                class="pl-12 label--bold text-white group-hover:text-sky-100"
              >
                watch now
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 justify-left pb-[41.5px] lg:pb-[129.5px] ml-20">
            <p class="label--largeBold pt-16 lg:pt-[128px] text-left text-sky-100">
              Featured
            </p>
            <h2 class="mt-4 lg:mt-6 text-white text-left">
              Your Favourite Classes, Anywhere
            </h2>
            <div class="lead--large mt-5 wow fadeInUp lg:mt-8 max-w-[448px] text-white text-left">
              Take the club with you wherever you go with on-demand classes and
              training tutorials.
            </div>
            <div class="flex text-left  wow fadeInUp items-center space-x-4 relative border--main group cursor-pointer xl:pr-[50px] mt-[30.5px] lg:mt-[34.5px]">
              <div class="border--increase "></div>
              <a
                href="/"
                class="pl-12  transition-all duration-300 label--bold text-white group-hover:text-sky-100"
              >
                learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedClass;
