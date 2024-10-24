// SearchStatusComponent.jsx
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const SearchStatusComponent = () => {
  const [URL, setURL] = useState('');
  const router = useRouter();

  const handleInputChange = (event) => {
    setURL(event.target.value);
  };

  const handleSubmit = () => {
    router.push(`/add-website-info?URL=${encodeURIComponent(URL)}`);
  };

  return (
    <div className="flex justify-between items-center p-4 mb-[35rem]">
      <div className="flex items-center ml-4 bg-gray-10 border rounded-lg px-3 py-2 w-full max-w-[95rem]">
        <label className="mr-2 text-adsy_com-black">URL:</label>
        <input
          type="text"
          placeholder="Add your URL here"
          value={URL}
          onChange={handleInputChange}
          className="outline-none w-full text-adsy_com-black"
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white text-gray-10 font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SearchStatusComponent;
