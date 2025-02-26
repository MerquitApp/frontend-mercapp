export enum Environment {
  Development = 'development',
  Production = 'production',
  Test = 'test'
}

export interface ProductCard {
  id: string;
  title: string;
  price: number;
  rate: number;
  userName: string;
  imageSrc: string;
  description: string;
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
  updated_at: Date;
}

export interface Chat {
  id: number;
  createdAt: Date;
  messages: Message[];
  users: User[];
}

export interface Message {
  id: number;
  content: string;
  chatId: number;
  userId: number;
  createdAt: Date;
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
  github_id: null | string;
  google_id: null | string;
  created_at: Date;
  updated_at: Date;
}

export interface FiltersType {
  q?: string;
  category?: string;
  distance?: number;
  userId?: number;
}
