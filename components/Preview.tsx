import Image from 'next/image';
import Link from 'next/link';

import { TPostPreview } from '../types/index';
import testImg from '../public/test-img.jpg'

type PreviewProps = TPostPreview;

export default function Preview({ title, description, tags }: PreviewProps) {
  return (
    <div className="mb-8">
      <Image className="mb-4 w-full h-56 rounded-2xl lg:h-[40rem]" src={testImg} alt={'asds'}></Image>
      <h2 className="mb-0 text-lg text-slate-900 font-semibold">
        {/* Format the title with dashes instead of spaces for cosmetic purposes */}
        <Link href={`/posts/${title.replaceAll(' ', '-')}`}>{title}</Link>
      </h2>
      <p className="mb-2 text-zinc-700">{description}</p>
      {/* Tags */}
      <div className="flex items-center">
        <div className="flex items-center">
          {/* 'tags' prop is a string separating words with a comma. Convert to an array and map */}
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
