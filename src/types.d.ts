declare module "*.module.css";
declare module "*.gif";
export interface ProductType {
  _id?: string;
  id?: string|undefined;
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
  Title?: string;
  description?: string | undefined;
  images?: string | undefined;
  price?: number | undefined;
}


export interface ProductsModel {
  products: ProductType[];
  cartProducts: ProductType[];
  wishProducts:ProductType[];
  newproduct?:ProdAddNew;
  
}