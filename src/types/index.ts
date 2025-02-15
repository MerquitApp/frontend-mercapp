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
