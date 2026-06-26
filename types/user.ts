export interface Product {
  type: string;
  id: number;
}

export interface User {
  full_name: string;
  profile_photo: string;
  products: Product[];
}
