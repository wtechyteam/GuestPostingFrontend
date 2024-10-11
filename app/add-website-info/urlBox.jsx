import Link from 'next/link';

const SearchStatusComponent = () => {
  return (
    <div className="flex justify-between items-center p-4 mb-[35rem]"> {/* Custom margin-bottom */}
      <div className="flex items-center ml-4 bg-gray-10 border rounded-lg px-3 py-2 w-full max-w-[95rem]">
        <label className="mr-2 text-adsy_com-black">URL:</label>
        <input
          type="text"
          placeholder="Add your URL here"
          className="outline-none w-full text-adsy_com-black"
        />
       <Link href="/confirmation-status">
          <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200">
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SearchStatusComponent;
