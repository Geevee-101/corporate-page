"use client";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Image from "next/image";
import Link from "next/link";

import {
  imgAvatarAdrian,
  imgWorkForUs,
  imgInsightTablet,
  imgInsightLaptop,
  imgInsightPlant,
  imgInsightCamera,
  iconMail,
  iconMessage,
  iconMap,
} from "./assets/images";
import NavbarLink from "@/components/navbar-link";
import NavbarButton from "@/components/navbar-button";
import HeroCard from "@/components/hero-card";
import JobCard from "@/components/job-card";
import GeneralButton from "@/components/general-button";
import InsightCard from "@/components/insight-card";
import FooterLink from "@/components/footer-link";
import { useState } from "react";

export default function Home() {
  const [menuIsOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="bg-[url('./assets/images/andrea-natali-otjiUhq5Zcw-unsplash.jpg')] bg-no-repeat bg-cover bg-center relative z-10">
        <div className="absolute inset-0 bg-gray-900/50 z-[-5]"></div>
        <nav className="container mx-auto flex justify-between h-20">
          <div className="flex items-center border-t-8 border-transparent">
            <Link href="" className="text-4xl text-white font-extrabold">
              volcanic
            </Link>
          </div>
          <div className="flex gap-2 xl:gap-14">
            <div className="relative h-full py-3 xl:py-0 border-t-8 xl:border-t-0 border-transparent">
              <button
                onClick={() => setIsOpen((open) => !open)}
                className="xl:hidden flex items-center h-full px-3"
              >
                <svg width="30" height="30" fill="none" viewBox="0 0 20 20">
                  <path
                    fill="white"
                    fill-rule="evenodd"
                    d="M19 4a1 1 0 0 1-1 1H2a1 1 0 0 1 0-2h16a1 1 0 0 1 1 1zm0 6a1 1 0 0 1-1 1H2a1 1 0 1 1 0-2h16a1 1 0 0 1 1 1zm-1 7a1 1 0 1 0 0-2H2a1 1 0 1 0 0 2h16z"
                  />
                </svg>
              </button>
              <div
                className={
                  menuIsOpen ? "block xl:h-full" : "hidden xl:block xl:h-full"
                }
              >
                <ul className="absolute xl:static right-0 flex flex-col xl:flex-row xl:h-full xl:gap-6 uppercase text-black xl:text-white bg-white xl:bg-transparent">
                  <NavbarLink linkPath="">Jobs</NavbarLink>
                  <NavbarLink linkPath="">About</NavbarLink>
                  <NavbarLink linkPath="">Candidates</NavbarLink>
                  <NavbarLink linkPath="">Clients</NavbarLink>
                  <NavbarLink linkPath="">Join Us</NavbarLink>
                  <NavbarLink linkPath="">Insights</NavbarLink>
                  <NavbarLink linkPath="">Contact Us</NavbarLink>
                </ul>
              </div>
            </div>
            <div className="flex items-center border-t-8 border-transparent">
              <NavbarButton linkPath="">Login</NavbarButton>
              <NavbarButton linkPath="">Register</NavbarButton>
            </div>
          </div>
        </nav>
        <div className="container mx-auto">
          <div className="mt-24 mb-28">
            <h1 className="text-center text-white max-w-[600px] mx-auto">
              Accusantium doloremque quae ab illo
            </h1>
            <form className="grid grid-rows-3 lg:grid-rows-1 lg:grid-cols-[2fr_2fr_1fr] px-0 md:px-20 lg:px-40 py-11 gap-3">
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
        </div>
        <div className="bg-gray-900/50 py-5">
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
                  slidesPerView: 5,
                },
              }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
            >
              <SwiperSlide>
                <HeroCard title="Eiusmod Tempor 1" linkPath="" />
              </SwiperSlide>
              <SwiperSlide>
                <HeroCard title="Eiusmod Tempor 2" linkPath="" />
              </SwiperSlide>
              <SwiperSlide>
                <HeroCard title="Eiusmod Tempor 3" linkPath="" />
              </SwiperSlide>
              <SwiperSlide>
                <HeroCard title="Eiusmod Tempor 4" linkPath="" />
              </SwiperSlide>
              <SwiperSlide>
                <HeroCard title="Eiusmod Tempor 5" linkPath="" />
              </SwiperSlide>
              <SwiperSlide>
                <HeroCard title="Eiusmod Tempor 6" linkPath="" />
              </SwiperSlide>
              <SwiperSlide>
                <HeroCard title="Eiusmod Tempor 7" linkPath="" />
              </SwiperSlide>
            </Swiper>
            <div className="swiper-button-next"></div>
          </div>
        </div>
      </section>
      <section className="container mx-auto py-16">
        <h2 className="text-center">Latest Jobs</h2>
        <Swiper
          modules={[Pagination]}
          spaceBetween={10}
          slidesPerView={2}
          breakpoints={{
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
            bulletClass: "swiper-pagination-bullet",
          }}
          className="mt-8"
        >
          <SwiperSlide>
            <JobCard
              title="Duis aute irure dolor in reprehenderit 1"
              salary="&#163; 20000 - &#163; 30000"
              location="London"
              description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              linkPath=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <JobCard
              title="Duis aute irure dolor in reprehenderit 2"
              salary="&#163; 20000 - &#163; 30000"
              location="London"
              description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              linkPath=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <JobCard
              title="Duis aute irure dolor in reprehenderit 3"
              salary="&#163; 20000 - &#163; 30000"
              location="London"
              description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              linkPath=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <JobCard
              title="Duis aute irure dolor in reprehenderit 4"
              salary="&#163; 20000 - &#163; 30000"
              location="London"
              description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              linkPath=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <JobCard
              title="Duis aute irure dolor in reprehenderit 5"
              salary="&#163; 20000 - &#163; 30000"
              location="London"
              description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              linkPath=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <JobCard
              title="Duis aute irure dolor in reprehenderit 6"
              salary="&#163; 20000 - &#163; 30000"
              location="London"
              description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              linkPath=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <JobCard
              title="Duis aute irure dolor in reprehenderit 7"
              salary="&#163; 20000 - &#163; 30000"
              location="London"
              description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              linkPath=""
            />
          </SwiperSlide>
        </Swiper>
        <div className="swiper-pagination"></div>
      </section>
      <section className="bg-[url('./assets/images/nathan-dumlao-r-KfktlyBL0-unsplash.jpg')] bg-no-repeat bg-cover bg-center relative z-10">
        <div className="absolute inset-0 bg-gray-900/50 z-[-5]"></div>
        <div className="container mx-auto flex flex-col items-center py-16 text-white">
          <h2>About Us</h2>
          <p className="py-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <div className="grid md:grid-cols-3 gap-10 lg:gap-20 px-4 md:px-0 py-8">
            <div>
              <h3>2000 +</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
            </div>
            <div>
              <h3>90,000 +</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
            </div>
            <div>
              <h3>35</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
            </div>
          </div>
          <GeneralButton label="read more" linkPath="" />
        </div>
      </section>
      <section className="container mx-auto flex flex-col items-center py-16">
        <h2>Testimonials</h2>
        <p className="text-center text-gray-400 py-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="flex items-center gap-5">
          <div className="w-20 h-20 rounded-full overflow-hidden">
            <Image
              src={imgAvatarAdrian}
              alt="picture of Adrian"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-primary">
            <p>Adrian Chapman,</p>
            <p>Head of Sales, Capita EB</p>
          </div>
        </div>
      </section>
      <section className="container mx-auto">
        <div className="grid md:grid-cols-2 overflow-hidden">
          <div className="flex flex-col md:justify-center items-center p-5 lg:px-10 text-white bg-primary">
            <h2>Work for us</h2>
            <p className="my-8 md:m-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <GeneralButton label="learn more" linkPath="" />
          </div>
          <Image
            src={imgWorkForUs}
            alt="picture of working with laptop"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
      <section className="container mx-auto flex flex-col items-center py-16">
        <h2>Latest Insights</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 mt-8 gap-3">
          <InsightCard
            linkPath=""
            title="Ut labore et dolore magna"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"
            cardImage={imgInsightTablet.src}
          />
          <InsightCard
            linkPath=""
            title="Ut labore et dolore magna"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"
            cardImage={imgInsightLaptop.src}
          />
          <InsightCard
            linkPath=""
            title="Ut labore et dolore magna"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"
            cardImage={imgInsightPlant.src}
          />
          <InsightCard
            linkPath=""
            title="Ut labore et dolore magna"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"
            cardImage={imgInsightCamera.src}
          />
        </div>
      </section>
      <footer className="text-white bg-gray-700">
        <div className="container mx-auto grid grid-rows-[auto_auto] lg:grid-cols-[auto_auto] py-16">
          <div className="grid grid-rows-[40px_auto] pb-8 lg:pb-0 border-b-2 lg:border-b-0 lg:border-r-2 border-secondaryDark">
            <div></div>
            <div className="flex gap-4 justify-center lg:justify-start">
              <h4>Get Social</h4>
              <div className="flex gap-2">
                <Link href="">
                  <svg
                    width="40"
                    height="40"
                    viewBox="-143 145 512 512"
                    className="transition duration-300 ease-in-out fill-secondaryDark hover:fill-primary"
                  >
                    <path d="M113 145c-141.4 0-256 114.6-256 256s114.6 256 256 256 256-114.6 256-256-114.6-256-256-256zM41.4 508.1H-8.5V348.4h49.9v159.7zM15.1 328.4h-.4c-18.1 0-29.8-12.2-29.8-27.7 0-15.8 12.1-27.7 30.5-27.7s29.7 11.9 30.1 27.7c.1 15.4-11.6 27.7-30.4 27.7zM241 508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4-14.9 0-23.2 10-27 19.6-1.4 3.4-1.2 8.2-1.2 13.1v86.3H71.8s.7-146.4 0-159.7h56.1v25.1c3.3-11 21.2-26.6 49.8-26.6 35.5 0 63.3 23 63.3 72.4v88.8z" />
                  </svg>
                </Link>
                <Link href="">
                  <svg
                    width="40"
                    height="40"
                    viewBox="-143 145 512 512"
                    className="transition duration-300 ease-in-out fill-secondaryDark hover:fill-primary"
                  >
                    <path d="M113 145c-141.4 0-256 114.6-256 256s114.6 256 256 256 256-114.6 256-256-114.6-256-256-256zm102.2 216.2c.1 2.2.1 4.5.1 6.8 0 69.5-52.9 149.7-149.7 149.7-29.7 0-57.4-8.7-80.6-23.6 4.1.5 8.3.7 12.6.7 24.6 0 47.3-8.4 65.3-22.5-23-.4-42.5-15.6-49.1-36.5 3.2.6 6.5.9 9.9.9 4.8 0 9.5-.6 13.9-1.9-24.1-4.8-42.2-26.1-42.2-51.6v-.6c7.1 3.9 15.2 6.3 23.8 6.6-14.1-9.4-23.4-25.6-23.4-43.8 0-9.6 2.6-18.7 7.1-26.5 26 31.9 64.7 52.8 108.4 55-.9-3.8-1.4-7.8-1.4-12 0-29 23.6-52.6 52.6-52.6 15.1 0 28.8 6.4 38.4 16.6 12-2.4 23.2-6.7 33.4-12.8-3.9 12.3-12.3 22.6-23.1 29.1 10.6-1.3 20.8-4.1 30.2-8.3-7 10.6-15.9 19.8-26.2 27.3z" />
                  </svg>
                </Link>
                <Link href="">
                  <svg
                    width="40"
                    height="40"
                    viewBox="-143 145 512 512 "
                    className="transition duration-300 ease-in-out fill-secondaryDark hover:fill-primary"
                  >
                    <path d="M113 145c-141.4 0-256 114.6-256 256s114.6 256 256 256 256-114.6 256-256-114.6-256-256-256zm56.5 212.6-2.9 38.3h-39.3v133H77.7v-133H51.2v-38.3h26.5v-25.7c0-11.3.3-28.8 8.5-39.7 8.7-11.5 20.6-19.3 41.1-19.3 33.4 0 47.4 4.8 47.4 4.8l-6.6 39.2s-11-3.2-21.3-3.2-19.5 3.7-19.5 14v29.9h42.2z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row pt-8 lg:pt-0 gap-3 md:gap-0 md:justify-between">
            <FooterLink
              linkPath=""
              linkIcon={iconMail}
              linkIconAlt="mail icon"
              title="Email Us"
              details="info@volcanic.com"
            />
            <FooterLink
              linkPath=""
              linkIcon={iconMessage}
              linkIconAlt="message icon"
              title="Get In Touch"
              details="UK: 0161 217 1517"
            />
            <FooterLink
              linkPath=""
              linkIcon={iconMap}
              linkIconAlt="map icon"
              title="Find Us"
              details="Dale House Floor 8, Tiviot Dale Stockport, SK1 1TB"
            />
          </div>
        </div>
      </footer>
    </>
  );
}
