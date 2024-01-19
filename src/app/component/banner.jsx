"use client";
import Link from "next/link";
import bannertruck from "../../assets/bannertruck.png";
import Image from "next/image";

function BannerComponent() {
  return (
    <>
      <div className="gradient-s w-full flex flex-col gap-4 relative bg-gray-300 ">
        <Image
          src={bannertruck}
          className="object-cover opacity-50 rounded-lg w-full"
        />
        <div className="grid grid-col-2 absolute lg:px-[15%] lg:py-[20%] md:px-[10%] md:py-[15%] px-[5%] py-[10%] z-10 gap-1 items-center bg-transparent w-full">
          <h1 className="bg-transparent lg:text-3xl md:text-2xl text-xl text-center lg:py-20 py-5 font-bold text-black hover:text-stone-50 rounded-lg">
            Business Ultimate Transportation Enabler
          </h1>
          <div className="bg-lime-600 mt-[100px] max-sm:mt-3 p-2 items-center rounded-full grid grid-cols-2 ">
            <div className="px-40"></div>
            <div className="">
              <Link
                href="/about"
                className="hover:bg-white text-sm hover:text-black p-2 rounded-full text-stone-50 font-semibold"
              >
                Discover
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[20px] w-full "></div>
    </>
  );
}
export default BannerComponent;
