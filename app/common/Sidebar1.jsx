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
import axios from 'axios';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

export default function Sidebar1({ ...props }) {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      // Make a request to the logout API
      await axios.post('http://localhost:3001/api/logout');
  
      // Clear cookies related to authentication
      Cookies.remove('authToken');
      Cookies.remove('fullName');
  
      // Redirect to the login page or home page
      router.push('/login');
    } catch (error) {
      console.error('Error during logout:', error);
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
            <Link href="/profileDetails"><MenuItem className="pl-4">Profile Details</MenuItem></Link>
            
            <MenuItem className="pl-4">Account Settings</MenuItem>
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
            <Link href="/orderManagement"> <MenuItem className="pl-4">Order History </MenuItem></Link>
            <Link href="/orderManagement"> <MenuItem className="pl-4">Order Status </MenuItem></Link>
            <Link href="/orderManagement"> <MenuItem className="pl-4">Order List </MenuItem></Link>
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
           <Link href="/paymentInfo"> <MenuItem className="pl-4">Transaction History </MenuItem></Link>
           <Link href="/paymentInfo"> <MenuItem className="pl-4">Billing Information </MenuItem></Link>
           <Link href="/paymentInfo"><MenuItem className="pl-4">Payment Method </MenuItem></Link>
          </SubMenu>
          <Link href="/wishlist">
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
          </Link>
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
            <Link href="/notifications"><MenuItem className="pl-4">Seller Message </MenuItem></Link>
            <Link href="/notifications"><MenuItem className="pl-4">Promotions/Discount </MenuItem></Link>
            <Link href="/notifications"><MenuItem className="pl-4">Order Updates </MenuItem></Link>
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
            <Link href="/support"><MenuItem className="pl-4">FAQs </MenuItem></Link>
            <Link href="/support"><MenuItem className="pl-4">Customer Query </MenuItem></Link>
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
            <MenuItem className="pl-4">Currency </MenuItem>
            <MenuItem className="pl-4">Language </MenuItem>
          </SubMenu>
        </div>

        <div className="mt-[21rem]">
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
