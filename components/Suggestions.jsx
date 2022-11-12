import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";

function Suggestions() {
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
      userId: faker.datatype.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      password: faker.internet.password(),
      birthdate: faker.date.birthdate(),
      registeredAt: faker.date.past(),
    }));
    setSuggestions(suggestions);
  }, []);

  return (
    <div className="mt-4 ml-10">
      <div className="flex text-sm justify-between mb-5">
        <h3 className="font-bold text-gray-500">Suggestions for you</h3>
        <button className="text-gray-600 font-semibold">See All</button>
      </div>

      {suggestions.map((profile) => (
        <div
          key={profile.userId}
          className="flex  mt-3 items-center justify-between"
        >
          <img
            className="w-12 h-12 rounded-full border p-[2px] cursor-pointer"
            src={profile.avatar}
            alt=""
          />

          <div className="flex-1 ml-4">
            <h2 className="font-semibol">{profile.username}</h2>
          </div>
          <h2 className="text-sm text-blue-400 font-semibold cursor-pointer">
            Follow
          </h2>
        </div>
      ))}
    </div>
  );
}

export default Suggestions;
