import Preview from './Preview';

import { TPostPreview } from '../types';

interface PreviewsProps {
  previews: TPostPreview[];
}

export default function Previews({ previews }: PreviewsProps) {
  return (
    <section className="container flex flex-col items-center">
      <div className="pb-2 mb-12 w-full flex items-center justify-between border-b-2">
        <p className="text-xl font-semibold">My posts</p>

        <div className="flex items-center">
          <p className="hidden md:block mr-2">Filter by</p>
          <select className="px-2 py-0.5 border-2" name="" id="">
            <option value="">Recent</option>
            <option value="">Popularity</option>
            <option value="">Category</option>
          </select>
        </div>
      </div>

      {/* Post container */}
      <div className="min-h-[12rem] w-full flex flex-col md:w-11/12 md:flex-row md:flex-wrap md:justify-between xl:px-4 xl:w-full">
        {previews.length === 0 && <p>No posts found</p>}
        {previews.length > 0 &&
          previews.map((preview) => (
            <Preview key={preview.id} id={preview.id} title={preview.title} description={preview.description} tags={preview.tags} />
          ))}
      </div>
    </section>
  );
}
