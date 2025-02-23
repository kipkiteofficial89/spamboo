import { ColorIconType, RegularIconType, SolidIconType } from "./Type";
import { FiHome } from "react-icons/fi";
import { FiCalendar } from "react-icons/fi";
import { FiLayout } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";
import { IoPeopleSharp } from "react-icons/io5";
import { FiMessageSquare } from "react-icons/fi";
import { FiBell } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import { FiCompass } from "react-icons/fi";
import { FiCpu } from "react-icons/fi";
import { FiBookmark } from "react-icons/fi";
import { FiGrid } from "react-icons/fi";
import { FiFlag } from "react-icons/fi";
import { FiGift } from "react-icons/fi";

export const HeaderLinks: RegularIconType[] = [
  { id: 1, icon: <FiHome />, link: "/" },
  { id: 2, icon: <IoPeopleSharp />, link: "/community" },
  { id: 3, icon: <FiShoppingBag />, link: "/marketplace" },
  { id: 4, icon: <FiCalendar />, link: "/events" },
  { id: 5, icon: <FiLayout />, link: "/feed" },
];

export const SolidIcons: SolidIconType[] = [
  { id: 1, icon: <FiMessageSquare />, name: "Message" },
  { id: 2, icon: <FiBell />, name: "Notification" },
];

export const HomeLeftContainerIcons: ColorIconType[] = [
  { id: 1, icon: <FiUsers />, link: "/", title: "Friends" },
  { id: 2, icon: <FiCompass />, link: "/", title: "Explore" },
  { id: 3, icon: <FiCpu />, link: "/", title: "Memories" },
  { id: 4, icon: <FiBookmark />, link: "/", title: "Saved" },
  { id: 5, icon: <FiGrid />, link: "/", title: "Groups" },
  { id: 6, icon: <FiFlag />, link: "/", title: "Pages" },
  { id: 7, icon: <FiGift />, link: "/", title: "Birthdays" },
];
