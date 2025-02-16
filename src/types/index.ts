export interface ProductCard {
  id: string;
  title: string;
  price: number;
  rate: number;
  userName: string;
  imageSrc: string;
  description: string;
}

export interface Message {
  message: string;
  isLocal: boolean;
}

export interface ProductResponse {
  id: number;
  name: string;
  description: string;
  price: number;
  tags: string[];
  userId: number;
  categories: unknown[];
  images: Image[];
  cover_image: Image;
  user: User;
}

export interface Image {
  id: number;
  image: string;
  productId: number | null;
  coverForId: number | null;
}

export interface User {
  user_id: number;
  name: string;
  email: string;
  phone_number: null;
  role: string;
  verification_state: boolean;
  password: null;
  profile_picture: string;
  created_at: Date;
}
