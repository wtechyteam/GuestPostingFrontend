import React, { useState, useEffect } from "react";
import { Heading } from "./../common/Heading";
import { Button } from "./../common/Button";
import { Text } from "./../common/Text";
import Link from "next/link";
import Image from "next/image";

export default function CollaborationSection() {
  const words = ["Sales", "Leads", "Revenue", "Engagement"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedWord, setDisplayedWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const [registeredWebsites, setRegisteredWebsites] = useState(0);
  const [finalNumber] = useState(61608);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        setDisplayedWord((prev) => {
          if (isDeleting) {
            if (prev.length > 0) return prev.slice(0, -1);
            else {
              setIsDeleting(false);
              setCurrentWordIndex((prevIndex) =>
                prevIndex === words.length - 1 ? 0 : prevIndex + 1
              );
              return prev;
            }
          } else {
            if (prev.length < words[currentWordIndex].length)
              return words[currentWordIndex].slice(0, prev.length + 1);
            else {
              setIsDeleting(true);
              return prev;
            }
          }
        });
      },
      isDeleting ? 200 : 300
    );

    return () => clearTimeout(timeout);
  }, [displayedWord, isDeleting]);

  useEffect(() => {
    let start = 0;
    const duration = 20000;
    const increment = finalNumber / (duration / 30);
    const step = () => {
      start += increment;
      if (start < finalNumber) {
        setRegisteredWebsites(Math.floor(start));
        requestAnimationFrame(step);
      } else {
        setRegisteredWebsites(finalNumber);
      }
    };
    requestAnimationFrame(step);
  }, [finalNumber]);

  return (
    <>
      <div className="bg-[url(/images/Wave2.gif)] py-[76px] h-[746px] md:h-[620px] sm:h-[620px] bg-cover bg-no-repeat md:h-auto md:py-10 px-5 md:px-10">
        <div>
          <div className="flex items-center md:items-center justify-center md:flex-col">
            <div className="w-[40%] flex flex-col items-start md:w-full md:px-5 md:items-center">
              <div className="flex flex-col items-start self-stretch md:items-center">
                <Heading
                  size="heading6xl"
                  as="h1"
                  className="sm:text-[40px] md:text-[46px] z-[1] text-[50px] relative font-bold !text-gray-10 text-left md:text-center"
                >
                  <>
                    Collaboration
                    <br />
                    is a Key to Getting
                  </>
                </Heading>
                <Text
                  size="text9xl"
                  as="p"
                  className="sm:text-[35px] md:text-[41px] text-[45.48px] font-medium !text-gray-10 text-center md:text-center"
                >
                  <span>More&nbsp;</span>
                  <span className="font-bold underline">{displayedWord}</span>
                </Text>
              </div>

              <Text
                size="text5xl"
                as="p"
                className="text-[20px] mt-[42px] font-medium leading-5 !text-gray-10 md:text-center"
              >
                <>
                  PR Distribution MarketPlace.
                  <br />
                  Turn your content into revenue!
                  <br />
                  <br />
                </>
              </Text>

              <div className="flex flex-row space-y-4 mt-4 md:flex-col  md:space-x-4 md:space-y-0">
                <Link href="/signup">
                  <Button className="min-w-[150px] h-[45px] sm:min-w-[170px] md:ml-[1.5rem] sm:h-[50px] font-medium bg-[#005EFF] text-white">
                    Sign Up
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button className="min-w-[150px] h-[45px] ml-[2rem] md:ml-[0] mt-[-1rem] md:mt-[1rem] sm:min-w-[170px] sm:h-[50px] font-medium !bg-[#FFFFFF] text-gray-900">
                    View Pricing
                  </Button>
                </Link>
              </div>

              <Text
                size="text5xl"
                as="p"
                className="text-[20px] mt-[42px] font-medium leading-5 !text-gray-10"
              >
                <>Guest Posting Under $10</>
              </Text>
            </div>
            <div className="w-[54%] h-[592px] relative md:w-full md:px-5">
              <Image
                src="/images/Group 25761.png"
                alt="Collaboration"
                className="rounded-[36px] w-full h-full object-cover md:hidden"
                width={1000}
                height={900}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="h-[115px] w-full bg-[#005EFF] flex flex-row md:flex-col justify-between items-center px-10 mt-[-70px] gap-4 md:gap-12">
        <div className=" text-gray-10 text-white text-center pl-5 md:pl-0 sm:pl-0 md:mt-[2rem] sm:mt-[2rem]">
          <p className="font-bold text-[18px] sm:text-[20px] mb-2 ">
            {registeredWebsites}+
          </p>
          <p className=" text-gray-10 text-[16px] sm:text-[18px] font-bold">
            Registered Websites
          </p>
        </div>
        <div className="text-gray-10 text-white text-center md:hidden sm:hidden">
          <p className="font-bold text-[18px] sm:text-[20px] mb-2">
            {registeredWebsites}+
          </p>
          <p className="text-[16px] sm:text-[18px] font-bold">
            Registered Websites
          </p>
        </div>
        <div className="text-gray-10 text-white text-center pr-5 md:pr-0 sm:pr-0  md:hidden sm:hidden">
          <p className="font-bold text-[18px] sm:text-[20px] mb-2">
            {registeredWebsites}+
          </p>
          <p className="text-[16px] sm:text-[18px] font-bold">
            Registered Websites
          </p>
        </div>
      </div>
    </>
  );
}
