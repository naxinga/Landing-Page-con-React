import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";

//create your first component
const Home = () => {
	return (
		<div id="home">  
      <Navbar/>
      <Jumbotron/>      
      <div class="container">
        <div class="row">
          <div class="col">
            <Card/>
          </div>
          <div class="col">
            <Card/>
          </div>
          <div class="col">
            <Card/>
          </div>
          <div class="col">
            <Card/>
          </div>
      </div>
  </div>
</div>
	);
};



export default Home;

