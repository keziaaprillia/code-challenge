"use client";
import Link from "next/link";
import { RiShip2Fill } from "react-icons/ri";

function ClosingComponent() {
  return (
    <>
      {" "}
      <div className="bg-lime-700 flex w-full h-16 justify-center">
        <Link
          href="/"
          className="text-white hover:bg-white justify-center hover:text-black rounded-full p-4 "
        >
          <RiShip2Fill className="h-[30px] w-[30px]  " />
        </Link>
      </div>
      <div className="bg-[#D9D9D9] text-xs gap-4 px-9 p-5 w-full h-20 ">
        <div>Privacy Policy .</div>
        <div>Terms and Conditions 2024 . All Right Reserved</div>
      </div>
    </>
  );
}
export default ClosingComponent;
