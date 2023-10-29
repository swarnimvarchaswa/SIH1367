import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function StateNameFunct() {
  const [stateName, setStateName] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [password, setPassword] = useState("")
  const navigate = useNavigate();

  const handleClick = () => {
    if (stateName === "6522f4ae4064ebe565244450" && collegeName === "MMMUT" && password === "MMMUT") {
      navigate(`/form/${stateName}`);
    }
  };

  return (
    <div className="h-screen w-screen bg-slate-200">
      <div className="grid items-center justify-center w-screen bg-red-800 pt-2 pb-2 gap-1 ">
        <p className=" text-white text-center text-3xl">
          Other State Scholarship Portal
        </p>
        <p className="text-gray-200 text-sm text-center">
          For Students Studing in other State University
        </p>
      </div>

      <div className="flex justify-center mt-16 mx-10">
        <div className="max-w-md w-full border-solid border-[2px] border-red-700 rounded-xl bg-white shadow-lg">
          <p className="bg-orange-500 text-white text-3xl text-center px-8 py-3 rounded-t-lg">
            University Login
          </p>
          <div className="mx-8 mt-8">
            <select
              className="w-full px-3 py-2 text-lg text-gray-600 rounded-md border-2 border-gray-300 focus:outline-orange-500"
              id="color"
              name="color"
              placeholder="select"
              onChange={(e) => {
                setStateName(e.target.value);
              }}
            >
              <option value="" hidden>
                Select Your State
              </option>
              <option value="6522f4ae4064ebe565244450">Uttar Pradesh</option>
              <option value="65244c6ecdc93d9417c140e4">Madhya Pradesh</option>
              <option value="6522f5b84064ebe565244452">Bihar</option>
            </select>
            <p className="pl-3 text-sm pt-1 text-gray-400">
              State - <span className="text-green-500">Uttar Pradesh</span>
            </p>
          </div>
          <div className="px-8 pt-6">
            <input
              className="w-full px-3 py-2 text-lg rounded-md border-2 border-gray-300 focus:outline-orange-500"
              type="text"
              id="bookName"
              name="bookName"
              placeholder="College Id"
              onChange={(e) => {
                setCollegeName(e.target.value);
              }}
            />
            <p className="pl-3 text-sm pt-1 text-gray-400">
              Id - <span className="text-green-500">MMMUT</span>
            </p>
          </div>
          <div className="px-8 pt-6">
            <input
              className="w-full px-3 py-2 text-lg rounded-md border-2 border-gray-300 focus:outline-orange-500"
              type="password"
              id="password"
              name="password"
              // value={bookName}
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <p className="pl-3 text-sm pt-1 text-gray-400">
              Password - <span className="text-green-500">MMMUT</span>
            </p>
          </div>
          <div className="px-8 pt-6 pb-8 w-full">
            <button
              className="bg-orange-500 py-2 w-full  rounded-lg border-solid border-2 border-orange-600  text-white text-xl hover:bg-orange-600"
              onClick={() => {
                handleClick();
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
