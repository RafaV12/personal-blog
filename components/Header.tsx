import Link from 'next/link';
import { useAuthContext } from '../context/authContext';

export default function Header() {
  const { login, user } = useAuthContext();

  return (
    <header className="px-7 flex items-center absolute top-0 left-0 h-12 w-full">
      <nav className="w-full flex items-center justify-between">
        <Link href={'/'}>
          <p className="italic">Rafael V.</p>
        </Link>

        {user && <img className="mr-1 w-7 h-7 rounded-full" src={`${user}`} alt="" />}

        {!user && (
          <button onClick={login} className="py-0.5 flex items-center text-sm px-2 bg-white border rounded-full shadow-sm">
            <img
              className="mr-1 w-5 h-5"
              src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
              alt=""
            />
            <p>Sign in</p>
          </button>
        )}
      </nav>
    </header>
  );
}
