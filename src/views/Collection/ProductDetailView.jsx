import Footer from "@/components/Footer";
import QuantityButton from "@/components/QuantityButton";
import React from "react";

export default function ProductDetailView() {
  return (
    <>
      <section className="py-8 px-16 md:flex justify-center">
        <div className="imgHolder md:w-4/10 py-4 flex flex-col items-center justify-center">
          <img src="/1.png" alt="" className="aspect-square w-full max-w-120" />
          <div className="hoverimg hidden  w-full max-h-32 max-w-120 md:flex justify-between py-4">
            <img src="/1.png" alt="" className="md:h-full aspect-square" />
            <img src="/1.png" alt="" className="md:h-full aspect-square" />
            <img src="/1.png" alt="" className="md:h-full aspect-square" />
            <img src="/1.png" alt="" className="md:h-full aspect-square" />
          </div>
        </div>
        <div className=" md:w-4/10 py-4 md:pl-8 flex flex-col ">
          <h1 className="text-4xl font-bold">ItemName Collection 1</h1>
          <h2 className="text-xl pt-2">★ 5.0</h2>
          <h2 className="text-xl pt-8">From 4,320 $</h2>
          <p className="pt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation{" "}
          </p>
          <h2 className="text-xl pt-8 font-semibold">size</h2>
          <div className="size-selector pt-2 flex gap-2">
            <button className=" border-primary border-2 py-2 px-3  rounded-lg text-primary ">
              S
            </button>
            <button className=" border-primary border-2 py-2 px-3  rounded-lg text-primary ">
              M
            </button>
            <button className=" border-primary border-2 py-2 px-3  rounded-lg text-primary ">
              L
            </button>
            <button className=" border-primary border-2 py-2 px-3  rounded-lg text-primary ">
              XL
            </button>
          </div>
          <h2 className="text-xl pt-8 font-semibold">Quantity</h2>
          <div className="Quantity flex h-10">
            <QuantityButton />
          </div>
          <button className="mt-4 border-primary border-2 p-4 w-8/10 mx-auto text-primary ">
            Add to cart
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
}
