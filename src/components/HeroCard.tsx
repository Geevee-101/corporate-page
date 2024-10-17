import Link from "next/link";

export default function HeroCard({
  title,
  linkPath,
}: {
  title: string;
  linkPath: string;
}) {
  return (
    <Link
      href={linkPath}
      className="group flex flex-col items-center w-fit gap-2 mx-auto"
    >
      <div className="border rounded-full p-6 transition duration-500 ease-in-out group-hover:bg-white">
        <svg
          width="40"
          height="40"
          viewBox="0 0 512 512"
          className="fill-white transition duration-300 ease-in-out group-hover:fill-orange-400"
        >
          <path d="M352.57 128c-28.09 0-54.09 4.52-77.06 12.86l12.41-123.11C289 7.31 279.81-1.18 269.33.13 189.63 10.13 128 77.64 128 159.43c0 28.09 4.52 54.09 12.86 77.06L17.75 224.08C7.31 223-1.18 232.19.13 242.67c10 79.7 77.51 141.33 159.3 141.33 28.09 0 54.09-4.52 77.06-12.86l-12.41 123.11c-1.05 10.43 8.11 18.93 18.59 17.62 79.7-10 141.33-77.51 141.33-159.3 0-28.09-4.52-54.09-12.86-77.06l123.11 12.41c10.44 1.05 18.93-8.11 17.62-18.59-10-79.7-77.51-141.33-159.3-141.33zM256 288a32 32 0 1 1 32-32 32 32 0 0 1-32 32z" />
        </svg>
      </div>
      <h3 className="text-white text-center">{title}</h3>
    </Link>
  );
}
