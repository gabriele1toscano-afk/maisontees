export interface Collection {
  id: string;
  title: string;
  imageUrl: string;
  altText: string;
}

export interface Product {
  id: string;
  title: string;
  price: string;
  imageUrl: string;
  altText: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  rating: number; // 0-5
}