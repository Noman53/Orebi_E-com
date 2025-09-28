import React from 'react'
import Container from "../Container";
import Product from "../Product";
import Flex from "../Flex";
import product5 from "/src/assets/Product5.png";
import product6 from "/src/assets/Product6.png";
import product7 from "/src/assets/Product7.png";
import product8 from "/src/assets/Product8.png";

const Bestsellers = () => {
  return (
    <>
    <div className="mt-20">
        <Container>
          <h3 className="pb-4 font text-[39px] text-[#262626]">Our Bestsellers</h3>
          <Flex className="gap-x-7">
            <Product productImg={product5} productBadge={"New"}/>
            <Product productImg={product6} productBadge={"New"}/>
            <Product productImg={product7} productBadge={"New"}/>
            <Product productImg={product8} productBadge={"New"}/>
          </Flex>
        </Container>
    </div>
    </>
  )
}

export default Bestsellers