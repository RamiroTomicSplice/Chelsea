import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import "swiper/css";

SwiperCore.use([Navigation, Autoplay]);

const Slides = [
  {
    img: "bg-locationsImg",
    title: "Locations",
    text: 'With clubs in Chelsea, Downtown Brooklyn and Stamford, CT, there\'s a "just right" facility for everyone.',
    cta: "explore our clubs",
  },
  {
    img: "bg-communityImg",
    title: "Community",
    text: "Our community is our top priority. Learn more about our Member Events Series, Training Clubs + more.",
    cta: "explore community",
  },
  {
    img: "bg-sportsImg",
    title: "Sports",
    text: "With facilities and programs for more than a dozen different sports, we offer unsurpassed opportunities for switching up your workout, trying something new or discovering a new passion.",
    cta: "explore sports",
  },
  {
    img: "bg-classesImg",
    title: "Classes",
    text: "Our unique programming allows members to benefit from multiple modalities and cross-training opportunities, each provided by the best instructors across New York and Connecticut.",
    cta: "explore our classes",
  },
  {
    img: "bg-trainingImg",
    title: "Training",
    text: "Our dynamic staff of personal training coaches and sport-specific clubs & programs will help you achieve all of your fitness aspirations, and more.",
    cta: "explore training",
  },
];

const Offerings = () => {
  return (
    <section className="wrapper pt-[50px] lg:pt-[100px] pb-[50px] lg:pb-[100px]">
      <div className="items-end mb-6 lg:mb-8 md:flex ">
        <h2 className="flex-1 text-center text-black-100">
          Explore Our Offerings
        </h2>
      </div>
      <div className="block w-[1px] mx-auto h-[64px] bg-cobalt-100" />
      <div className="xl:container flex justify-center mt-[40px] relative">
        <div className="relative flex items-center md:px-[38px] h-[600px] w-[100%]">
          <div className="button-prev cursor-pointer rounded-full	 absolute left-0 h-[64px] top-[116px] w-[64px] mx-[1.6665%] z-[22] bg-buttonGray hidden lg:flex items-center justify-center insight-prev swiper-button-disabled">
            <div
              alt="<"
              className="bg-leftArrow bg-no-repeat bg-center rounded-full	w-[50%] h-[50%] object-contain relative z-50"
            />
          </div>
          <Swiper
            className="h-[600px] relative"
            spaceBetween={50}
            modules={[Navigation]}
            freeMode={true}
            slidesPerView={4}
            navigation={{
              nextEl: ".button-next",
              prevEl: ".button-prev",
            }}
            breakpoints={{
              0: {
                width: 0,
                slidesPerView: 1,
              },
              500: {
                width: 568,
                slidesPerView: 2,
              },
            }}
          >
            {Slides.map((slide, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative w-[280px] h-[280px] ">
                  <img
                    alt=""
                    className={`${slide.img} absolute w-[280px] h-full max-h-[280px] object-cover object-center bg-no-repeat`}
                  />
                  <div className="text-start absolute mt-[400px] bg-black text-black-100 bg-opacity-10 flex items-center justify-center">
                    <p>{slide.text}</p>
                  </div>
                  <h4 className="absolute text-black-100 z-[1] mt-80 group-hover:text-cobalt-100">
                    {slide.title}
                  </h4>
                  <div className=" absolute mt-[550px] flex text-left wow fadeInUp items-center space-x-4 border--main group cursor-pointer xl:pr-[50px] undefined  to-animate">
                    <div className="border--increase "></div>
                    <a
                      href="/"
                      className="pl-12  transition-all duration-300 label--bold text-black-100"
                    >
                      {slide.cta}
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="button-next cursor-pointer  rounded-full absolute right-0 h-[64px] top-[116px] w-[64px] mx-[1.6665%] z-[22] bg-buttonGray hidden lg:flex items-center justify-center insight-next">
            <div
              alt=">"
              className="bg-rightArrow w-[50%] h-[50%] object-contain bg-no-repeat bg-center rounded-full relative z-50"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offerings;
