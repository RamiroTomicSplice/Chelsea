import React from "react";

const Header = () => {
  return (
    <>
      <div className="fixed z-50 w-full">
        <div className="hidden lg:flex items-center justify-between bg-black-100 h-[48px] max-h-[48px] px-[3.333%]">
          <div className="flex items-center w-full h-full justify-items-start">
            <a
              href="/"
              className="w-full text-12 leading-20 font-united font-600 uppercase text-opacity-70  lg:max-w-[23.25vw] border-grid  lg:py-4  border-l border-r hover:text-cobalt-100 hover:bg-buttonGray text-center text-white"
            >
              Sports
            </a>
            <a
              href="/"
              className="w-full text-12 leading-20 font-united font-600 uppercase text-opacity-70  lg:max-w-[23.25vw] border-grid  lg:py-4  bg-white text-cobalt-100 text-center text-opacity-100 font-700 border-grid border-r"
            >
              Fitness
            </a>
            <a
              href="/"
              className="w-full text-12 leading-20 font-united font-600 uppercase text-opacity-70  lg:max-w-[23.25vw] border-grid  lg:py-4  border-l border-r hover:text-cobalt-100 hover:bg-buttonGray text-center text-white"
            >
              Events
            </a>
          </div>
          <div className="flex justify-end w-[200px] h-full">
            <div className="flex items-center justify-center w-full h-full my-auto space-x-4 text-center text-white border-l border-r border-grid hover:text-sky-100">
              <a
                href="/"
                className="uppercase text-12 leading-20 font-united font-600"
              >
                My Account
              </a>
            </div>
          </div>
        </div>
        <nav className="min-h-[64px] max-h-[64px] content-center justify-items-center items-center lg:pt-[50px] lg:pb-[50px] item-center grid grid-cols-2 gap-x-[10px] xl:gap-x-[42px] md:grid-cols-8 lg:grid-cols-11 bg-[white] bg-cover bg-center w-full px-[1%] lg:px-[3.333%]">
          <div className="justify-center items-center md:col-span-2 hidden lg:flex">
            <svg className="bg-logoImg w-[128px] h-[41.5px]" alt="" />
          </div>
          <div className="justify-center items-center md:col-span-2 flex lg:hidden">
            <svg
              className="bg-logoImgHoriz bg-no-repeat w-[225px] h-[20px]"
              alt=""
              width="225"
              height="20"
            />
          </div>
          <div className="hidden md:flex uppercase text-12 leading-20">
            <a href="/">membership</a>
          </div>
          <div className="hidden md:flex uppercase text-12 leading-20">
            <a href="/">locations</a>
          </div>
          <div className="hidden md:flex uppercase text-12 leading-20">
            <a href="/">community</a>
          </div>
          <div className="hidden md:flex uppercase text-12 leading-20">
            <a href="/">classes</a>
          </div>
          <div className="hidden md:flex uppercase text-12 leading-20">
            <a href="/">training</a>
          </div>
          <div className="hidden lg:flex uppercase text-12 leading-20">
            <a href="/">sports</a>
          </div>
          <div className="hidden lg:flex uppercase text-12 leading-20">
            <a href="/">on demand</a>
          </div>
          <div className="col-span-2 hidden lg:flex">
            <a
              href="/"
              className="font-united font-600 uppercase text-12 leading-20 rounded-48 inline-block text-center cursor-pointer text-white bg-cobalt-100 hover:bg-cobalt-shade pt-[15px] pb-[13px] min-w-[200px] w-[200px] h-full"
            >
              Become A Member
            </a>
          </div>
          <div className="justify-self-end items-center lg:col-span-2 flex lg:hidden">
            <div
              className="bg-menuIcon bg-cover w-[32px] h-[32px] bg-no-repeat"
              alt=""
            />
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
