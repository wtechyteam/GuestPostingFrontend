/* eslint-disable react/display-name */
"use client";
import React from "react";
import PropTypes from "prop-types";

const shapes = {
    round: "rounded-[24px]",
};

const variants = {
    fill: {
        gray_10: "bg-gray-10 text-dark-2",
    },
};

const sizes = {
    xs: "h-[50px] px-4 text-[14px]",
};

const Input = React.forwardRef(
    (
        {
            className = "",
            type = "text",
            name = "",
            placeholder = "",
            label = "",
            prefix,
            suffix,
            onChange,
            shape,
            variant = "fill",
            size = "xs",
            color = "gray_10",
            borderColor = "border-gray-300", // Default light border color
            ...restProps
        },
        ref
    ) => {
        return (
            <label
                className={`${className} flex items-center justify-center self-stretch gap-1.5 cursor-text text-dark-2 text-[14px] border-[1.5px] border-solid ${borderColor} bg-gray-10 rounded-[24px]`}
            >
                {!!label && label}
                {!!prefix && prefix}
                <input
                    ref={ref}
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    onChange={onChange}
                    {...restProps}
                />
                {!!suffix && suffix}
            </label>
        );
    }
);

Input.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    prefix: PropTypes.node,
    suffix: PropTypes.node,
    shape: PropTypes.oneOf(["round"]),
    size: PropTypes.oneOf(["xs"]),
    variant: PropTypes.oneOf(["fill"]),
    color: PropTypes.oneOf(["gray_10"]),
    borderColor: PropTypes.string, // Added propType for borderColor
};

export { Input };
