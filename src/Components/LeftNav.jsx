import React, { useContext } from 'react'
import { Button, Flex, Image, Spacer } from '@chakra-ui/react'
import logo1 from '../Assets/logo1.png'
import home from '../Assets/home.png'
import courses from '../Assets/courses.png'
import logout from '../Assets/logout.png'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'

const LeftNav = () => {

  let { setIsAuth } = useContext(AuthContext);
  let navigate = useNavigate();


  return (
    <Flex direction={'column'} p={'12px'} w={'8%'}  >
      <Flex><Image src={logo1}></Image></Flex >


      <Flex direction={'column'} mt={'100px'}>
        <Button m={'0'} p={'0'}> <Image src={home} w={'100%'} h={'100%'}
          onClick={() => { navigate('/courses') }}></Image> </Button>
        <Button m={'0'} p={'0'} mt={'20px'}
          onClick={() => { navigate('/home') }}> <Image src={courses} w={'100%'} h={'100%'}></Image></Button>
      </Flex >


      <Flex mt={'400px'}></Flex >


      <Flex><Button p={'0'}  m={'0'} onClick={() => {
        setIsAuth(false)
        navigate("/login")
      }}> <Image src={logout} w={'100%'} h={'100%'}></Image></Button></Flex >

    </Flex >
  )
}

export default LeftNav