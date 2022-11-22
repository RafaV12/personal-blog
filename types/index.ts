export type TPost = {
  id: number;
  title: string;
  description: string;
  text: string;
  image?: string;
  tags?: string;
};

export type TPostPreview = Omit<TPost, 'text'>;

export {};
