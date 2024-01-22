import Image from "next/image";
import NavbarComponents from "./component/navbar";
import BannerComponent from "./component/banner";
import TaglineComponent from "./component/tagline";
import MissionComponent from "./component/missionstatement";
import PillarComponents from "./component/opspillar";
import OverviewComponent from "./component/overview";
import TestiComponent from "./component/testi";
import photo from "../assets/photo.png";
import samudera from "../assets/samudera.jpg";
import OperationComponent from "./component/operation";
import ExpertiseComponent from "./component/expertise";

import ServiceComponent from "./component/briefservices";
import ClosingComponent from "./component/closing";

export default function Home() {
  return (
    <>
      <NavbarComponents />
      <BannerComponent />
      <MissionComponent />
      <PillarComponents />
      <Image src={photo} alt="" className="w-full md:hidden" />
      <OverviewComponent />
      <div className="bg-white h-[100px]"></div>
      <TaglineComponent />
      <div className="bg-white h-[100px]"></div>
      <Image src={samudera} alt="" className="object-cover w-full h-[700px] " />
      <ServiceComponent />

      <TestiComponent />

      <ClosingComponent />
    </>
  );
}
