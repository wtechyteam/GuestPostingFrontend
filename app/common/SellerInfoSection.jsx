import { Button } from "./Button";
import { Text } from "./Text";
import React, { useState } from "react";

export default function SellerInfoSection({ descriptionText, learnMoreButton = "Learn More", ...props }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            {...props} 
            className={`flex items-center w-[50%] md:w-full relative 
                hover:border-2 hover:border-[#1C817D] hover:rounded-2xl 
                hover:bg-[#1C817D] p-4 ${props.className}`}
            style={{ borderColor: 'transparent' }} // Initial style
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="flex w-full flex-col items-start">
                <Text
                    size="text7xl"
                    as="p"
                    className="leading-[58px] z-[2] text-[39.13px] relative font-normal "
                    style={{ color: isHovered ? '#FFFFFF' : '#000000' }} // Change color based on hover state
                >
                    <span className="font-bold">
                        <>
                            Seller
                            <br />
                        </>
                    </span>
                    <span className="text-[20px]">
                        <>
                            Place quality blog posts from BuyerInfoSection<br />
                            Make money writing your blog
                            <br />
                            Get regular payouts, prompt support
                            <br />
                        </>
                    </span>
                </Text>
                <Button size="lg" shape="round" className="!rounded-[28px] min-w-[162px] mt-[34px] relative font-medium">
                    {learnMoreButton}
                </Button>
            </div>
        </div>
    );
}
