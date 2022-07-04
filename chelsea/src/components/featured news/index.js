import React from "react";

const FeaturedNews = () => {
  return (
    <>
      <section className="wrapper pt-[100px] lg:pt-[200px] pb-[50px] lg:pb-[134px] item-center grid gap-y-[32px] grid-cols-1 lg:grid-cols-2 lg:gap-y-0 lg:gap-x-[42px] bg-white bg-cover bg-center w-full">
        <div className="flex flex-col px-6 lg:px-28 text-left">
          <p className="label--largeBold text-cobalt-100">Featured News</p>
          <h2 className="mt-4 text-black-100 lg:mt-6">
            "Strong For Summer" Series
          </h2>
          <div className="mt-5 lead--large text-black-100 lg:mt-8">
            Get Strong for Summer and join us for free, weekly outdoor group
            fitness classes at local public parks and community spaces in
            Manhattan, Brooklyn and Connecticut from May through September!
            Members and non-members are all welcome to join.
          </div>
        </div>

        <div>
          <div className="bg-featuredNewsImg bg-cover bg-no-repeat h-[500px] w-full"></div>
          <div className="flex justify-end items-center relative mt-[-10%] w-full">
            <div className="grid grid-cols-1 justify-left bg-white w-[80%] p-6">
              <h4 class="text-black-100 text-left">
                Our outdoor, public group fitness series has launched throughout
                New York and Connecticut.
              </h4>
              <div class="flex text-left  items-center space-x-4 relative border--main group cursor-pointer xl:pr-[50px] mt-[30.5px] lg:mt-[34.5px]">
                <div class="border--increase "></div>
                <a
                  href="/"
                  class="pl-12 label--bold text-black-100 group-hover:text-sky-100"
                >
                  learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="wrapper lg:pb-[134px] item-center grid gap-y-[32px] grid-cols-1 lg:gap-y-0 lg:gap-x-[42px] lg:grid-cols-2 bg-white bg-cover bg-center w-full">
        <div>
          <div className="bg-featuredNewsImg bg-cover bg-no-repeat h-[500px] w-full"></div>
          <div className="flex justify-start items-center relative mt-[-10%] w-full">
            <div className="grid grid-cols-1 justify-left bg-white w-[80%] p-6">
              <p className="label--bold text-cobalt-100 text-left">Safety</p>
              <h4 className="mt-4 lg:mt-6 text-black-100 text-left">
                Learn About Our Latest Safety Protocols
              </h4>
              <div className="mt-4 lead--regular text-black-100">
                <p className="text-left">
                  COVID-19 has changed the ways in which we can come together,
                  but here at Chelsea Piers Fitness we continue to value the
                  safety of our community members above all else.
                </p>
              </div>
              <div className="flex text-left  items-center space-x-4 relative border--main group cursor-pointer xl:pr-[50px] mt-[30.5px] lg:mt-[34.5px]">
                <div className="border--increase "></div>
                <a
                  href="/"
                  className="pl-12 label--bold text-black-100 group-hover:text-sky-100"
                  target=""
                >
                  More About Safety
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-featuredNewsImg bg-cover bg-no-repeat h-[500px] w-full"></div>
          <div className="flex justify-start items-center relative mt-[-10%] w-full">
            <div className="grid grid-cols-1 justify-left bg-white w-[80%] p-6">
              <p className="label--bold text-cobalt-100 text-left">
                EXCLUSIVE MEMBERSHIP OFFER
              </p>
              <h4 className="mt-4 lg:mt-6 text-black-100 text-left">
                Picture Yourself Here at Chelsea Piers Fitness this Summer.
              </h4>
              <div class="mt-4 lead--regular text-black-100 text-left">
                <p>
                  Join in June and we’ll extend our Friends + Family package to
                  you! Inquire or book a tour to learn more.
                </p>
                Offer expires June 30, 2022
              </div>
              <div className="flex text-left  items-center space-x-4 relative border--main group cursor-pointer xl:pr-[50px] mt-[30.5px] lg:mt-[34.5px]">
                <div className="border--increase "></div>
                <a
                  href="/"
                  className="pl-12 label--bold text-black-100 group-hover:text-sky-100"
                >
                  Claim Offer
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedNews;
