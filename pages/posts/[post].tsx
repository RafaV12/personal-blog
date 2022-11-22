import { TPost } from '../../types';

interface PostProps {
  post: TPost;
}

export default function Post({ post }: PostProps) {
  return (
    <div className="p-8">
      <div className="mt-10">
        <img src="" alt="" />
        <h1 className="mb-2 text-4xl">{post.title}</h1>
        <p className="text-zinc-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dolor accusamus magni incidunt minima, a corporis, temporibus
          dolores animi architecto nostrum sed maxime sequi quidem veritatis rem omnis? Magni, nesciunt.
        </p>
      </div>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  // const id = (parseInt(context.query.post) || 1).toString();
  // const response = await fetch(`https://dummyjson.com/products/${id}`);
  // const data = await response.json();

  return {
    props: {
      post: {
        id: 1,
        title: 'Hello world!',
        description: 'This is a new world',
        text: 'This is a test post for those who want to know',
      },
    },
  };
}
