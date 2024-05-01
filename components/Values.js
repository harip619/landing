import React from "react";

const Values = () => {
  return (
    <div className="container mx-auto py-20">
      <p className="text-base lg:text-xl font-medium text-gray-500 text-center">
        WHY CHOOSE US
      </p>
      <p className=" text-3xl lg:text-5xl font-semibold text-gray-500 text-center mt-3">
        Our Values
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-16 py-20">
        <div className="flex flex-col gap-5 items-center">
          <img src="/assets/v1.svg" alt="v1" />
          <p className="text-2xl font-semibold">Convenience</p>
          <p className="text-gray-500 text-center">
          Koolie offers a hassle-free solution for <br /> item exchanges within a 50 km radius,  <br /> allowing users to send and receive goods with ease.
          </p>
        </div>
        <div className="flex flex-col gap-5 items-center">
          <img src="/assets/v2.svg" alt="v1" />
          <p className="text-2xl font-semibold">Peer-to-Peer Logistics</p>
          <p className="text-gray-500 text-center">
          Koolie enables peer-to-peer exchanges, <br /> allowing users to leverage nearby couriers or individuals <br /> for seamless and reliable item exchanges right at their doorstep
          </p>
        </div> <div className="flex flex-col gap-5 items-center">
          <img src="/assets/v3.svg" alt="v1" />
          <p className="text-2xl font-semibold">Secure And Fast Deliveries</p>
          <p className="text-gray-500 text-center">
          Ensures the safety and security of your items throughout the entire exchange process. <br /> with robust transaction mechanisms and real-time tracking features,<br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Values;
