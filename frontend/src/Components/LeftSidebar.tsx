import React from "react";
import { BiHomeCircle, BiUser } from "react-icons/bi";
import {
  BsBell,
  BsBookmark,
  BsEnvelope,
  BsThreeDots,
  BsTwitter,
} from "react-icons/bs";
import { HiEnvelope } from "react-icons/hi2";
import { HiOutlineHashtag } from "react-icons/hi";
import Link from "next/link";
const NAVIGATION_ITEMS = [
  {
    title: "Twitter",
    icon: BsTwitter,
  },
  {
    title: "Home",
    icon: BiHomeCircle,
  },
  {
    title: "Explore",
    icon: HiOutlineHashtag,
  },
  {
    title: "Messages",
    icon: BsEnvelope,
  },
  {
    title: "Bookmarks",
    icon: BsBookmark,
  },
  {
    title: "Profile",
    icon: BiUser,
  },
];
function LeftSidebar() {
  return (
    <section className="fixed w-[275px] flex flex-col items-stretch h-screen  ">
      <div className=" flex flex-col items-stretch h-full space-y-4 mt-4 ">
        {NAVIGATION_ITEMS.map((item) => (
          <Link
            className="hover:bg-white/10 text-2xl transition duration-200 flex items-center justify-start w-fit space-x-2 rounded-3xl py-2 px-6"
            href={`/${item.title.toLowerCase()}`}
            key={item.title}
          >
            {" "}
            <div>
              <item.icon />
            </div>
            {item.title !== "Twitter" && <div>{item.title}</div>}
          </Link>
        ))}

        <button className="rounded-full m-4 bg-primary p-4  text-2xl text-center hover:bg-opacity-70  transition duration-2000000">
          Tweet
        </button>
      </div>
      <button className="rounded-full flex item-center space-x-2 p-4 hover:bg-white/10  transition duration-200  w-full justify-between">
        <div className="flex item-center space-x-2">
          <div className="rounded-full bg-slate-400 w-12 h-12"></div>
          <div className="text-left text-sm">
            <div className="font-semibold">CoderSharun</div>
            <div className="text-xs">@Sharun2666</div>
          </div>
        </div>

        <div>
          <BsThreeDots />
        </div>
      </button>
    </section>
  );
}

export default LeftSidebar;
