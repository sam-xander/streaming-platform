import {
  HomeIcon,
  BoltIcon,
  CheckBadgeIcon,
  UserIcon,
  MagnifyingGlassIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import HeaderItem from "./HeaderItem";
import logo from "../images/logo.png";

function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={BoltIcon} />
        <HeaderItem title="VERIFIED" Icon={CheckBadgeIcon} />
        <HeaderItem title="COLLECTIONS" Icon={RectangleStackIcon} />
        <HeaderItem title="SEARCH" Icon={MagnifyingGlassIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
      <Image
        className="object-contain"
        src={logo}
        alt="Logo"
        width={200}
        height={100}
      />
    </header>
  );
}

export default Header;
