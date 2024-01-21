import ClosingComponent from "../component/closing";
import JoinComponent from "../component/join";
import NavbarComponents from "../component/navbar";
import TteamComponent from "../component/tagteam";
import TeamComponent from "../component/teams";
import warehouse from "../../assets/warehouse.png";
import Image from "next/image";

function TeamPage() {
  return (
    <>
      <NavbarComponents />
      <Image src={warehouse} alt="" className="object-fit" />
      <div className="bg-lime-700 h-[20px]"></div>
      <div className="bg-white h-[100px]"></div>
      <TteamComponent />
      <div className="bg-white h-[100px]"></div>

      <TeamComponent />
      <JoinComponent />
      <ClosingComponent />
    </>
  );
}
export default TeamPage;
