import Head from 'next/head';

import { useAuthContext } from '../../context/authContext';
import { auth } from '../../firebase';

export default function Login() {
  const { login, user } = useAuthContext();

  return (
    <>
      <Head>
        <title>Login - RafaV12</title>
        <meta name="robots" content="noindex" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>

      <div className="px-8 pt-20 border-2 min-h-screen flex flex-col items-center">
        <div className="container flex flex-col items-center">
          <h1 className="mb-6 text-5xl font-semibold italic text-center">Welcome!</h1>

          {!user && (
            <button onClick={login} className="py-2 w-2/4 flex items-center justify-center text-sm border-2 bg-white rounded-md shadow-sm">
              <img
                className="mr-1 w-7 h-7"
                src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
                alt=""
              />
              <p>Sign in</p>
            </button>
          )}

          {user && (
            <button
              onClick={() => auth.signOut()}
              className="py-2 w-2/4 flex items-center justify-center text-sm border-2 bg-white rounded-md shadow-sm"
            >
              <img
                className="mr-1 w-7 h-7"
                src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
                alt=""
              />
              <p className="">Sign out</p>
            </button>
          )}
        </div>
      </div>
    </>
  );
}
