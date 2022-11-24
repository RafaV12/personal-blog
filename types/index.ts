export type TPost = {
  title: string;
  description: string;
  text: string;
  tags?: string;
};

export type TPostPreview = Omit<TPost, 'text'>;

export {};
