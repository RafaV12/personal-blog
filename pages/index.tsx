import Head from 'next/head';
import Image from 'next/image';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

import { TPostPreview } from '../types';
import mainImg from '../public/test.webp';
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
      <div className="pt-16 mb-32 container h-screen flex flex-col items-center lg:mb-0 lg:h-screen lg:flex-row">
        <h1 className="mb-12 text-5xl font-semibold italic">The life and research of a person on the Internet</h1>
        <Image className="w-full h-auto" src={mainImg} alt={'asds'}></Image>
      </div>

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
