import Link from "next/link";

export default function Home() {
  return (
    <ul>
      <li className="p-15">
        <Link href="/a" as="/a">
          <a>a</a>
        </Link>
      </li>
      <li>
        <Link href="/b" as="/b">
          <a>b</a>
        </Link>
      </li>
    </ul>
  );
}
