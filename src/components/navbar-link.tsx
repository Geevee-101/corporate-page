import Link from "next/link";

export default function NavbarLink({
  linkPath,
  children,
}: {
  linkPath: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-center border-t-8 border-transparent hover:text-orange-400 hover:border-orange-400">
      <Link href={linkPath}>{children}</Link>
    </li>
  );
}
