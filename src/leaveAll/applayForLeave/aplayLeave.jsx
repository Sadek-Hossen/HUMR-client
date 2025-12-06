'use client'
import { BASE_URL } from "@/basUrl/url";
import useAuth from "@/hooks/useAuth";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const leaveWeys = [
  { number: "120", title: "Annual Leave", btn: "Apply", Url: "/leaveFormPage" },
  { number: "90", title: "Sick Leaves", btn: "Apply", Url: "/leaveFormPage" },
  { number: "30", title: "Maternity Leave", btn: "Apply", Url: "/leaveFormPage" },
  { number: "20", title: "Rejected Leave", btn: "Apply", Url: "/leaveFormPage" },
];

function AplayLeave() {
  const [leave, setLeave] = useState([]);
  const email = useAuth();

  useEffect(() => {
    if (!email) return;

    const fetchUser = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/user/leave/${email}`);
        if (response.status === 200 || response.status === 201) {
          setLeave(response.data?.leave || []);
        }
      } catch (error) {
        console.error("Error fetching leave:", error);
      }
    };

    fetchUser();
  }, [email]);

  return (
    <div className="px-4 md:px-6 py-10 min-h-screen bg-gray-50">
      {/* Static Cards Section */}
      <section className="max-w-6xl mx-auto">
        <h1 className="text-xl md:text-3xl lg:text-4xl font-semibold font-mono py-4 text-gray-800">
          Leave Applications
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-6">
          {leaveWeys.map((item, id) => (
            <div
              key={id}
              className="flex items-center gap-3 md:gap-4 bg-blue-500 rounded-2xl p-4 md:p-6 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <h1 className="p-3 md:p-4 w-14 h-14 md:w-16 md:h-16 flex justify-center items-center
                font-bold bg-white rounded-full text-black text-lg md:text-2xl shadow">
                {item.number}
              </h1>

              <div>
                <h1 className="text-white text-sm md:text-lg font-medium">{item.title}</h1>
                <Link href={item.Url}>
                  <button className="bg-amber-500 hover:bg-amber-400 
                    text-black font-medium rounded-full px-3 md:px-5 
                    py-1 mt-2 text-xs md:text-sm transition-all cursor-pointer">
                    {item.btn}
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Dynamic Leave Data Table */}
      <section className="py-6 mt-10 max-w-6xl mx-auto">
        {leave.length === 0 ? (
          <p className="text-center text-gray-500 mt-10">No leave applications found.</p>
        ) : (
          <div className="overflow-x-auto bg-white shadow-md rounded-lg">
            <table className="table-auto w-full border-collapse border border-gray-200">
              <thead className="bg-blue-500 text-white">
                <tr>
                  <th className="px-4 py-2 border">Type</th>
                  <th className="px-4 py-2 border">Start Date</th>
                  <th className="px-4 py-2 border">End Date</th>
                  <th className="px-4 py-2 border">Duration</th>
                  <th className="px-4 py-2 border">Resumption</th>
                  <th className="px-4 py-2 border">Relief Officer</th>
                  <th className="px-4 py-2 border">Reason</th>
                  <th className="px-4 py-2 border">Created At</th>
                </tr>
              </thead>
              <tbody>
                {leave.map((item) => (
                  <tr key={item._id} className="hover:bg-gray-100">
                    <td className="px-4 py-2 border">{item.leaveType}</td>
                    <td className="px-4 py-2 border">{item.startDate}</td>
                    <td className="px-4 py-2 border">{item.endDate}</td>
                    <td className="px-4 py-2 border">{item.duration} days</td>
                    <td className="px-4 py-2 border">{item.resumptionDate}</td>
                    <td className="px-4 py-2 border">{item.reliefOfficer}</td>
                    <td className="px-4 py-2 border">{item.reasonForLeave}</td>
                    <td className="px-4 py-2 border">
                      {new Date(item.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
}

export default AplayLeave;
