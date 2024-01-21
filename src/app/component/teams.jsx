"use client";
import Image from "next/image";
import team1 from "../../assets/team1.jpeg";
import team2 from "../../assets/team2.jpeg";
import team3 from "../../assets/team3.jpeg";
import team4 from "../../assets/team4.jpeg";

function TeamComponent() {
  return (
    <>
      <div className=" bg-white font-semibold px-8 text-lg text-black p-4">
        {/* <div className="justify-center z-0 w-full h-[100px] blur-xl bg-gradient-to-r from-black via-[#42DCAE] to-[#DDE485]">
            background
          </div>{" "} */}
        <div>Meet the Team </div>
      </div>
      <p className="font-base bg-white text-black text-center p-1 text-xs">
        diverse team and great mind behind our work
      </p>

      <div
        className=" bg-neutral-900 gap-3 p-3
      grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <div className=" flex justify-center text-center">
          <Image src={team1} className="object-fit " />
          <div className=" absolute">
            <div className=" text-ms p-1">Tim Miller</div>
            <div className="text-xs bg-orange-400 p-1 font-semibold ">
              VP Operation & System
            </div>
          </div>
        </div>
        <div className=" flex justify-center text-center">
          <Image src={team2} className="object-fit" />
          <div className=" absolute">
            <div className=" text-ms p-1 ">Lisa Bennet</div>
            <div className="text-xs bg-orange-400 p-1 font-semibold ">
              Operation Supervisor
            </div>
          </div>
        </div>{" "}
        <div className=" flex justify-center text-center">
          <Image src={team3} className="object-fit" />
          <div className=" absolute">
            <div className=" text-ms p-1 ">Casandra Merlyn</div>
            <div className="text-xs bg-orange-400 p-1 font-semibold ">
              Finance & Accounting Manager
            </div>
          </div>
        </div>{" "}
        <div className=" flex justify-center text-center">
          <Image src={team4} className="object-fit" />
          <div className=" absolute">
            <div className=" text-ms p-1">Jones Henry</div>
            <div className="text-xs bg-orange-400 p-1 font-semibold ">
              Monitoring Supervisor
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TeamComponent;
