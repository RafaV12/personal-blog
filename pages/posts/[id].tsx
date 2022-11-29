import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { doc, getDoc } from 'firebase/firestore';

import { TPost } from '../../types';
import { db } from '../../firebase';
import testImg from '../../public/test-img.jpg';

interface PostProps {
  post: TPost;
}

export default function Post({ post }: PostProps) {
  const postElement = useRef<HTMLParagraphElement>(null);
  const { title, text, description } = post;
  const router = useRouter();
  // If the prop 'post' is empty, it means no post was found when getting data from server
  const isPostEmpty = (post: TPost) => Object.values(post).every((val) => typeof val === 'undefined');

  useEffect(() => {
    if (isPostEmpty(post)) {
      router.push('/404');
    }
    // There are HTML tags inside the 'text' coming from the server. Set the inner HTML of the post.
    if (postElement.current != null) {
      postElement.current.innerHTML = text;
    }
  }, [post]);

  return (
    <>
      <Head>
        <title>{`${title} - RafaV12's blog`}</title>
        <meta name="description" content={description} />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>

      <div className="px-8 pb-4 min-h-screen flex flex-col items-center">
        <article className="mt-14 container flex flex-col md:items-center lg:mt-0 lg:h-screen lg:flex-row lg:justify-between">
          <h1 className="mb-6 text-4xl lg:w-2/6 lg:text-[5rem] lg:leading-[5rem] italic">{title}</h1>

          <div className="w-full flex flex-col items-center lg:w-3/5 lg:h-4/5 lg:pr-3 lg:overflow-auto lg:inline">
            <Image
              className="mb-6 w-full h-56 md:w-80 lg:mr-6 lg:mb-0 lg:h-48 lg:float-left lg:w-2/4 xl:w-56"
              src={testImg}
              alt={'asds'}
            ></Image>
            <p ref={postElement} className="text-zinc-700 md:text-justify lg:text-left"></p>
          </div>
        </article>
      </div>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const id: TPost['id'] = context.query.id;

  const docRef = doc(db, 'posts', id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const post = docSnap.data();
    return {
      props: {
        post,
      },
    };
  } else {
    // Return an empty object if post does not exist
    return {
      props: {
        post: {},
      },
    };
  }
}
