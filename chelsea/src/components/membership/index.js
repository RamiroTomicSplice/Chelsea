import React from "react";

const Membership = () => {
  return (
    <section className="item-center pt-[50px] pb-[50px] grid gap-y-[32px] grid-cols-1 lg:gap-y-0 lg:gap-x-[42px] lg:grid-cols-2 bg-membershipImg bg-cover bg-center w-full">
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 justify-left pb-[41.5px] lg:pt-[50px] lg:pb-[129.5px] lg:ml-20">
          <p className="label--largeBold  text-white text-left">
            Inquire About membership
          </p>
          <h2 className="mt-4 lg:mt-6 text-white text-left">
            See It for Yourself
          </h2>
          <div className="lead--large mt-5 wow fadeInUp lg:mt-8 max-w-[448px] text-white text-left">
            Become a member of Chelsea Piers Fitness and join a community of
            like-minded fitness enthusiasts and athletes.
          </div>
          <div className="flex text-left items-center space-x-4 relative border--main group cursor-pointer xl:pr-[50px] mt-[30.5px] lg:mt-[34.5px]">
            <div className="border--increase"></div>
            <a
              href="/"
              className="pl-12  transition-all duration-300 label--bold text-white group-hover:text-sky-100"
            >
              See Membership Benefits
            </a>
          </div>
        </div>
      </div>
      <div className="flex-col justify-center flex gap-5 items-center">
        <div className="w-[250px] h-[60px]">
          <a
            href="/"
            className="font-united font-600 uppercase text-15 leading-20 rounded-48 inline-block  transition-all duration-300 text-center cursor-pointer text-white bg-cobalt-100 hover:bg-cobalt-shade pt-[22px] pb-[13px] w-full h-full"
          >
            Become A Member
          </a>
        </div>
        <div className="w-[250px] h-[60px]">
          <a
            href="/"
            className="font-united font-600 uppercase text-15 leading-20 rounded-48 inline-block  transition-all duration-300 text-center cursor-pointer text-black-100 bg-sky-100 hover:bg-sky-shade  pt-[22px] pb-[13px] w-full h-full"
          >
            Schedule A Tour
          </a>
        </div>
      </div>
    </section>
  );
};

export default Membership;
