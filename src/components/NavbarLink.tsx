import Link from "next/link";

export default function NavbarLink({
  linkPath,
  children,
}: {
  linkPath: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={linkPath}>
      <li className="flex justify-center items-center pl-4 pr-6 xl:h-full xl:px-0 py-3 border-l-8 xl:border-l-0 xl:border-t-8 border-transparent hover:text-orange-400 hover:border-orange-400">
        {children}
      </li>
    </Link>
  );
}
