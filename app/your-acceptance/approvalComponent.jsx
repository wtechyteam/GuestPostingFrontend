import Image from "next/image";

export default function TaskPage() {
  return (
    <div className="relative bg-gray-10 shadow-lg rounded-[14px] min-h-[450px] w-full sm:max-w-[600px] md:max-w-[800px] lg:max-w-[900px] xl:max-w-[1100px] mb-[10rem]">
      <div className="bg-white w-full max-w-5xl rounded-lg  p-6 md:p-8">
        {/* Top Section */}
        <div className="flex flex-wrap gap-4 text-sm text-gray-700">
  <div className="flex-1 min-w-[150px]">
    <p className="font-bold">Service type</p>
    <p className="mt-2">Content Placement</p> {/* Added margin-top */}
    <p className="mt-1">$3,640.87</p> {/* Added margin-top */}
  </div>
  <div className="flex-1 min-w-[150px]">
    <p className="font-bold">Language</p>
    <p className="mt-2">German</p> {/* Added margin-top */}
  </div>
  <div className="flex-1 min-w-[150px]">
    <p className="font-medium">Url Links</p>
    <a href="#" className="text-blue-600 underline mt-2"> {/* Added margin-top */}
      Marked Sponsored by
    </a>
  </div>
  <div className="flex-1 min-w-[150px]">
    <p className="font-bold">Anchor tag</p>
    <p className="mt-2">Germany</p> {/* Added margin-top */}
  </div>
  <div className="flex-1 min-w-[150px]">
    <p className="font-bold">Task Id</p>
    <p className="mt-2">#AS12354</p> {/* Added margin-top */}
  </div>
 
</div>



        {/* Task Status Section */}
        <div className="flex flex-wrap gap-4 text-sm text-gray-700">
  <div className="flex-1 min-w-[150px]">
    <div className="mt-6">
      <p className="font-bold text-gray-900">Task Status</p>
      <ul className="text-sm text-gray-700 space-y-1 mt-2"> {/* Added margin-top */}
        <li className="mt-2">09/12/24 Task approved</li> {/* Added margin-top */}
        <li className="mt-2">07/12/24 In Progress</li> {/* Added margin-top */}
        <li className="mt-2">04/12/24 Task Accepted</li> {/* Added margin-top */}
      </ul>
    </div>
  </div>
  <div className="flex-1 min-w-[150px] mt-6">
    <p className="font-bold">Promoted url</p>
    <p className="mt-2">cvxwf/...</p> {/* Added margin-top */}
  </div>
</div>


        {/* Buttons for Text and HTML */}
        <div className="mt-6 flex space-x-4">
          <button className="w-[20%] bg-blue-600 text-white px-4 py-2 rounded  ">
            Text
          </button>
          <button className=" w-[20%] bg-gray-200 text-gray-700 px-4 py-2 rounded ">
            Html
          </button>
        </div>

        {/* Main Content Section */}
        <div className="mt-6 flex flex-col md:flex-row gap-6">
  {/* Text Section */}
  <div className="flex-1">
    <h2 className="text-xl font-semibold text-gray-900">
      It is a long established
    </h2>
    <div className="flex flex-row md:flex-col gap-6">
  {/* Text Section */}
  <div className="w-full md:w-1/2 text-sm text-gray-700 leading-relaxed">
    <strong>It is a long established</strong> fact that a reader will be
    distracted by the readable content of a page when looking at its layout.
    The point of using Lorem Ipsum is that it has a more-or-less normal
    distribution of letters, as opposed to using Content here, content here,
    making it look like readable English. Many desktop publishing packages
    and web page editors now use Lorem Ipsum as their default model text, and
    a search for lorem ipsum will uncover many web sites still in their
    infancy. Various versions have evolved over the years, sometimes by
    accident, sometimes on purpose (injected humour and the like).
  </div>

  {/* Image Section */}
  <div className="w-full md:w-1/3 flex items-center justify-center">
    <Image
      src="/images/approvedimage.png" // Replace with your image path
      alt="Example Image"
      width={300}
      height={200}
      className="rounded-lg"
    />
  </div>
</div>

  </div>
</div>


        {/* Action Buttons */}
        <div className="mt-6 flex flex-row md:flex-col md:items-center gap-4">
          <button className="w-[20%] bg-gray-300 text-gray-700 px-6 py-2 rounded text-center">
            Rejected
          </button>
          <button className="w-[20%] bg-gray-300 text-gray-700 px-6 py-2 rounded text-center">
            For Approval
          </button>
        </div>
      </div>
    </div>
  );
}
