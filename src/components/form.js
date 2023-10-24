import React from "react";

export default function Form() {
  return (
    <div className="flex flex-row">
      <div className="bg-orange-50 basis-3/5 h-screen mx-2  border-solid rounded-lg border-2 border-orange-300">
<div className="mx-12 my-12 grid justify-items-center">
            <p className="text-3xl text-center">Scholarship Form</p>

            <input
              className="w-1/2 py-2 rounded-lg mt-10 px-3 border-solid border-2 border-gray-200 focus:outline-green-500"
              placeholder="Name"
            />
            <input
              className="w-1/2 py-2 rounded-lg mt-6 px-3 border-solid border-2 border-gray-200 focus:outline-green-500"
              placeholder="Roll Number"
            />
          </div>
</div>
      <div className="bg-white basis-2/5 flex flex-col">
        <div className="bg-green-50 basis-3/5 mx-2  border-solid rounded-lg border-2 border-green-300">hiiiii</div>
        <div className="bg-blue-50 basis-2/5 mx-2  border-solid rounded-lg border-2 border-blue-300">hiiiii</div>
      </div>
    </div>
  );
}

//this is random
