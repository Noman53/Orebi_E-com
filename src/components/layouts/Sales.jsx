import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import ads1 from "/src/assets/Ad_1.png";
import ads2 from "/src/assets/Ad_2.png";
import ads3 from "/src/assets/Ad_3.png";
import { Link } from "react-router-dom";

const Sales = () => {
  return (
    <div className="pt-[170px] pb-[140px]">
      <Container>
        <Flex className={"gap-x-8.5 items-start"}>
          {/* Left Ad */}
          <div className="w-1/2">
            <Link to="/shop">
              <Image imgSrc={ads1} className={"w-full"} />
            </Link>
          </div>
          {/* Right ads */}
          <div className="w-1/2">
            <Link to="/shop">
              <Image imgSrc={ads2} className="w-full pb-8.5" />
            </Link>
            <Link to="/shop">
              <Image imgSrc={ads3} className="w-full" />
            </Link>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Sales;
