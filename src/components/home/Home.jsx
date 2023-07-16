import React from "react";
import Header from "../header/Header";
import "./home.scss";
import Footer from "../footer/footer";
import Movies from "../movies/Movies";
import FirstMein from "../firstMein/FirstMein";

function Home() {
  return (
    <>
      <Header />
      <FirstMein />
      <Movies />
      <Footer />
    </>
  );
}

export default Home;
