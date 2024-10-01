"use client";
import React from "react";
import PropTypes from "prop-types";

const shapes = {
    round: "rounded-[10px]",
};

const variants = {
    tarOutlineWhiteA700: "!border-gray-300 border border-solid bg-blue-50_01", // Adjusted border color for visibility
    lightBorder: "border border-gray-300 bg-white", // New variant for a light border
};

const sizes = {
    xs: "h-[150px] p-[30px] text-[14px]",
};

const TextArea = React.forwardRef(
    (
        {
            className = "",
            name = "",
            placeholder = "",
            shape,
            size = "xs",
            variant = "tarOutlineWhiteA700",
            onChange,
            ...restProps
        },
        ref
    ) => {
        const handleChange = (e) => {
            if (onChange) onChange(e?.target?.value);
        };

        return (
            <textarea
                ref={ref}
                className={`${className} ${shape && shapes[shape]} ${size && sizes[size]} ${variant && variants[variant]}`}
                name={name}
                onChange={handleChange}
                placeholder={placeholder}
                {...restProps}
            />
        );
    }
);

// Adding displayName for debugging
TextArea.displayName = "TextArea";

TextArea.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    shape: PropTypes.oneOf(["round"]),
    size: PropTypes.oneOf(["xs"]),
    variant: PropTypes.oneOf(["tarOutlineWhiteA700", "lightBorder"]), // Added new variant here
    onChange: PropTypes.func,
};

export { TextArea };
