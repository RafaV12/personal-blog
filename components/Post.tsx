import Link from 'next/link';

interface Post {
  id: number;
  title: string;
  desc: string;
}

export default function Post({ id, title, desc }: Post) {
  return (
    <article className="mb-8">
      <h2 className="mb-1 text-lg text-slate-900 font-semibold">
        <Link href={`/posts/${id}`}>{title}</Link>
      </h2>
      <p className="mb-1 text-zinc-700">{desc}</p>
      {/* Tags */}
      <div className="flex items-center">
        <p className="mr-1 text-slate-700 font-semibold">Tags:</p>
        <div className="flex items-cente">
          <p className="mx-1 py-1 px-1.5 text-sm border text-zinc-500 font-light">Comedy</p>
          <p className="mx-1 py-1 px-1.5 text-sm border text-zinc-500 font-light">Life</p>
          <p className="mx-1 py-1 px-1.5 text-sm border text-zinc-500 font-light">Philosophy</p>
        </div>
      </div>
    </article>
  );
}
