import React, { useState } from 'react'
import { Button, Container, Flex, FormControl, FormLabel, Input, Text } from '@chakra-ui/react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';


const Signup = () => {

  let navigate=useNavigate();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let handleSignup = async () => {

    //    console.log(email,password);
    try {
      const response = await axios.post('https://octa-srvr.onrender.com/users', {
        email,
        password
      });
       navigate('/login')
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }

  }



  return (
    <Container mt={'100px'} boxShadow={'0 0 10px pink'} p={'25px'} borderRadius={'10px'}>
      <FormControl>
        <FormLabel color={'pink'}>Name</FormLabel>
        <Input type='text' /><br /><br />

        <FormLabel color={'pink'}>Email address</FormLabel>
        <Input type='email' onChange={(e) => { setEmail(e.target.value) }} /><br /><br />

        <FormLabel color={'pink'}>Password</FormLabel>
        <Input type='password' onChange={(e) => { setPassword(e.target.value) }} /><br /><br />

        <Flex justifyContent={"space-between"} >
          <Button colorScheme={'pink'} onClick={handleSignup}>Submit</Button>
          <Text> Already signed up? <Link to={"/login"} style={{ color: "blue", textDecoration: "underline" }}>Login</Link></Text>
        </Flex>
      </FormControl>
    </Container>
  )
}

export default Signup