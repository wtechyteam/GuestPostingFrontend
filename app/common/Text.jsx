    import React from "react";

const sizes = {
  regular_text_xs: "text-[0.88rem] font-normal not-italic",

  regular_text_sm: "text-[1.00rem] font-normal not-italic",

  regular_text_xl:
    "tracking-[0.90rem] text-[1.50rem] font-normal not-italic md:text-[1.38rem]",

  textxs: "text-[0.63rem] font-normal not-italic",
  texts: "text-[0.88rem] font-light",
  textmd: "text-[1.06rem] font-normal not-italic",

  textlg: "text-[1.13rem] font-normal not-italic",

  text2xl: "text-[1.50rem] font-light md:text-[1.38rem]",
  text3xl:
    "text-[3.38rem] font-normal not-italic md:text-[2.88rem] sm:text-[2.50rem]",
};

// const Text = ({
//   children,
//   className = "",
//   as,
//   size = "regular_text_xs",
//   ...restProps
// }) => {
//   const Component = as || "p";

//   return (
//     <Component
//       className={`text-neutral-200 font-lexend ${className} $(sizes [size]}`}
//       {...restProps}
//     >
//       {" "}
//       (children)
//     </Component>
//   );
// };
const Text = ({
  children,
  className = "",
  as,
  size = "",
  ...restProps
}) => {
  const Component = as || "p";
  return(
    <Component className={`${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>

  );
}

export { Text };
