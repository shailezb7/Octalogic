import React, { useEffect, useState } from 'react'
import LeftNav from '../Components/LeftNav'
import { Box, Flex, Heading, Image, Input, Text } from '@chakra-ui/react'
import {
  Table, Thead, Tbody, Tr, Th, Td, TableContainer,
} from '@chakra-ui/react'
import axios from 'axios'
import dots from '../Assets/dots.png'

const Courses = () => {

  let [data,setData]=useState([]);

  let getData=async ()=>{
     let resp=await axios.get('http://localhost:8080/courses');
     let info=resp.data;
    //  console.log(info);
     setData(info);
  }
  useEffect(()=>{
    getData();
  },[])
  return (
    <Flex color={'rgb(131,133,139)'}>

      <LeftNav />


      <Box  w={'100%'} p={'20px'} ml={'20px'} >

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
                  <Th ># of Students</Th>
                  <Th >Price</Th>
                  <Th>Status</Th>
                  <Th>Action</Th>
                </Tr>
              </Thead>

              <Tbody>
                {
                  data?.map((e)=>{
                      return (
                        <Tr>
                        <Td>{e.course}</Td>
                        <Td>{e.description}</Td>
                        <Td >{e.instructor}</Td>
                        <Td >{e.instrument}</Td>
                        <Td >{e.day}</Td>
                        <Td >10</Td>
                        <Td >{e.price}</Td>
                        <Td >open</Td>
                        <Td ><Image src={dots}></Image></Td>
                      </Tr> 
                      )
                  })
                }

              </Tbody>

            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Flex>
  )
}

export default Courses


              