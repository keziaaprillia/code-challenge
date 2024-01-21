"use client";
import Image from "next/image";

import HistoryComponents from "../component/companyhistory";
import pelabuhan from "../../assets/pelabuhan.png";
import CultureComponent from "../component/culture";
import NavbarComponents from "../component/navbar";
import ClosingComponent from "../component/closing";

export default function About() {
  return (
    <>
      <NavbarComponents />
      <div className="gradient-s w-full flex flex-col gap-4 relative ">
        <div className="grid grid-col-2 absolute lg:px-[15%] lg:py-[20%] md:px-[10%] md:py-[15%] sm:px-[5%] py-[10%] z-10 gap-1 items-center bg-transparent w-full">
          <h1 className="bg-transparent drop-shadow-lg lg:text-3xl md:text-2xl text-xl text-center lg:py-20 py-5 mt-[10%] font-bold text-white hover:text-[#DDE485] rounded-lg">
            About Us
          </h1>
        </div>
      </div>
      <Image className="w-full" src={pelabuhan} alt=""></Image>
      <HistoryComponents />
      <CultureComponent />
      <ClosingComponent />
    </>
  );
}
