import { Heading } from "./../common/Heading";
import { Button } from "./../common/Button";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

export default function MainContentSection() {
    const [activeTab, setActiveTab] = useState('buyer');

    return (
        <>
            {/* Main content section */}
            <div className="mt-[140px] flex flex-col items-center gap-10">
                <div className="container-xs px-14 md:px-5">
                    <Heading
                        size="heading3xl"
                        as="h2"
                        className="sm:text-[26px] md:text-[28px] leading-[30px] text-[30px] tracking-[0.20px] text-center font-semibold !text-adsy_com-black">
                        Publish PR Content on Websites and Telegram Channels Promote Your Business Easily, Fast, and Safely
                    </Heading>
                </div>
                <div className="h-[942px] relative self-stretch">
                    <div
                        className="h-[874px] absolute left-0 right-0 top-0 m-auto flex-1"
                        style={{ backgroundColor: 'rgba(28, 129, 125, 0.2)' }}
                    />
                    <div className="gap-[26px] absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col items-center px-14 md:px-5">
                        <div className="rounded-[10px] w-[38%] flex justify-center md:w-full">
                            <div className="flex justify-center w-full">
                                <Button
                                    color="gray_10"
                                    size="sm"
                                    className={`rounded-[5px] min-w-[250px] tracking-[0.20px] font-medium ${
                                        activeTab === 'buyer'
                                            ? 'bg-white text-blue-500 border border-blue-500' // White background and blue text for active tab with border
                                            : 'bg-blue-500 text-white'
                                    }`}
                                    onClick={() => setActiveTab('buyer')}>
                                    Buyer
                                </Button>
                                <Button
                                    color="gray_10"
                                    size="sm"
                                    className={`rounded-[5px] min-w-[250px] tracking-[0.20px] font-medium ${
                                        activeTab === 'seller'
                                            ? 'bg-white text-blue-500 border border-blue-500' // White background and blue text for active tab with border
                                            : 'bg-blue-500 text-white'
                                    }`}
                                    onClick={() => setActiveTab('seller')}>
                                    Seller
                                </Button>
                            </div>
                        </div>
                        <Image
                            src={activeTab === 'buyer' ? '/images/image 3.png' : '/images/image 5.png'}
                            width={1024}
                            height={820}
                            alt={activeTab === 'buyer' ? 'Image Three' : 'Image Five'}
                            className="rounded-[24px] w-[80%] h-[820px] object-contain"
                        />
                    </div>
                </div>
                <div className="container-xs flex flex-col items-center px-14 md:px-5">
                    <Link href="/signup">
                    <Button shape="round" className="min-w-[170px] font-medium">
                        Sign Up
                    </Button>
                    </Link>
                </div>
            </div>
        </>
    );
}
