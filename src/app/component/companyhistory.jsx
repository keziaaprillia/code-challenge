"use client";

function HistoryComponents() {
  return (
    <>
      <div className="mt-2 mb-[6%] grid grid-cols-3 opacity-100 bg-transparent max-h-96">
        {/* //bg-gradient-to-r from-[#DDE485] from-30% to-[#6A8E4E] to-90% */}
        <div className="grid mt-16 font-semibold justify-items-end max-w-96">
          <div className="max-sm:mt-0 mt-2 px-1">2014</div>
          <div className="max-sm:mt-0 mt-1 px-1">2017</div>
          <div className="max-sm:mt-0 mt-1 px-1">2019</div>
          <div className="mt-1 px-1">2023</div>
        </div>
        <div className="grid mt-16 gap-2 ml-1 items-center">
          <div className="hover:bg-[#DDE485] max-sm:text-xs hover:font-semibold hover:text-[17px] rounded-md px-2 py-1">
            ▶ first established
          </div>
          <div className="hover:bg-[#DDE485] max-sm:text-xs hover:font-semibold hover:text-[17px] rounded-md px-2 py-1">
            {" "}
            ▶ capital investment on inhouse trailer
          </div>
          <div className="hover:bg-[#DDE485] max-sm:text-xs hover:font-semibold hover:text-[17px] rounded-md px-2 py-1">
            {" "}
            ▶ improve operational performance
          </div>
          <div className="hover:bg-[#DDE485] max-sm:text-xs hover:font-semibold hover:text-[17px] rounded-md px-2 py-1">
            {" "}
            ▶ adoption of digital infrastructure
          </div>
        </div>

        <div className="mt-16 font-bold text-xl translate-y-6 justify-items-center text-left hover:text-gray-300 max-sm:hidden">
          Corporate Milestones
        </div>
      </div>
    </>
  );
}
export default HistoryComponents;
