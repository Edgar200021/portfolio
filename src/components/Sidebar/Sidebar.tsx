import { SOCIALS } from "../../constants/constants";
import { SocialList } from "../Social/SocialList";

export const Sidebar = () => (
  <aside className="sidebarAnimation fixed left-4 top-0 min-h-[310px] flex flex-col justify-end items-center gap-y-4 phone:hidden z-50 ">
    <div className="w-[2px] grow bg-typography"></div>
    <SocialList icons={SOCIALS} className="flex flex-col gap-y-2 " />
  </aside>
)
