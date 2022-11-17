// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { TPost } from '../../types';

const posts: TPost[] = [
  {
    id: 1,
    title: 'First post',
    description: 'blah blah blah',
  },
  {
    id: 2,
    title: 'Second post',
    description: 'blah blah blah',
  },
  {
    id: 3,
    title: 'Third post',
    description: 'blah blah blah',
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse<TPost[]>) {
  res.status(200).json(posts);
}
