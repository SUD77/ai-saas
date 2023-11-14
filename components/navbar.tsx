import { UserButton } from "@clerk/nextjs";

import MobileSideBar from "./ui/mobile-sidebar";

const Navbar = () => {
  return (
    <div className="flex items-center p-4">
      <MobileSideBar />
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />{" "}
        {/* This button shows the currenly logged in user */}
      </div>
    </div>
  );
};

export default Navbar;
