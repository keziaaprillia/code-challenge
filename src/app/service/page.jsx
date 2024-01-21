"use client";
import Image from "next/image";
import NavbarComponents from "../component/navbar";
import OperationComponent from "../component/operation";
import ExpertiseComponent from "../component/expertise";
import trucking from "../../assets/truckingss.jpg";
import ClosingComponent from "../component/closing";
import samudera from "../../assets/samudera.jpg";

function ServicePage() {
  return (
    <>
      <NavbarComponents />
      <Image className="w-full" src={samudera} alt=""></Image>

      <OperationComponent />
      <Image className="w-full" src={trucking} alt=""></Image>
      <ExpertiseComponent />
      <ClosingComponent />
    </>
  );
}
export default ServicePage;
