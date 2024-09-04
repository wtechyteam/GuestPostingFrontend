"use client";

import { Img } from "./Img";
import { Heading } from "./Heading";
import {
  MenuItem,
  SubMenu,
  Menu,
  Sidebar,
  sidebarClasses,
} from "react-pro-sidebar";
import Image from "next/image";

export default function Sidebar1({ ...props }) {
  return (
    <Sidebar
      {...props}
      width="282px !important"
      rootStyles={{ [`${sidebarClasses.container}`]: { gap: 6 } }}
      className={`${props.className} flex flex-col h-screen gap-1.5 top-0 bg-gray-10 !sticky overflow-auto`}
    >
    
      <Heading size="label_regular" as="p" className="ml-6 !text-gray-400">
        Dashboard
      </Heading>
      <Menu
        menuItemStyles={{
          button: {
            padding: "10px",
            backgroundColor: "#ffffff",
            color: "#626c70",
            fontWeight: 500,
            fontSize: "14px",
            gap: "12px",
            [`&:hover, &.ps-active`]: {
              color: "#191b1c",
              backgroundColor: "#eff5ff !important",
              boxShadow: "inset 3px 0 0 0 #0e5fd9",
            },
          },
        }}
        rootStyles={{ ["&>ul"]: { gap: "382px" } }}
        className="flex flex-col flex-grow self-stretch"
      >
        <div className="flex flex-col gap-1">
          <MenuItem
            icon={
              <Image
                src="/images/HouseLine.png"
                width={20}
                height={20}
                alt="Home Icon"
                className="h-[20px] w-[20px]"
              />
            }
          >
            Dashboard
          </MenuItem>
          <SubMenu
            icon={
              <Image
                src="/images/User.png"
                width={20}
                height={20}
                alt="User Icon"
                className="h-[20px] w-[20px]"
              />
            }
            label="Profile Information"
          >
            <MenuItem>Submenu Item</MenuItem>
          </SubMenu>
          <SubMenu
            icon={
              <Image
                src="/images/FolderNotchOpen.png"
                width={20}
                height={20}
                alt="Folder Icon"
                className="h-[20px] w-[20px]"
              />
            }
            label="Order Management"
          >
            <MenuItem>Submenu Item</MenuItem>
          </SubMenu>
          <SubMenu
            icon={
              <Image
                src="/images/CreditCard.png"
                width={20}
                height={20}
                alt="Credit Card Icon"
                className="h-[20px] w-[20px]"
              />
            }
            label="Payment Information"
          >
            <MenuItem>Submenu Item</MenuItem>
          </SubMenu>
          <MenuItem
            icon={
              <Image
                src="/images/Cards.png"
                width={20}
                height={20}
                alt="Wishlist Icon"
                className="h-[20px] w-[20px]"
              />
            }
          >
            Wishlist
          </MenuItem>
          <SubMenu
            icon={
              <Image
                src="/images/ClipboardText.png"
                width={20}
                height={20}
                alt="Clipboard Icon"
                className="h-[20px] w-[20px]"
              />
            }
            label="Notifications"
          >
            <MenuItem>Submenu Item</MenuItem>
          </SubMenu>
          <SubMenu
            icon={
              <Image
                src="/images/Question.png"
                width={20}
                height={20}
                alt="Question Icon"
                className="h-[20px] w-[20px]"
              />
            }
            label="Support"
          >
            <MenuItem>Submenu Item</MenuItem>
          </SubMenu>
          <SubMenu
            icon={
              <Image
                src="/images/PuzzlePiece.png"
                width={20}
                height={20}
                alt="Puzzle Icon"
                className="h-[20px] w-[20px]"
              />
            }
            label="Setting"
          >
            <MenuItem>Submenu Item</MenuItem>
          </SubMenu>
         
        </div>
        
        <div className="mt-[19rem]">
        <MenuItem
            icon={
              <Image
                src="/images/logout.png"
                width={18}
                height={18}
                alt="Logout Icon"
                className="h-[18px] w-[18px]"
              />
            }
            className="self-start"
          >
            Logout
          </MenuItem>
          
        </div>
      </Menu>
    </Sidebar>
  );
}


0