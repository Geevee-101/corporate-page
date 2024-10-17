import GeneralButton from "@/components/GeneralButton";

export default function AboutUs() {
  return (
    <section className="bg-[url('./assets/images/nathan-dumlao-r-KfktlyBL0-unsplash.jpg')] bg-no-repeat bg-cover bg-center relative z-10">
      <div className="absolute inset-0 bg-gray-900/50 z-[-5]"></div>
      <div className="container mx-auto flex flex-col items-center py-16 text-white">
        <h2>About Us</h2>
        <p className="py-5 text-center md:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <div className="grid md:grid-cols-3 gap-10 lg:gap-20 px-4 md:px-0 py-8">
          <div>
            <h3 className="text-2xl text-center md:text-left">2000 +</h3>
            <p className="text-center md:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
          </div>
          <div>
            <h3 className="text-2xl text-center md:text-left">90,000 +</h3>
            <p className="text-center md:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
          </div>
          <div>
            <h3 className="text-2xl text-center md:text-left">35</h3>
            <p className="text-center md:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
          </div>
        </div>
        <GeneralButton label="read more" linkPath="" />
      </div>
    </section>
  );
}
