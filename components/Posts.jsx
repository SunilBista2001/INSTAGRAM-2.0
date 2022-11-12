import Post from "./Post";

function Posts() {
  const post = [
    {
      id: 1,
      username: "btwitsbista",
      userImg:
        "https://media.gq.com/photos/56bcb218cdf2db6945d2ef93/4:3/w_2000,h_1500,c_limit/bieber-coverstory-square.jpg",
      img: "https://assets.vogue.in/photos/5d5ba3876bda97000860ec0c/master/pass/Justin%20Bieber%20Declares%20His%20Style%20Is%20Impeccable.jpg",
      caption: "This is DOPE!!!",
    },
    {
      id: 5,
      username: "btwitsbista",
      userImg:
        "https://media.gq.com/photos/56bcb218cdf2db6945d2ef93/4:3/w_2000,h_1500,c_limit/bieber-coverstory-square.jpg",
      img: "https://i.insider.com/635af9abea35650019e08e19?width=1136&format=jpeg",
      caption: "Finally!! My IDOL Scored a goal",
    },
  ];
  return (
    <div>
      {post.map((post) => (
        <Post
          key={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
