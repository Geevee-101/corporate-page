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
    <Link href={linkPath} className="grid grid-rows-[40px_auto] gap-1">
      <Image
        src={linkIcon}
        width={40}
        height={40}
        alt={linkIconAlt}
        className="mx-auto"
      />
      <div className="text-center w-60">
        <h4 className="uppercase">{title}</h4>
        <p>{details}</p>
      </div>
    </Link>
  );
}
