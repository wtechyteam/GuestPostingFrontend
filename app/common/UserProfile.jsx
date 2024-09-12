// UserProfile.js
import { Heading } from "./Heading";
import { Text } from "./Text";
import { Button } from "./Button";
import Image from "next/image";

export default function UserProfile({
  product,
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
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-3.5 px-4 border-blue_gray-100_02 border border-solid bg-gray-10 rounded-[14px]">
      <div className="mr-1.5 mt-1 flex items-center justify-between gap-5 self-stretch md:mr-0 md:flex-col">
        <div className="flex flex-1 items-center justify-center md:self-stretch">
          <Text size="textxl" as="p" className="text-indigo-a400 mr-[0.5rem]">
            {product.URL || "URL is hidden"}
          </Text>
          <div className="flex self-end rounded-[8px] bg-gray-200 p-1.5">
            <Text size="textxs" as="p" className="text-adsy_com-black font-semibold text-[8.83px]">
              {product.contributorText || "Contributor"}
            </Text>
          </div>
          <div className="flex flex-1 gap-[9px] px-2.5">
            {product.tags && product.tags.split(", ").map((tag, index) => (
              <div key={index} className="flex rounded-lg border-[0.62px] border-solid border-blue_gray-50 bg-gray-10 p-1.5">
                <Text size="texts" as="p" className="text-adsy_com-black text-[8.83px]">
                  {tag}
                </Text>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center">
          <Button color="indigo_a400" size="md" className="min-w-[134px] rounded-xl font-bold text-white bg-indigo-a400 text-sm h-10 mb-[0.3rem]">
            {buyPostButton}
          </Button>
          <Image src="/images/heart1.png" width={22} height={22} alt="Heart Icon" className="ml-4 h-[24px] w-[24px]" />
          <Image src="/images/dustbin.png" width={24} height={24} alt="Dustbin Icon" className="ml-4 h-[24px] w-[24px]" />
        </div>
      </div>
      <hr className="mt-[-0.8rem] border-gray-300 w-full" />
      <div className="self-stretch">
        <div className="flex flex-col gap-4">
          <div className="mr-3.5 flex items-start md:mr-0 md:flex-col">
            <div className="flex w-[16%] flex-col gap-4 md:w-full">
              <div className="flex flex-col items-start gap-0.5">
                <Text size="textlg" as="p" className="text-adsy_com-black text-[11.5px]">
                  {contentPlacementText}
                </Text>
                <Heading as="p" className="text-adsy_com-black font-bold text-[11.5px]">
                  {product.contentPlacement || priceText}
                </Heading>
              </div>
              <div className="flex flex-col items-start gap-0.5">
                <Text size="textlg" as="p" className="text-adsy_com-black font-bold text-[11.5px]">
                  {writingPlacementText}
                </Text>
                <Heading as="p" className="text-adsy_com-black font-bold text-[11.5px]">
                  {product.writingAndPlacement || writingPriceText}
                </Heading>
              </div>
            </div>
            <div className="border-l border-gray-300 h-full"></div>
            <div className="flex w-[12%] flex-col items-start md:w-full">
              <Text size="textlg" as="p" className="text-adsy_com-black text-[11.5px]">
                {mozDAText}
              </Text>
              <Heading as="p" className="text-adsy_com-black font-bold text-[11.5px]">
                {product.mozDA || mozDAValue}
              </Heading>
              <div className="mt-4 flex flex-col items-start gap-1 self-stretch">
                <Text size="textlg" as="p" className="text-adsy_com-black text-[11.5px]">
                  {semrushDAText}
                </Text>
                <Heading as="p" className="text-adsy_com-black font-bold text-[11.5px]">
                  {product.semrushDA || semrushDAValue}
                </Heading>
              </div>
              <div className="mt-4 flex flex-col items-start gap-0.5 self-stretch">
                <Text size="textlg" as="p" className="text-adsy_com-black text-[11.5px]">
                  {ahrefsDRRangeText}
                </Text>
                <Heading as="p" className="text-adsy_com-black font-bold text-[11.5px]">
                  {product.ahrefsDRrange || ahrefsDRRangeValue}
                </Heading>
              </div>
            </div>
            <div className="border-l border-gray-300 h-full"></div>
            <div className="flex flex-1 items-start gap-5 px-[30px] md:self-stretch sm:px-5">
              <div className="flex flex-1 flex-col items-start self-center">
                <div className="flex flex-col items-start gap-1 self-stretch">
                  <Text size="textlg" as="p" className="text-adsy_com-black text-[11.5px]">
                    {completionRateText}
                  </Text>
                  <Heading as="p" className="text-adsy_com-black font-bold text-[11.5px]">
                    {product.completionRate || completionRateValue}
                  </Heading>
                </div>
                <div className="mt-4 flex flex-col items-start gap-1 self-stretch">
                  <Text size="textlg" as="p" className="text-adsy_com-black text-[11.5px]">
                    {avgLifetimeOfLinksText}
                  </Text>
                  <Heading as="p" className="text-adsy_com-black font-bold text-[11.5px]">
                    {product.avgLifetimeOfLinks || avgLifetimeOfLinksValue}
                  </Heading>
                </div>
                <Text size="textlg" as="p" className="mt-3.5 text-adsy_com-black text-[10.5px] font-normal">
                  {tatText}
                </Text>
                <Heading as="p" className="text-adsy_com-black font-bold text-[11.5px]">
                  {product.tat || tatValue}
                </Heading>
                <div className="mt-4 flex flex-col items-start gap-1 self-stretch">
                  <Text size="textmd" as="p" className="text-adsy_com-black text-[10.5px] font-normal">
                    {tasksWithInitialDomainText}
                  </Text>
                  <Heading as="p" className="text-adsy_com-black font-bold text-[11.5px] mb-[1rem]">
                    {product.taskDomainPrice || tasksWithInitialDomainValue}
                  </Heading>
                </div>
              </div>
              <div className="border-l border-gray-300 h-full"></div>
              <div className="flex flex-col flex-1 items-start gap-4">
                <div className="flex flex-col items-start gap-1 self-stretch">
                  <Text size="textmd" as="p" className="text-adsy_com-black text-[10.5px] font-normal">
                    {ahrefsorganicTrafficText}
                  </Text>
                  <Heading as="p" className="text-adsy_com-black font-bold text-[11.5px]">
                    {product.ahrefsOrganicTraffic || ahrefsOrganicTrafficValue}
                  </Heading>
                </div>
                <div className="flex flex-col items-start gap-1 self-stretch">
                  <Text size="textmd" as="p" className="text-adsy_com-black text-[10.5px] font-normal">
                    {totalTrafficText}
                  </Text>
                  <Heading as="p" className="text-adsy_com-black font-bold text-[11.5px]">
                    {product.totalTraffic || totalTrafficValue}
                  </Heading>
                </div>
              </div>
              <div className="border-l border-gray-300 h-full"></div>
              <div className="flex flex-col flex-1 items-start gap-4">
                <div className="flex flex-col items-start gap-1 self-stretch">
                  <Text size="textmd" as="p" className="text-adsy_com-black text-[10.5px] font-normal">
                    {languageText}
                  </Text>
                  <Heading as="p" className="text-adsy_com-black font-bold text-[11.5px]">
                    {product.language || language}
                  </Heading>
                </div>
                <div className="flex flex-col items-start gap-1 self-stretch">
                  <Text size="textmd" as="p" className="text-adsy_com-black text-[10.5px] font-normal">
                    {countryText}
                  </Text>
                  <Heading as="p" className="text-adsy_com-black font-bold text-[11.5px]">
                    {product.country || countryValue}
                  </Heading>
                </div>
                <div className="flex flex-col items-start gap-1 self-stretch">
                  <Text size="textmd" as="p" className="text-adsy_com-black text-[10.5px] font-normal">
                    {linksText}
                  </Text>
                  <Heading as="p" className="text-adsy_com-black font-bold text-[11.5px]">
                    {product.links || linksValue}
                  </Heading>
                </div>
                <div className="flex flex-col items-start gap-1 self-stretch">
                  <Text size="textmd" as="p" className="text-adsy_com-black text-[10.5px] font-normal">
                    {markedSponsoredByText}
                  </Text>
                  <Heading as="p" className="text-adsy_com-black font-bold text-[11.5px]">
                    {product.markedSponsoredBy || markedSponsoredByValue}
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
