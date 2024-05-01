import React from "react";

const Teacher = () => {
  return (
    <div className="container mx-auto py-20" id="about">
      <p className="text-base lg:text-xl font-medium text-gray-500 uppercase">
       Key Person
      </p>
      <p className="text-3xl lg:text-5xl font-semibold text-gray-500  mt-3">
      Meet Our Team
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-16 py-10 lg:py-20 flex justify-between">
        <div className="flex flex-col gap-3 items-center">
          <img src="/assets/sailesh.jpeg" alt="v1" height={200} width={200} className="rounded-lg"/>
          <p className="text-2xl font-semibold">Adithya Sailesh</p>
          <div className="flex items-center gap-2">
          </div>
       
        </div>
        <div className="flex flex-col gap-3 items-center">
          <img src="/assets/alias1.jpg" alt="v1" height={200} width={200} className="rounded-lg"/>
          <p className="text-2xl font-semibold">Alias Benny</p>
          <div className="flex items-center gap-2">
          </div>
       
        </div>
        <div className="flex flex-col gap-3 items-center">
          <img src="/assets/ananth1.jpg" alt="v1" height={200} width={200} className="rounded-lg"/>
          <p className="text-2xl font-semibold">Ananth Narayan</p>
          <div className="flex items-center gap-2">
          </div>
       
        </div>
        <div className="flex flex-col gap-3 items-center">
          <img src="/assets/hari1.jpg" alt="v1" height={200} width={200} className="rounded-lg"/>
          <p className="text-2xl font-semibold ">Hari P</p>
          <div className="flex items-center gap-2">
          </div>
       
        </div>
      </div>
    </div>
  );
};

export default Teacher;
