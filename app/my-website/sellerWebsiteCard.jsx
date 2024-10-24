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

  // Accessing the sellerProducts, loading, and error states from Redux
  const { sellerProducts: products, loading, error } = useSelector((state) => state.sellerProducts);

  useEffect(() => {
    const sellerId = Cookies.get("userId");
    if (sellerId) {
      dispatch(fetchSellerProducts(sellerId));
      console.log("Fetching products for sellerId: ", sellerId);
    } else {
      console.error("No seller ID found in cookies");
    }
  }, [dispatch]);

  useEffect(() => {
    console.log("Products from Redux after fetch:", products);
  }, [products]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!products || products.length === 0) {
    return <p>No products found for this seller.</p>;
  }

  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center mb-60 justify-center gap-3.5 px-4 border-blue_gray-100_02 border border-solid bg-gray-10 w-[99%] rounded-[14px]`}
    >
      {products.map((productData, index) => (
        <div key={productData._id} className="self-stretch">
          <div className="mr-1.5 mt-1 flex items-center justify-between gap-5 self-stretch md:mr-0 md:flex-col">
            <div className="flex flex-1 items-center justify-left md:self-stretch">
              <Text
                size="textxl"
                as="p"
                className="text-indigo-a400 mr-[0.5rem]"
              >
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

          <div className="flex justify-end mt-4 w-full">
            <Button
              className="min-w-[134px] rounded-xl font-bold text-white bg-gray-600 text-md h-10 mb-[0.3rem] mr-[1rem]"
              size="md"
              onClick={() => console.log(`Deactivate clicked for product ${productData._id}`)}
            >
              Deactivate
            </Button>
            <Button
              className="min-w-[134px] rounded-xl font-bold text-white bg-gray-600 text-md h-10 mb-[0.3rem]"
              size="md"
              onClick={() => console.log(`Edit clicked for product ${productData._id}`)}
            >
              Edit
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}

