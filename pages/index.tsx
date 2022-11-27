import Head from 'next/head';
import Image from 'next/image';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

import { TPostPreview } from '../types';
import astronautImg from '../public/astronaut.png';
import Previews from '../components/Previews';

interface HomeProps {
  previews: TPostPreview[];
}

export default function Home({ previews }: HomeProps) {
  return (
    <div className="px-8 flex flex-col items-center xl:px-0">
      <Head>
        <title>Home - RafaV12's blog</title>
        <meta name="description" content="" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>

      {/* Landing page */}
      <section className="pt-16 mb-32 container h-screen flex flex-col items-center md:h-auto lg:pt-0 lg:mb-0 lg:h-screen lg:flex-row">
        <h1 className="mb-10 text-5xl font-semibold italic md:text-5xl md:text-center lg:mb-0 lg:text-start lg:text-7xl xl:text-8xl">
          The life and research of a person on the Internet
        </h1>

        <div className="flex flex-col items-center">
          <Image className="w-4/5 md:w-2/4 lg:w-4/5 mb-4 rounded-2xl" src={astronautImg} alt="astrounaut"></Image>
          <p className="w-4/5 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex voluptates quia, dicta aut optio possimus architecto labore.
          </p>
        </div>
      </section>

      <Previews previews={previews} />
    </div>
  );
}

export async function getServerSideProps() {
  let previews: TPostPreview[] = [];
  const querySnapshot = await getDocs(collection(db, 'posts'));
  querySnapshot.forEach((doc) => {
    // Normalize doc to be of type 'TPostPreview' and push to 'previews' array
    let { title, description, tags } = doc.data();
    let preview: TPostPreview = {
      title,
      description,
      tags,
    };
    previews.push(preview);
  });

  return {
    props: {
      previews,
    },
  };
}
