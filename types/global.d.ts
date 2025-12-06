interface ItemProps {
  productId: number;
  productName: string;
  productPrice: number;
  productImgHref: string;
}

interface CartItemProps extends ItemProps {
  quantity: number;
}

interface CollectionItemProps extends ItemProps {
  productHref: string;
}

interface ProductProps {
  id: number;
  name: string;
  price: number;
  images: ProductImageProps[];
}

interface ProductImageProps {
  id: number;
  href: string;
}
