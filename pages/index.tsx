import Link from "next/link";
export default function HomePage() {
  return (
    <main>
      <h1>Hello World!</h1>
      <div><Link href="/about">About Us</Link></div>
    </main>
  );
}