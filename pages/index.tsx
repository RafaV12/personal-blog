import Head from 'next/head';
import Image from 'next/image';

import { TPostPreview } from '../types';
import mainImg from '../public/main-img.jpg';
import Previews from '../components/Previews';

interface HomeProps {
  previews: TPostPreview[];
}

export default function Home({ previews }: HomeProps) {
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

      <Previews previews={previews} />
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      previews: [
        {
          id: 1,
          title: 'Hello world!',
          description: 'This is a new world',
        },
      ],
    },
  };
}
