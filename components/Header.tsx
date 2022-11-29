import Link from 'next/link';
import { useAuthContext } from '../context/authContext';
import { auth } from '../firebase';

export default function Header() {
  const { login, user } = useAuthContext();

  return (
    <header className="absolute left-1/2 transform -translate-x-1/2 px-7 h-12 container flex items-center xl:px-0">
      <nav className="w-full flex items-center justify-between">
        <Link href={'/'}>
          <p className="border-black border-b-2">Rafael V.</p>
        </Link>
      </nav>
    </header>
  );
}
