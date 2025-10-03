import React from 'react'
import Container from "../Container";
import Product from "../Product";
import Flex from "../Flex";
import product9 from "/src/assets/Product9.png";
import product10 from "/src/assets/Product10.png";
import product11 from "/src/assets/Product11.png";
import product12 from "/src/assets/Product12.png";
const SpecialOffers = () => {
  return (
    <>
    <div className="mt-20 mb-20">
        <Container>
          <h3 className="pb-4 font text-[39px] text-[#262626]">Special Offers</h3>
          <Flex className="gap-x-7 ">
            <Product productImg={product9} productBadge={"New"}/>
            <Product productImg={product10} productBadge={"New"}/>
            <Product productImg={product11} productBadge={"New"}/>
            <Product productImg={product12} productBadge={"New"}/>
          </Flex>
        </Container>
    </div>
    </>
  )
}

export default SpecialOffers