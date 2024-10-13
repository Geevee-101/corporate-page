import Link from "next/link";

export default function NavbarButton({
  linkPath,
  children,
}: {
  linkPath: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={linkPath}
      className="h-fit px-6 py-3 uppercase text-white bg-orange-400 hover:text-black hover:bg-white"
    >
      {children}
    </Link>
  );
}
