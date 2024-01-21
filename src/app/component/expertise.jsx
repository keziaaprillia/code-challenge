function ExpertiseComponent() {
  return (
    <div className="grid grid-rows-2 gap-1 bg-[#6A8E4E] py-7 px-7 w-full">
      <div className="font-semibold text-black text-xl hover:text-white">
        Our Expertise
      </div>
      <div className="grid grid-cols-4 justify-items-center">
        <div className="">
          <button className="bg-slate-50 p-2 hover:bg-[#FFB067] text-black text-sm rounded-full ">
            Import
          </button>{" "}
          <div className="text-[12px] text-white p-2">
            from port to warehouse{" "}
          </div>
        </div>
        <div className="">
          <button className="bg-slate-50 hover:bg-[#FFB067] px-3 p-2 text-black text-sm rounded-full ">
            Export
          </button>
          <div className="text-[12px] text-white p-2 ">
            from warehouse to port{" "}
          </div>
        </div>
        <div className="">
          <button className="bg-slate-50 hover:bg-[#FFB067] px-3 p-2 text-black text-sm rounded-full ">
            Local
          </button>
          <div className="text-[12px] text-white p-2">
            from warehouse to warehouse{" "}
          </div>
        </div>
        <div className="">
          <button className="bg-slate-50 hover:bg-[#FFB067] px-3  p-2  text-black text-sm rounded-full ">
            Intersuler
          </button>
          <div className="text-[12px] text-white p-2">
            based on client requirements{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ExpertiseComponent;
