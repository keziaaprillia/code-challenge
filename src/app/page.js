import Image from "next/image";
import NavbarComponents from "./component/navbar";
import BannerComponent from "./component/banner";
import TaglineComponent from "./component/tagline";
import MissionComponent from "./component/missionstatement";
import PillarComponents from "./component/opspillar";
import OverviewComponent from "./component/overview";
import TestiComponent from "./component/testi";
import photo from "../assets/photo.png";
import OperationComponent from "./component/operation";
import ExpertiseComponent from "./component/expertise";
import port from "../assets/port.jpg";
import ServiceComponent from "./component/briefservices";

export default function Home() {
  return (
    <>
      <NavbarComponents />
      <BannerComponent />
      <MissionComponent />
      <PillarComponents />
      <Image src={photo} alt="" className="w-full md:hidden" />
      <OverviewComponent />

      <ServiceComponent />
      <Image src={port} alt="" className="w-full" />

      <TestiComponent />

      <TaglineComponent />
    </>
  );
}
