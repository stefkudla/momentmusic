"use client";
import { Bebas_Neue, Caveat } from "next/font/google";
import { usePathname } from "next/navigation";
import Navigation from "./Navigation";
import Socials from "./Socials";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

const caveat = Caveat({
  weight: "400",
  subsets: ["latin"],
});

const Header = () => {
  const isHomePage = usePathname() === "/";
  return (
    <div className="w-2/6 flex flex-col justify-between">
      {isHomePage ? (
        <h1 className={`text-7xl text-white ${bebasNeue.className}`}>
          Enjoy your, <br />{" "}
          <span className={`text-6xl ${caveat.className}`}>- Moment</span>
        </h1>
      ) : (
        <h2 className={`text-7xl text-white ${bebasNeue.className}`}>
          Enjoy your, <br />{" "}
          <span className={`text-6xl ${caveat.className}`}>- Moment</span>
        </h2>
      )}
      <Navigation />
      <Socials />
    </div>
  );
};

export default Header;
