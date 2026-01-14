import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { useParams } from "react-router-dom";

export default function ProductView() {
  const { id } = useParams();
  return (
    <div>
      <section className="collect-view py-8 md:px-16 flex flex-col items-center gap-4 justify-center pt-12 text-center">
        <h1 className="text-4xl font-semibold">Our Collection {id}</h1>
        <h2>
          Shop now for the trendiest, most-loved dog products in one place.
        </h2>
        <div className="collection-bento w-8/10 md:w-fit grid md:grid-cols-4 gap-4 justify-center pt-8 text-left">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>
      <Footer/>
    </div>
  );
}
