"use client";
import { FaCaretRight } from "react-icons/fa";

function HistoryComponents() {
  return (
    <>
      <div className="grid grid-cols-3 opacity-100 bg-slate-100 py-20 max-h-96">
        {/* //bg-gradient-to-r from-[#DDE485] from-30% to-[#6A8E4E] to-90% */}
        <div className="grid font-semibold justify-items-end max-w-96">
          <div className="max-sm:mt-0 px-1 text-black">2014</div>
          <div className="max-sm:mt-0 px-1 text-black">2017</div>
          <div className="max-sm:mt-0 px-1 text-black">2019</div>
          <div className="mt-1 px-1 text-black">2023</div>
        </div>
        <div className="grid gap-2 items-left">
          <div className="hover:bg-[#DDE485] max-sm:text-xs text-black hover:font-semibold hover:text-[17px] rounded-md px-2 py-1">
            <p className="flex items-center gap-2">
              <FaCaretRight className="text-lg" />
              first established
            </p>
          </div>
          <div className="hover:bg-[#DDE485] max-sm:text-xs text-black hover:font-semibold hover:text-[17px] rounded-md px-2 py-1">
            <p className="flex items-center gap-2">
              <FaCaretRight className="text-lg" /> capital investment on inhouse
              trailer
            </p>
          </div>
          <div className="hover:bg-[#DDE485] max-sm:text-xs text-black hover:font-semibold hover:text-[17px] rounded-md px-2 py-1">
            <p className="flex items-center gap-2">
              <FaCaretRight className="text-lg" />
              improve operational performance
            </p>
          </div>
          <div className="hover:bg-[#DDE485] max-sm:text-xs text-black hover:font-semibold hover:text-[17px] rounded-md px-2 py-1">
            <p className="flex items-center gap-2">
              <FaCaretRight className="text-lg" /> adoption of digital
              infrastructure
            </p>
          </div>
        </div>

        <div className=" font-bold text-xl translate-y-6 translate-x-6 text-black justify-items-center text-left hover:text-gray-300 max-sm:hidden">
          Corporate Milestones
        </div>
      </div>
    </>
  );
}
export default HistoryComponents;
