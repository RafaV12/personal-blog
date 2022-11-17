import Post from './Post';

import { TPost } from '../types';

interface PostProps {
  posts: TPost[];
}

export default function Posts({ posts }: PostProps) {
  return (
    <section className="container flex flex-col">
      <h2 className="mb-4 text-lg font-semibold">What are my thoughts?</h2>

      {/* Post container */}
      <div>
        {posts.length === 0 && <p>No posts found</p>}
        {posts.length > 0 && posts.map((post) => <Post key={post.id} id={post.id} title={post.title} desc={post.description} />)}
      </div>
    </section>
  );
}
