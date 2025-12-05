import Link from "next/link";
import React from "react";

const leaveWeys = [
  { number: "120", title: "Annual Leave", btn: "Apply", Url: "/leaveFormPage" },
  { number: "90", title: "Sick Leaves", btn: "Apply", Url: "/" },
  { number: "30", title: "Maternity Leave", btn: "Apply", Url: "/" },
  { number: "20", title: "Rejected Leave", btn: "Apply", Url: "/" },
];

function AplayLeave() {
  return (
    <div className="px-4 md:px-6 py-10 min-h-screen bg-gray-50">
      <section className="max-w-6xl mx-auto">

        {/* Heading */}
        <h1 className="text-xl md:text-3xl lg:text-4xl font-semibold font-mono py-4 text-gray-800">
          Leave Applications
        </h1>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-6">

          {leaveWeys.map((item, id) => (
            <div
              key={id}
              className="flex items-center gap-3 md:gap-4 bg-blue-500 rounded-2xl p-4 md:p-6 shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Number Circle */}
              <h1
                className="p-3 md:p-4 w-14 h-14 md:w-16 md:h-16 flex justify-center items-center
               font-bold bg-white rounded-full text-black text-lg md:text-2xl shadow"
              >
                {item.number}
              </h1>

              {/* Details */}
              <div>
                <h1 className="text-white text-sm md:text-lg font-medium">
                  {item.title}
                </h1>

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

      {/* form section */}

      <section className="py-6">
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Hart Hagerty</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          <br />
          <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td>
        <td>Purple</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      {/* row 2 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Brice Swyre</div>
              <div className="text-sm opacity-50">China</div>
            </div>
          </div>
        </td>
        <td>
          Carroll Group
          <br />
          <span className="badge badge-ghost badge-sm">Tax Accountant</span>
        </td>
        <td>Red</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      {/* row 3 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/4@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Marjy Ferencz</div>
              <div className="text-sm opacity-50">Russia</div>
            </div>
          </div>
        </td>
        <td>
          Rowe-Schoen
          <br />
          <span className="badge badge-ghost badge-sm">Office Assistant I</span>
        </td>
        <td>Crimson</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      {/* row 4 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/5@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Yancy Tear</div>
              <div className="text-sm opacity-50">Brazil</div>
            </div>
          </div>
        </td>
        <td>
          Wyman-Ledner
          <br />
          <span className="badge badge-ghost badge-sm">Community Outreach Specialist</span>
        </td>
        <td>Indigo</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    </tbody>
    {/* foot */}
    <tfoot>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </tfoot>
  </table>
</div>
        
      </section>
    </div>
  );
}

export default AplayLeave;