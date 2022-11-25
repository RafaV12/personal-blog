import Preview from './Preview';

import { TPostPreview } from '../types';

interface PreviewsProps {
  previews: TPostPreview[];
}

export default function Previews({ previews }: PreviewsProps) {
  return (
    <section className="container flex flex-col">
      <h2 className="mb-4 text-lg font-semibold">What are my thoughts?</h2>

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
