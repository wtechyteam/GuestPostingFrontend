import { Heading } from "../common/Heading";
import { Text } from "../common/Text";
import { Button } from "../common/Button";
import SuccessModal from "../common/SuccessModal";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchAllProducts,
  fetchUnblockedProducts,
  blockProduct,
  unblockProduct,
} from "../redux/productSlice";
import { addToWishlist, removeFromWishlist } from "../redux/wishlistSlice";
import Link from "next/link";

import Image from "next/image";

export default function UserProfile3({
  searchResults,
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
  majesticText = <>Majestic</>,
  majesticValue = "Not Provided",
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
  const { products, isLoading, error } = useSelector((state) => state.products);
  const { unblockedProducts, loading } = useSelector((state) => state.products);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [likedProducts, setLikedProducts] = useState({});
  const [isHovered, setIsHovered] = useState(false);

  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    // Load liked products from local storage
    const storedLikes = JSON.parse(localStorage.getItem("likedProducts")) || {};
    setLikedProducts(storedLikes);

    dispatch(fetchAllProducts());
    dispatch(fetchUnblockedProducts());
  }, [dispatch]);

  const handleBlockProduct = async (productId) => {
    try {
      await dispatch(blockProduct(productId));
      setModalMessage("Product Blocked Successfully");
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error blocking product:", error);
    }
  };

  const handleAddToWishlistProduct = async (productId) => {
    try {
      await dispatch(addToWishlist(productId));
      setModalMessage("Product Added to Wishlist Successfully");
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error adding product to wishlist:", error);
    }
  };

  const handleRemoveFromWishlist = async (productId) => {
    try {
      await dispatch(removeFromWishlist(productId));
      setModalMessage("Product removed from wishlist Successfully");
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error removing from wishlist:", error);
    }
  };
  const toggleLikeProduct = (productId) => {
    setLikedProducts((prev) => {
      const newLikedProducts = {
        ...prev,
        [productId]: !prev[productId], 
      };

      // Save updated likes to local storage
      localStorage.setItem("likedProducts", JSON.stringify(newLikedProducts));
      return newLikedProducts;
    });
  };

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
          Loading Your Products. Please Wait...
        </Text>
      </div>
    );
  }

  return (
    <> 
   


      {unblockedProducts.map((product, index) => {
      

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
                  {product.tags.map((tag, index) => (
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
                  src={
                    likedProducts[product._id]
                      ? "/images/colouredHeart2.png"
                      : "/images/heart1.png"
                  }
                  width={22}
                  height={22}
                  alt="Like"
                  className="ml-4 h-[24px] w-[24px] cursor-pointer"
                  onClick={() => {
                    if (likedProducts[product._id]) {
                      handleRemoveFromWishlist(product._id); 
                    } else {
                      handleAddToWishlistProduct(product._id); 
                    }
                    toggleLikeProduct(product._id); 
                  }}
                />

                <Image
                  src="/images/blocked.png"
                  width={24}
                  height={24}
                  alt="Block"
                  className="ml-4 h-[24px] w-[24px] cursor-pointer"
                  onClick={() => handleBlockProduct(product._id)}
                />

                {isModalOpen && (
                  <SuccessModal onClose={() => setIsModalOpen(false)}>
                    <p>{modalMessage}</p>
                  </SuccessModal>
                )}
              </div>
            </div>
            <hr className="mt-[-0.8rem] border-gray-300 w-full" />
            <div className="self-stretch">
              <div className="flex flex-col gap-4">
                <div className="mr-3.5 flex items-start md:mr-0 md:flex-col">
                  <div className="flex w-[20%] flex-col gap-4 md:w-full">
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

                  <div className="flex w-[20%] flex-col items-start md:w-full">
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
                        className="text-adsy_com-black font-bold text-[11.5px] mb-2"
                      >
                        {product.ahrefsDRrange || ahrefsDRRangeValue}
                      </Heading>
                    </div>
                  </div>

                  <div className="flex w-[20%] flex-col items-start md:w-full">
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
                        {majesticText}
                      </Text>
                      <Heading
                        as="p"
                        className="text-adsy_com-black font-bold text-[11.5px]"
                      >
                        {product.majestic || majesticValue}
                      </Heading>
                    </div>
                  </div>
                  <div className="flex w-[20%] flex-col items-start md:w-full">
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
                  <div className="flex w-[20%] flex-col items-start md:w-full">
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
