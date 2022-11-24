import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { doc, getDoc } from 'firebase/firestore';

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
  const id: TPost['id'] = context.query.post;

  const docRef = doc(db, 'posts', id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const { title, description, tags, text } = docSnap.data();
    const post: TPost = {
      id,
      title,
      description,
      text,
      tags,
    };

    return {
      props: {
        post,
      },
    };
  } else {
    // Returns empty object (post) if nothing is found
    return {
      props: {
        post: {},
      },
    };
  }
}
