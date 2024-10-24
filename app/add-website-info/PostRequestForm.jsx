"use client";
import axios from "axios";
import { useState } from "react";
import Cookies from "js-cookie";
import "react-quill/dist/quill.snow.css";
import { useSearchParams } from "next/navigation";
import { Input } from "./../common/Input";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const hostedURL = process.env.NEXT_PUBLIC_HOSTED_URL;
const localbaseURL = process.env.NEXT_PUBLIC_BASE_URL;

const PostRequestForm = () => {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const [formData, setFormData] = useState({
    URL: "",
    language: "",
    markedSponsoredBy: "False",
    taqs: [],
    requirements: "",
    buyingBuyerArticle: false,
    workExamples: "",
    contentSize: "500",
    contentPlacement: 0,
    writingAndPlacement: 0,
    extraContent: 0,
    specialTopic: 0,
    priceForLinks: 0,
    contentTypes: [],
  });

  const searchParams = useSearchParams();
  const URL = searchParams.get("URL");
  const handleChange = (eOrName, value) => {
    if (typeof eOrName === "string") {
      // For ReactQuill or custom handlers
      const name = eOrName;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    } else {
      // For standard input events
      const { name, value, type, checked, multiple } = eOrName.target;
  
      if (type === "checkbox") {
        // Handle multiple checkboxes by updating the contentTypes array
        setFormData((prevData) => {
          const currentContentTypes = Array.isArray(prevData.contentTypes) ? prevData.contentTypes : [];
  
          // If checked, add the value to the array, otherwise remove it
          const updatedContentTypes = checked
            ? [...currentContentTypes, value] // Add value
            : currentContentTypes.filter((item) => item !== value); // Remove value
  
          return {
            ...prevData,
            contentTypes: updatedContentTypes, // Update the contentTypes array
          };
        });
      } else if (multiple && name === "tags") {
        const selectedTags = Array.from(
          eOrName.target.selectedOptions,
          (option) => option.value
        );
        setFormData((prevData) => ({
          ...prevData,
          [name]: selectedTags,
        }));
      } else if (type === "number") {
        setFormData((prevData) => ({
          ...prevData,
          [name]: value ? Number(value) : "", // Convert to number or set to empty string if not a valid number
        }));
      } else {
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      }
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert 'True'/'False' to boolean
    const finalData = {
      ...formData,
      markedSponsoredBy: formData.markedSponsoredBy === "True",
    };

    const token = Cookies.get("authToken");
    try {
      console.log("button clicked");
      const res = await axios.post(
        `${hostedURL}/seller/products?URL=${URL}`,
        finalData, // Use the modified data with boolean value
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Product created:", res.data);
      router.push("/confirmation-status");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 bg-gray-10 mb-20 rounded-lg shadow-md w-[99%] mx-auto text-adsy_com-black"
    >
      <div className="flex space-x-4 mb-4">
        <div className="w-1/2">
          <label className="block text-sm font-medium text-gray-700">
            URL *
          </label>
          <input
            type="url"
            name="URL"
            value={URL}
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
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          >
            <option>English</option>
            <option>French</option>
            <option>German</option>
          </select>
        </div>
      </div>
      <div className="flex space-x-4 mb-4">
        <div className="w-1/2">
          <label className="block text-sm font-medium text-gray-700">
            Content has to be marked as sponsored *
          </label>
          <div className="flex items-center space-x-4 mt-2">
            <label className="flex items-center space-x-2">
              <Input
                type="radio"
                name="markedSponsoredBy"
                value="True"
                checked={formData.markedSponsoredBy === "True"}
                onChange={handleChange}
                className="text-indigo-600"
              />
              <span>Yes</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="markedSponsoredBy"
                value="False"
                checked={formData.markedSponsoredBy === "False"}
                onChange={handleChange}
                className="text-indigo-600"
              />
              <span>No</span>
            </label>
          </div>
        </div>
        <div className="w-1/2">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Categories (select up to 3) *
            </label>
            <select
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              multiple
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 cursor-pointer"
              style={{ height: "2.4rem", overflowY: "auto" }} // Adjust the height to display only one row
            >
              <option value="Automobile">Automobile</option>
              <option value="Business">Business</option>
              <option value="Home">Home</option>
              <option value="Family">Family</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex space-x-4 mb-4">
        <div className="w-1/2">
          <div className="mt-[-1rem] mb-3  w-full  rounded-md">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Links*
            </label>
            <div className="flex space-x-8 mt-4">
              <label className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="links"
                  value="DoFollow"
                  checked={formData.links === "DoFollow"}
                  onChange={handleChange}
                  className="text-indigo-600"
                />
                <span>DoFollow</span>
              </label>

              <label className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="links"
                  value="NoFollow"
                  checked={formData.links === "NoFollow"}
                  onChange={handleChange}
                  className="text-indigo-600"
                />
                <span>NoFollow</span>
              </label>
            </div>
          </div>

          <div className="mt-1">
            <label className="block text-sm font-medium text-gray-700">
              Special Requirements
            </label>

            <ReactQuill
              value={formData.requirements}
              onChange={(value) => handleChange("requirements", value)}
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
          </div>
          <div className="flex items-center mt-4">
            <input
              type="checkbox"
              name="buyingBuyerArticle"
              checked={formData.buyingBuyerArticle} // Reflects the state
              onChange={handleChange} // Handles state changes
              className="mr-2"
            />
            <div className="flex flex-col">
              <p className="text-xs text-gray-600">
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
              name="workExamples"
              value={formData.workExamples}
              onChange={handleChange}
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
                  name="contentSize"
                  value="500"
                  checked={formData.contentSize === "500"}
                  onChange={handleChange}
                  className="text-indigo-600"
                />
                <span>500</span>
              </label>
              <label className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="contentSize"
                  value="1000"
                  checked={formData.contentSize === "1000"}
                  onChange={handleChange}
                  className="text-indigo-600"
                />
                <span>1000</span>
              </label>
              <label className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="contentSize"
                  value="1500"
                  checked={formData.contentSize === "1500"}
                  onChange={handleChange}
                  className="text-indigo-600"
                />
                <span>1500</span>
              </label>
              <label className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="contentSize"
                  value="2000"
                  checked={formData.contentSize === "2000"}
                  onChange={handleChange}
                  className="text-indigo-600"
                />
                <span>2000+</span>
              </label>
            </div>

           

            <div className="w-1/2 mb-4 text-gray-600 mt-4">
              <label className="block text-sm font-medium text-gray-700 w-full whitespace-nowrap">
                Are Any of the Following Listed on Your Website?
              </label>
              <div className="flex flex-col space-y-2 mt-2">
                <label className="flex items-center space-x-2">
                  <Input
                    type="checkbox"
                    name="contentTypes"
                    value="adult"
                    checked={formData.contentTypes?.includes("adult")}
                    onChange={handleChange}
                    className="text-indigo-600"
                  />
                  <span className="text-xs">Adult Material</span>
                </label>
                <label className="flex items-center space-x-2">
                  <Input
                    type="checkbox"
                    name="contentTypes"
                    value="gambling"
                    checked={formData.contentTypes?.includes("gambling")}
                    onChange={handleChange}
                    className="text-indigo-600"
                  />
                  <span className="text-xs">Gambling</span>
                </label>
                <label className="flex items-center space-x-2">
                  <Input
                    type="checkbox"
                    name="contentTypes"
                    value="casino"
                    checked={formData.contentTypes?.includes("casino")}
                    onChange={handleChange}
                    className="text-indigo-600"
                  />
                  <span className="text-xs">Casino</span>
                </label>
                <label className="flex items-center space-x-2">
                  <Input
                    type="checkbox"
                    name="contentTypes"
                    value="crypto"
                    checked={formData.contentTypes?.includes("crypto")}
                    onChange={handleChange}
                    className="text-indigo-600"
                  />
                  <span className="text-xs">Crypto</span>
                </label>
                <label className="flex items-center space-x-2">
                  <Input
                    type="checkbox"
                    name="contentTypes"
                    value="none"
                    checked={formData.contentTypes?.includes("none")}
                    onChange={handleChange}
                    className="text-indigo-600"
                  />
                  <span className="text-xs">None</span>
                </label>
              </div>
            </div>
          </div>
          <div className="mt-4 w-full rounded-md">
              <label className="text-sm font-medium text-gray-700">
                Add Price for Link Insertion:
              </label>

              <div className="mb-4 w-full rounded-md flex items-center space-x-4">
                <div className="w-full max-w-full">
                  <p className="text-xs text-gray-600 w-full leading-snug tracking-wide whitespace-nowrap overflow-hidden text-ellipsis">
                    State the price you want to get for placing a link.
                  </p>
                </div>

                <div className="flex items-center mb-1">
                 
                  <input
                    type="number"
                    name="priceForLinks"
                    value={formData.priceForLinks}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md shadow-sm p-1 w-20 ml-2"
                    min="0"
                    placeholder="0"
                  />
                   <span className="ml-1">$</span>
                </div>
              </div>
            </div>
          <div className="flex items-center mb-2 mt-[-0.5rem]">
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
              name="contentPlacement" // Use simple name for easy state management
              value={formData.contentPlacement} // This should reflect your form state
              onChange={handleChange} // Call your change handler
              className="border border-gray-300 rounded-md shadow-sm p-1 w-20 ml-4"
              min="0" // Minimum value of 0
              placeholder="0" // Optional placeholder
            />
            <span className="ml-1">$</span>
          </div>
          <div className="flex items-center mb-2">
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
              name="writingAndPlacement"
              value={formData.writingAndPlacement}
              onChange={handleChange}
              className="border border-gray-300 rounded-md shadow-sm p-1 w-20 ml-4"
              min="0"
            />
            <span className="ml-1">$</span>
          </div>
          <div className="flex items-center mb-2">
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
              name="extraContent"
              value={formData.extraContent}
              onChange={handleChange}
              className="border border-gray-300 rounded-md shadow-sm p-1 w-20 ml-4"
              min="0"
            />
            <span className="ml-1">$</span>
          </div>

          {/* Special Topic */}
          <div className="flex items-center mb-2">
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
              name="specialTopic"
              value={formData.specialTopic}
              onChange={handleChange}
              className="border border-gray-300 rounded-md shadow-sm p-1 w-20 ml-4"
              min="0"
            />
            <span className="ml-1">$</span>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="w-1/4 bg-blue-600 text-gray-10 font-medium p-2 rounded-md "
      >
        Save Changes
      </button>
    </form>
  );
};

export default PostRequestForm;
