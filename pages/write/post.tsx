import Head from 'next/head';
import React, { useState, useEffect, useRef } from 'react';
import { doc, setDoc } from 'firebase/firestore';

import { db } from '../../firebase';
import { TPost } from '../../types/index';

export default function Dashboard() {
  // Get the ref to post's text input, so we can add HTML tags to it later (i.e: bold, italic and underline tags)
  const postTextElem = useRef(null);
  // Ref to the title's input element, so we can created the post's ID based on it.
  const titleElem = useRef({} as HTMLInputElement);
  const [isTextBold, setIsTextBold] = useState<boolean>(false);
  const [isTextUnderlined, setIsTextUnderlined] = useState<boolean>(false);
  const [isTextItalic, setIsTextItalic] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [post, setPost] = useState<TPost>({
    id: '',
    title: '',
    description: '',
    text: '',
    tags: '',
  });

  useEffect(() => {
    // Clear alert messages after 2 seconds
    if (success || error) {
      setTimeout(() => {
        setError(false);
        setSuccess(false);
      }, 2000);
    }
  }, [success, error]);

  const boldText = () => {
    if (isTextBold) {
      setIsTextBold(false);
      setPost({ ...post, text: `${post.text}</strong> ` });
    } else {
      setIsTextBold(true);
      setPost({ ...post, text: `${post.text} <strong>` });
    }
  };

  const underlineText = () => {
    if (isTextUnderlined) {
      setIsTextUnderlined(false);
      setPost({ ...post, text: `${post.text}</u> ` });
    } else {
      setIsTextUnderlined(true);
      setPost({ ...post, text: `${post.text} <u>` });
    }
  };

  const makeTextItalic = () => {
    if (isTextItalic) {
      setIsTextItalic(false);
      setPost({ ...post, text: `${post.text}</i> ` });
    } else {
      setIsTextItalic(true);
      setPost({ ...post, text: `${post.text} <i>` });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    // Adds a new line to post's text when user presses the enter key.
    if (e.key === 'Enter') {
      setPost({ ...post, text: `${post.text} <br/>` });
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setPost({
      ...post,
      id: titleElem.current.value.replaceAll(' ', '-').replaceAll(/[!?.]/g, '').toLowerCase(),
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      // Add a new document in collection "posts"
      await setDoc(doc(db, 'posts', post.id), post);
      setSuccess(true);
    } catch (error) {
      setError(true);
    }

    setPost({ id: '', title: '', description: '', text: '', tags: '' });
  };

  return (
    <div className="px-7 pt-12 min-h-screen">
      <Head>
        <title>Write a post!</title>
        <meta name="robots" content="noindex" />
      </Head>

      {success && <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Post added!</p>}
      {error && <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Something went wrong!</p>}

      <form className="flex flex-col" onSubmit={onSubmit}>
        <label htmlFor="title">Post Title</label>
        <input
          ref={titleElem}
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
        <div className="mt-1">
          <button type="button" onClick={boldText} className="mr-1 px-2 border">
            <strong>B</strong>
          </button>
          <button type="button" onClick={underlineText} className="mr-1 px-2 border">
            <u>U</u>
          </button>
          <button type="button" onClick={makeTextItalic} className="mr-1 px-2 border">
            <i>I</i>
          </button>
        </div>
        <textarea
          ref={postTextElem}
          value={post.text}
          name="text"
          onKeyDown={handleKeyDown}
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
