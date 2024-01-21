"use client";
import { FaAngleRight } from "react-icons/fa";
import Link from "next/link";

function PriceComponent() {
  return (
    <>
      <div className="flex">
        <div className="bg-white gap-2 grid justify-center">
          <div className="px-10 mt-7 font-semibold text-xl text-black hover:text-[#DDE485]">
            Get in Touch
          </div>
          <div className=" text-black text-[13px] px-10 ">
            Futher enquires, please reach us via email: contact.hello@mail.com
          </div>
        </div>
        <div className="bg-white gap-2 grid justify-center w-full">
          <div className=" text-black max-sm:text-sm font-semibold px-10 mt-6 text-xl w-full">
            Business Opening Hours:
          </div>
          <div className=" text-black text-[12px] px-10 w-full">
            Monday to Friday from 8am to 5pm
          </div>
          <div className=" text-black text-[12px] px-10 w-full">
            Saturday from 8am to 2pm
          </div>
        </div>
      </div>
    </>
  );
}
export default PriceComponent;
