import Link from "next/link";

export default function JobCard({
  title,
  salary,
  location,
  description,
  linkPath,
}: {
  title: string;
  salary: string;
  location: string;
  description: string;
  linkPath: string;
}) {
  return (
    <Link href={linkPath}>
      <div className="group text-white bg-primary transition duration-300 ease-in-out hover:text-primary hover:bg-slate-100">
        <div className="p-5">
          <h3 className="font-semibold">{title}</h3>
          <p className="mt-2 uppercase font-semibold">
            {salary} | {location}
          </p>
          <p className="mt-2">{description}</p>
        </div>
        <div className="flex justify-end">
          <div className="px-6 py-3 uppercase text-black bg-secondayLight transition duration-300 ease-in-out group-hover:text-white group-hover:bg-primary">
            Apply
          </div>
        </div>
      </div>
    </Link>
  );
}
