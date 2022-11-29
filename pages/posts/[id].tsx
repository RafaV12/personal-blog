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
  const { title, text } = post;
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
        <title>{`${title} - RafaV12`}</title>
        <meta name="description" content="" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>

      <div className="px-8 pb-4 min-h-screen flex flex-col items-center">
        <article className="mt-14 container flex flex-col md:items-center lg:items-start">
          <h1 className="text-4xl lg:text-[6rem] lg:leading-[7rem]">{title}</h1>
          <Image className="my-8 w-full h-56 rounded-2xl md:w-80 lg:h-80 lg:w-2/4 xl:w-2/5" src={testImg} alt={'asds'}></Image>
          <p ref={postElement} className="text-zinc-700 md:text-justify lg:text-left"></p>
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
