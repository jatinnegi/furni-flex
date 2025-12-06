import Container from "@/components/Layout/Container";
import Filter from "@/components/Products/Collections/Filter";
import Sort from "@/components/Products/Collections/Sort";
import CollectionItem from "@/components/Products/Collections/CollectionItem";

const products: CollectionItemProps[] = [
  {
    productId: 1,
    productHref: "/products/helm-sofa",
    productImgHref: "/image/products/helm-sofa/product-card.webp",
    productName: "Helm Sofa",
    productPrice: 4299,
  },
  {
    productId: 2,
    productHref: "/products/helm-armchair",
    productImgHref: "/image/products/helm-armchair/img-1.webp",
    productName: "Helm Armchair",
    productPrice: 2299,
  },
];

interface PageProps {
  params: Promise<{ category: string }>;
}

export default async function ({ params }: PageProps) {
  const { category } = await params;

  return (
    <Container>
      <div className="flex gap-10 mt-10 mb-64">
        <Filter />
        <div className="w-full">
          <Sort />
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 mt-6">
            {products.map((product: CollectionItemProps) => (
              <CollectionItem key={product.productId} product={product} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
