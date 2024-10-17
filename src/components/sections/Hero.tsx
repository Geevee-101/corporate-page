import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import HeroCard from "@/components/HeroCard";

const heroCardData: { title: string; linkPath: string }[] = [
  {
    title: "Eiusmod Tempor 1",
    linkPath: "",
  },
  {
    title: "Eiusmod Tempor 2",
    linkPath: "",
  },
  {
    title: "Eiusmod Tempor 3",
    linkPath: "",
  },
  {
    title: "Eiusmod Tempor 4",
    linkPath: "",
  },
  {
    title: "Eiusmod Tempor 5",
    linkPath: "",
  },
  {
    title: "Eiusmod Tempor 6",
    linkPath: "",
  },
  {
    title: "Eiusmod Tempor 7",
    linkPath: "",
  },
];

export default function Hero() {
  return (
    <section className="bg-[url('./assets/images/andrea-natali-otjiUhq5Zcw-unsplash.jpg')] bg-no-repeat bg-cover bg-center h-screen relative flex flex-col justify-between items-center z-10">
      <div className="absolute inset-0 bg-gray-900/50 z-[-5]"></div>
      <div className="h-20"></div>
      <div className="container mx-auto">
        <h1 className="text-center text-white max-w-[900px] mx-auto">
          Accusantium doloremque quae ab illo
        </h1>
        <form className="grid grid-rows-3 lg:grid-rows-1 lg:grid-cols-[2fr_2fr_1fr] px-0 md:px-20 lg:px-40 pt-10 gap-3">
          <input
            type="text"
            name="keyword"
            placeholder="keyword"
            className="p-4"
          />
          <input
            type="text"
            name="location"
            placeholder="location"
            className="p-4"
          />
          <button
            type="submit"
            className="text-white uppercase bg-primary hover:text-black hover:bg-white"
          >
            Search Jobs
          </button>
        </form>
      </div>
      <div className="bg-gray-900/50 w-full py-5">
        <div className="container mx-auto flex items-center px-10">
          <div className="swiper-button-prev"></div>
          <Swiper
            modules={[Navigation]}
            spaceBetween={0}
            loop={true}
            slidesPerView={2}
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
              1280: {
                slidesPerView: 5,
              },
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
          >
            {heroCardData.map((item, index) => (
              <SwiperSlide key={index}>
                <HeroCard title={item.title} linkPath={item.linkPath} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-button-next"></div>
        </div>
      </div>
    </section>
  );
}
