import { Heading } from "../common/Heading";
import { Text } from "../common/Text";
import { Img } from "../common/Img";
import { Button } from "../common/Button";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSellerProducts } from "../redux/productSlice";
import Image from "next/image";
// const fetchAllProducts = async () => {
//   try {
//     const result = await axios.get(`http://localhost:3001/api/seller/products/${sellerId}`);
//     return result.data;
//   } catch (error) {
//     console.error("Error fetching products:", error);
//     return [];
//   }
// };



export default function UserProfile3({
  sellerId,
  urlIsHiddenText = "URL is hidden",
  contributorText = "Contributor",
  artText = "Art",
  healthText = "Health",
  businessText = "Business",
  buyPostButton = "Buy Post",
  statusText = "Status",
  priceText = "$3,640.87",
  articleCreationPlacementText = "Article Creation & Placement",
  writingPriceText = "$3,705.81",
  confirmationStatus = "Confirmation Status",
  mozDAValue = "92",
  longarticleText = (
    <>
      Long Article <br />
      Creation & Placement
    </>
  ),
  semrushDAValue = "79",
  ahrefsDRRangeText = "Ahrefs DR Range",
  ahrefsDRRangeValue = "94",
  completionRateText = "Completion Rate",
  completionRateValue = "Up to 88.24%",
  avgLifetimeOfLinksText = "Avg lifetime of links",
  avgLifetimeOfLinksValue = "Up to 100.00%",
  contentPlacementText = "Content Placement",

  tasksWithInitialDomainText = "Tasks with Initial Domain & Price",
  tasksWithInitialDomainValue = "100.00%",
  WritingPlacementText = "Writing & Placement",
  ahrefsOrganicTrafficValue = "1,801,273",
  domainText = (
    <>
      Tasks with <br /> Initial Domain & Price
    </>
  ),
  totalTrafficValue = "Not Provided",
  specialText = "Special Topic",
  language = "German",
  lifetimeLinksText = "Avg Lifetime of Links",
  countryValue = "Germany",
  postText = (
    <>
      Mini Post <br />
      Creation & Placement
    </>
  ),
  linksValue = "Dofollow",
  tatText = "TAT",
  markedSponsoredByValue = "No",
  ...props
}) {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchSellerProducts(sellerId));
  }, [dispatch, sellerId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // Split tags string into an array
  const tagArray = productData.tags.split(", ").map((tag) => tag.trim());

  {
    return (
      <div
        {...props}
        className={`${props.className} flex flex-col items-center mb-60 justify-center gap-3.5 px-4 border-blue_gray-100_02 border border-solid bg-gray-10 w-[99%] rounded-[14px]`}
      >
        {products && products.length > 0 ? (
          products.map((productData) => (
            <div key={productData._id} className="self-stretch">
              <div className="mr-1.5 mt-1 flex items-center justify-between gap-5 self-stretch md:mr-0 md:flex-col">
                <div className="flex flex-1 items-center justify-left md:self-stretch">
                  <Text size="textxl" as="p" className="text-indigo-a400 mr-[0.5rem]">
                    {productData.URL || urlIsHiddenText}
                  </Text>
                </div>
                <div className="flex items-center">
                  <Image
                    src="/images/dustbin.png"
                    width={24}
                    height={24}
                    alt="Material Symbol"
                    className="ml-4 h-[24px] w-[24px]"
                  />
                </div>
              </div>
              <hr className="mt-[-0.8rem] border-gray-300 w-full" />
  
              {/* Other product details go here */}
              
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
          ))
        ) : (
          <p>No products found for this seller.</p>
        )}
      </div>
    );
  }
}
