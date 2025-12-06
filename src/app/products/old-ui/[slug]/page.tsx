import Main from "@/components/Products/Product/Main";
import ProductsList from "@/components/Products/List";
import Detail from "@/components/Products/Product/Detail";
import Reviews from "@/components/Products/Product/Reviews";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ({ params }: PageProps) {
  const { slug } = await params;

  return (
    <>
      <div className="w-[98%] max-w-[1250px] mx-auto my-4 flex flex-col gap-8">
        <Main />
        <Detail />
      </div>
      <ProductsList title="You Might Also Like" />
      <ProductsList title="Frequently Bought Together" />
      <div className="w-[98%] max-w-[1250px] mx-auto mb-4 flex flex-col gap-8 mt-20">
        <Reviews />
      </div>
    </>
  );
}
