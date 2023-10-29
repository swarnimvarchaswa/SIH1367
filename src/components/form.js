import React from "react";

export default function Form() {
  return (
    <div className="h-screen w-screen bg-slate-200">
      {/* header */}
      <div className="grid items-center justify-center w-screen bg-red-800 pt-3 pb-3 gap-1 ">
        <p className=" text-white text-center text-3xl">
          Other State Scholarship Portal
        </p>
        <p className="text-gray-200 text-sm text-center">
          For Students Studing in other State University
        </p>
        {/* footer */}
      </div>
      <div className="w-screen bg-blue-800 fixed bottom-0 py-4">
        <p className="text-center text-white">@ Team Garuda 2.0</p>
      </div>

      {/* body */}
      <div className="flex justify-center mt-[5rem] mx-10">
        <div className="px-8">
          <p className="text-lg text-center text-gray-500">
            Welcome to Other State Scholarship Portal. You can Enter your
            student details to verify it.
          </p>

          <div className="px-8 mt-16 max-w-md mx-auto">
            <select
              className="w-full px-3 py-2 text-lg text-gray-600 rounded-md border-2 border-gray-300 focus:outline-orange-500"
              id="color"
              name="color"
              placeholder="select"
              onChange={(e) => {
                // setStateName(e.target.value);
              }}
            >
              <option value="" hidden>
              Student Residence State
              </option>
              <option value="6522f4ae4064ebe565244450">New Delhi</option>
              <option value="65244c6ecdc93d9417c140e4">Madhya Pradesh</option>
              <option value="6522f5b84064ebe565244452">Bihar</option>
            </select>
            <p className="pl-3 text-sm pt-1 text-gray-400">
              State - <span className="text-green-500">New Delhi</span>
            </p>
          </div>
          <div className="px-8 max-w-md pt-6 mx-auto">
            <input
              className="w-full px-3 py-2 text-lg rounded-md border-2 border-gray-300 focus:outline-orange-500"
              type="text"
              id="bookName"
              name="bookName"
              placeholder="Student Registration Number"
              onChange={(e) => {
                // setCollegeName(e.target.value);
              }}
            />
            <p className="pl-3 text-sm pt-1 text-gray-400">
            Registration Number - <span className="text-green-500">12345678900</span>
            </p>
          </div>
          <div className="px-8 pt-8 pb-8 max-w-md mx-auto">
            <button
              className="bg-orange-500 py-2 w-full rounded-lg text-white text-xl hover:bg-orange-600"
              onClick={() => {
                // handleClick();
              }}
            >
              Get Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
