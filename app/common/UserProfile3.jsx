import { Heading } from "./Heading";
import { Text } from "./Text";
import { Img } from "./Img";
import { Button } from "./Button";

import React from "react";
import Image from "next/image";

export default function UserProfile3({
  urlIsHiddenText = "URL is hidden",
  contributorText,
  artText,
  healthText,
  businessText,
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
  totalTrafficText = (
    <>
      Total traffic
      <br />
      <span>Not provided</span>
    </>
  ),
  languageText = "Language",
  languageValue = "German",
  countryText = "Country",
  countryValue = "Germany",
  linksText = "Links",
  linksValue = "Dofollow",
  markedSponsoredByText = "Marked Sponsored by",
  markedSponsoredByValue = "No",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center justify-center gap-3.5 px-4 border-blue_gray-100_02 border border-solid bg-gray-10 rounded-[14px]`}
    >
      <div className="mr-1.5 mt-1 flex items-center justify-between gap-5 self-stretch md:mr-0 md:flex-col">
        <div className="flex flex-1 items-center justify-center md:self-stretch">
          <Text size="textxl" as="p" className="text-adsy_com-black">
            {urlIsHiddenText}
          </Text>
          <div className="flex self-end rounded-[3px] bg-gray-500 p-0.5">
            {!!contributorText ? (
              <Text size="textxs" as="p" className="text-adsy_com-black font-semibold text-[4.83px]">
                {contributorText}
              </Text>
            ) : null}
          </div>
          <div className="flex flex-1 gap-[9px] px-2.5">
            <div className="flex w-[8%] justify-center rounded-lg border border-solid border-blue_gray-50 bg-gray-10 p-0.5">
              {!!artText ? (
                <Text size="texts" as="p" className="text-adsy_com-black text-[8.68px]">
                  {artText}
                </Text>
              ) : null}
            </div>
            <div className="flex rounded-lg border-[0.62px] border-solid border-blue_gray-50 bg-gray-10 p-0.5">
              {!!healthText ? (
                <Text size="texts" as="p" className="text-adsy_com-black text-[8.68px]">
                  {healthText}
                </Text>
              ) : null}
            </div>
            <div className="flex rounded-lg border-[0.62px] border-solid border-blue_gray-50 bg-gray-10">
              {!!businessText ? (
                <Text size="texts" as="p" className="text-adsy_com-black text-[8.68px]">
                  {businessText}
                </Text>
              ) : null}
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <Button
            color="indigo_a400"
            size="md"
            className="min-w-[136px] rounded-lg font-bold text-white bg-indigo-a400"
          >
            {buyPostButton}
          </Button>
         


          <Image
            src="/images/heart1.png"
            width={22}
            height={22}
            alt="Material Symbol"
            className="ml-4 h-[24px] w-[24px]"
          />

          <Image
            src="/images/dustbin.png"
            width={24}
            height={24}
            alt="Material Symbol"
            className="ml-4 h-[24px] w-[24px]"
          />
        </div>
      </div>
      <div className="self-stretch">
        <div className="flex flex-col gap-4">
          <div className="mr-3.5 flex items-start md:mr-0 md:flex-col">
            <div className="flex w-[16%] flex-col gap-4 md:w-full">
              <div className="flex flex-col items-start gap-0.5">
                <Text size="textlg" as="p" className="text-adsy_com-black text-[11.5px]">
                  {contentPlacementText}
                </Text>
                <Heading as="p" className="text-adsy_com-black font-bold text-[11.5px]">
                  {priceText}
                </Heading>
              </div>
              <div className="flex flex-col items-start gap-0.5">
                <Text size="textlg" as="p" className="text-adsy_com-black font-bold text-[11.5px]">
                  {writingPlacementText}
                </Text>
                <Heading as="p" className="text-adsy_com-black font-bold text-[11.5px]">
                  {writingPriceText}
                </Heading>
              </div>
            </div>
            <div className="flex w-[12%] flex-col items-start md:w-full">
              <Text size="textlg" as="p" className="text-adsy_com-black text-[11.5px]">
                {mozDAText}
              </Text>
              <Heading as="p" className="text-adsy_com-black font-bold text-[11.5px]">
                {mozDAValue}
              </Heading>
              <div className="mt-4 flex flex-col items-start gap-1 self-stretch">
                <Text size="textlg" as="p" className="text-adsy_com-black text-[11.5px]">
                  {semrushDAText}
                </Text>
                <Heading as="p" className="text-adsy_com-black font-bold text-[11.5px]">
                  {semrushDAValue}
                </Heading>
              </div>
              <div className="mt-4 flex flex-col items-start gap-0.5 self-stretch">
                <Text size="textlg" as="p" className="text-adsy_com-black text-[11.5px]">
                  {ahrefsDRRangeText}
                </Text>
                <Heading as="p" className="text-adsy_com-black font-bold text-[11.5px]">
                  {ahrefsDRRangeValue}
                </Heading>
              </div>
            </div>
            <div className="flex flex-1 items-start gap-5 px-[30px] md:self-stretch sm:px-5">
              <div className="flex flex-1 flex-col items-start self-center">
                <div className="flex flex-col items-start gap-1 self-stretch">
                  <Text size="textlg" as="p" className="text-adsy_com-black text-[11.5px]">
                    {completionRateText}
                  </Text>
                  <Heading as="p" className="text-adsy_com-black font-bold text-[11.5px]">
                    {completionRateValue}
                  </Heading>
                </div>
                <div className="mt-4 flex flex-col items-start gap-1 self-stretch">
                  <Text size="textlg" as="p" className="text-adsy_com-black text-[11.5px]">
                    {avgLifetimeOfLinksText}
                  </Text>
                  <Heading as="p" className="text-adsy_com-black font-bold text-[11.5px]">
                    {avgLifetimeOfLinksValue}
                  </Heading>
                </div>

                <Text size="textlg" as="p" className="mt-3.5 text-adsy_com-black text-[11.5px]">
                  {tatText}
                </Text>
                <Heading as="p" className="text-adsy_com-black font-bold text-[11.5px]">
                  {tatValue}
                </Heading>
                <div className="mt-4 flex flex-col items-start gap-1 self-stretch">
                  <Text
                    size="textmd"
                    as="p"
                    className="text-adsy_com-black text-[10.5px] font-normal"
                  >
                    {tasksWithInitialDomainText}
                  </Text>
                  <Heading as="p" className="text-adsy_com-black font-bold text-[11.5px]">
                    {tasksWithInitialDomainValue}
                  </Heading>
                  {/* styling text */}
                  <div className="mt-4 flex flex-col items-start gap-1 self-stretch">
                  <Text size="textmd" as="p" className="text-white text-[10.5px] font-normal">
                    {totalTrafficText}
                  </Text>
                  {/* styling text end */}
                </div>
                </div>
                </div>
                <div className="flex flex-1 flex-col items-start gap-1.5 self-center">
                <div className="mt-4 flex flex-col items-start gap-0.5 self-stretch">
                  <Text size="textmd" as="p" className="text-adsy_com-black text-[10.5px] font-normal">
                    {ahrefsorganicTrafficText}
                  </Text>
                  <Heading as="p" className="text-adsy_com-black font-bold text-[11.5px]">
                    {ahrefsOrganicTrafficValue}
                  </Heading>
                </div>
                <div className="mt-4 flex flex-col items-start gap-1 self-stretch">
                  <Text size="textmd" as="p" className="text-adsy_com-black text-[10.5px] font-normal">
                    {totalTrafficText}
                  </Text>
                </div>
                {/* styling text */}
                <div className="mt-4 flex flex-col items-start gap-1 self-stretch">
                  <Text size="textmd" as="p" className="text-white text-[10.5px] font-normal">
                    {totalTrafficText}
                  </Text>
                </div>
                <div className="mt-4 flex flex-col items-start gap-1 self-stretch">
                  <Text size="textmd" as="p" className="text-white text-[10.5px] font-normal">
                    {totalTrafficText}
                  </Text>
                </div>
                <div className="mt-4 flex flex-col items-start gap-1 self-stretch">
                  <Text size="textmd" as="p" className="text-white text-[10.5px] font-normal">
                    {totalTrafficText}
                  </Text>
                </div> 
                {/* styling text end */}
                </div>

              
              <div className="flex flex-1 flex-col items-start gap-1.5 self-center">
                <Text size="textlg" as="p" className="text-adsy_com-black text-[11.5px]">
                  {languageText}
                </Text>
                <Heading as="p" className="text-adsy_com-black font-bold text-[11.5px]">
                  {languageValue}
                </Heading>
                <div className="mt-4 flex flex-col items-start gap-1 self-stretch">
                  <Text size="textlg" as="p" className="text-adsy_com-black text-[11.5px]">
                    {countryText}
                  </Text>
                  <Heading as="p" className="text-adsy_com-black font-bold text-[11.5px]">
                    {countryValue}
                  </Heading>
                </div>
                </div><div>
                <div className="mt-4 flex flex-col items-start gap-0.5 self-stretch">
                  <Text size="textlg" as="p" className="text-adsy_com-black text-[11.5px]">
                    {linksText}
                  </Text>
                  <Heading as="p" className="text-adsy_com-black text-[11.5px] font-bold">
                    {linksValue}
                  </Heading>
                </div>
                <div className="mt-4 flex flex-col items-start gap-1.5 self-stretch">
                  <Text size="textlg" as="p" className="text-adsy_com-black font-bold text-[11.5px]">
                    {markedSponsoredByText}
                  </Text>
                  <Heading as="p" className="text-adsy_com-black font-bold text-[11.5px]">
                    {markedSponsoredByValue}
                  </Heading>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
