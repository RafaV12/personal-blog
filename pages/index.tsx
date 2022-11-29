import Head from 'next/head';
import Image from 'next/image';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

import { TPostPreview } from '../types';
import astronautImg from '../public/astronaut.png';
import Previews from '../components/Previews';
import Footer from '../components/Footer';

interface HomeProps {
  previews: TPostPreview[];
}

export default function Home({ previews }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home - RafaV12's blog</title>
        <meta
          name="description"
          content="The life and research of a person on the Internet. You could find something interesting here. Or not."
        />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>

      <div className="px-8 min-h-screen flex flex-col items-center">
        {/* Landing page */}
        <section className="pt-16 mb-32 container flex flex-col items-center lg:pt-0 lg:px-6 lg:mb-0 lg:h-screen lg:flex-row lg:justify-between">
          <h1 className="mb-10 text-5xl italic md:text-5xl md:text-center lg:mb-0 lg:w-2/4 lg:text-start lg:text-7xl xl:text-8xl">
            The life and research of a person on the Internet
          </h1>

          <div className="w-full lg:w-2/5 flex flex-col items-center">
            <Image className="mb-4 w-4/5 md:w-2/4 lg:w-3/5" src={astronautImg} alt="astrounaut"></Image>
            <p className="w-4/5 md:w-2/4 lg:w-3/5 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex voluptates quia, dicta aut optio possimus architecto labore.
            </p>
          </div>
        </section>

        <Previews previews={previews} />

        <Footer />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  let previews: TPostPreview[] = [];
  const querySnapshot = await getDocs(collection(db, 'posts'));
  querySnapshot.forEach((doc) => {
    // Normalize doc to be of type 'TPostPreview' and push to 'previews' array
    let { title, description, tags } = doc.data();

    let preview: TPostPreview = {
      id: doc.id,
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
