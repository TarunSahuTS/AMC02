import React from "react";
import pdfIcon from "../../Images/pdf.png"; // Ensure the path is correct

const CircularsTable = () => {
  const data = [
    {
      date: "07-Jun-2024",
      subject: "Transaction Charges for Tri-party Repo",
      department: "Operations",
      referenceNo: "AMC Repo/Ops/2024-25/32",
      download: "zip",
    },
    {
      date: "06-Jun-2024",
      subject: "List of Additional eligible securities for June 2024-2",
      department: "Risk",
      referenceNo: "AMC Repo/Risk/2024-25/31",
      download: "pdf",
    },
    {
      date: "06-Jun-2024",
      subject: "List of Additional eligible securities for June 2024-1",
      department: "Risk",
      referenceNo: "AMC Repo/Risk/2024-25/30",
      download: "pdf",
    },
    {
      date: "03-Jun-2024",
      subject:
        "Submission of Half Yearly Net Worth Certificate as of March 31, 2024",
      department: "Compliance",
      referenceNo: "AMC Repo/Compliance/2024-25/29",
      download: "pdf",
    },
    {
      date: "30-May-2024",
      subject:
        "Submission of Half Yearly Internal Audit Report - Extension of timeline for submission",
      department: "Compliance",
      referenceNo: "AMC Repo/Compliance/2024-25/29",
      download: "pdf",
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="overflow-x-auto">
        <table className="w-full whitespace-nowrap divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Circular Subject
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Department
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Reference No
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Download
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {item.subject}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.department}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.referenceNo}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <img src={pdfIcon} alt="Download" className="w-6 h-6" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CircularsTable;
