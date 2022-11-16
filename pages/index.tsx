import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Landing page */}
      <div className="mt-4 mb-24 flex flex-col items-center lg:mb-0 lg:h-screen">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg"
          alt="Picture of the author"
          width={350}
          height={300}
          className="mb-3 h-80"
        />
        <h1 className="mb-2 text-4xl">The life and times of a person on the Internet.</h1>
        <p className="text-zinc-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dolor accusamus magni incidunt minima, a corporis, temporibus
          dolores animi architecto nostrum sed maxime sequi quidem veritatis rem omnis? Magni, nesciunt.
        </p>
      </div>

      {/* Posts container */}
      <div className="container flex flex-col items-center">
        {/* Post card */}
        <div className="mb-8">
          <h2 className="mb-1 text-lg text-slate-900 font-semibold">
            <Link href="/posts/first-post">First post</Link>
          </h2>
          <p className="mb-1 text-zinc-700">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi nobis sapiente dignissimos quas iusto iste deserunt totam eos,
            officia voluptates cumque, accusantium dolor ipsam! Recusandae ipsa iusto cum perspiciatis non.
          </p>
          {/* Tags */}
          <div className="flex items-center">
            <p className="mr-1 text-slate-700 font-semibold">Tags:</p>
            <div className="flex items-cente">
              <p className="mx-1 py-1 px-1.5 text-sm border text-zinc-500 font-light">Comedy</p>
              <p className="mx-1 py-1 px-1.5 text-sm border text-zinc-500 font-light">Life</p>
              <p className="mx-1 py-1 px-1.5 text-sm border text-zinc-500 font-light">Philosophy</p>
            </div>
          </div>
        </div>

        {/* Post card */}
        <div className="mb-8">
          <h2 className="mb-1 text-lg text-slate-900 font-semibold">
            <Link href="/posts/second-post">Second post</Link>
          </h2>
          <p className="mb-1 text-zinc-700">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi nobis sapiente dignissimos quas iusto iste deserunt totam eos,
            officia voluptates cumque, accusantium dolor ipsam! Recusandae ipsa iusto cum perspiciatis non.
          </p>
          {/* Tags */}
          <div className="flex items-center">
            <p className="mr-1 text-slate-700 font-semibold">Tags:</p>
            <div className="flex items-cente">
              <p className="mx-1 py-1 px-1.5 text-sm border text-zinc-500 font-light">Comedy</p>
              <p className="mx-1 py-1 px-1.5 text-sm border text-zinc-500 font-light">Life</p>
              <p className="mx-1 py-1 px-1.5 text-sm border text-zinc-500 font-light">Philosophy</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
