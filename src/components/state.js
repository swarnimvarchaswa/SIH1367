import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function StateNameFunct() {
  const [stateName, setStateName] = useState("");
  const navigate = useNavigate();

  const handleClick = () => {
    if (stateName) {
      navigate(`/form/${stateName}`);
    }
  };

  return (
    <div className="h-screen w-screen bg-orange-50 flex items-center justify-center">
      <div className="container mx-auto max-w-md px-8">
        <div className="grid items-center">
          <p className="text-[28px] text-center font-semibold text-gray-600 mb-2">
            Other State Scholarship Portal
          </p>
          <p className="text-lg text-center mb-[60px] text-gray-400">
            For Students Studing in other State University
          </p>
          <select
            className="w-full px-3 py-2 text-lg text-gray-600 rounded-md border-2 border-gray-300 focus:outline-green-500"
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
          <button
            className="bg-teal-500 mt-6 py-2 rounded-lg border-solid border-2 border-teal-600  text-white text-xl hover:bg-teal-600"
            onClick={() => {
              handleClick();
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div> 
  );
}
