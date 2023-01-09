import React from "react";
import Exercises from "./Exercises";
import Followers from "./Followers";
import { HomeWrapper } from "./style";





const Home = () => {
  return (
      <HomeWrapper>
        <Exercises/>
        <Followers/>
      </HomeWrapper>
 
  );
};

export default Home;