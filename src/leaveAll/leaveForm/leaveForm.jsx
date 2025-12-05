"use client";

import { BASE_URL } from "@/basUrl/url";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

function LeaveForm() {
    const router = useRouter()
  const [formData, setFormData] = useState({
    leaveType: "",
    startDate: "",
    endDate: "",
    duration: "",
    resumptionDate: "",
    reliefOfficer: "",
    reasonForLeave: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
        const {leaveType,startDate,endDate,duration,resumptionDate,reliefOfficer,reasonForLeave} = formData;
        if( !leaveType || !startDate || !endDate || !duration || !resumptionDate || !reliefOfficer || !reasonForLeave){
         toast.error("All feild required")
        return
        }
        const respons = await axios.post(`${BASE_URL}/user/leaceAplication`,formData)
        console.log(respons)
        toast.success("leave success")
        router.push("/applayLeave")


    } catch (error) {
    console.log(error);
    toast.error("Something went wrong");
    }
  };

  return (
    <div className="w-full flex justify-center py-10 px-4">
      <div className="bg-white shadow-lg rounded-xl w-full max-w-4xl p-6">
        <h1 className="text-center font-bold text-3xl mb-6">
          Application for Leave
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* First Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block font-medium mb-1">Leave Type</label>
              <select
                name="leaveType"
                className="w-full border rounded-xl px-4 py-2"
                onChange={handleChange}
              >
                <option value="">Select Type</option>
                <option value="annual">Annual Leave</option>
                <option value="maternity">Maternity Leave</option>
                <option value="sick">Sick Leave</option>
                <option value="rejected">Rejected Leave</option>
              </select>
            </div>

            <div>
              <label className="block font-medium mb-1">Start Date</label>
              <input
                type="date"
                name="startDate"
                className="w-full border rounded-xl px-4 py-2"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block font-medium mb-1">End Date</label>
              <input
                type="date"
                name="endDate"
                className="w-full border rounded-xl px-4 py-2"
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Duration (Days)</label>
              <input
                type="number"
                name="duration"
                className="w-full border rounded-xl px-4 py-2"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Third Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block font-medium mb-1">Resumption Date</label>
              <input
                type="date"
                name="resumptionDate"
                className="w-full border rounded-xl px-4 py-2"
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Relief Officer</label>
              <select
                name="reliefOfficer"
                className="w-full border rounded-xl px-4 py-2"
                onChange={handleChange}
              >
                <option value="">Select Officer</option>
                <option value="Sadek Hossen">Sadek Hossen</option>
                <option value="Monna Khan">Monna Khan</option>
                <option value="Imam Khan">Imam Khan</option>
                <option value="Abdur Rahim">Abdur Rahim</option>
              </select>
            </div>
          </div>

          {/* Reason Box */}
          <div>
            <label className="block font-medium mb-1">Reason of Leave</label>
            <textarea
              rows="4"
              name="reasonForLeave"
              className="w-full border rounded-xl px-4 py-2"
              onChange={handleChange}
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg hover:bg-blue-700 transition"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LeaveForm;
