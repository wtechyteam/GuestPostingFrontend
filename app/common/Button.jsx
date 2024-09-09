import React from "react";
import PropTypes from "prop-types";

const shapes = {
  circle: "rounded-[50%]",
  round: "rounded-[30px]",
};

const variants = {
  fill: {
    blue_gray_900_01: "bg-blue_gray-900_01 shadow-xl text-gray-10",
    gray_10: "bg-gray-10 text-adsy_com-black",
    gray_50_01: "bg-gray-50_01",
    principal_blue: "bg-principal_blue text-gray-10",
    blue_hover_white: "bg-principal_blue text-white",
  },
};

const sizes = {
  xs: "h-[24px] px-[34px] text-[10px]",
  sm: "h-[38px] px-[34px] text-[20px]",
  md: "h-[48px] px-[6px] text-[16px]",
  lg: "h-[56px] px-[26px] text-[19px]",
  "2xl": "h-[64px] px-3.5",
  xl: "h-[60px] px-[34px] text-[20px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "xl",
  color = "principal_blue",
  ...restProps
}) => {
  const variantStyles = variants[variant] || {}; // Ensure variant is valid
  const colorStyles = variantStyles[color] || variants.fill.principal_blue; // Default to principal_blue if color is invalid

  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${
        shape && shapes[shape]
      } ${size && sizes[size]} ${colorStyles} transition-colors duration-300`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}

      {children}

      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "2xl", "xl"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf([
    "blue_gray_900_01",
    "gray_10",
    "gray_50_01",
    "principal_blue",
  ]),
};

export { Button };
