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
    </div>
  );
}

//this is random
