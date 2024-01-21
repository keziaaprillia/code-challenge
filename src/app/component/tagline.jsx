function TaglineComponent() {
  return (
    <>
      {/* backgroundcolor */}
      <div className=" bg-white h-[400px] ">
        <div className=" justify-center "></div>
        <div className="z-0 w-full py-32 h-[400px] blur-3xl bg-gradient-to-r from-lime-300 via-[#42DCAE] to-[#DDE485]">
          background
        </div>
        <div className="relative">
          <div className="absolute w-full h-[40%] translate-y-[-195px] z-30 lg:text-2xl md:text-xl text-lg justify-center text-center font-semibold text-black hover:text-stone-50 rounded-lg">
            We support you in maintaining optimal logistical efficiency
          </div>
        </div>
      </div>
    </>
  );
}
export default TaglineComponent;
