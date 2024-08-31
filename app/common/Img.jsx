'use client'
import React from "react";
import Image from "next/image";

const BASE_URL = "/assets/images";

const Img =({
    className,
    src = "dummyImage.jpg",
    alt = "testImg",
    isStatic = false,
    width,height,...restProps

})=>{
    const [imgSrc,setImgSrc] = React.useState(src);
    React.useEffect(()=>{
        setImgSrc(src);
    },[src]);
    return (
        <Image
        className={className}
        src={isStatic ? imgSrc : BASE_URL + imgSrc}
        alt={alt}
        width={width}
        height={height}
        {...restProps}
        onError={()=>{
            setImgSrc("dummyImage.jpg");
        }}
        />
    );
};
export {Img};