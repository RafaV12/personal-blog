import { useRouter } from 'next/router';

export default function Post() {
  const router = useRouter();
  let { post } = router.query;
  
  return (
    <>
      <h1 className="mb-2 text-4xl">{post?.toString().replaceAll('-', ' ')}</h1>
      <p className="text-zinc-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dolor accusamus magni incidunt minima, a corporis, temporibus
        dolores animi architecto nostrum sed maxime sequi quidem veritatis rem omnis? Magni, nesciunt.
      </p>
    </>
  );
}
