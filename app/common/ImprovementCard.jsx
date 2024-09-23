import { useState } from "react";
import { Heading } from "./Heading";
import { Text } from "./Text";
import { Button } from "./Button";
import Image from "next/image";

export default function TaskCard() {
  // State to track if the card is expanded
  const [isExpanded, setIsExpanded] = useState(false);

  // Toggle the expansion
  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Close the expanded view
  const handleClose = () => {
    setIsExpanded(false);
  };

  return (
    <div
      className={`relative flex flex-col items-center justify-center gap-3.5 px-4 border-blue_gray-100_02 border border-solid bg-gray-10 rounded-[14px] mb-[1rem] ${
        isExpanded ? "min-h-[300px] p-4" : "min-h-[120px] p-4"
      }`}
    >
      <div className="self-stretch">
        <div className="flex flex-col gap-4">
          <div className="mr-3.5 flex items-start md:mr-0 md:flex-col">
            <div className="flex w-[16%] flex-col gap-4 md:w-full">
              <div className="flex flex-col items-start gap-1.5">
                <Text
                  size="textlg"
                  as="p"
                  className="text-adsy_com-black text-[11.5px]"
                >
                  {"Task ID"}
                </Text>
                <Heading as="p" className="text-indigo-a400 text-[11.5px] mt-2">
                  {"84156"}
                </Heading>
                <Heading as="p" className="text-indigo-a400 text-[11.5px] mt-4">
                  {"06/04/2000"}
                </Heading>
              </div>
            </div>

            <div className="flex w-[12%] flex-col items-start md:w-full">
              <Text
                size="textlg"
                as="p"
                className="text-adsy_com-black text-[11.5px]"
              >
                {"Your Site URL"}
              </Text>
              <Heading as="p" className="text-indigo-a400 text-[11.5px] mt-2">
                {"HTTPS"}
              </Heading>
            </div>

            <div className="flex w-[16%] flex-col items-start md:w-full">
              <Text
                size="textlg"
                as="p"
                className="text-adsy_com-black text-[11.5px]"
              >
                {"Promoted URL"}
              </Text>
              <Heading as="p" className="text-indigo-a400 text-[11.5px] mt-2">
                {"HTTPS"}
              </Heading>
            </div>

            <div className="flex w-[16%] flex-col items-start md:w-full">
              <Text
                size="textlg"
                as="p"
                className="text-adsy_com-black text-[11.5px]"
              >
                {"Anchor Text"}
              </Text>
              <Heading
                as="p"
                className="text-adsy_com-black text-[11.5px] mt-2"
              >
                {"This is placeholder for the text"}
              </Heading>
            </div>
            <div className="flex w-[16%] flex-col items-start md:w-full">
              <Text
                size="textlg"
                as="p"
                className="text-adsy_com-black text-[11.5px]"
              >
                {"Service Type"}
              </Text>
              <Heading
                as="p"
                className="text-adsy_com-black text-[11.5px] mt-2"
              >
                {"Content Placement"}
              </Heading>
            </div>
            <div className="flex w-[16%] flex-col items-start md:w-full">
              <Text
                size="textlg"
                as="p"
                className="text-adsy_com-black text-[11.5px]"
              >
                {"Price"}
              </Text>
              <Heading
                as="p"
                className="text-adsy_com-black text-[11.5px] mt-2"
              >
                {"$1212"}
              </Heading>
            </div>
          </div>
        </div>
      </div>

      <Image
        src="/images/dustbin.png"
        width={24}
        height={24}
        alt="Dustbin Icon"
        className="absolute top-3 right-3 h-[24px] w-[24px]"
      />

      {isExpanded && (
        <div className="w-full mt-4">
          <div className="flex justify-between">
            <div className="flex-1 mr-4">
              <input
                className="w-full h-12 p-2 border border-gray-300 text-adsy_com-black rounded-md mb-2"
                placeholder="Subject"
              />
              <textarea
                className="w-full h-36 p-2 border border-gray-300 rounded-md text-adsy_com-black resize-none"
                placeholder="Tell your changes here..."
              />
            </div>

            {/* Increased width for the right section */}
            <div className="flex flex-col justify-start items-start text-xs text-black w-[350px]">
              {" "}
              {/* Increased width */}
              <Text
                size="textlg"
                as="p"
                className="text-adsy_com-black text-[11.5px]"
                style={{ fontWeight: "bold" }}
              >
                {"Last Improvement:"}
              </Text>
              <Text
                size="textlg"
                as="p"
                className="text-adsy_com-black text-[11.5px] mt-1"
              >
                {"12/08/2024"}
              </Text>
              <Text
                size="textlg"
                as="p"
                className="text-adsy_com-black text-[11.5px]"
                style={{ fontWeight: "bold", marginTop: "1.5rem" }}
              >
                {"Last Improvement:"}
              </Text>
              <Text
                size="textlg"
                as="p"
                className="text-adsy_com-black text-[11.5px] mt-1"
              >
                {"06/08/2024"}
              </Text>
              <Text
                size="textlg"
                as="p"
                className="text-adsy_com-black text-[11.5px]"
                style={{ fontWeight: "bold", marginTop: "1.5rem" }}
              >
                {"Last Improvement:"}
              </Text>
              <Text
                size="textlg"
                as="p"
                className="text-adsy_com-black text-[11.5px] mt-1"
              >
                {"03/08/2024"}
              </Text>
            </div>
          </div>

          {/* Buttons - Right aligned */}
          <div className="flex justify-end gap-3 mt-4">
            <Button
              color=""
              size="md"
              className="min-w-[134px] rounded-xl font-bold text-white"
              style={{ backgroundColor: "#3861FB", height: "2rem" }}
            >
              Edit Content
            </Button>

            <Button
              color=""
              size="md"
              className="min-w-[134px] rounded-xl font-bold text-white"
              style={{ backgroundColor: "#B0C800", height: "2rem" }}
            >
              Send for Improvement
            </Button>
          </div>
        </div>
      )}

      {!isExpanded && (
        <Button
          onClick={handleExpand}
          color=""
          size="md"
          className="absolute bottom-3 right-3 min-w-[134px] font-bold rounded-xl text-adsy_com"
          style={{
            backgroundColor: "#B0C800",
            height: "2rem",
            marginBottom: "0.3rem",
          }}
        >
          Improvement
        </Button>
      )}

      {isExpanded && (
        <button
          onClick={handleClose}
          className="absolute top-1 right-10 text-4xl text-adsy_com-black"
        >
          ×
        </button>
      )}
    </div>
  );
}
