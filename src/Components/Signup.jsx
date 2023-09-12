import React, { useState } from 'react'
import { Button, Container, FormControl, FormLabel, Input } from '@chakra-ui/react'
import axios from 'axios'


const Signup = () => {

    let [email,setEmail]=useState("");
    let [password,setPassword] = useState("");

   let handleSignup=async ()=>{
//    console.log(email,password);
try {
    const response = await axios.post('http://localhost:8080/users', {
      email,
      password
    });

    console.log( response.data);
  } catch (error) {
    console.error( error);
  }

   }



  return (
    <Container mt={'100px'} boxShadow={'0 0 10px pink.500'} p={'25px'} borderRadius={'10px'}>
    <FormControl>
        <FormLabel color={'pink'}>Name</FormLabel>
        <Input type='text' /><br /><br />

        <FormLabel color={'pink'}>Email address</FormLabel>
        <Input type='email'  onChange={(e)=>{setEmail(e.target.value)}} /><br /><br />

        <FormLabel color={'pink'}>Password</FormLabel>
        <Input type='password' onChange={(e)=>{setPassword(e.target.value)}}/><br /><br />

        <Button colorScheme={'pink'} onClick={handleSignup}>Submit</Button>
    </FormControl>
  </Container>
  )
}

export default Signup