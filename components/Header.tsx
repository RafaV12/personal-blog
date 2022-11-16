import Link from 'next/link';

export default function Header() {
  return (
    <header className="px-7 flex items-center fixed top-0 left-0 h-12 w-full backdrop-blur-lg bg-white/30 ">
      <nav className="w-full flex items-center justify-between">
        <Link href={'/'}>
          <p className="font-semibold">Rafael V.</p>
        </Link>

        <button className='py-0.5 text-sm text-white font-semibold px-2 bg-blue-500'>Sign in</button>
      </nav>
    </header>
  );
}
