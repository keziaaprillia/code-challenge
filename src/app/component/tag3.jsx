function T3Component() {
  return (
    <>
      {/* backgroundcolor */}
      <div className=" bg-white h-[400px] ">
        <div className=" justify-center "></div>
        <div className="z-0 w-full py-32 h-[400px] blur-3xl bg-gradient-to-r from-[#DDE485] via-[#FFB067] to-gray-300">
          background
        </div>
        <div className="relative">
          <div className="absolute w-full h-[40%] translate-y-[-230px] z-50 lg:text-2xl md:text-xl text-lg justify-center text-center font-semibold text-black hover:text-stone-50 rounded-lg">
            Your supply chain partner, committed to excellence.
          </div>
        </div>
      </div>
    </>
  );
}
export default T3Component;
