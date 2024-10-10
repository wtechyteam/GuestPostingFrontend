import React,{ useEffect, useState } from 'react'
import { Heading } from "../common/Heading";
import { Text } from "../common/Text";
import { Button } from "../common/Button";
import SuccessModal from "./../common/SuccessModal";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import Image from "next/image";


const SingleBlockedCard = ({
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

}) => {
    const { blockedProducts, loading } = useSelector((state) => state.products);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [isHovered, setIsHovered] = useState(false);
   
  return (
   <>
   {blockedProducts.map((product, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-3.5 px-4 mb-80 border-blue_gray-100_02 border border-solid bg-gray-10 w-[98%] rounded-[14px]"
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
                  src="/images/unlock.png"
                  width={24}
                  height={24}
                  alt="Block"
                  className="ml-4 h-[24px] w-[24px] cursor-pointer"
                  onClick={() => handleUnblockProduct(product._id)}
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

                    {/* <div className="border-l border-gray-300 h-full"></div>
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
                    </div> */}

                    <div className="border-l border-gray-300 h-full"></div>

                    <div className="border-l border-gray-300 h-full"></div>
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
  )
}

export default SingleBlockedCard