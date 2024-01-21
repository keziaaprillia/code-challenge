"use client";
import { FaAngleRight } from "react-icons/fa";
import Link from "next/link";

function ServiceComponent() {
  return (
    <div className="bg-white p-10 gap-2 grid ">
      <div className="p-2 font-semibold text-xl text-black hover:text-[#DDE485]">
        Our Services
      </div>
      <div className=" text-black max-sm:text-sm text-base p-2 ">
        Transport goods involving different modes of transportation from pick-up
        point to final destination.
      </div>
      <div className="grid grid-cols-4 mt-3 justify-items-center">
        <div className="">
          <button className="bg-slate-50 px-3 p-2 hover:bg-[#FFB067] text-black text-sm rounded-full ">
            Import
          </button>{" "}
        </div>
        <div className="">
          <button className="bg-slate-50 hover:bg-[#FFB067] px-3 p-2 text-black text-sm rounded-full ">
            Export
          </button>
        </div>
        <div className="">
          <button className="bg-slate-50 hover:bg-[#FFB067] px-3  p-2  text-black text-sm rounded-full ">
            Local
          </button>
        </div>
        <div className="">
          <button className="bg-slate-50 hover:bg-[#FFB067] px-3  p-2  text-black text-sm rounded-full ">
            Intersuler
          </button>
        </div>
      </div>
      <div className=" text-black max-sm:text-sm text-base w-full">
        The services we offer include; transportation of goods from port to
        warehouse, from warehouse to warehouse, and from ware- house to port
        depends on the to customer requests.
      </div>
      <div className=" p-2 flex items-center ">
        <Link
          href="/service"
          className="bg-[#FFB067] py-2 px-[9px] text-black flex text-sm rounded-l-full"
        >
          Learn more
        </Link>
        <div className="bg-[#FFB067] rounded-r-full px-[1px] py-[10.5px]">
          <FaAngleRight className=" h-[15px] w-[15px] " />
        </div>
      </div>
    </div>
  );
}
export default ServiceComponent;
