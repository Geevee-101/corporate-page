import Link from "next/link";

export default function IconFacebook({ linkPath }: { linkPath: string }) {
  return (
    <Link href={linkPath}>
      <svg
        width="40"
        height="40"
        viewBox="-143 145 512 512 "
        className="fill-secondaryDark hover:fill-primary"
      >
        <path d="M113 145c-141.4 0-256 114.6-256 256s114.6 256 256 256 256-114.6 256-256-114.6-256-256-256zm56.5 212.6-2.9 38.3h-39.3v133H77.7v-133H51.2v-38.3h26.5v-25.7c0-11.3.3-28.8 8.5-39.7 8.7-11.5 20.6-19.3 41.1-19.3 33.4 0 47.4 4.8 47.4 4.8l-6.6 39.2s-11-3.2-21.3-3.2-19.5 3.7-19.5 14v29.9h42.2z" />
      </svg>
    </Link>
  );
}
