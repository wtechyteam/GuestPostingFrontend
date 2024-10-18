import Link from 'next/link';

const SearchStatusComponent = () => {
  return (
    <div className="flex flex-col p-4 mb-[35rem]"> {/* Changed to flex-col to stack elements */}
    <label className="mb-2 text-adsy_com-black">Task Placement URL:</label> {/* Added margin-bottom for spacing */}
    <div className="flex items-center bg-gray-10 border rounded-lg px-3 py-2 w-full max-w-[95rem]">
      <input
        type="text"
        placeholder="Paste URL"
        className="outline-none w-full text-adsy_com-black"
      />
      <Link href="/">
        <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200">
          Next
        </button>
      </Link>
    </div>
  </div>
  
  );
};

export default SearchStatusComponent;
