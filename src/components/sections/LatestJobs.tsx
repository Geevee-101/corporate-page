import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import JobCard from "@/components/JobCard";

const JobCardData: {
  title: string;
  salary: string;
  location: string;
  description: string;
  linkPath: string;
}[] = [
  {
    title: "Duis aute irure dolor in reprehenderit 1",
    salary: "\u00A320000 - \u00A330000",
    location: "London",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    linkPath: "",
  },
  {
    title: "Duis aute irure dolor in reprehenderit 2",
    salary: "\u00A320000 - \u00A330000",
    location: "London",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    linkPath: "",
  },
  {
    title: "Duis aute irure dolor in reprehenderit 3",
    salary: "\u00A320000 - \u00A330000",
    location: "London",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    linkPath: "",
  },
  {
    title: "Duis aute irure dolor in reprehenderit 4",
    salary: "\u00A320000 - \u00A330000",
    location: "London",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    linkPath: "",
  },
  {
    title: "Duis aute irure dolor in reprehenderit 5",
    salary: "\u00A320000 - \u00A330000",
    location: "London",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    linkPath: "",
  },
  {
    title: "Duis aute irure dolor in reprehenderit 6",
    salary: "\u00A320000 - \u00A330000",
    location: "London",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    linkPath: "",
  },
  {
    title: "Duis aute irure dolor in reprehenderit 7",
    salary: "\u00A320000 - \u00A330000",
    location: "London",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    linkPath: "",
  },
];

export default function LatestJobs() {
  return (
    <section className="px-10 py-16">
      <h2 className="text-center">Latest Jobs</h2>
      <Swiper
        modules={[Pagination]}
        spaceBetween={10}
        slidesPerView={1}
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
        {JobCardData.map((item, index) => (
          <SwiperSlide key={index}>
            <JobCard
              title={item.title}
              salary={item.salary}
              location={item.location}
              description={item.description}
              linkPath={item.linkPath}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-pagination"></div>
    </section>
  );
}
