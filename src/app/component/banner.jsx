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
        <div className="grid grid-col-2 absolute lg:px-[15%] lg:py-[20%] md:px-[10%] md:py-[15%] px-[5%] py-[10%] z-10 gap-1 items-center bg-transparent w-full">
          <h1 className="bg-transparent lg:text-3xl md:text-2xl text-xl text-center lg:py-20 py-5 font-bold text-black hover:text-stone-50 rounded-lg">
            Business Ultimate Transportation Enabler
          </h1>
          <div className="bg-lime-600  max-sm:mt-3 flex justify-end p-2  rounded-full  ">
            <Link
              href="/about"
              className="hover:bg-white text-sm bg-white flex items-center gap-2 dark:text-black hover:text-black p-2  rounded-full text-stone-50 font-semibold"
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
