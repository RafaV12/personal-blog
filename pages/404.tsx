import Link from "next/link";

export default function Custom404() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="-mt-12 mb-2 text-8xl italic">404!</h1>
      <p className="mb-2">Where are you going? That page does not exist!</p>
      <Link className="text-blue-500 underline" href={'/'}>Take me back, please.</Link>
    </div>
  );
}
