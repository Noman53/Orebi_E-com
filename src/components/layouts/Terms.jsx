import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import { FiTruck, FiRotateCcw } from 'react-icons/fi'

const Terms = () => {
  return (
    <>
     <div className="py-5">
       <Container>
        <Flex className="w-full justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-gray-800 mr-3">2</span>
            <span className="text-base text-gray-500">Two years warranty</span>
          </div>
          <div className="flex items-center">
            <FiTruck className="text-2xl text-gray-800 mr-3" />
            <span className="text-base text-gray-500">Free shipping</span>
          </div>
          <div className="flex items-center">
            <FiRotateCcw className="text-2xl text-gray-800 mr-3" />
            <span className="text-base text-gray-500">Return policy in 30 days</span>
          </div>
        </Flex>
      </Container>
     </div>
    </>
  )
}

export default Terms