import Link from "next/link";

export default function GeneralButton({
  label,
  linkPath,
}: {
  label: string;
  linkPath: string;
}) {
  return (
    <Link
      href={linkPath}
      className="text-black bg-secondayLight mx-auto px-7 py-3"
    >
      {label}
    </Link>
  );
}
