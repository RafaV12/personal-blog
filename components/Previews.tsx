import Preview from './Preview';

import { TPostPreview } from '../types';

interface PreviewsProps {
  previews: TPostPreview[];
}

export default function Previews({ previews }: PreviewsProps) {
  return (
    <section className="container flex flex-col">
      <div className='pb-2 mb-12 border-b-2 border-zinc-700 w-full'>
        <p className='text-xl'>My posts</p>
      </div>

      {/* Post container */}
      <div>
        {previews.length === 0 && <p>No previews found</p>}
        {previews.length > 0 &&
          previews.map((preview) => (
            <Preview key={preview.title} title={preview.title} description={preview.description} tags={preview.tags} />
          ))}
      </div>
    </section>
  );
}
