import {Text} from "./Text";
import {Img} from "./Img";
import React from "react";

export default function ProductDetails({
    grossVolumeText = "Gross volume",
    priceText = "$ 3",
    timeText = "1:00 PM",
    ...props
}) 
{
    return(
        <div {...props} className={`${props.className} flex flex-col items-start gap-0.5`}>
            <div className="flex items-center justify-center self-stretch">
                <Text size="texts" as="p" className="text-[11px] tracking-[0.20px] !font-helveticaneue2 font-light !text-blue_gray-700">
                    {grossVolumeText}

                </Text>
                <Img src="img_frame.svg" width={8} height={5} alt="productImage" className="h-[5px] ml-1" />
                
            </div>
            <Text
            size="textlg"
            as="p"
            className="text-[13px] tracking-[0.40px] !font-helveticaneue2 font-light !text-indigo-a200">
                {priceText}
            </Text>
            <Text
            size="textxs"
            as="p"
            className="text-[10px] tracking-[0.20px]  mb-[66px] !font-helveticaneue2 font-light !text-blue_gray-500">
                {timeText}
            </Text>


        </div>
    );

}