import React from "react";
import Container from "../Container";
import { Link } from "react-router-dom";

const Adds = () => {
  return (
    <>
      <Container>
        <Link to={"/shop"}>
          <div className="bg-[url('/src/assets/Ads_2.png')] h-[300px] bg-cover bg-no-repeat bg-center mt-20 mb-10"></div>
        </Link>
      </Container>
    </>
  );
};

export default Adds;
