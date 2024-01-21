function OperationComponent() {
  return (
    <div className="grid grid-cols-3 max-sm:grid-cols-1 bg-[#DDE485] gap-3 w-full ">
      <div className="p-2 ml-4 mt-20 font-semibold text-xl text-black hover:text-white">
        Our Operation
      </div>
      <div className=" ml-1 mt-20 max-sm:mt-3 max-sm:ml-4">
        <button className="bg-slate-50 px-3 p-2 text-black text-sm hover:bg-[#FFB067] rounded-full ">
          Breakbulk
        </button>{" "}
        <div className="text-xs text-black py-3">
          process of handling, stowing, and transportation of cargo that is not
          contained in standard-sized shipping containers.
        </div>
      </div>
      <div className=" mt-20 max-sm:mt-3 max-sm:ml-4 ">
        <button className="bg-slate-50 hover:bg-[#FFB067] px-3 p-2 text-black text-sm rounded-full ">
          Container
        </button>
        <div className="text-xs text-black py-3">
          process of loading, unloading, and moving containers in a safe and
          efficient manner within a container terminal.
        </div>
      </div>
    </div>
  );
}
export default OperationComponent;
