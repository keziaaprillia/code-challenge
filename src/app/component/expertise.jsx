function ExpertiseComponent() {
  return (
    <div className="grid grid-rows-2 gap-2 bg-[#6A8E4E] p-2 w-full">
      <div className="font-semibold  text-black text-xl hover:text-white">
        Our Expertise
      </div>
      <div className="grid grid-cols-4 justify-items-center">
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
    </div>
  );
}
export default ExpertiseComponent;
