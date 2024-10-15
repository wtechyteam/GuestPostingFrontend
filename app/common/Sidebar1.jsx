"use client";
import Link from "next/link";
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
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function Sidebar1({ ...props }) {
  const hostedURL = process.env.NEXT_PUBLIC_HOSTED_URL;
  const localbaseURL = process.env.NEXT_PUBLIC_BASE_URL;
  const router = useRouter();
  const handleLogout = async () => {
    try {
      await axios.post(`${hostedURL}/logout` || `${localbaseURL}/logout`);

      Cookies.remove("authToken");
      Cookies.remove("fullName");

      router.push("/login");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <Sidebar
      {...props}
      width="282px !important"
      rootStyles={{ [`${sidebarClasses.container}`]: { gap: 6 } }}
      className={`${props.className} flex flex-col h-screen gap-1.5 bg-gray-10 fixed top-0 left-0 overflow-auto`}
    >
      <Heading size="label_regular" as="p" className="ml-6 !text-gray-400">
          
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
          <Link href="/dashboardBuyer">
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
          </Link>
          <Link href="/profileDetails">
            <MenuItem
              icon={
                <Image
                  src="/images/User.png"
                  width={20}
                  height={20}
                  alt="Wishlist Icon"
                  className="h-[20px] w-[20px]"
                />
              }
            >
              Profile Details
            </MenuItem>
          </Link>
          <Link href="/orderManagement">
            <MenuItem
              icon={
                <Image
                  src="/images/FolderNotchOpen.png"
                  width={20}
                  height={20}
                  alt="Wishlist Icon"
                  className="h-[20px] w-[20px]"
                />
              }
            >
              Order Management
            </MenuItem>
          </Link>
          <Link href="/paymentInfo">
          <MenuItem
              icon={
                <Image
                  src="/images/CreditCard.png"
                  width={20}
                  height={20}
                  alt="Wishlist Icon"
                  className="h-[20px] w-[20px]"
                />
              }
            >
              Payment Information
            </MenuItem>
          </Link>
          <Link href="/lists">
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
              Lists
            </MenuItem>
          </Link>
          <Link href="/tasks">
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
              Tasks 
            </MenuItem>
          </Link>
          <Link href="/notifications">
            <MenuItem
              icon={
                <Image
                  src="/images/ClipboardText.png"
                  width={20}
                  height={20}
                  alt="Wishlist Icon"
                  className="h-[20px] w-[20px]"
                />
              }
            >
              Notifications
            </MenuItem>
          </Link>

          <Link href="/support">
            <MenuItem
              icon={
                <Image
                  src="/images/Question.png"
                  width={20}
                  height={20}
                  alt="Wishlist Icon"
                  className="h-[20px] w-[20px]"
                />
              }
            >
              Support
              {/* <Link href="/notifications"><MenuItem className="pl-4">Order Updates </MenuItem></Link> */}
            </MenuItem>
          </Link>
          <Link href="/settings">
            <MenuItem
              icon={
                <Image
                  src="/images/PuzzlePiece.png"
                  width={20}
                  height={20}
                  alt="Wishlist Icon"
                  className="h-[20px] w-[20px]"
                />
              }
            >
              Settings
            </MenuItem>
          </Link>
        </div>

        <div className="mt-[100px]">
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
            onClick={handleLogout}
          >
            Logout
          </MenuItem>
        </div>
      </Menu>
    </Sidebar>
  );
}
