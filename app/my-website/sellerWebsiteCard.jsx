import { Text } from "../common/Text";
import { Button } from "../common/Button";
import Image from "next/image";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSellerProducts } from "./../../app/redux/sellerSlice";
import Cookies from "js-cookie";

export default function UserProfile3({
  urlIsHiddenText = "URL is hidden",
  ...props
}) {
  const dispatch = useDispatch();

  // Accessing the products, loading, and error states from Redux
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    const sellerId = Cookies.get("userId");
    if (sellerId) {
      console.log("Fetching products for sellerId: ", sellerId); // Debug sellerId
      dispatch(fetchSellerProducts(sellerId));
    } else {
      console.error("No seller ID found in cookies");
    }
  }, [dispatch]);

  // Debugging: Log Redux state on each render
  useEffect(() => {
    console.log("Products from Redux after fetch:", products); // Debugging products after the state updates
  }, [products]);

  if (loading) {
    console.log("Loading products..."); // Debug loading state
    return <p>Loading...</p>;
  }

  if (error) {
    console.log("Error fetching products:", error); // Debug error state
    return <p>Error: {error}</p>;
  }

  // Ensure products are not empty
  if (!products || products.length === 0) {
    console.log("No products found for the seller"); // Debug empty product array
    return <p>No products found for this seller.</p>;
  }

  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center mb-60 justify-center gap-3.5 px-4 border-blue_gray-100_02 border border-solid bg-gray-10 w-[99%] rounded-[14px]`}
    >
      {/* Rendering fetched products */}
      {products.map((productData) => (
        <div key={productData._id} className="self-stretch">
          <div className="mr-1.5 mt-1 flex items-center justify-between gap-5 self-stretch md:mr-0 md:flex-col">
            <div className="flex flex-1 items-center justify-left md:self-stretch">
              <Text
                size="textxl"
                as="p"
                className="text-indigo-a400 mr-[0.5rem]"
              >
                {/* Show URL or hidden text if URL is not available */}
                {productData.URL ? productData.URL : urlIsHiddenText}
              </Text>
            </div>
            <div className="flex items-center">
              <Image
                src="/images/dustbin.png"
                width={24}
                height={24}
                alt="Delete Product"
                className="ml-4 h-[24px] w-[24px]"
              />
            </div>
          </div>
          <hr className="mt-[-0.8rem] border-gray-300 w-full" />

          {/* Render other product details here */}
          {/* Add other product details as needed */}

          <div className="flex justify-end mt-4 w-full">
            <Button
              className="min-w-[134px] rounded-xl font-bold text-white bg-gray-600 text-md h-10 mb-[0.3rem] mr-[1rem]"
              size="md"
              onClick={() => console.log("Deactivate clicked")}
            >
              Deactivate
            </Button>

            <Button
              className="min-w-[134px] rounded-xl font-bold text-white bg-gray-600 text-md h-10 mb-[0.3rem]"
              size="md"
              onClick={() => console.log("Edit clicked")}
            >
              Edit
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
