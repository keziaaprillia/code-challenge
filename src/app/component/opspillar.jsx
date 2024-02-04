"use client";
import { IoSettingsOutline } from "react-icons/io5";
import { BiCctv } from "react-icons/bi";
import { BsSignTurnSlightRight } from "react-icons/bs";
import { FaListCheck } from "react-icons/fa6";
import { useState } from "react";

function PillarComponents() {
  //   const [comply, setComply] = useState(false);
  //   const [monitor, setMonitor] = useState(false);
  //   const [maintain, setMaintain] = useState(false);
  //   const [operation, setOperation] = useState(false);

  return (
    <>
      <div className=" p-16 grid grid-cols-3 gap-3 m-auto w-full bg-[#6A8E4E]">
        <div className="bg-slate-50 p-2 md:row-span-2 rounded-md">
          <div className="font-semibold grid-cols-2 p-2 opacity-75 text-3xl max-sm:text-xl text-gray-400">
            <FaListCheck className=" text-lg" />
          </div>
          <button
            className="font-semibold text-black p-1 rounded-md hover:bg-slate-50 hover:text-gray-400 hover:shadow-md max-sm:text-[9px]"
            // onClick={() => setComply(!comply)}
          >
            Compliance
          </button>
          {/* modal compliance
          {comply && (
            <div className="z-50 absolute bg-[#DDE485] w-[195px] h-[190px] rounded-md">
              <div className="p-2 text-[20px] sm:text-[9px]">
                {" "}
                • Operating under SIUJPT (surat izin usaha jasa pengurusan
                transportasi) & KIR kendaraan bermotor
              </div>
              <div className="p-2 text-[9px]">
                • Maintain operational safety - TRK & Zenmarine
              </div>{" "}
            </div>
          )} */}
          <div className="p-2 text-xs text-black max-sm:hidden">
            • Regulatory compliance - operating under SIUJPT (surat izin usaha
            jasa pengurusan transportasi) & KIR kendaraan bermotor{" "}
          </div>
          <div className="p-2 text-xs text-black max-sm:hidden">
            • Improving our operational safety - TRK & Zenmarine
          </div>
        </div>
        <div className="bg-slate-50 p-2 rounded-md">
          <div className="font-semibold p-2 opacity-75 text-3xl max-sm:text-xl text-gray-400">
            <BiCctv className="text-2xl" />
          </div>
          <button
            className="p-1 rounded-md text-black hover:bg-slate-50 hover:text-gray-400 hover:shadow-md font-semibold max-sm:text-[9px]"
            // onClick={() => setMonitor(!monitor)}
          >
            Monitoring
          </button>
          {/* modal compliance
          {monitor && (
            <div className="z-50 absolute bg-[#DDE485] w-[100px] h-[45px] rounded-md">
              <div className="p-2 text-[9px]"> • Real-time GPS monitoring</div>
            </div>
          )} */}
          {/* content - monitoring */}
          <div className="p-2 text-xs text-black max-sm:hidden">
            {" "}
            • 24/7 monitoring using real-time GPS{" "}
          </div>
        </div>
        <div className="bg-slate-50  p-2 md:row-span-2 rounded-md">
          <div className="font-semibold p-2 opacity-75 text-3xl max-sm:text-xl text-gray-400">
            <IoSettingsOutline className="text-2xl" />
          </div>
          <button
            className="p-1 rounded-md text-black hover:bg-slate-50 hover:text-gray-400 hover:shadow-md font-semibold max-sm:text-[9px]"
            // onClick={() => setMaintain(!maintain)}
          >
            Maintenance
          </button>
          {/* modal compliance
          {maintain && (
            <div className="z-50 absolute bg-[#DDE485] w-[110px] h-[70px] rounded-md">
              <div className="p-2 text-[9px]">
                • Covering in-house maintenance
              </div>
              <div className="p-2 text-[9px]">• On-duty storing</div>
            </div>
          )} */}
          {/* maintaince - content */}
          <div className="p-1 text-xs text-black max-sm:hidden">
            {" "}
            • Covering in-house maintenance{" "}
          </div>
          <div className="p-1 text-xs text-black max-sm:hidden">
            {" "}
            • On-duty storing{" "}
          </div>
        </div>
        <div className="bg-slate-50  p-2 rounded-md">
          <div className="font-semibold p-2 opacity-75 text-3xl max-sm:text-xl text-gray-400">
            <BsSignTurnSlightRight className="text-2xl z-10" />
          </div>
          <button
            className="p-1 text-black rounded-md hover:bg-slate-50 hover:text-gray-400 hover:shadow-md font-semibold max-sm:text-[9px]"
            // onClick={() => setOperation(!operation)}
          >
            Operation
          </button>
          {/* modal compliance
          {operation && (
            <div className="z-50 absolute bg-[#DDE485] w-[130px] h-[80px] rounded-md">
              <div className="p-1 text-[9px]">
                • Covering in-house driver management
              </div>
              <div className="p-1 text-[9px]">• Driver plotting</div>
              <div className="p-1 text-[9px]">• Daily order report</div>
            </div>
          )} */}
          {/* operation - content */}
          <div className="p-1 text-xs text-black max-sm:hidden">
            • Covering in-house driver management
          </div>
          <div className="p-1 text-xs text-black max-sm:hidden">
            • Driver plotting
          </div>
          <div className="p-1 text-xs text-black max-sm:hidden">
            • Daily order report
          </div>
        </div>
        <h2 className="px-2 text-black text-lg font-semibold hover:text-[#DDE485]">
          Operational Pillar
        </h2>
      </div>
    </>
  );
}
export default PillarComponents;
