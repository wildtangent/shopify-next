import Link from 'next/link';

export default function NavBar() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/simple">Simple Page</Link>
      <Link href="/about">About</Link>
      <Link href="/users">Users</Link>
    </nav>
  );
};