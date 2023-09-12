import { Button, Container, FormControl, FormLabel, Input } from '@chakra-ui/react'
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    let [email,setEmail]=useState("");
    let [password,setPassword] = useState("");

     let { isAuth,setIsAuth}=useContext(AuthContext);
     let navigate=useNavigate();

     let handleLogin=async ()=>{
        // console.log(email,password);
        let resp=await axios.get('http://localhost:8080/users');
        // console.log(data.data);
        let data=resp.data;
        data?.map((e)=>{
           if(email==e.email && password==e.password){
             setIsAuth(true);
             navigate('/courses');
           }
        })
     }

     useEffect(()=>{
        console.log(isAuth);
     },[])

    return (
        <Container mt={'100px'} boxShadow={'0 0 10px pink'} p={'25px'} borderRadius={'10px'}>
            <FormControl>
                <FormLabel color={'pink'}>Email address</FormLabel>
                <Input type='email' onChange={(e)=>setEmail(e.target.value)}/><br /><br />

                <FormLabel color={'pink'}>Password</FormLabel>
                <Input type='password' onChange={(e)=>setPassword(e.target.value)}/><br /><br />

                <Button colorScheme={'pink'} onClick={handleLogin}>Submit</Button>
            </FormControl>
        </Container>
    )
}

export default Login