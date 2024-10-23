import { Heading } from "../common/Heading";
import { Text } from "../common/Text";
import { Img } from "../common/Img";
import { Button } from "../common/Button";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Image from "next/image";
const fetchAllProducts = async () => {
  try {
    const result = await axios.get("http://localhost:3001/api/products");
    return result.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

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
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const products = await fetchAllProducts();
      if (products.length > 0) {
        setProductData(products[0]);
      }
    };
    fetchData();
  }, []);

  if (!productData) {
    return <div>Loading...</div>;
  }

  {
    return (
      <div
        {...props}
        className={`${props.className} flex flex-col items-center mb-60 justify-center gap-3.5 px-4 border-blue_gray-100_02 border border-solid bg-gray-10 w-[99%]  rounded-[14px]`}
      >
        <div className="mr-1.5 mt-1 flex items-center justify-between gap-5 self-stretch md:mr-0 md:flex-col">
          <div className="flex flex-1 items-center justify-left md:self-stretch">
            <Text size="textxl" as="p" className="text-indigo-a400 mr-[0.5rem]">
              {productData.URL || "URL is hidden"}
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
                    {statusText}
                  </Text>
                  <Heading
                    as="p"
                    className="text-adsy_com-black font-bold text-[11.5px]"
                  >
                    {productData.contentPlacement || priceText}
                  </Heading>
                </div>
                <div className="flex flex-col items-start gap-0.5">
                  <Text
                    size="textlg"
                    as="p"
                    className="text-adsy_com-black font-bold text-[11.5px]"
                  >
                    {articleCreationPlacementText}
                  </Text>
                  <Heading
                    as="p"
                    className="text-adsy_com-black font-bold text-[11.5px]"
                  >
                    {productData.writingAndPlacement || writingPriceText}
                  </Heading>
                </div>
              </div>

              <div className="border-l border-gray-300 h-full"></div>
              <div className="flex w-[14%] flex-col items-start md:w-full">
                <Text
                  size="textlg"
                  as="p"
                  className="text-adsy_com-black text-[11.5px]"
                >
                  {confirmationStatus}
                </Text>
                <Heading
                  as="p"
                  className="text-adsy_com-black font-bold text-[11.5px]"
                >
                  {productData.mozDA || mozDAValue}
                </Heading>
                <div className="mt-4 flex flex-col items-start gap-1 self-stretch">
                  <Text
                    size="textlg"
                    as="p"
                    className="text-adsy_com-black text-[11.5px]"
                  >
                    {longarticleText}
                  </Text>
                  <Heading
                    as="p"
                    className="text-adsy_com-black font-bold text-[11.5px]"
                  >
                    {productData.semrushDA || semrushDAValue}
                  </Heading>
                </div>
              </div>

              <div className="flex w-[12%] flex-col items-start md:w-full">
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
                  {productData.mozDA || mozDAValue}
                </Heading>
                <div className="mt-4 flex flex-col items-start gap-1 self-stretch">
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
                    {productData.semrushDA || semrushDAValue}
                  </Heading>
                </div>
              </div>

              <div className="flex flex-1 items-start gap-5 px-[30px] md:self-stretch sm:px-5">
                <div className="flex flex-1 items-start gap-5 px-[30px] md:self-stretch sm:px-5">
                  <div className="flex flex-col items-start gap-0.5 self-stretch">
                    <Text
                      size="textmd"
                      as="p"
                      className="text-adsy_com-black text-[10.5px] font-normal"
                    >
                      {WritingPlacementText}
                    </Text>
                    <Heading
                      as="p"
                      className="text-adsy_com-black font-bold text-[11.5px]"
                    >
                      {productData.ahrefsOrganicTraffic ||
                        ahrefsOrganicTrafficValue}
                    </Heading>
                    <Text
                      size="textmd"
                      as="p"
                      className="text-adsy_com-black text-[10.5px] font-normal mt-4"
                    >
                      {tasksWithInitialDomainText}
                    </Text>
                    <Heading
                      as="p"
                      className="text-adsy_com-black font-bold text-[11.5px]"
                    >
                      {productData.totalTraffic || totalTrafficValue}
                    </Heading>
                  </div>
                </div>

                <div className="flex flex-1 items-start gap-5 px-[30px] md:self-stretch sm:px-5">
                  <div className="flex flex-1 flex-col items-start gap-1.5 self-center">
                    <Text
                      size="textlg"
                      as="p"
                      className="text-adsy_com-black text-[11.5px]"
                    >
                      {specialText}
                    </Text>
                    <Heading
                      as="p"
                      className="text-adsy_com-black font-bold text-[11.5px]"
                    >
                      {productData.language || language}
                    </Heading>
                    <div className="mt-4 flex flex-col items-start gap-1 self-stretch">
                      <Text
                        size="textlg"
                        as="p"
                        className="text-adsy_com-black text-[11.5px]"
                      >
                        {lifetimeLinksText}
                      </Text>
                      <Heading
                        as="p"
                        className="text-adsy_com-black font-bold text-[11.5px]"
                      >
                        {productData.country || countryValue}
                      </Heading>
                    </div>
                  </div>
                </div>

                <div className="border-l border-gray-300 h-full"></div>
                <div className="flex flex-1 flex-col items-start gap-5 px-[30px] md:self-stretch sm:px-5">
                  <div className="flex flex-col items-start gap-0.5 self-stretch">
                    <Text
                      size="textlg"
                      as="p"
                      className="text-adsy_com-black text-[11.5px]"
                    >
                      {postText}
                    </Text>
                    <Heading
                      as="p"
                      className="text-adsy_com-black text-[11.5px] font-bold"
                    >
                      {productData.links || linksValue}
                    </Heading>
                  </div>
                  <div className="flex flex-col items-start gap-1.5 self-stretch">
                    <Text
                      size="textlg"
                      as="p"
                      className="text-adsy_com-black font-bold text-[11.5px]"
                    >
                      {tatText}
                    </Text>
                    <Heading
                      as="p"
                      className="text-adsy_com-black font-bold text-[11.5px]"
                    >
                      {productData.markedSponsoredBy ? "Yes" : "No"}
                    </Heading>
                  </div>
                </div>
              </div>
            </div>
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
    );
  }
}
