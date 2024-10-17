import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const SearchStatusComponent = () => {
  const [url, setUrl] = useState('');
  const router = useRouter(); // Initialize the router

  const handleInputChange = (event) => {
    setUrl(event.target.value);
  };

  const handleSubmit = () => {
    // Navigate to AddWebsiteInfoPage with the URL as a query parameter
    router.push(`/add-website-info?url=${encodeURIComponent(url)}`);
  };

  return (
    <div className="flex justify-between items-center p-4 mb-[35rem]">
      <div className="flex items-center ml-4 bg-gray-10 border rounded-lg px-3 py-2 w-full max-w-[95rem]">
        <label className="mr-2 text-adsy_com-black">URL:</label>
        <input
          type="text"
          placeholder="Add your URL here"
          value={url}
          onChange={handleInputChange}
          className="outline-none w-full text-adsy_com-black"
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SearchStatusComponent;
