import ClosingComponent from "../component/closing";
import NavbarComponents from "../component/navbar";
import TteamComponent from "../component/tagteam";
import TeamComponent from "../component/teams";

function TeamPage() {
  return (
    <>
      <NavbarComponents />
      <div className="bg-white h-[100px]"></div>
      <TteamComponent />
      <div className="bg-white h-[100px]"></div>

      <TeamComponent />
      <ClosingComponent />
    </>
  );
}
export default TeamPage;
