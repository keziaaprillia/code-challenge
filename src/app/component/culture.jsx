"use client";
import Image from "next/image";
import teamphoto from "../../assets/teamphoto.png";

function CultureComponent() {
  return (
    <>
      <div className="grid grid-cols-3 bg-lime-700 h-[100%]">
        <div className="p-2 flex flex-col  hover:text-[#DDE485] text-xl max-sm:text-base font-semibold mt-[30%] ml-[10%] max-lg:mt-[20%] max-lg:ml-[9%]  max-sm:mt-[15%] max-sm:ml-[9%] ">
          Our Culture & Values
          <div className="mt-[10%] ">
            <button className="hover:bg-[#DDE485] max-sm:text-xs text-sm text-left hover:text-black p-1 rounded-md text-stone-50">
              Customer-Centric
            </button>
            <button className="hover:bg-[#DDE485] max-sm:text-xs text-sm hover:text-black p-1 rounded-md text-stone-50">
              Consistency
            </button>
          </div>
          <div className=" ">
            <button className="hover:bg-[#DDE485] max-sm:text-xs text-sm text-left hover:text-black p-1 rounded-md text-stone-50">
              Continuous Improvement
            </button>
            <button className="hover:bg-[#DDE485] max-sm:text-xs text-sm hover:text-black p-1 rounded-md text-stone-50">
              Compliance
            </button>
            <button className="hover:bg-[#DDE485] max-sm:text-xs text-sm hover:text-black p-1 rounded-md text-stone-50">
              Collaboration
            </button>
          </div>
        </div>
        <div className=" bg-transparent  object-center col-span-2">
          <Image src={teamphoto} alt="" className=" object-cover h-[100%]" />
        </div>
      </div>
    </>
  );
}
export default CultureComponent;
