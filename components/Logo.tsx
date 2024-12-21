import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <h3 className="cursor-pointer text-xl font-semibold">PhotoStock</h3>
    </Link>
  );
}
