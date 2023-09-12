import React from 'react'
import { Button, Flex , Image, Spacer } from '@chakra-ui/react'
import logo1 from '../Assets/logo1.png'
import home from '../Assets/home.png'
import courses from '../Assets/courses.png'
import logout from '../Assets/logout.png'

const LeftNav = () => {
  return (
    <Flex direction={'column'} w={'8%'} p={'10px'}  border={'2px solid red'}>
     <Flex   ><Image src={logo1}></Image></Flex >
  

     <Flex direction={'column'} mt={'100px'}>
        <Button m={'0'} p={'0'}> <Image src={home} w={'100%'} h={'100%'}></Image> </Button>
        <Button m={'0'} p={'0'}  mt={'20px'}> <Image src={courses}  w={'100%'} h={'100%'}></Image></Button>
     </Flex >



     <Flex mt={'400px'}></Flex >
   


     <Flex  ><Button m={'0'} p={'0'}> <Image src={logout}  w={'100%'} h={'100%'}></Image></Button></Flex >
     
    </Flex >
  )
}

export default LeftNav