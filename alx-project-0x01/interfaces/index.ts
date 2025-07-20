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

// Props interface for a User modal component
export interface UserModalProps {
  onClose: () => void;
  onSubmit: (post: UserProps) => void;  // <== as requested
}
