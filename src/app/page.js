import Image from "next/image";
import NavbarComponents from "./component/navbar";
import BannerComponent from "./component/banner";
import TaglineComponent from "./component/tagline";

export default function Home() {
  return (
    <>
      <NavbarComponents />
      <BannerComponent />
      <TaglineComponent />
    </>
  );
}
