function TteamComponent() {
  return (
    <>
      {/* backgroundcolor */}
      <div className=" bg-white h-[400px] ">
        <div className=" justify-center "></div>
        <div className="z-0 w-full py-32 h-[400px] blur-3xl bg-gradient-to-r from-[#DDE485] via-[#FFB067] to-emerald-300">
          background
        </div>
        <div className="relative">
          <div className="absolute w-full h-[40%] translate-y-[-230px] z-30 lg:text-2xl md:text-xl text-lg justify-center text-center font-semibold text-black hover:text-stone-50 rounded-lg">
            A team that works together, delivers together.
          </div>
        </div>
      </div>
    </>
  );
}
export default TteamComponent;
