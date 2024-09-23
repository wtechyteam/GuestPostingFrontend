import React from 'react';
import { Button } from './Button'; // Adjust the import according to your project structure
import Heading from './Heading'; // Adjust the import according to your project structure

const FilterModal = ({
  isModalOpen,
  closeModal,
  value,
  setValue,
  ahref,
  setAhref,
  mozDR,
  setMozDR,
  semrushDA,
  setSemrushDA,
  spamScore,
  setSpamScore,
}) => {
  return (
    isModalOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
        <div className="relative w-[90%] max-w-4xl bg-gray-10 p-8 rounded-lg">
          <button
            className="absolute top-3 right-3 text-gray-500"
            onClick={closeModal}
          >
            &#x2715;
          </button>
          <Heading
            size="lg"
            as="h2"
            className="font-semibold text-adsy_com-black text-[30px]"
          >
            Filters
          </Heading>

          <hr className="border-t-2 border-gray-300 my-4" />

          <div className="flex flex-col space-y-4">
            <h2 className="font-normal text-adsy_com-black mb-2 text-[20px]">
              Most Popular Filters
            </h2>

            <div className="flex space-x-6 text-adsy_com-black">
              {/* Price Range */}
              <div className="flex-1">
                <label className="block mb-5 mt-1 text-gray-500">Price Range</label>
                <div className="relative">
                  <input
                    type="range"
                    min="50"
                    max="5000"
                    value={value}
                    className="w-full"
                    onChange={(e) => setValue(Number(e.target.value))}
                  />
                  <div className="absolute left-0 -translate-y-[-1] text-[10px]">
                    <span className="text-gray-700">$50</span>
                  </div>
                  <div className="absolute right-0 text-[10px] -translate-y-[-1]">
                    <span className="text-gray-700">$5000</span>
                  </div>
                  <div className="absolute w-full text-center -translate-y-10 text-[11px] flex justify-start pl-2 -ml-2">
                    <span className="font-bold border border-gray-300 rounded-md px-2 py-0.5">
                      ${value.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Ahrefs DR */}
              <div className="flex-1">
                <label className="block mb-5 mt-1 text-gray-500">Ahrefs DR from</label>
                <div className="relative">
                  <input
                    type="range"
                    min="50"
                    max="5000"
                    value={ahref}
                    className="w-full"
                    onChange={(e) => setAhref(Number(e.target.value))}
                  />
                  <div className="absolute left-0 -translate-y-[-1] text-[10px]">
                    <span className="text-gray-700">$50</span>
                  </div>
                  <div className="absolute right-0 text-[10px] -translate-y-[-1]">
                    <span className="text-gray-700">$5000</span>
                  </div>
                  <div className="absolute w-full text-center -translate-y-10 text-[11px] flex justify-start pl-2 -ml-2">
                    <span className="font-bold border border-gray-300 rounded-md px-2 py-0.5">
                      ${ahref.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Categories */}
              <div className="flex-1">
                <label className="block mb-2 mt-1 text-gray-500">Categories</label>
                <select className="w-full border border-gray-300 rounded-md p-2">
                  <option>Not Selected</option>
                  <option>USA</option>
                  <option>UK</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex space-x-6 text-adsy_com-black mt-6">
            {/* Country */}
            <div className="flex-1">
              <label className="block mb-2 mt-1 text-gray-500">Country</label>
              <select className="w-full border border-gray-300 rounded-md p-2">
                <option>Not Selected</option>
                <option>USA</option>
                <option>UK</option>
                {/* More options */}
              </select>
            </div>

            {/* Language */}
            <div className="flex-1">
              <label className="block mb-2 mt-1 text-gray-500">Language</label>
              <select className="w-full border border-gray-300 rounded-md p-2">
                <option>Not Selected</option>
                <option>English</option>
                <option>Spanish</option>
              </select>
            </div>

            {/* Approved */}
            <div className="flex-1">
              <label className="block mb-2 mt-1 text-gray-500">Approved</label>
              <select className="w-full border border-gray-300 rounded-md p-2">
                <option>Not Selected</option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <h2 className="font-normal text-adsy_com-black mt-6 mb-4 text-[20px]">
              SEO Filters
            </h2>

            <div className="flex space-x-6 text-adsy_com-black">
              {/* MOZ DR */}
              <div className="flex-1">
                <label className="block mb-5 mt-1 text-gray-500">MOZ DR From</label>
                <div className="relative">
                  <input
                    type="range"
                    min="50"
                    max="5000"
                    value={mozDR}
                    className="w-full"
                    onChange={(e) => setMozDR(Number(e.target.value))}
                  />
                  <div className="absolute left-0 -translate-y-[-1] text-[10px]">
                    <span className="text-gray-700">$50</span>
                  </div>
                  <div className="absolute right-0 text-[10px] -translate-y-[-1]">
                    <span className="text-gray-700">$5000</span>
                  </div>
                  <div className="absolute w-full text-center -translate-y-10 text-[11px] flex justify-start pl-2 -ml-2">
                    <span className="font-bold border border-gray-300 rounded-md px-2 py-0.5">
                      ${mozDR.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Semrush DA */}
              <div className="flex-1">
                <label className="block mb-5 mt-1 text-gray-500">Semrush DA from</label>
                <div className="relative">
                  <input
                    type="range"
                    min="50"
                    max="5000"
                    value={semrushDA}
                    className="w-full"
                    onChange={(e) => setSemrushDA(Number(e.target.value))}
                  />
                  <div className="absolute left-0 -translate-y-[-1] text-[10px]">
                    <span className="text-gray-700">$50</span>
                  </div>
                  <div className="absolute right-0 text-[10px] -translate-y-[-1]">
                    <span className="text-gray-700">$5000</span>
                  </div>
                  <div className="absolute w-full text-center -translate-y-10 text-[11px] flex justify-start pl-2 -ml-2">
                    <span className="font-bold border border-gray-300 rounded-md px-2 py-0.5">
                      ${semrushDA.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Spam Score */}
              <div className="flex-1">
                <label className="block mb-5 mt-1 text-gray-500">Spam Score from</label>
                <div className="relative">
                  <input
                    type="range"
                    min="50"
                    max="5000"
                    value={spamScore}
                    className="w-full"
                    onChange={(e) => setSpamScore(Number(e.target.value))}
                  />
                  <div className="absolute left-0 -translate-y-[-1] text-[10px]">
                    <span className="text-gray-700">$50</span>
                  </div>
                  <div className="absolute right-0 text-[10px] -translate-y-[-1]">
                    <span className="text-gray-700">$5000</span>
                  </div>
                  <div className="absolute w-full text-center -translate-y-10 text-[11px] flex justify-start pl-2 -ml-2">
                    <span className="font-bold border border-gray-300 rounded-md px-2 py-0.5">
                      ${spamScore.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <Button
              text="Apply"
              onClick={() => {
                // Logic to apply filters
                closeModal();
              }}
            />
          </div>
        </div>
      </div>
    )
  );
};

export default FilterModal;
