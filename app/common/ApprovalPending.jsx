import { Heading } from "./Heading";
import { Text } from "./Text";
import { Button } from "./Button";
import Image from "next/image";
import Link from "next/link";

export default function TaskCard() {
  return (
    <div className="relative flex flex-col items-center justify-center gap-3.5 px-4 border-blue_gray-100_02 border border-solid bg-gray-10 rounded-[14px] min-h-[120px] mb-[1rem]">
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
                <Heading
                  as="p"
                  className="text-indigo-a400 text-[11.5px] mt-2" 
                >
                  {"84156"}
                </Heading>
                <Heading
                  as="p"
                  className="text-indigo-a400 text-[11.5px] mt-4" 
                >
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
              <Heading
                as="p"
                className="text-indigo-a400 text-[11.5px] mt-2" 
              >
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
              <Heading
                as="p"
                className="text-indigo-a400 text-[11.5px] mt-2" 
              >
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
      <Link href="/your-acceptance">
      <Button 
        color="" 
        size="md" 
        className="absolute bottom-3 right-3 min-w-[134px] rounded-xl font-bold text-white" 
        style={{ backgroundColor: '#FF0000', height: '2rem', marginBottom: '0.3rem' }}
      >
        Approval Pending
      </Button>
      </Link>
    </div>
  );
}
