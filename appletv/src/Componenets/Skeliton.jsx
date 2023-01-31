import { Flex, Grid, Skeleton, Stack } from '@chakra-ui/react'
import React from 'react'

function Skeliton() {
  return (
    <Flex gap={10} mt={50}>
        <div>
        <Skeleton height='100px' width='200px' m={10} />
        </div>
        <div>
        <Skeleton height='100px' width='200px' m={10} />
        </div>
        <div>
        <Skeleton height='100px' width='200px' m={10} />
        </div>
        <div>
        <Skeleton height='100px' width='200px' m={10} />
        </div>
  </Flex>
  )
}

export default Skeliton