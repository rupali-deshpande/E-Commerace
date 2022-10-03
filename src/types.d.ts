declare module "*.module.css";
declare module "*.gif";
export interface ProductType {
  _id?: string | undefined;
  id?: string;
  title: string;
  images: string;
  images:string[];
  description: string;
  price: number;
  discountPercentage?: number;
  rating?: number;
  stock?: number;
  brand?: string;
  category?: string;
  thumbnail?: string;
}

export interface ProdAddNew {
  title: string;
  description: string | undefined;
  images: string | undefined;
  price: number | undefined;
}


export interface ProductsModel {
  products: ProductType[];
  
}