"use client";
import Image from "next/image";
import NavbarComponents from "../component/navbar";
import OperationComponent from "../component/operation";
import ExpertiseComponent from "../component/expertise";
import trucking from "../../assets/truckingss.jpg";
import ClosingComponent from "../component/closing";

import Tag2Component from "../component/tagline2";
import T3Component from "../component/tag3";

function ServicePage() {
  return (
    <>
      <NavbarComponents />
      <div className="bg-white h-[110px]"></div>
      <Tag2Component />
      <div className="bg-white h-[110px]"></div>

      <OperationComponent />
      <Image className="w-full" src={trucking} alt=""></Image>
      <ExpertiseComponent />
      <div className="bg-white h-[140px]"></div>
      <T3Component />
      <div className="bg-white h-[140px]"></div>

      <ClosingComponent />
    </>
  );
}
export default ServicePage;
