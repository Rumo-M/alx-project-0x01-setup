export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    city: string;
    zipcode: string;
  };
  company: {
    name: string;
    catchPhrase: string;
  };
}

// PostData with optional id
export interface PostData {
  id?: number;  // ✅ optional id property
  title: string;
  body: string;
}

// Props for a form or component that submits a post
export interface PostFormProps {
  onClose: () => void;
  onSubmit: (post: PostData) => void;
}
