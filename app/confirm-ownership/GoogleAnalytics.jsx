import Link from "next/link";

const SearchStatusComponent = () => {
  return (
    <div className="mt-6 ">
      <div className="bg-gray-10 rounded-[14px] mb-[30rem] text-adsy_com-black p-6 w-[99%]">
        {/* <h2 className="text-lg font-semibold mb-2">Site owner</h2> */}
        <p className="mb-4 leading-6">
          Advert Pulse will display the site audience volume, traffic sources
          (search, referral, direct and social), and audience distribution by
          region.
        </p>
        <p className="mb-4 leading-6">
          N.B. Please note that you need to use the latest Google Analytics
          version (GA4) to confirm your site ownership. We would not show and
          use any more data nor pass it to third parties.
        </p>

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
