import Image from "next/image";
import Link from "next/link";

export default function FooterLink({
  linkPath,
  linkIcon,
  linkIconAlt,
  title,
  details,
}: {
  linkPath: string;
  linkIcon: string;
  linkIconAlt: string;
  title: string;
  details: string;
}) {
  return (
    <Link
      href={linkPath}
      className="grid grid-cols-[40px_auto] md:grid-cols-1 md:grid-rows-[40px_auto] gap-5 md:gap-1 justify-center"
    >
      <Image
        src={linkIcon}
        width={40}
        height={40}
        alt={linkIconAlt}
        className="mx-auto"
      />
      <div className="md:text-center w-60">
        <h4 className="uppercase">{title}</h4>
        <p>{details}</p>
      </div>
    </Link>
  );
}
