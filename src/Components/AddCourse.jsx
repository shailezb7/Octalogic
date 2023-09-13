import { Button, Container, Flex, FormControl, Input, Select } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddCourse = () => {

    let navigate=useNavigate();

    let init = {
        course: "",
         description: "", 
         instructor: "", 
         instrument: "",
          day: "", 
          price: 0,
          status: "open",
    }

    let [obj, setObj] = useState(init)


    let addCourse =async () => {  
        try {
            const response = await axios.post('https://octa-srvr.onrender.com/courses', obj);     
            // console.log( response.data);
            navigate('/courses');
          } catch (error) {
            console.error( error);
          }
    }

    return (
        <Container  boxShadow={'0 0 10px pink'} mt={'105px'} p={'25px'} borderRadius={'12px'}>
            <FormControl >
                <Input placeholder='Course Name'
                onChange={(e)=>{
                    setObj({...obj,course:e.target.value})
                }}></Input>

                <Input  mt={'16px'} placeholder='Description' 
                onChange={(e)=>{
                    setObj({...obj,description:e.target.value})
                }}></Input>

                <Input  mt={'16px'} placeholder='Instructor'
                onChange={(e)=>{
                    setObj({...obj,instructor:e.target.value})
                }}></Input>

                <Select placeholder='Instrument'  mt={'15px'}
                onChange={(e)=>{
                    setObj({...obj,instrument:e.target.value})
                }}>
                    <option value='Flute'>Flute</option>
                    <option value='Guitar'>Guitar</option>
                </Select>

                <Select placeholder='Day of the week'  mt={'15px'}
                onChange={(e)=>{
                    setObj({...obj,day:e.target.value})
                }}>
                    <option value='Monday'>Monday</option>
                    <option value='Tuesday'>Tuesday</option>
                    <option value='Wednesday'>Wednesday</option>
                    <option value='Thursday'>Thursday</option>
                    <option value='Friday'>Friday</option>
                    <option value='Saturday'>Saturday</option>
                    <option value='Sunday'>Sunday</option>
                </Select>


                <Input placeholder='Price'  mt={'16px'}
                onChange={(e)=>{
                    setObj({...obj,price:e.target.value})
                }}></Input>

                <Flex justifyContent={'space-evenly'} mt={'22px'}>

                <Button onClick={()=>{navigate('/courses')}} colorScheme={'pink'} >Cancel</Button>
                <Button colorScheme={'pink'} onClick={addCourse}>Add Course</Button>

                </Flex>
            </FormControl>
        </Container>
    )
}

export default AddCourse