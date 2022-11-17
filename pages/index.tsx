import Head from 'next/head';
import Image from 'next/image';

import { TPost } from '../types';
import mainImg from '../public/main-img.jpg';
import Posts from '../components/Posts';

interface HomeProps {
  posts: TPost[];
}

export default function Home({ posts }: HomeProps) {
  return (
    <div className="p-8">
      <Head>
        <title>Blog - Home</title>
        <meta name="description" content="" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>

      {/* Landing page */}
      <div className="mt-10 mb-32 flex flex-col items-center lg:mb-0 lg:h-screen">
        <div className="mb-7 flex flex-col items-center">
          <Image className="mb-2" src={mainImg} alt={'asds'} width={500} height={500}></Image>
          <q>blah blah blah blah...</q>
        </div>
        <h1 className="mb-2 text-4xl font-semibold italic">The life and times of a person on the Internet.</h1>
        <p className="text-zinc-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dolor accusamus magni incidunt minima, a corporis, temporibus
          dolores animi architecto nostrum sed maxime sequi quidem veritatis rem omnis? Magni, nesciunt.
        </p>
      </div>

      <Posts posts={posts} />
    </div>
  );
}

export async function getServerSideProps() {
  const response = await fetch('https://dummyjson.com/products');
  const { products: data } = await response.json();

  return {
    props: {
      posts: data,
    },
  };
}
