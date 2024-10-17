import Image from "next/image";

import { imgWorkForUs } from "@/app/assets/images";
import GeneralButton from "../GeneralButton";

export default function WorkForUs() {
  return (
    <section className="container mx-auto">
      <div className="grid md:grid-cols-2 overflow-hidden">
        <div className="flex flex-col md:justify-center items-center p-5 lg:px-10 text-white bg-primary">
          <h2>Work for us</h2>
          <p className="my-8 md:m-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
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
  );
}
