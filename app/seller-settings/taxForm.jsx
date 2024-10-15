import { Input } from "../common/Input";
import { useState } from "react";

const TaxForm = ({ citizenStatus }) => {
  const [isChecked, setIsChecked] = useState(false);

  // State to manage form inputs
  const [formData, setFormData] = useState({
    company: "Jhons Smith",
    apartment: "India",
    state: "Haryana",
    country: "India",
    street: "Jhons Smith",
    city: "Jhons Smith",
    postalCode: "Jhons Smith",
    vatNumber: "Jhons Smith",
    signature: "Jhons Smith",
  });

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    alert("Form saved!");
    console.log(formData);
    // Add save logic here
  };

  const handleCancel = () => {
    alert("Cancelled!");
    // Add cancel logic here
  };

  if (citizenStatus === "usPerson") {
    return (
      <div className="mt-6 p-4 border rounded-md bg-gray-100">
        <h2 className="text-2xl text-gray-900 font-semibold mb-4">W-8BEN</h2>

        <div className="p-6 bg-white rounded-md">
          <div className="flex flex-wrap gap-6">
            <div className="flex-1 min-w-[250px]">
              <div className="mb-4">
                <label
                  htmlFor="company"
                  className="block text-sm font-semibold text-gray-600 text-[17.18px]"
                >
                  Legal name of taxpayer
                </label>
                <Input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full h-10 border border-gray-300 text-gray-900 p-2 rounded-md text-[17.18px]"
                  value={formData.company}
                  onChange={handleInputChange}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="apartment"
                  className="block text-sm font-semibold text-gray-600 text-[17.18px]"
                >
                  Address
                </label>
                <Input
                  type="text"
                  id="apartment"
                  name="apartment"
                  className="w-full h-10 border border-gray-300  text-gray-900 p-2 rounded-md text-[17.18px]"
                  value={formData.apartment}
                  onChange={handleInputChange}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="state"
                  className="block text-sm font-semibold text-gray-600 text-[17.18px]"
                >
                  State/ Region*
                </label>
                <Input
                  type="text"
                  id="state"
                  name="state"
                  className="w-full h-10 border border-gray-300  text-gray-900 p-2 rounded-md text-[17.18px]"
                  value={formData.state}
                  onChange={handleInputChange}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="country"
                  className="block text-sm font-semibold text-gray-600 text-[17.18px]"
                >
                  Country*
                </label>
                <Input
                  type="text"
                  id="country"
                  name="country"
                  className="w-full h-10 border border-gray-300  text-gray-900 p-2 rounded-md text-[17.18px]"
                  value={formData.country}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="flex-1 min-w-[250px]">
              <div className="mb-4">
                <label
                  htmlFor="street"
                  className="block text-sm font-semibold    text-gray-600 text-[17.18px]"
                >
                  Federal tax classification
                </label>
                <Input
                  type="text"
                  id="street"
                  name="street"
                  className="w-full h-10 border border-gray-300  text-gray-900 p-2 rounded-md text-[17.18px]"
                  value={formData.street}
                  onChange={handleInputChange}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="city"
                  className="block text-sm font-semibold text-gray-600 text-[17.18px]"
                >
                  City/ Town/ Village*
                </label>
                <Input
                  type="text"
                  id="city"
                  name="city"
                  className="w-full h-10 border border-gray-300   text-gray-900 p-2 rounded-md text-[17.18px]"
                  value={formData.city}
                  onChange={handleInputChange}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="postalCode"
                  className="block text-sm font-semibold text-gray-600 text-[17.18px]"
                >
                  Postal Code*
                </label>
                <Input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  className="w-full h-10 border border-gray-300  text-gray-900 p-2 rounded-md text-[17.18px]"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="vatNumber"
                  className="block text-sm font-semibold text-gray-600 text-[17.18px]"
                >
                  Tax identification Number
                </label>
                <Input
                  type="text"
                  id="vatNumber"
                  name="vatNumber"
                  className="w-full h-10 border border-gray-300  text-gray-900 p-2 rounded-md text-[17.18px]"
                  value={formData.vatNumber}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="text-gray-600 text-sm mb-2 ml-6">
            Please provide your tax identification number (TIN).
          </p>
          <p className="text-gray-600 text-sm mb-4 ml-6">
            If you don’t have a TIN, consult a local tax professional or your
            tax advisor.
          </p>

          <div className="flex items-start mb-4">
            <input
              type="checkbox"
              id="certify"
              name="certify"
              className="mr-2 mt-1"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <p className="text-gray-600 text-sm">
              I certify that I have the capacity to sign for the person
              identified on line 1 of this form. And I consent to provide an
              electronic signature by typing my signature above.Under penalties
              of perjury, I declare that I have examined and signed the Form
              W-8BEN and the information and certifications contained therein
              have remained the same and have remained unchanged throughout
              calendar year 2024 through the date on this form and were true,
              correct and complete for this year.If these facts and
              certifications do not apply to you, or if you have general
              questions about this unchanged status affidavit, please reach out
              to customer support.
            </p>
          </div>
          <div className="mb-4">
            <label
              htmlFor="vatNumber"
              className="block text-sm font-semibold text-gray-600 text-[20.18px] mb-2" // Add margin-bottom here
            >
              Signature (Type your Full Name)
            </label>
            <Input
              type="text"
              id="signature"
              name="signature"
              className="w-[50%] h-10 border border-gray-300  text-gray-900 p-2 rounded-md text-[17.18px]"
              value={formData.signature}
              onChange={handleInputChange}
            />
          </div>

          <div className="flex mt-6 space-x-4">
            <button
              className={`px-6 py-2 rounded-md text-white ${
                isChecked
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
              onClick={handleSave}
              disabled={!isChecked}
            >
              Save
            </button>
            <button
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (citizenStatus === "nonUsPerson") {
    return (
      <div className="mt-6 p-4 border rounded-md bg-gray-100">
        <h2 className="text-2xl text-gray-900 font-semibold mb-4">W-9</h2>

        <div className="p-6 bg-white rounded-md">
          <div className="flex flex-wrap gap-6">
            <div className="flex-1 min-w-[250px]">
              <div className="mb-4">
                <label
                  htmlFor="company"
                  className="block text-sm font-semibold text-gray-600 text-[17.18px]"
                >
                  Legal name of taxpayer
                </label>
                <Input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full h-10 border border-gray-300 text-gray-900 p-2 rounded-md text-[17.18px]"
                  value={formData.company}
                  onChange={handleInputChange}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="apartment"
                  className="block text-sm font-semibold text-gray-600 text-[17.18px]"
                >
                  Address
                </label>
                <Input
                  type="text"
                  id="apartment"
                  name="apartment"
                  className="w-full h-10 border border-gray-300  text-gray-900 p-2 rounded-md text-[17.18px]"
                  value={formData.apartment}
                  onChange={handleInputChange}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="state"
                  className="block text-sm font-semibold text-gray-600 text-[17.18px]"
                >
                  State/ Region*
                </label>
                <Input
                  type="text"
                  id="state"
                  name="state"
                  className="w-full h-10 border border-gray-300  text-gray-900 p-2 rounded-md text-[17.18px]"
                  value={formData.state}
                  onChange={handleInputChange}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="country"
                  className="block text-sm font-semibold text-gray-600 text-[17.18px]"
                >
                  Country*
                </label>
                <Input
                  type="text"
                  id="country"
                  name="country"
                  className="w-full h-10 border border-gray-300  text-gray-900 p-2 rounded-md text-[17.18px]"
                  value={formData.country}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="flex-1 min-w-[250px]">
              <div className="mb-4">
                <label
                  htmlFor="street"
                  className="block text-sm font-semibold    text-gray-600 text-[17.18px]"
                >
                  Federal tax classification
                </label>
                <Input
                  type="text"
                  id="street"
                  name="street"
                  className="w-full h-10 border border-gray-300  text-gray-900 p-2 rounded-md text-[17.18px]"
                  value={formData.street}
                  onChange={handleInputChange}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="city"
                  className="block text-sm font-semibold text-gray-600 text-[17.18px]"
                >
                  City/ Town/ Village*
                </label>
                <Input
                  type="text"
                  id="city"
                  name="city"
                  className="w-full h-10 border border-gray-300   text-gray-900 p-2 rounded-md text-[17.18px]"
                  value={formData.city}
                  onChange={handleInputChange}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="postalCode"
                  className="block text-sm font-semibold text-gray-600 text-[17.18px]"
                >
                  Postal Code*
                </label>
                <Input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  className="w-full h-10 border border-gray-300  text-gray-900 p-2 rounded-md text-[17.18px]"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex space-x-4 mb-2 gap-16">
            <div className="flex items-center ">
              <input type="checkbox" id="ssn" name="ssn" className="mr-2" />
              <p className="text-gray-600 text-sm">
                Social security number (SSN) (xxx-xx-xxxx)
              </p>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="ein" name="ein" className="mr-2" />
              <p className="text-gray-600 text-sm">
                Employer identification number (EIN) (xx-xxxxxxxx)
              </p>
            </div>
          </div>

          <div className="flex items-start mb-4">
            <input
              type="checkbox"
              id="certify"
              name="certify"
              className="mr-2 mt-1"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <p className="text-gray-600 text-sm">
              I consent to provide an electronic signature by typing my
              signature below
            </p>
          </div>
          <div className="mb-4">
            <label
              htmlFor="vatNumber"
              className="block text-sm font-semibold text-gray-600 text-[20.18px] mb-2" // Add margin-bottom here
            >
              Signature (Type your Full Name)
            </label>
            <Input
              type="text"
              id="signature"
              name="signature"
              className="w-[50%] h-10 border border-gray-300  text-gray-900 p-2 rounded-md text-[17.18px]"
              value={formData.signature}
              onChange={handleInputChange}
            />
          </div>

          <div className="flex mt-6 space-x-4">
            <button
              className={`px-6 py-2 rounded-md text-white ${
                isChecked
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
              onClick={handleSave}
              disabled={!isChecked}
            >
              Save
            </button>
            <button
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default TaxForm;
