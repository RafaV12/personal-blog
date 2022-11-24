import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { collection, query, where, getDocs } from 'firebase/firestore';

import { TPost } from '../../types';
import { db } from '../../firebase';

interface PostProps {
  post: TPost;
}

export default function Post({ post }: PostProps) {
  const { title, text, tags } = post;
  const router = useRouter();
  // If prop(post) is empty, it means no post was found when getting data from server
  const isPostEmpty = (post: TPost) => Object.values(post).every((val) => typeof val === 'undefined');

  useEffect(() => {
    if (isPostEmpty(post)) {
      router.push('/404');
    }
  }, [post]);

  return (
    <div className="p-8">
      <div className="mt-10">
        <img src="" alt="" />
        <h1 className="mb-2 text-4xl">{title}</h1>
        <p className="text-zinc-700">{text}</p>
      </div>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  let title: TPost['title'] = context.query.title;
  // We get the title formated with dashes from the url query i.e: '/posts/Title-to-post'
  // Take the dashes out so we can search for it in the database
  title = title.replaceAll('-', ' ');
  let post;

  const q = query(collection(db, 'posts'), where('title', '==', title));
  try {
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const { title, description, text } = doc.data();
      post = {
        title,
        description,
        text,
      };
    });
  } catch (error) {
    console.log(error);
  }

  if (post) {
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
