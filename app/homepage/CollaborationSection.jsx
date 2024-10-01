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
  const [finalNumber] = useState(61608); // Final value for the number

  useEffect(() => {
    const timeout = setTimeout(() => {
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
    }, isDeleting ? 200 : 300);

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
      <div className="bg-[url(/images/flow1.gif)] py-[76px] h-[746px] bg-cover bg-no-repeat md:h-auto md:py-10 px-5 md:px-10">
        <div>
          <div className="flex items-center justify-center md:flex-col">
            <div className="w-[40%] flex flex-col items-start md:w-full md:px-5">
              <div className="flex flex-col items-start self-stretch">
                <Heading
                  size="heading6xl"
                  as="h1"
                  className="sm:text-[40px] md:text-[46px] z-[1] text-[50px] relative font-bold !text-gray-10"
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
                  className="sm:text-[35px] md:text-[41px] text-[45.48px] font-medium !text-gray-10"
                >
                  <span>More&nbsp;</span>
                  <span className="font-bold underline">{displayedWord}</span>
                </Text>
              </div>
              <Text
                size="text5xl"
                as="p"
                className="text-[20px] mt-[42px] font-medium leading-5 !text-gray-10"
              >
                <>
                  PR Distribution MarketPlace.
                  <br />
                  Turn your content into revenue!
                  <br />
                  <br />
                </>
              </Text>

             
              <div className="flex space-x-4 mt-4">
                <Link href="/signup">
                  <Button className="min-w-[170px] h-[50px] font-medium bg-[#005EFF] text-white">
                    Sign Up
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button className="min-w-[170px] h-[50px] font-medium bg-[#ffffff] text-gray-900 ">
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
                className="rounded-[36px] w-full h-full object-cover"
                width={1000}
                height={900}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="h-[115px] w-full bg-[#005EFF] flex justify-between items-center px-10 mt-[-70px]">
        <div className="text-white text-center pl-5">
          <p className="font-bold text-[22px] mb-2">{registeredWebsites}+</p>
          <p className="text-[20px] font-bold">Registered Websites</p>
        </div>
        <div className="text-white text-center">
          <p className="font-bold text-[22px] mb-2">{registeredWebsites}+</p>
          <p className="text-[20px] font-bold">Registered Websites</p>
        </div>
        <div className="text-white text-center pr-5">
          <p className="font-bold text-[22px] mb-2">{registeredWebsites}+</p>
          <p className="text-[20px] font-bold">Registered Websites</p>
        </div>
      </div>
    </>
  );
}
