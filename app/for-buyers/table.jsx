import React from 'react';

const ComparisonTable = () => {
  return (
    <div className="overflow-x-auto p-4 ">
      <div className="rounded-lg overflow-hidden border border-gray-900">
        <table className="w-[100%]  min-w-full text-center !text-gray-900 table-auto border-collapse">
          <thead>
            <tr>
              <th className="p-8 sm:p-4 text-[39px] font-bold rounded-tl-lg border-r border-gray-900">Advertpulse</th>
              <th className="p-8 sm:p-4 text-[39px] font-bold rounded-tr-lg">Other Platforms</th>
            </tr>
          </thead>
          <tbody>
            {Array(7)
              .fill('')
              .map((_, idx) => (
                <tr key={idx} className="border-t !border-gray-900">
                  <td className="p-8  sm:p-4 sm:px-8 px-16  text-[26px] border border-gray-900 border-l-0">
                    <div className="flex items-center justify-center space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={4}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Place quality blog posts</span>
                    </div>
                  </td>
                  <td className="p-8 px-16 text-[26px] border border-gray-900 border-r-0">
  <div className="flex items-center justify-center space-x-2">
    <span className={`text-xl ${idx % 2 === 0 ? 'text-red-500' : 'text-greenCustom'}`}>
      {idx % 2 === 0 ? '❌' : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-green-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={4}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      )}
    </span>
    <span className="border-none">Place quality blog posts</span>
  </div>
</td>


                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComparisonTable;
