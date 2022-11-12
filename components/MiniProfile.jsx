import { signOut, useSession } from "next-auth/react";

function MiniProfile() {
  const { data: session } = useSession();
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        className="rounded-full h-20 w-20 p-2"
        src={session?.user?.image}
        alt=""
      />
      <div className="flex-1 mx-3">
        <h2 className="font-bold">{session?.user?.username}</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>

      <button
        className="text-sm text-blue-400 font-semibold cursor-pointer"
        onClick={signOut}
      >
        Sign Out
      </button>
    </div>
  );
}

export default MiniProfile;
