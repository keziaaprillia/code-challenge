import Image from "next/image";
import NavbarComponents from "./component/navbar";
import BannerComponent from "./component/banner";

export default function Home() {
  return (
    <>
      <NavbarComponents />
      <BannerComponent />
    </>
  );
}
