"use client";
import Image from "next/image";
import NavbarComponents from "../component/navbar";
import OperationComponent from "../component/operation";
import ExpertiseComponent from "../component/expertise";
import trucking from "../../assets/truckingss.jpg";
import ClosingComponent from "../component/closing";
import port from "../../assets/port.jpg";
import Tag2Component from "../component/tagline2";
import T3Component from "../component/tag3";
import PriceComponent from "../component/pricing";

function ServicePage() {
  return (
    <>
      <NavbarComponents />
      <Image src={port} alt="" className="w-full" />

      <OperationComponent />
      {/* <div className="bg-white h-[110px]"></div>
      <Tag2Component />
      <div className="bg-white h-[110px]"></div> */}
      <Image className="w-full" src={trucking} alt=""></Image>
      <ExpertiseComponent />

      <PriceComponent />
      <div className="bg-white h-[160px]"></div>
      <T3Component />
      <div className="bg-white h-[140px]"></div>

      <ClosingComponent />
    </>
  );
}
export default ServicePage;
