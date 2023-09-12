import React from 'react'
import LeftNav from '../Components/LeftNav'
import { Box, Flex, Heading, Input, Text } from '@chakra-ui/react'
import {
  Table, Thead, Tbody, Tr, Th, Td, TableContainer,
} from '@chakra-ui/react'

const Courses = () => {
  return (
    <Flex color={'rgb(131,133,139)'}>

      <LeftNav />


      <Box border={'2px solid blue'} w={'100%'} p={'20px'} ml={'20px'} >

        <Heading >Courses</Heading>

        <Flex justifyContent={'space-between'} mt={'30px'}>
          <Text size={'xl'}  fontWeight={'bold'}>COURSE LIST</Text>
          <Input placeholder='Search' size={'sm'} w={'200px'}></Input>
        </Flex>


        <Box mt={'30px'}>

          <TableContainer  ml={'40px'} >
            <Table variant='simple'>
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Description</Th>
                  <Th>Instructor</Th>
                  <Th>Instrument</Th>
                  <Th>Day of Week</Th>
                  <Th isNumeric># of Students</Th>
                  <Th isNumeric>Price</Th>
                  <Th>Status</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>inches</Td>
                  <Td>millimetres (mm)</Td>
                  <Td isNumeric>25.4</Td>
                  <Td isNumeric>25.4</Td>
                  <Td isNumeric>25.4</Td>
                  <Td isNumeric>25.4</Td>
                  <Td isNumeric>25.4</Td>
                  <Td isNumeric>25.4</Td>
                </Tr>

              </Tbody>

            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Flex>
  )
}

export default Courses