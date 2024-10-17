import { imgAvatarAdrian } from "@/app/assets/images";
import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="container mx-auto flex flex-col items-center py-16">
      <h2>Testimonials</h2>
      <p className="text-center text-gray-400 py-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
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
  );
}
