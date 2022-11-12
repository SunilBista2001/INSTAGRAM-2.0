import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Feed from "../components/Feed";
import Modal from "../components/Modal";
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Instagram 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Feed />
      <Modal />
    </div>
  );
};

export default Home;
