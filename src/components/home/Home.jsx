import React from "react";
import Header from "../header/Header";
import Destopk from "../destopk/destopk";
import "./home.scss";
import FirstMein from "../firstMein/FirstMein";

function Home() {
  return (
    <>
      <Header />
      <FirstMein />
      <Destopk />
    </>
  );
}

export default Home;
