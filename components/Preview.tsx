import Link from 'next/link';

import { TPostPreview } from '../types/index';

type PreviewProps = TPostPreview;

export default function Preview({ title, description }: PreviewProps) {
  return (
    <article className="mb-8">
      <h2 className="mb-1 text-lg text-slate-900 font-semibold">
        {/* Format the title with dashes instead of spaces for cosmetic purposes */}
        <Link href={`/posts/${title.replaceAll(' ', '-')}`}>{title}</Link>
      </h2>
      <p className="mb-1 text-zinc-700">{description}</p>
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
