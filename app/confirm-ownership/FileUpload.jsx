import Link from "next/link";

const SearchStatusComponent = () => {
  return (
    <div className="mt-6 ">
      <div className=" rounded-[14px] mb-[20rem] text-adsy_com-black p-2 w-[60%]">
        {/* <h2 className="text-lg font-semibold mb-2">Site owner</h2> */}

        <div className="bg-gray-10 rounded-lg border border-gray-300 shadow-md p-4 mb-4">
          <p className="leading-6">1. Click</p>
        </div>

        <div className="bg-gray-10 rounded-lg border border-gray-300 shadow-md p-4 mb-4">
          <p className="leading-6">2. Add downloaded file to your website’s root directory</p>
        </div>

        <div className="bg-gray-10 rounded-lg border border-gray-300 shadow-md p-4 mb-4">
          <p className="leading-6">
            3. After that the file should be accessible at{" "}
            <span className="text-indigo-600">
              websites/url/9be64ef2b3b156a45dbfc8ede9198febb4779f4d.txt
            </span>
          </p>
        </div>

        <div className="bg-gray-10 rounded-lg border border-gray-300 shadow-md p-4 mb-4">
          <p className="leading-6">4. Click Confirm</p>
        </div>

        <div className="bg-gray-10 rounded-lg border border-gray-300 shadow-md p-4 mb-4">
          <p className="leading-6">5. Our system will check your website</p>
        </div>

        <div className="bg-gray-10 rounded-lg border border-gray-300 shadow-md p-4 mb-4">
          <p className="leading-6">6. Once the verification process is completed, you will be notified about its results.</p>
        </div>

        <div className="mt-4">
        <Link href="/my-website">
            <button className="bg-blue-600 text-gray-10 font-semibold py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition duration-200">
              Confirm
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchStatusComponent;
