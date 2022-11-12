import { faker } from "@faker-js/faker";
import Story from "./Story";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

const Stories = () => {
  const { data: session } = useSession();

  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
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
    <div className="flex space-x-2 p-6 mt-8 border-gray-200 border rounded-sm bg-white overflow-x-scroll scrollbar-hide">
      {session && (
        <Story
          key={session.user.id}
          img={session.user.image}
          username={session.user.username}
        />
      )}
      {suggestions.map((profile) => (
        <Story
          key={profile.id}
          img={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  );
};

export default Stories;
