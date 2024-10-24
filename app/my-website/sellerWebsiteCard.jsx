import { Text } from "../common/Text";
import { Button } from "../common/Button";
import Image from "next/image";
import { Heading } from "./../common/Heading";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSellerProducts } from "./../../app/redux/sellerSlice";
import Cookies from "js-cookie";
 
export default function UserProfile3({
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
    <>
      {products.map((productData) => (
        <div key={productData._id} className="w-[99%] mb-4">
          {/* Add border and shadow classes here */}
          <div className="flex flex-col border border-gray-300 p-4 rounded-lg  ">
            <div className="flex justify-between items-center mb-2">
              <Text size="textxl" as="p" className="text-indigo-a400">
                {productData.URL || "URL is hidden"}
              </Text>
              <Image
                src="/images/dustbin.png"
                width={24}
                height={24}
                alt="Dustbin"
                className="h-[24px] w-[24px] cursor-pointer"
              />
            </div>
  
            <hr className="border-gray-300 w-full mb-4" />
  
            <div className="flex flex-wrap justify-between gap-5">
              <div className="w-[16%] flex flex-col">
                <Text size="textlg" as="p" className="text-adsy_com-black text-[11.5px]">
                  {statusText}
                </Text>
                <Heading as="p" className="text-adsy_com-black font-bold text-[11.5px]">
                  {productData.contentPlacement || priceText}
                </Heading>
                <Text size="textlg" as="p" className="text-adsy_com-black text-[11.5px] mt-4">
                  {"Article Creation & Placement"}
                </Text>
                <Heading as="p" className="text-adsy_com-black font-bold text-[11.5px]">
                  {productData.contentPlacement || priceText}
                </Heading>
              </div>
              
  
              <div className="w-[14%] flex flex-col">
                <Text size="textlg" as="p" className="text-adsy_com-black text-[11.5px]">
                  {confirmationStatus}
                </Text>
                <Heading as="p" className="text-adsy_com-black font-bold text-[11.5px]">
                  {productData.mozDA || mozDAValue}
                </Heading>
                <Text size="textlg" as="p" className="text-adsy_com-black mt-4 text-[11.5px]">
                  {longarticleText}
                </Text>
                <Heading as="p" className="text-adsy_com-black font-bold text-[11.5px]">
                  {productData.semrushDA || semrushDAValue}
                </Heading>
              </div>
  
              <div className="w-[12%] flex flex-col">
                <Text size="textlg" as="p" className="text-adsy_com-black text-[11.5px]">
                  {contentPlacementText}
                </Text>
                <Heading as="p" className="text-adsy_com-black font-bold text-[11.5px]">
                  {productData.mozDA || mozDAValue}
                </Heading>
                <Text size="textlg" as="p" className="text-adsy_com-black mt-4 text-[11.5px]">
                  {completionRateText}
                </Text>
                <Heading as="p" className="text-adsy_com-black font-bold text-[11.5px]">
                  {productData.semrushDA || semrushDAValue}
                </Heading>
              </div>
  
              <div className="w-[16%] flex flex-col">
                <Text size="textmd" as="p" className="text-adsy_com-black text-[10.5px] font-normal">
                  {WritingPlacementText}
                </Text>
                <Heading as="p" className="text-adsy_com-black font-bold text-[11.5px]">
                  {productData.ahrefsOrganicTraffic || ahrefsOrganicTrafficValue}
                </Heading>
                <Text size="textmd" as="p" className="text-adsy_com-black mt-4 text-[10.5px] font-normal">
                  {tasksWithInitialDomainText}
                </Text>
                <Heading as="p" className="text-adsy_com-black font-bold text-[11.5px]">
                  {productData.totalTraffic || totalTrafficValue}
                </Heading>
              </div>
  
              <div className="w-[14%] flex flex-col">
                <Text size="textlg" as="p" className="text-adsy_com-black text-[11.5px]">
                  {specialText}
                </Text>
                <Heading as="p" className="text-adsy_com-black font-bold text-[11.5px]">
                  {productData.language || language}
                </Heading>
                <Text size="textlg" as="p" className="text-adsy_com-black mt-4 text-[11.5px]">
                  {lifetimeLinksText}
                </Text>
                <Heading as="p" className="text-adsy_com-black font-bold text-[11.5px]">
                  {productData.country || countryValue}
                </Heading>
              </div>
  
              <div className="w-[12%] flex flex-col">
                <Text size="textlg" as="p" className="text-adsy_com-black text-[11.5px]">
                  {postText}
                </Text>
                <Heading as="p" className="text-adsy_com-black font-bold text-[11.5px]">
                  {productData.links || linksValue}
                </Heading>
                <Text size="textlg" as="p" className="text-adsy_com-black mt-4 font-bold text-[11.5px]">
                  {tatText}
                </Text>
                <Heading as="p" className="text-adsy_com-black font-bold text-[11.5px]">
                  {productData.markedSponsoredBy ? "Yes" : "No"}
                </Heading>
              </div>
            </div>
  
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
        </div>
      ))}
    </>
  );
  
  
  
  
  
};  