"use client";
import Image from "next/image";
import NavbarComponents from "../component/navbar";
import OperationComponent from "../component/operation";
import ExpertiseComponent from "../component/expertise";
import trucking from "../../assets/truckingss.jpg";

function ServicePage() {
  return (
    <>
      <NavbarComponents />

      <OperationComponent />
      <Image className="w-full" src={trucking}></Image>
      <ExpertiseComponent />
    </>
  );
}
export default ServicePage;
