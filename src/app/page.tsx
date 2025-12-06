import ProductsList from "@/components/Products/List";
import PromoSlider from "@/components/PromoSlider";
import TopCollections from "@/components/TopCollections";
import TopSalePicks from "@/components/TopSalePicks";
import FeaturedBlogs from "@/components/FeaturedBlogs";
import CustomerReviews from "@/components/CustomerReviews";
import StoreFeatures from "@/components/StoreFeatures";

export default function Home() {
  return (
    <>
      <PromoSlider />
      <TopCollections />
      <ProductsList
        title="Well-Traveled Designs"
        className="mt-24"
        largeTitle
        expanded
      />
      <TopSalePicks />
      <CustomerReviews />
      <FeaturedBlogs />
      <StoreFeatures />
    </>
  );
}
