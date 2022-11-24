import Head from 'next/head';
import React, { SyntheticEvent, useState, useEffect } from 'react';
import { collection, addDoc } from 'firebase/firestore';

import { db } from '../../firebase';
import { TPost } from '../../types/index';

export default function Dashboard() {
  const [post, setPost] = useState<TPost>({
    title: '',
    description: '',
    text: '',
    tags: '',
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setPost({ ...post, [e.currentTarget.name]: e.currentTarget.value });
  };

  const onSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, 'posts'), post);
    console.log('Document written with ID: ', docRef.id);
  };

  return (
    <div className="px-7 pt-12">
      <Head>
        <title>Write a post!</title>
        <meta name="description" content="The personal blog of RafaV12" />
      </Head>

      <form className="flex flex-col" onSubmit={onSubmit}>
        <label htmlFor="title">Post Title</label>
        <input
          value={post.title}
          type="text"
          name="title"
          className="p-2 px-3 mt-1 mb-4 border-2 outline-none"
          onChange={onChange}
          placeholder="Enter title here"
        />

        <label htmlFor="description">Post description</label>
        <textarea
          value={post.description}
          name="description"
          className="p-2 px-3 mt-1 mb-4 border-2 resize-none outline-none"
          onChange={onChange}
          placeholder="Enter description here"
        />

        <label htmlFor="text">Post content</label>
        <textarea
          value={post.text}
          name="text"
          onChange={onChange}
          className="p-2 px-3 mt-1 mb-4 h-40 border-2 resize-none outline-none"
          placeholder="Tell me about it"
        />

        <label htmlFor="title">Post Tags</label>
        <input
          value={post.tags}
          type="text"
          name="tags"
          className="p-2 px-3 mt-1 mb-4 border-2 outline-none"
          onChange={onChange}
          placeholder="Enter tags (separated by commas)"
        />

        <button className="p-1 mt-2 border-2" type="submit">
          POST
        </button>
      </form>
    </div>
  );
}
