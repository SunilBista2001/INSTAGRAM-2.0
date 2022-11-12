function Story({ img, username }) {
  return (
    <div className="flex flex-col items-center">
      <img
        className="h-14 w-14 rounded-full p-[1.5px] border-pink-500 border-2 cursor-pointer object-contain story"
        src={img}
        alt=""
      />
      <p className="text-xs w-14 truncate mt-1">{username}</p>
    </div>
  );
}

export default Story;
