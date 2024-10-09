import { Heading } from "../common/Heading";
import { Text } from "../common/Text";
import { Button } from "../common/Button";
import axios from "axios";
import React, { useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {
  fetchAllProducts, fetchUnblockedProducts, blockProduct, unblockProduct} from "../redux/productSlice";
import Link from "next/link";
import Image from "next/image";
import Cookies from "js-cookie";

// const fetchAllProducts = async () => {
//   try {
//     const result = await axios.get("http://localhost:3001/api/products");
//     console.log("API Response:", result.data);
//     return result.data;
//   } catch (error) {
//     console.error("Error fetching products:", error);
//     return [];
//   }
// };

export default function UserProfile3({
  urlIsHiddenText = "URL is hidden",
  contributorText = "Contributor",
  artText = "Art",
  healthText = "Health",
  businessText = "Business",
  buyPostButton = "Buy Post",
  contentPlacementText = "Content placement",
  priceText = "$3,640.87",
  writingPlacementText = "Writing & Placement",
  writingPriceText = "$3,705.81",
  mozDAText = "Moz DA",
  mozDAValue = "92",
  semrushDAText = "Semrush DA",
  semrushDAValue = "79",
  ahrefsDRRangeText = "Ahrefs DR Range",
  ahrefsDRRangeValue = "94",
  completionRateText = "Completion rate",
  completionRateValue = "Up to 88.24%",
  avgLifetimeOfLinksText = "Avg lifetime of links",
  avgLifetimeOfLinksValue = "Up to 100.00%",
  tatText = "TAT",
  tatValue = "N/A",
  tasksWithInitialDomainText = "Tasks with Initial Domain & Price",
  tasksWithInitialDomainValue = "100.00%",
  ahrefsorganicTrafficText = "Ahrefs Organic Traffic",
  ahrefsOrganicTrafficValue = "1,801,273",
  totalTrafficText = <>Total traffic</>,
  totalTrafficValue = "Not Provided",
  languageText = "Language",
  language = "German",
  countryText = "Country",
  countryValue = "Germany",
  linksText = "Links",
  linksValue = "Dofollow",
  markedSponsoredByText = "Marked Sponsored by",
  markedSponsoredByValue = "No",
  description = "Add Minimum Balance to view",
  ...props
}) {
  const dispatch = useDispatch();

  const { unblockedProducts,  loading } = useSelector(
    (state) => state.products
  );
//   const [products, setProducts] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  // const [loading, setLoading] = useState(false);
//   const [blockStatus, setBlockStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
//   const [isBlocked, setIsBlocked] = useState(false);
//  const [wishlistStatus, setWishlistStatus] = useState({});

  // const blockProduct = async (productId) => {
  //   const token = Cookies.get("authToken");
  //   console.log("Token before API call:", token); // Debugging output

  //   if (!token) {
  //     console.error("Token is missing or undefined.");
  //     return;
  //   }

  //   try {
  //     const response = await axios.post(
  //       `http://localhost:3001/api/block/${productId}`,
  //       {}, // Pass body if needed
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${token}`, // Ensure this header is correctly set
  //         },
  //       }
  //     );
  //     console.log("Block Response:", response.data);
  //   } catch (error) {
  //     console.error(
  //       "Error blocking product:",
  //       error.response?.data || error.message
  //     );
  //   }
  // };
//   const toggleWishlistProduct = async (productId) => {
//     const token = Cookies.get("authToken");
//     if (!token) {
//         console.error("Token is missing or undefined.");
//         return;
//     }

//     console.log("Token being sent:", token); // Log the token for debugging
    
//     try {
//         const method = wishlistStatus[productId] ? "delete" : "post";
//         const response = await axios[method](
//             `http://localhost:3001/api/wishlist/${productId}`, // Ensure the endpoint matches your backend
//             {},
//             {
//                 headers: {
//                     "Content-Type": "application/json",
//                     Authorization: `Bearer ${token}`,
//                 },
//             }
//         );
//         console.log(`${method === "post" ? "Add to" : "Remove from"} Wishlist Response:`, response.data);
//         setWishlistStatus((prev) => ({ ...prev, [productId]: !prev[productId] }));
//     } catch (error) {
//         console.error("Error managing wishlist:", error.response?.data || error.message);
//     }
// };

  
  useEffect(() => {
    // const fetchData = async () => {
    //   setLoading(true);
    //   try {
    //     const productList = await fetchAllProducts();
    //     setProducts(productList);
    //     setLoading(false);
    //   } catch (error) {
    //     setErrorMessage("Failed to load products");
    //     setLoading(false);
    //   }
    // };
    // fetchData();
    dispatch(fetchAllProducts());
    dispatch(fetchUnblockedProducts());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }

  if (unblockedProducts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center px-4 py-6 bg-gray-50 border border-gray-300 rounded-lg w-[99%] h-[500px]">
        <Text size="textlg" as="p" className="text-gray-700">
          No product to show now.
        </Text>
      </div>
    );
  }

  return (
    <>
      {unblockedProducts
        // .filter((product) => product.status !== "block") // Filter out blocked products
        .map((product, index) => {
          const tagArray = product.tags.split(", ").map((tag) => tag.trim());

          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-3.5 px-4 mb-2 border-blue_gray-100_02 border border-solid bg-gray-10 w-[98%] rounded-[14px]"
            >
              <div className="mr-1.5 mt-1 flex items-center justify-between gap-5 self-stretch md:mr-0 md:flex-col">
                <div className="flex flex-1 items-center justify-center md:self-stretch">
                  <div className="relative inline-block">
                    <Text
                      size="textxl"
                      as="p"
                      className="text-indigo-a400 mr-[0.5rem]"
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      {product.URL || urlIsHiddenText}
                    </Text>

                    {isHovered && (
                      <div className="absolute left-36 bottom-full mb-2 p-2 bg-adsy_com-black text-gray-10 rounded shadow-lg text-[10px] w-44 transform -translate-x-2">
                        {description}
                      </div>
                    )}
                  </div>

                  <div className="flex self-end rounded-[8px] bg-gray-200 p-1.5">
                    {!!contributorText ? (
                      <Text
                        size="textxs"
                        as="p"
                        className="text-adsy_com-black font-semibold text-[8.83px]"
                      >
                        {contributorText}
                      </Text>
                    ) : null}
                  </div>

                  <div className="flex flex-1 gap-[9px] px-2.5">
                    {tagArray.map((tag, index) => (
                      <div
                        key={index}
                        className="flex rounded-lg border-[0.62px] border-solid border-blue_gray-50 bg-gray-10 p-1.5"
                      >
                        <Text
                          size="texts"
                          as="p"
                          className="text-adsy_com-black text-[8.83px]"
                        >
                          {tag}
                        </Text>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center">
                  <Link href="/buyPost">
                    <Button
                      onClick={() => console.log("Buy Post clicked")}
                      color="indigo_a400"
                      size="md"
                      className="min-w-[134px] rounded-xl font-bold text-white bg-indigo-a400 text-sm h-10 mb-[0.3rem]"
                    >
                      {buyPostButton}
                    </Button>
                  </Link>

                  <Image
                    src="/images/heart1.png"
                    width={22}
                    height={22}
                    alt="Like"
                    className="ml-4 h-[24px] w-[24px] cursor-pointer"
                    onClick={() => toggleWishlistProduct(product._id)}
                  />
                  <Image
                    src="/images/blocked.png"
                    width={24}
                    height={24}
                    alt="Block"
                    className="ml-4 h-[24px] w-[24px] cursor-pointer"
                    onClick={() => dispatch(blockProduct(product._id))}
                  />

                  {/* Feedback messages
                  {blockStatus && <p>{blockStatus}</p>}
                  {errorMessage && (
                    <p style={{ color: "red" }}>{errorMessage}</p>
                  )} */}
                </div>
              </div>
              <hr className="mt-[-0.8rem] border-gray-300 w-full" />
              <div className="self-stretch">
                <div className="flex flex-col gap-4">
                  <div className="mr-3.5 flex items-start md:mr-0 md:flex-col">
                    <div className="flex w-[16%] flex-col gap-4 md:w-full">
                      <div className="flex flex-col items-start gap-0.5">
                        <Text
                          size="textlg"
                          as="p"
                          className="text-adsy_com-black text-[11.5px]"
                        >
                          {contentPlacementText}
                        </Text>
                        <Heading
                          as="p"
                          className="text-adsy_com-black font-bold text-[11.5px]"
                        >
                          {product.contentPlacement || priceText}
                        </Heading>
                      </div>
                      <div className="flex flex-col items-start gap-0.5">
                        <Text
                          size="textlg"
                          as="p"
                          className="text-adsy_com-black font-bold text-[11.5px]"
                        >
                          {writingPlacementText}
                        </Text>
                        <Heading
                          as="p"
                          className="text-adsy_com-black font-bold text-[11.5px]"
                        >
                          {product.writingAndPlacement || writingPriceText}
                        </Heading>
                      </div>
                    </div>

                    <div className="border-l border-gray-300 h-full"></div>
                    <div className="flex w-[12%] flex-col items-start md:w-full">
                      <Text
                        size="textlg"
                        as="p"
                        className="text-adsy_com-black text-[11.5px]"
                      >
                        {mozDAText}
                      </Text>
                      <Heading
                        as="p"
                        className="text-adsy_com-black font-bold text-[11.5px]"
                      >
                        {product.mozDA || mozDAValue}
                      </Heading>
                      <div className="mt-4 flex flex-col items-start gap-1 self-stretch">
                        <Text
                          size="textlg"
                          as="p"
                          className="text-adsy_com-black text-[11.5px]"
                        >
                          {semrushDAText}
                        </Text>
                        <Heading
                          as="p"
                          className="text-adsy_com-black font-bold text-[11.5px]"
                        >
                          {product.semrushDA || semrushDAValue}
                        </Heading>
                      </div>
                      <div className="mt-4 flex flex-col items-start gap-0.5 self-stretch">
                        <Text
                          size="textlg"
                          as="p"
                          className="text-adsy_com-black text-[11.5px]"
                        >
                          {ahrefsDRRangeText}
                        </Text>
                        <Heading
                          as="p"
                          className="text-adsy_com-black font-bold text-[11.5px]"
                        >
                          {product.ahrefsDRrange || ahrefsDRRangeValue}
                        </Heading>
                      </div>
                    </div>

                    <div className="border-l border-gray-300 h-full"></div>
                    <div className="flex w-[16%] flex-col items-start md:w-full">
                      <Text
                        size="textlg"
                        as="p"
                        className="text-adsy_com-black text-[11.5px]"
                      >
                        {completionRateText}
                      </Text>
                      <Heading
                        as="p"
                        className="text-adsy_com-black font-bold text-[11.5px]"
                      >
                        {product.completionRate || completionRateValue}
                      </Heading>
                      <div className="mt-4 flex flex-col items-start gap-0.5 self-stretch">
                        <Text
                          size="textlg"
                          as="p"
                          className="text-adsy_com-black text-[11.5px]"
                        >
                          {avgLifetimeOfLinksText}
                        </Text>
                        <Heading
                          as="p"
                          className="text-adsy_com-black font-bold text-[11.5px]"
                        >
                          {product.avgLifetimeOfLinks ||
                            avgLifetimeOfLinksValue}
                        </Heading>
                      </div>
                      <div className="mt-4 flex flex-col items-start gap-0.5 self-stretch">
                        <Text
                          size="textlg"
                          as="p"
                          className="text-adsy_com-black text-[11.5px]"
                        >
                          {tatText}
                        </Text>
                        <Heading
                          as="p"
                          className="text-adsy_com-black font-bold text-[11.5px]"
                        >
                          {product.tat || tatValue}
                        </Heading>
                      </div>
                      <div className="mt-4 flex flex-col items-start gap-0.5 self-stretch">
                        <Text
                          size="textlg"
                          as="p"
                          className="text-adsy_com-black text-[11.5px]"
                        >
                          {tasksWithInitialDomainText}
                        </Text>
                        <Heading
                          as="p"
                          className="text-adsy_com-black font-bold text-[11.5px]"
                        >
                          {product.tasksWithInitialDomain ||
                            tasksWithInitialDomainValue}
                        </Heading>
                      </div>
                    </div>

                    <div className="border-l border-gray-300 h-full"></div>

                    <div className="border-l border-gray-300 h-full"></div>
                    <div className="flex w-[16%] flex-col items-start md:w-full">
                      <Text
                        size="textlg"
                        as="p"
                        className="text-adsy_com-black text-[11.5px]"
                      >
                        {ahrefsorganicTrafficText}
                      </Text>
                      <Heading
                        as="p"
                        className="text-adsy_com-black font-bold text-[11.5px]"
                      >
                        {product.ahrefsOrganicTraffic ||
                          ahrefsOrganicTrafficValue}
                      </Heading>
                      <div className="mt-4 flex flex-col items-start gap-0.5 self-stretch">
                        <Text
                          size="textlg"
                          as="p"
                          className="text-adsy_com-black text-[11.5px]"
                        >
                          {totalTrafficText}
                        </Text>
                        <Heading
                          as="p"
                          className="text-adsy_com-black font-bold text-[11.5px]"
                        >
                          {product.totalTraffic || totalTrafficValue}
                        </Heading>
                      </div>
                    </div>
                    <div className="flex w-[16%] flex-col items-start md:w-full">
                      <Text
                        size="textlg"
                        as="p"
                        className="text-adsy_com-black text-[11.5px]"
                      >
                        {languageText}
                      </Text>
                      <Heading
                        as="p"
                        className="text-adsy_com-black font-bold text-[11.5px]"
                      >
                        {product.language || language}
                      </Heading>
                      <div className="mt-4 flex flex-col items-start gap-0.5 self-stretch">
                        <Text
                          size="textlg"
                          as="p"
                          className="text-adsy_com-black text-[11.5px]"
                        >
                          {countryText}
                        </Text>
                        <Heading
                          as="p"
                          className="text-adsy_com-black font-bold text-[11.5px]"
                        >
                          {product.country || countryValue}
                        </Heading>
                      </div>
                    </div>
                    <div className="flex w-[16%] flex-col items-start md:w-full">
                      <Text
                        size="textlg"
                        as="p"
                        className="text-adsy_com-black text-[11.5px]"
                      >
                        {linksText}
                      </Text>
                      <Heading
                        as="p"
                        className="text-adsy_com-black font-bold text-[11.5px]"
                      >
                        {product.links || linksValue}
                      </Heading>
                      <div className="mt-4 flex flex-col items-start gap-0.5 self-stretch">
                        <Text
                          size="textlg"
                          as="p"
                          className="text-adsy_com-black text-[11.5px]"
                        >
                          {markedSponsoredByText}
                        </Text>
                        <Heading
                          as="p"
                          className="text-adsy_com-black font-bold text-[11.5px]"
                        >
                          {product.markedSponsoredBy || markedSponsoredByValue}
                        </Heading>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
}
