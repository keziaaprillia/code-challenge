"use client";
import avatar1 from "../../assets/avatar1.jpeg";
import avatar2 from "../../assets/avatar2.jpeg";
import avatar3 from "../../assets/avatar3.jpeg";
import { useState } from "react";
import { LuMessagesSquare } from "react-icons/lu";
import Image from "next/image";

function TestiComponent() {
  const [arrow, setArrow] = useState(false);

  return (
    <>
      {/* grid content */}
      <div className="grid grid-cols-2 h-[500px] items-center bg-white">
        <div className="py-24 px-24 max-sm:px-10 text-black max-sm:py-9 hover:text-white font-semibold text-xl">
          What our client say?
        </div>

        <div className=" grid gap-4 grid-rows-4 text-black justify-center md:translate-y-10 max-sm:justify-items-end max-sm:hidden">
          <div className=" bg-zinc-50 hover:bg-[#DDE485] hover:shadow-lg py-2 px-2 max-w-60 rounded-md ">
            <div className=" inline-flex">
              <div className=" mr-5 ml-2 h-10 w-10 text-[11px] text-center">
                <Image src={avatar1} className=" object-cover rounded-full" />
                Anthony
              </div>
              <div className=" text-[10.5px] p-2 h-14 w-40 bg-white rounded-md ">
                My order deliver on-time!
              </div>
            </div>
          </div>

          <div className=" bg-zinc-50 hover:bg-[#DDE485] hover:shadow-lg py-2 px-2 max-w-60 rounded-md">
            <div className=" inline-flex">
              <div className=" mr-5 ml-2 h-10 w-10 text-[11px] text-xs text-center">
                <Image src={avatar2} className=" object-cover rounded-full" />
                Mario
              </div>
              <div className="text-[10.5px] p-2 h-14 w-40 bg-white rounded-md">
                Customer service is great
              </div>
            </div>
          </div>
          <div className=" bg-zinc-50 hover:bg-[#DDE485] hover:shadow-lg py-2 px-2  max-w-60 rounded-md">
            <div className=" inline-flex">
              <div className=" mr-5 ml-2 h-10 w-10 text-[11px] text-xs text-center">
                <Image src={avatar3} className=" object-cover rounded-full" />
                Joseph
              </div>
              <div className=" text-[10.5px] p-2 h-14 w-40 bg-white rounded-md">
                I have been using service company for over a year now
              </div>
            </div>
          </div>
        </div>

        {/* content- responsive */}
        <div className="block sm:hidden z-50">
          <button
            className="bg-[#DDE485] animate-bounce px-2.5 py-2.5 rounded-full"
            onClick={() => setArrow(!arrow)}
          >
            <LuMessagesSquare className="text-sm text-black font-semibold" />
          </button>
          {arrow && (
            <div className="bg-zinc-50 hover:bg-[#DDE485] text-black w-[155px] h-[155px] text-center rounded-md">
              <div className="flex flex-col gap-2 p-2  text-[11px]">
                <div className=" mr-5 ml-2 h-10 w-10 text-center">
                  <Image
                    src={avatar1}
                    className="py-1 object-cover rounded-full"
                  />
                  Anthony
                </div>
                <div className="text-[10.5px] translate-y-5 p-2 h-16 w-22 bg-white rounded-md">
                  Really helped our business. Definitely worth the investment.
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default TestiComponent;
