import Preview from './Preview';

import { TPostPreview } from '../types';

interface PreviewsProps {
  previews: TPostPreview[];
}

export default function Previews({ previews }: PreviewsProps) {
  return (
    <section className="container flex flex-col">
      <div className="pb-2 mb-12 w-full flex items-center justify-between border-b-2">
        <p className="text-xl font-semibold">My posts</p>

        <div className="flex items-center">
          <p className="hidden md:block mr-2">Filter by</p>
          <select className="px-2 border-2 rounded-xl" name="" id="">
            <option value="">Recent</option>
            <option value="">Popularity</option>
            <option value="">Category</option>
          </select>
        </div>
      </div>

      {/* Post container */}
      <div className="w-full flex flex-col md:flex-row md:flex-wrap md:justify-around">
        {previews.length === 0 && <p>No previews found</p>}
        {previews.length > 0 &&
          previews.map((preview) => (
            <Preview key={preview.title} title={preview.title} description={preview.description} tags={preview.tags} />
          ))}
      </div>
    </section>
  );
}
