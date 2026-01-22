import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const images = Array.isArray(product.images)
    ? product.images
    : product.image
      ? [product.image]
      : [];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [images]);

  const handleProductDetail = () => {
  // if(!id) return;
    navigate(`/products/${product._id}`);
  };

  return (
    <div
      onClick={handleProductDetail}
      className="Item w-72 h-auto hover:shadow-md p-4 hover:bg-gray-100 transition-all duration-500 cursor-pointer"
    >
      <img
        src={images[currentImage] || "/fallback.webp"}
        alt={product.productName}
        className="w-full transition-opacity duration-500"
      />

      <h2 className="mt-2 font-semibold">{product.productName}</h2>
      <h2 className="text-sm">★ 5.0</h2>
      <h2 className="text-sm font-semibold">From {product.price} $</h2>
    </div>
  );
};

export default ProductCard;
