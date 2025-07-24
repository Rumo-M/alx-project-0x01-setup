// interfaces/index.ts

export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostData {
  title: string;
  body: string;
  id?: number;
}

export interface PostModalProps {
  onClose: () => void;
  onSubmit: (post: PostData) => void;
  post?: PostData | null;
}
