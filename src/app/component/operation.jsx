function OperationComponent() {
  return (
    <div className="grid grid-cols-3 bg-[#DDE485] p-2 w-full ">
      <div className="p-2 ml-4 mt-20 font-semibold text-xl hover:text-white">
        Our Operation
      </div>
      <div className=" ml-1 mt-20">
        <button className="bg-slate-50 ml-12 p-2 hover:bg-[#FFB067] rounded-full ">
          Breakbulk
        </button>{" "}
      </div>
      <div className=" ml-5 mt-20">
        <button className="bg-slate-50 hover:bg-[#FFB067] px-3  p-2 rounded-full ">
          Container
        </button>
      </div>
    </div>
  );
}
export default OperationComponent;
