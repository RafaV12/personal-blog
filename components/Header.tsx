import Link from 'next/link';
import { useAuthContext } from '../context/authContext';
import { auth } from '../firebase';

export default function Header() {
  const { login, user } = useAuthContext();

  return (
    <header className="px-7 container flex items-center absolute left-1/2 transform -translate-x-1/2 h-12 xl:px-0">
      <nav className="w-full flex items-center justify-between">
        <Link href={'/'}>
          <p className="italic">Rafael V.</p>
        </Link>

        {user && (
          <div className="flex items-center">
            <img className="mr-1 w-7 h-7 rounded-full" src={`${user.photo}`} alt="" />
            <button
              onClick={() => auth.signOut()}
              className="py-0.5 ml-2 flex items-center text-sm px-2 bg-white border rounded-full shadow-sm"
            >
              <img
                className="mr-1 w-5 h-5"
                src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
                alt=""
              />
              <p>Sign out</p>
            </button>
          </div>
        )}

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
