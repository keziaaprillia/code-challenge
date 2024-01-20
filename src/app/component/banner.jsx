"use client";
import Link from "next/link";
import bannertruck from "../../assets/bannertruck.png";
import Image from "next/image";
import checked from "../../assets/checked.svg";
function BannerComponent() {
  return (
    <>
      <div className="gradient-s w-full flex flex-col gap-4 relative bg-gray-300 ">
        <Image
          src={bannertruck}
          className="object-cover opacity-50 rounded-lg w-full"
        />
        <div className="grid grid-col-2 absolute lg:px-[15%] lg:py-[20%] md:px-[10%] md:py-[15%] px-[5%] py-[10%] z-10 gap-1 justify-center bg-transparent w-full">
          <h1 className="bg-transparent lg:text-3xl md:text-2xl text-xl text-center lg:py-20 py-5 font-bold text-black hover:text-stone-50 rounded-lg">
            Business Ultimate Transportation Enabler
          </h1>
          <div className="bg-lime-600 sm:translate-y-20 md:translate-y-30 max-sm:mt-4 flex justify-end p-2  rounded-full  ">
            <Link
              href="/about"
              className="bg-white hover:bg-lime-600 max-sm:hidden text-sm flex items-center gap-2 dark:text-black hover:text-black p-2 rounded-full font-semibold"
            >
              Discover
              <div className=" bg-lime-600 rounded-full p-[10.5px] ">
                <Image src={checked} className=" h-[15px] w-[15px]" alt="" />{" "}
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-white h-[20px] w-full "></div>
    </>
  );
}
export default BannerComponent;
