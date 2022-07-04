import React from "react";

const Footer = () => {
  return (
    <div className="bg-black-100 flex relative h-full flex-col z-[20]">
      <div className="xl:w-[1px] left-[3.333%] absolute h-full bg-grid" />
      <div className="xl:w-[1px]  absolute  h-full left-[34%] bg-grid" />
      <div className="xl:w-[1px]  absolute  h-full right-[34%] bg-grid" />
      <div className="xl:w-[1px] right-[3.333%] absolute h-full bg-grid" />
      <div className="absolute flex justify-between w-full h-full px-3 xl:hidden" />
      <div className="px-3 xl:px-[3.333%] flex justify-between relative z-[1]">
        <div className="flex xl:flex-row flex-col   w-full text-white  xl:h-[672px] ">
          <div className="flex items-center justify-center w-full h-full border-b border-grid xl:border-none pt-14 pb-11 xl:py-0">
            <div className="flex items-center justify-center w-full h-full px-6">
              <div className="flex flex-col items-center justify-center w-full h-full">
                <div className="mt-8 text-center lead--Regular">
                  <p>fitness@chelseapiers.com</p>
                  <p>800.771.6654</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-full h-full">
            <div className="flex flex-col items-center w-full h-full md:flex-row xl:flex-col">
              <div className="w-full h-full flex  justify-center border-b  border-grid xl:min-h-[304px] xl:max-h-[304px] md:border-r xl:border-b xl:border-r-0">
                <div className="flex flex-col items-center justify-start py-12 space-y-6 xl:py-16 xl:space-y-8">
                  <p className="label--largeBold text-sky-100">Information</p>
                  <div className="flex flex-col space-y-2 text-center">
                    <a href="/" className="lead--Regular hover:text-sky-100">
                      Locations
                    </a>
                    <a href="/" className="lead--Regular hover:text-sky-100">
                      Safety Standards
                    </a>
                    <a href="/" className="lead--Regular hover:text-sky-100">
                      Playbook
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full h-full flex  justify-center  border-b xl:border-none border-grid xl:min-h-[368px] xl:max-h-[368px]">
                <div className="flex flex-col items-center justify-start py-12 space-y-6 xl:py-16 xl:space-y-8">
                  <p className="label--largeBold text-sky-100">Connect</p>
                  <div className="flex flex-col space-y-2 text-center">
                    <a href="/" className="lead--Regular hover:text-sky-100">
                      Contact Us
                    </a>
                    <a href="/" className="lead--Regular hover:text-sky-100">
                      Download Our App
                    </a>
                    <div className="opacity-50 h-[24px]">
                      <p className=" lead--Regular mt-[-4px]">__</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-full h-full ">
            <div className="flex flex-col items-center w-full h-full md:flex-row xl:flex-col ">
              <div className="w-full h-full flex justify-center px-6 border-b border-grid  xl:min-h-[304px] xl:max-h-[304px] md:border-r md:border-b-0 xl:border-b xl:border-r-0">
                <div className="flex flex-col items-center justify-start py-12 space-y-6 xl:py-16 xl:space-y-8">
                  <p className="label--largeBold text-sky-100">Company</p>
                  <div className="flex flex-col space-y-2 text-center">
                    <a href="/" className="lead--Regular hover:text-sky-100">
                      About Chelsea Piers
                    </a>
                    <a href="/" className="lead--Regular hover:text-sky-100">
                      Employment
                    </a>
                    <a href="/" className="lead--Regular hover:text-sky-100">
                      News + Press
                    </a>
                    <a href="/" className="lead--Regular hover:text-sky-100">
                      Community Relations
                    </a>
                    <a href="/" className="lead--Regular hover:text-sky-100">
                      Sponsorships / Partnerships
                    </a>
                    <a href="/" className="lead--Regular hover:text-sky-100">
                      Scholarships
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full h-full flex justify-center  px-6 border-grid xl:min-h-[368px] xl:max-h-[368px]">
                <div className="flex flex-col items-center justify-start py-12 space-y-6 xl:py-16 xl:space-y-8">
                  <p className="label--largeBold text-sky-100">
                    More At Chelsea Piers
                  </p>
                  <div className="flex flex-col space-y-2 text-center">
                    <a href="/" className="lead--Regular hover:text-sky-100">
                      Chelsea Piers Sports
                    </a>
                    <a href="/" className="lead--Regular hover:text-sky-100">
                      Chelsea Piers Events
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
