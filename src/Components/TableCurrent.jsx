import React from "react";

const Table = () => {
  const tableData = [
    { date: "xx", tradeNumber: "xx", tradedValue: "xx", volume: "xx" },
    { date: "xx", tradeNumber: "xx", tradedValue: "xx", volume: "xx" },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead className="">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b ">
              Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b ">
              No. of Trades
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b ">
              Traded Value (in crores)
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b ">
              Volume (in crores)
            </th>
          </tr>
        </thead>
        <tbody className="">
          {tableData.map((row, index) => (
            <tr key={index} className="">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-r border-black">
                {row.date}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-r border-black">
                {row.tradeNumber}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-r border-black">
                {row.tradedValue}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                {row.volume}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
