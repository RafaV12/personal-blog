import Link from 'next/link';

import { TPostPreview } from '../types/index';

type PreviewProps = TPostPreview;

export default function Preview({ title, description, tags }: PreviewProps) {
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-lg text-slate-900 font-semibold">
        {/* Format the title with dashes instead of spaces for cosmetic purposes */}
        <Link href={`/posts/${title.replaceAll(' ', '-')}`}>{title}</Link>
      </h2>
      <p className="mb-1 text-zinc-700">{description}</p>
      {/* Tags */}
      <div className="flex items-center">
        <div className="flex items-center">
          {tags?.split(',').map((tag) => (
            <p key={tag} className="mr-1 py-0.5 px-2.5 text-sm border text-zinc-500 font-light rounded-2xl">
              {tag}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
