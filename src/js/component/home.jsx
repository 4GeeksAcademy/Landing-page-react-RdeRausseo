import React from "react";

//include images into your bundle
import Jumbotron from "./jumbotron.jsx";
import Navbar from "./navBar.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <div className="container">
        <div className="row ">
          <div className="col-md-3 col-12 my-2">
            <Card />
          </div>
          <div className="col-md-3 col-12 my-2">
            <Card />
          </div>
          <div className="col-md-3 col-12 my-2">
            <Card />
          </div>
          <div className="col-md-3 col-12 my-2">
            <Card />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
