declare module "*.module.css";
declare module "*.gif";
interface ProductType {
  _id?: string | undefined;
  id?: string;
  title: string;
  images?: string;
  description: string;
  price: number;
  discountPercentage?: number;
  rating?: number;
  stock?: number;
  brand?: string;
  category?: string;
  thumbnail?: string;
}

interface ProdAddNew {
  title: string;
  description: string | undefined;
  images: string | undefined;
  price: number | undefined;
}


interface Products {
  products: ProductType[];
}