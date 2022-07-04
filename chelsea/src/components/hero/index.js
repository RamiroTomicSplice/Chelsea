import React from "react";

const Hero = () => {
  return (
    <>
      <div className="md:h-[80.5vh] min-h-[576px] xl:h-[50vw]  4xl:h-[82vh] relative pt-[64px] xl:pt-[128px]">
        <div className="absolute h-full w-full  z-[2] flex justify-center items-center bg-black-100/60 ">
          <div className="wrapper">
            <div className="flex flex-col py-[100px] xl:py-[100px] items-center  md:space-y-8 ">
              <p className="hidden md:block text-15 leading-24 font-united font-600 tracking-widest uppercase text-white text-center max-w-[230px]">
                Welcome To Chelsea Piers Fitness
              </p>
              <div className="hidden md:block w-[1px] ml-[1px] h-[56px] bg-white"></div>
              <h1 className="font-500 max-w-[90vw] xl:max-w-full text-center px-6 sm:px-0 ss03 text-white">
                Never Stop Playing
              </h1>
              <div className="lead--large text-white text-center max-w-[560px] px-6 md:px-0 mt-6 md:max-w-full">
                <p className="text-center">
                  With unrivaled space and activities,
                </p>
                <p className="text-center">
                  Chelsea Piers Fitness is a community with a passion
                </p>
                <p className="text-center">
                  for inspired fitness, sports and wellness.
                </p>
              </div>
              <div className="w-[1px] hidden md:block h-[56px] ml-[1px] bg-white"></div>
              <div
                data-wow-delay="0.9s"
                className="flex flex-col items-center lg:max-w-[50vw] xl:max-w-[31.111vw] justify-center w-full px-3 mt-10 space-y-4 sm:flex-row sm:space-y-0"
              >
                <a
                  href="/"
                  className="text-12 leading-20 font-united font-600  uppercase btn btn--cobalt pt-[15px] sm:mr-3 pb-[13px] w-full h-full"
                  target=""
                >
                  Become a member
                </a>
                <a
                  href="/book-a-tour/"
                  className="text-12 leading-20 font-united font-600  uppercase btn btn--sky pt-[15px] sm:ml-3 pb-[13px] w-full h-full"
                  target=""
                >
                  Schedule A Tour
                </a>
              </div>
            </div>
          </div>
        </div>
        <video
          className="absolute object-cover w-full h-full"
          autoPlay={true}
          muted={true}
          controls={false}
          playsInline={true}
          loop={true}
          poster={
            "https://fitness-cms.chelseapiers.com/wp-content/uploads/2021/10/image-url-300x169.png"
          }
        >
          <source
            src={
              "https://fitness-cms.chelseapiers.com/wp-content/uploads/2021/10/CPF-homepage-video-01-1.mp4"
            }
            type="video/mp4"
          />
        </video>
      </div>
    </>
  );
};

export default Hero;
