// Import necessary icons and dependencies
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchStatusComponent = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-white">
      {/* Search Input */}
      <div className="flex items-center bg-gray-10 border rounded-lg px-3 py-2 w-full max-w-[70rem]">
        <FontAwesomeIcon icon={faSearch} className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Social URL"
          className="outline-none w-full text-adsy_com-black"
        />
      </div>

      {/* Activate Status Dropdown */}
      <div className="ml-4">
        <label className="mr-2 text-adsy_com-black">Activate Status:</label>
        <select className="border p-2 rounded-md bg-gray-10 text-adsy_com-black w-48">
          <option className="text-adsy_com-black">Show all</option>
          <option className="text-adsy_com-black">Active</option>
          <option className="text-adsy_com-black">Inactive</option>
        </select>
      </div>
    </div>
  );
};

export default SearchStatusComponent;
