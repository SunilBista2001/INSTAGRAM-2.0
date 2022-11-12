import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
  PlusIcon,
} from "@heroicons/react/outline";

import { HomeIcon } from "@heroicons/react/solid";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";
function Navbar() {
  const { data: session } = useSession();
  const router = useRouter();
  const [open, setOpen] = useRecoilState(modalState);

  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      {/* wrapper */}
      <div className="flex justify-between py-3 max-w-6xl mx-5 xl:mx-auto">
        {/* left */}
        <div
          onClick={() => router.push("/")}
          className="relative w-24 hidden lg:inline-grid"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png"
            alt=""
            className="object-contain"
          />
        </div>
        <div
          onClick={() => router.push("/")}
          className="relative w-8 lg:hidden flex-shrink-0"
        >
          <img
            src="https://parspng.com/wp-content/uploads/2021/09/pngwing.com-4.png"
            alt=""
          />
        </div>
        {/* middle */}
        <div className="relative flex gap-1 items-center border rounded px-2 w-[220px]">
          <div className="">
            <SearchIcon className="w-5 h-5 text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="border-none outline-none text-sm"
          />
        </div>
        {/* right */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn" onClick={() => router.push("/")} />
          <MenuIcon className="w-5 lg:hidden cursor-pointer" />

          {session ? (
            <>
              <div className="relative navBtn">
                <PaperAirplaneIcon className="navBtn rotate-45" />
                <div className="absolute bg-red-500 w-4 h-4 flex justify-center items-center text-white font-bold rounded-full text-xs top-[-5px] right-[-5px] animate-pulse">
                  6
                </div>
              </div>
              <PlusCircleIcon
                className="navBtn"
                onClick={() => setOpen(true)}
              />
              <UserGroupIcon className="navBtn" />
              <HeartIcon className="navBtn" />
              <img
                onClick={signOut}
                src={session.user.image}
                alt=""
                className="w-10 h-10  rounded-full cursor-pointer object-contain"
              />
            </>
          ) : (
            <button onClick={signIn}>Sign In</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
