import Link from "next/link";

export default function InsightCard({
  linkPath,
  title,
  description,
  cardImage,
}: {
  linkPath: string;
  title: string;
  description: string;
  cardImage: string;
}) {
  return (
    <Link href={linkPath} className="group">
      <div
        style={
          {
            "--image-url": `url(${cardImage})`,
          } as React.CSSProperties
        }
        className="bg-[image:var(--image-url)] bg-no-repeat bg-cover bg-center flex flex-col-reverse h-96 relative z-10"
      >
        <div className="absolute inset-0 opacity-0 bg-transparent transition duration-300 ease-in-out group-hover:opacity-100 group-hover:bg-gradient-to-t from-primary/80 to-secondayLight/80 z-[-5]"></div>
        <div className="flex flex-col text-transparent p-5 gap-3 transition duration-300 ease-in-out group-hover:text-white">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
}
