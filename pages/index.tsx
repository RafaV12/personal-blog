import Head from 'next/head';
import Image from 'next/image';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

import { TPostPreview } from '../types';
import mainImg from '../public/main-img.jpg';
import Previews from '../components/Previews';

interface HomeProps {
  previews: TPostPreview[];
}

export default function Home({ previews }: HomeProps) {
  return (
    <div className="px-8">
      <Head>
        <title>Blog - Home</title>
        <meta name="description" content="" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>

      {/* Landing page */}
      <div className="pt-20 mb-32 h-screen flex flex-col items-center lg:mb-0 lg:h-screen">
        <h1 className="mb-4 text-5xl font-semibold italic">The life and research of a person on the Internet.</h1>
        <p className="text-zinc-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dolor accusamus magni incidunt minima, a corporis, temporibus
          dolores animi architecto nostrum sed maxime sequi quidem veritatis rem omnis? Magni, nesciunt.
        </p>
        <Image className="absolute bottom-10" src={mainImg} alt={'asds'} width={500} height={500}></Image>
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
