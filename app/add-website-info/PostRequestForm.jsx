"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { Input } from "./../common/Input";
import axios from "axios";
import Cookies from "js-cookie";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const PostRequestForm = ({ url }) => {
  const [mounted, setMounted] = useState(false);

  const [formData, setFormData] = useState({
    url: "hello.com",
    language: "",
    contentSponsored: "No",
    categories: ["Automobiles", "Business", "Home and Family"],
    links: "Dofollow",
    wordCount: "500",
    contentPlacement: false,
    writingPlacement: false,
    extraContent: false,
    specialTopic: false,
    specialRequirements: "",
    exampleLinks: "",
    prices: {
      contentPlacement: 0,
      writingPlacement: 0,
      extraContent: 0,
      specialTopic: 0,
    },
  });
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked,
      }));
    } else if (name.startsWith("prices.")) {
      const priceName = name.split(".")[1];
      setFormData((prevData) => ({
        ...prevData,
        prices: {
          ...prevData.prices,
          [priceName]: value,
        },
      }));
    } else if (name === "categories") {
      const selectedCategories = Array.from(
        e.target.selectedOptions,
        (option) => option.value
      );
      setFormData((prevData) => ({
        ...prevData,
        [name]: selectedCategories,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Fetch UserId from cookies
      const userId = Cookies.get("userId");
  
      // Log the fetched userId to the console
      console.log("Fetched UserId from cookies:", userId);
  
      if (!userId) throw new Error("UserId not found in cookies");
  
      // Add the `url` and `UserId` to the form data before submitting
      const dataToSubmit = { ...formData, url, userId };
  
      const response = await axios.post(
        "http://localhost:3001/api/seller/products",
        dataToSubmit
      );
  
      console.log("Product added successfully:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  
    console.log("Form Data:", formData); // Optionally log form data
  };
  
  useEffect(() => {
    setMounted(true); // Set to true after the component mounts
  }, []);
  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 bg-gray-10 mb-20 rounded-lg shadow-md w-[99%] mx-auto text-adsy_com-black"
    >
      {/* URL and Language Side by Side */}
      <div className="flex space-x-4 mb-4">
        <div className="w-1/2">
          <label className="block text-sm font-medium text-gray-700">
            URL *
          </label>
          <Input
            type="url"
            name="url"
            value={url}
            readOnly
            placeholder="https://"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div className="w-1/2">
          <label className="block text-sm font-medium text-gray-700">
            Language *
          </label>
          <select
            name="language"
            value={formData.language}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          >
            <option>English</option>
            <option>French</option>
            <option>German</option>
            {/* Add other language options here */}
          </select>
        </div>
      </div>

      {/* Content Sponsored and Categories Side by Side */}
      <div className="flex space-x-4 mb-4">
        <div className="w-1/2">
          <label className="block text-sm font-medium text-gray-700">
            Content has to be marked as sponsored *
          </label>
          <div className="flex items-center space-x-4 mt-2">
            <label className="flex items-center space-x-2">
              <Input
                type="radio"
                name="contentSponsored"
                value="Yes"
                checked={formData.contentSponsored === "Yes"}
                onChange={handleInputChange}
                className="text-indigo-600"
              />
              <span>Yes</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="contentSponsored"
                value="No"
                checked={formData.contentSponsored === "No"}
                onChange={handleInputChange}
                className="text-indigo-600"
              />
              <span>No</span>
            </label>
          </div>
        </div>
        <div className="w-1/2">
          <label className="block text-sm font-medium text-gray-700">
            Categories (select upto 3) *
          </label>
          <select
            name="categories"
            value={formData.categories}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          >
            <option>Automobile</option>
            <option>Business</option>
            <option>Home</option>
            <option>Family</option>
          </select>
        </div>
      </div>

      <div className="flex space-x-4 mb-4">
        <div className="w-1/2">
          <div className="mt-1">
            <label className="block text-sm font-medium text-gray-700">
              Special Requirements
            </label>
            {mounted && ( // Render only when mounted
              <ReactQuill
                name="specialRequirements"
                value={formData.specialRequirements}
                onChange={handleInputChange}
                placeholder="Enter any special requirements here..."
                className="mt-1 mb-16"
                style={{ height: "200px", width: "100%" }}
                modules={{
                  toolbar: [
                    [{ header: [1, 2, false] }],
                    ["bold", "italic", "underline"],
                    ["link", "image"],
                    ["clean"],
                  ],
                }}
              />
            )}
          </div>
          <div className="flex items-center mt-4">
            <Input
              type="checkbox"
              name="paidPosts"
              checked={formData.paidPosts}
              onChange={handleInputChange}
              className="mr-2"
            />
            <div className="flex flex-col">
              <p className="text-xs text-gray-600 ">
                Besides paid posts, I may consider placing buyer article for
                free if it is high quality and meets all my requirements.
              </p>
            </div>
          </div>
          <div className="w-full">
            <label className="block text-xs font-medium text-gray-700 mt-8">
              Links to your best articles to show buyers examples of your work
              (the domain of works should match the sites URL)
            </label>

            <Input
              type="url"
              name="url"
              value={formData.url}
              onChange={handleInputChange}
              placeholder="https://"
              className="mt-4 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
        </div>

        <div className="w-1/2">
          <div className="w-1/2 mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Basic content size (words)
            </label>
            <div className="flex space-x-4 mt-2">
              <label className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="wordCount"
                  value="500"
                  checked={formData.wordCount === "500"}
                  onChange={handleInputChange}
                  className="text-indigo-600"
                />
                <span>500</span>
              </label>
              <label className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="wordCount"
                  value="1000"
                  checked={formData.wordCount === "1000"}
                  onChange={handleInputChange}
                  className="text-indigo-600"
                />
                <span>1000</span>
              </label>
              <label className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="wordCount"
                  value="1500"
                  checked={formData.wordCount === "1500"}
                  onChange={handleInputChange}
                  className="text-indigo-600"
                />
                <span>1500</span>
              </label>
              <label className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="wordCount"
                  value="2000"
                  checked={formData.wordCount === "2000"}
                  onChange={handleInputChange}
                  className="text-indigo-600"
                />
                <span>2000+</span>
              </label>
            </div>
          </div>

          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              name="contentPlacement"
              checked={formData.contentPlacement}
              onChange={handleInputChange}
              className="mr-2"
            />
            <div className="flex flex-col">
              <label className="block text-sm font-medium text-gray-700">
                Content placement
              </label>
              <p className="text-xs text-gray-600">
                State the price you want to get for placing and writing content
                based on the buyers requirements for the size you have chosen in
                the Basic content size (words).
              </p>
            </div>
            <input
              type="number"
              name="prices.contentPlacement"
              value={formData.prices.contentPlacement}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md shadow-sm p-1 w-20 ml-4"
              min="0"
            />
            <span className="ml-1">$</span>
          </div>

          {/* Writing & Placement */}
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              name="writingPlacement"
              checked={formData.writingPlacement}
              onChange={handleInputChange}
              className="mr-2"
            />
            <div className="flex flex-col">
              <label className="block text-sm font-medium text-gray-700 mr-4">
                Writing & placement
              </label>
              <p className="text-xs text-gray-600">
                State the price you want to get for placing and writing content
                based on the buyers requirements for the size you have chosen in
                the Basic content size (words).
              </p>
            </div>
            <input
              type="number"
              name="prices.writingPlacement"
              value={formData.prices.writingPlacement}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md shadow-sm p-1 w-20 ml-4"
              min="0"
            />
            <span className="ml-1">$</span>
          </div>

          {/* Extra-size Content Writing */}
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              name="extraContent"
              checked={formData.extraContent}
              onChange={handleInputChange}
              className="mr-2"
            />
            <div className="flex flex-col">
              <label className="block text-sm font-medium text-gray-700 mr-4">
                Extra-size content writing
              </label>
              <p className="text-xs text-gray-600 mb-1">
                State the price you want to get for placing and writing content
                based on the buyers requirements for the size you have chosen in
                the Basic content size (words).
              </p>
            </div>
            <input
              type="number"
              name="prices.extraContent"
              value={formData.prices.extraContent}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md shadow-sm p-1 w-20 ml-4"
              min="0"
            />
            <span className="ml-1">$</span>
          </div>

          {/* Special Topic */}
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              name="specialTopic"
              checked={formData.specialTopic}
              onChange={handleInputChange}
              className="mr-2"
            />
            <div className="flex flex-col">
              <label className="block text-sm font-medium text-gray-700 mr-4">
                Special topic
              </label>
              <p className="text-xs text-gray-600 mb-1">
                State the price you want to get for placing and writing content
                based on the buyers requirements for the size you have chosen in
                the Basic content size (words).
              </p>
            </div>
            <input
              type="number"
              name="prices.specialTopic"
              value={formData.prices.specialTopic}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md shadow-sm p-1 w-20 ml-4"
              min="0"
            />
            <span className="ml-1">$</span>
          </div>
        </div>
      </div>

      <Link href="/confirmation-status">
        <button
          type="submit"
          className="w-1/4 bg-blue-600 text-gray-10 font-medium p-2 rounded-md mt-4"
          onClick={handleSubmit}
        >
          Save Changes
        </button>
      </Link>
    </form>
  );
};

export default PostRequestForm;
