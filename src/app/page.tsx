"use client";

import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import LatestJobs from "@/components/sections/LatestJobs";
import AboutUs from "@/components/sections/AboutUs";
import Testimonials from "@/components/sections/Testimonials";
import WorkForUs from "@/components/sections/WorkForUs";
import LatestInsights from "@/components/sections/LatestInsights";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LatestJobs />
      <AboutUs />
      <Testimonials />
      <WorkForUs />
      <LatestInsights />
      <Footer />
    </>
  );
}
