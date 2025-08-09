import React from "react";

const Description = ({ ip, city, timezone, region, isp }) => {
  return (
    <div className="transform -translate-x-1/2 z-10 absolute top-[22%] left-1/2 bg-white w-[90%] md:w-[70%] md:h-28 rounded-xl">
      <div className="flex flex-col sm:flex-row justify-between items-center pt-2 md:pt-5">
        <div className="flex flex-col items-center p-2 justify-center ">
          <p className="text-gray-500 text-sm text-center">IP ADDRESS</p>
          <p className="font-bold text-sm md:text-base">{ip}</p>
        </div>
        <div className="flex flex-col items-center p-2">
          <p className="text-gray-500">Location</p>
          <p className="font-bold text-sm md:text-base">
            {city} , {region}
          </p>
        </div>
        <div className="flex flex-col items-center p-2">
          <p className="text-gray-500">Timezone</p>
          <p className="font-bold  text-sm md:text-base">{timezone}</p>
        </div>
        <div className="flex flex-col items-center p-2">
          <p className="text-gray-500">ISP</p>
          <p className="font-bold  text-sm md:text-base">{isp}</p>
        </div>
      </div>
    </div>
  );
};

export default Description;
