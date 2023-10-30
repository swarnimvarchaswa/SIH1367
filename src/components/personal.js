import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Personal() {
  const [av, setAv] = useState(false);
  const [ar, setAr] = useState(false);
  const [bv, setBv] = useState(false);
  const [br, setBr] = useState(false);
  const [cv, setCv] = useState(false);
  const [cr, setCr] = useState(false);
  const [dv, setDv] = useState(false);
  const [dr, setDr] = useState(false);
  const navigate = useNavigate();

  // a
  const handleAv = () => {
    setAv(true);
    setAr(false);
  };

  const handleAr = () => {
    setAv(false);
    setAr(true);
  };

  // b
  const handleBv = () => {
    setBv(true);
    setBr(false);
  };

  const handleBr = () => {
    setBv(false);
    setBr(true);
  };

  // cc
  const handleCv = () => {
    setCv(true);
    setCr(false);
  };

  const handleCr = () => {
    setCv(false);
    setCr(true);
  };

  // dddd
  const handleDv = () => {
    setDv(true);
    setDr(false);
  };

  const handleDr = () => {
    setDv(false);
    setDr(true);
  };

  const handleClick = () => {
    navigate("/details");
  };

  return (
    <div>
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
          <p className="text-center text-white">© Copyright Team Garuda 2.0</p>
        </div>
        {/* body */}
        <div className="px-10 py-10">
          <p className="text-4xl text-gray-500">Student Details</p>
          <br />
          {/* student name */}
          <div className="grid grid-cols-4 gap-6">
            <div className="col-span-2">
              <p className="text-2xl text-gray-500 py-6">
                1.<span className="font-semibold"> Student Name - </span>Samarth
                Saini{" "}
                {av && (
                  <span className="text-sm text-green-500 text-light ">
                    Verified
                  </span>
                )}
                {ar && (
                  <span className="text-sm text-red-500 text-light ">
                    Incorrect
                  </span>
                )}
              </p>
            </div>
            <div>
              <button
                onClick={handleAv}
                className="bg-green-500 text-white px-4 py-3 rounded-lg my-6 w-full hover:bg-green-600"
              >
                Verify
              </button>
            </div>
            <div>
              <button
                onClick={handleAr}
                className="bg-red-500 text-white px-4 py-3 rounded-lg my-6 w-full hover:bg-red-600"
              >
                Incorrect
              </button>
            </div>
          </div>
          <hr className="my-4 border-t-2 border-gray-300" />
          {/* mobile number */}
          <div className="grid grid-cols-4 gap-6">
            <div className="col-span-2">
              <p className="text-2xl text-gray-500 py-2">
                2.<span className="font-semibold"> Mobile Number - </span>
                9956558934{" "}
                {bv && (
                  <span className="text-sm text-green-500 text-light ">
                    Verified
                  </span>
                )}
                {br && (
                  <span className="text-sm text-red-500 text-light ">
                    Incorrect
                  </span>
                )}
              </p>
            </div>

            <div>
              <button
                onClick={handleBv}
                className="bg-green-500 text-white px-4 py-3 rounded-lg my-2 w-full hover:bg-green-600"
              >
                Verify
              </button>
            </div>
            <div>
              <button
                onClick={handleBr}
                className="bg-red-500 text-white px-4 py-3 rounded-lg my-2 w-full hover:bg-red-600"
              >
                Incorrect
              </button>
            </div>
          </div>
          <hr className="my-4 border-t-2 border-gray-300" />
          {/* email */}
          <div className="grid grid-cols-4 gap-6">
            <div className="col-span-2">
              <p className="text-2xl text-gray-500 py-2">
                3.<span className="font-semibold"> Email - </span>
                samarth2345@gmail.com{" "}
                {cv && (
                  <span className="text-sm text-green-500 text-light ">
                    Verified
                  </span>
                )}
                {cr && (
                  <span className="text-sm text-red-500 text-light ">
                    Incorrect
                  </span>
                )}
              </p>
            </div>

            <div>
              <button
                onClick={handleCv}
                className="bg-green-500 text-white px-4 py-3 rounded-lg my-2 w-full hover:bg-green-600"
              >
                Verify
              </button>
            </div>
            <div>
              <button
                onClick={handleCr}
                className="bg-red-500 text-white px-4 py-3 rounded-lg my-2 w-full hover:bg-red-600"
              >
                Incorrect
              </button>
            </div>
          </div>
          <hr className="my-4 border-t-2 border-gray-300" />
          {/* roll number */}
          <div className="grid grid-cols-4 gap-6">
            <div className="col-span-2">
              <p className="text-2xl text-gray-500 py-2">
                3.<span className="font-semibold"> Roll Number - </span>
                2021031673{" "}
                {dv && (
                  <span className="text-sm text-green-500 text-light ">
                    Verified
                  </span>
                )}
                {dr && (
                  <span className="text-sm text-red-500 text-light ">
                    Incorrect
                  </span>
                )}
              </p>
            </div>

            <div>
              <button
                onClick={handleDv}
                className="bg-green-500 text-white px-4 py-3 rounded-lg my-2 w-full hover:bg-green-600"
              >
                Verify
              </button>
            </div>
            <div>
              <button
                onClick={handleDr}
                className="bg-red-500 text-white px-4 py-3 rounded-lg my-2 w-full hover:bg-red-600"
              >
                Incorrect
              </button>
            </div>
          </div>
          <hr className="my-4 border-t-2 border-gray-300" />
        </div>
        <div className="max-w-md px-10 mx-auto">
          <button
            onClick={() => {
              handleClick();
            }}
            className="bg-orange-500 w-full py-3 text-lg text-white rounded-lg hover:bg-orange-600"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
