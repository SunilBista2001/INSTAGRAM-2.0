import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  HeartIcon,
  PaperAirplaneIcon,
  EmojiHappyIcon,
} from "@heroicons/react/outline";

import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";
import { useSession } from "next-auth/react";
import { useState } from "react";

function Post({ username, userImg, img, caption }) {
  const { data: session } = useSession();
  return (
    <div className="bg-white border my-7 rounded-sm ">
      {/* header */}

      <div className="flex items-center p-2">
        <img
          className="h-10 w-10 rounded-full cursor-pointer p-1 border-gray-200 border"
          src={userImg}
          alt=""
        />
        <p className="ml-2 text-xs font-bold flex-1">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>

      {/* img */}
      <img className="w-full h-[650px] object-cover h-82" src={img} alt="" />

      {/* Buttons */}
      {session && (
        <div className="w-full flex justify-between px-4 pt-4">
          <div className="flex space-x-4">
            <HeartIcon className="btn" />
            <ChatIcon className="btn" />
            <PaperAirplaneIcon className="btn" />
          </div>
          <BookmarkIcon className="btn" />
        </div>
      )}

      {/* caption */}
      <div>
        <p className="p-5 truncate">
          <span className="font-bold mr-1">{username}</span>
          {caption}
        </p>
      </div>

      {/* comments */}

      {/* input */}
      {session && (
        <form className="flex p-5 w-full justify-between">
          <div className="flex space-x-3 w-full">
            <EmojiHappyIcon className="h-7 cursor-pointer" />
            <input
              className="w-full outline-none"
              type="text"
              placeholder="Add a comment.."
            />
          </div>
          <button type="submit" className="font-semibold text-blue-400">
            Post
          </button>
        </form>
      )}
    </div>
  );
}

export default Post;
