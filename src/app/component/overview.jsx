"use client";
import photo from "../../assets/photo.png";
import Image from "next/image";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa";

function OverviewComponent() {
  const [learn, setLearn] = useState(false);
  return (
    <>
      <div className="grid grid-cols-3 max-md:grid-cols-1 m-auto">
        <div className=" col-span-2 max-sm:hidden max-md:hidden bg-yellow-200">
          <Image src={photo} className="object-cover h-[100%] rounded-md" />
          <div></div> <nav></nav>
        </div>{" "}
        <div className="grid bg-[#DDE485] items-center justify-center text-black text-center w-full p-4 ">
          <div className="bg-stone-50 hover:bg-[#DDE485] text-md  font-semibold py-2 px-2 rounded-md">
            Competitive Edge on Delivering Services
          </div>
          <div className="hover:font-semibold hover:text-md text-sm max-sm:text-xs max-sm:p-1 rounded-md ">
            up to 6 years of industry experience
          </div>
          <div className="hover:font-semibold hover:text-md text-sm max-sm:text-xs max-sm:p-1 rounded-md">
            2 in-house dolly
          </div>
          <div className="hover:font-semibold hover:text-md text-sm max-sm:text-xs max-sm:p-1 rounded-md">
            dedicated client support
          </div>
          <div className="hover:font-semibold hover:text-md text-sm  max-sm:text-xs max-sm:p-1 rounded-md">
            17 in-house trucking units
          </div>
          <div className="hover:font-semibold hover:text-md text-sm max-sm:text-xs max-sm:p-1 rounded-md">
            online tracking dashboard
          </div>
          <div className="hover:font-semibold hover:text-md text-sm max-sm:text-xs max-sm:p-1 rounded-md">
            real-time gps tracking
          </div>
          <div className="hover:font-semibold hover:text-md text-sm max-sm:text-xs max-sm:p-1  rounded-md">
            up to 6 years of industry experience
          </div>
          <div className="hover:font-semibold hover:text-md text-sm max-sm:text-xs max-sm:p-1  rounded-md">
            24h standby storing
          </div>
        </div>
      </div>
    </>
  );
}
export default OverviewComponent;
