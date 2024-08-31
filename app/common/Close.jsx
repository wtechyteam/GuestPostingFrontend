import React from "react";

const CloseSVG = ({ fillColor = "#000000", className = "", ...props }) => {
    return (
        <svg
            fill={fillColor}  // Set fill to "none" because the new SVG uses stroke for coloring
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...props}
            height={props?.width || 20}
            width={props?.height || 20}
            viewBox={`0 0 ${props?.width || 20} ${props?.height || 20}`}
        >
            <path
                d="M9.50977 15.75C13.4448 15.75 16.6348 12.56 16.6348 8.625C16.6348 4.68997 13.4448 1.5 9.50977 1.5C5.57474 1.5 2.38477 4.68997 2.38477 8.625C2.38477 12.56 5.57474 15.75 9.50977 15.75Z"
                stroke={fillColor}  // Use fillColor for stroke color
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M17.3848 16.5L15.8848 15"
                stroke={fillColor}  // Use fillColor for stroke color
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export { CloseSVG };
