import React, { useContext, useEffect, useState } from 'react';
import LeftNav from '../Components/LeftNav';

import {Box,Flex,Heading,Input,Menu,MenuButton,MenuItem,MenuList,Text,Modal,ModalOverlay, ModalContent,ModalHeader,
  ModalFooter, ModalBody, ModalCloseButton, Button, useDisclosure,} from '@chakra-ui/react';

import { Table,  Thead,  Tbody,  Tr,  Th,  Td,  TableContainer,} from '@chakra-ui/react';
import axios from 'axios';
import Pagination from '../Components/Pagination';
import { AuthContext } from '../Context/AuthContext';

const Courses = () => {
  let { filter, setFilter } = useContext(AuthContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [editCourse, setEditCourse] = useState('');
  const [change, setChange] = useState(true);
  const [editInstructor, setEditInstructor] = useState('');
  const [editingItemId, setEditingItemId] = useState(null); 
  const [editPrice, setEditPrice] = useState('');
  console.log(filter == "")
  const editFunc = async (e) => {
    try {
      const id = e.id;
      const data = {
        course: editCourse,
        instructor: editInstructor,
        price: editPrice,
      };
      const resp = await axios.patch(`https://octa-srvr.onrender.com/courses/${id}`, data);
      setChange(!change);
      console.log(resp.data);
      onClose();
    } catch (error) {
      console.error('error:', error);
    }
  };

  const closeFunc = async (e) => {
    try {
      const id = e.id;
      const newStatus = e.status === 'open' ? 'close' : 'open';
      const data = {
        ...e,
        status: newStatus,
      };
      const resp = await axios.put(`https://octa-srvr.onrender.com/courses/${id}`, data);
      setChange(!change);
      console.log(resp.data);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const archiveFunc = async (e) => {
    try {
      const id = e.id;
      const newStatus = e.status === 'archive' ? 'unarchive' : 'archive';
      const data = {
        ...e,
        status: newStatus,
      };
      const resp = await axios.put(`https://octa-srvr.onrender.com/courses/${id}`, data);
      setChange(!change);
      console.log(resp.data);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      if (filter == "") {
        let resp = await axios.get(`https://octa-srvr.onrender.com/courses?limit=10&_page=${page}`);
        let info = resp.data;
        setData(info);
        console.log(info)
        setTotalPages(5);
        console.log(totalPages)
      } else {
        let resp = await axios.get(`https://octa-srvr.onrender.com/courses?limit=10&_page=${page}&course=${filter}`);
        let info = resp.data;
        setData(info);
        setTotalPages(5);
        console.log(totalPages)
        console.log(info)
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };
  useEffect(() => {
    getData();
  }, [change, page, filter , totalPages]);

  const openEditModal = (e) => {
    setEditCourse(e.course);
    setEditInstructor(e.instructor);
    setEditPrice(e.price);
    setEditingItemId(e.id);
    onOpen();
  };

  return (
    <>
      <Flex color={'rgb(131,133,139)'}>
        <LeftNav />

        <Box p={'20px'} ml={'20px'} w={'100%'} >
          <Heading ml={'55px'}>Courses</Heading>

          <Flex justifyContent={'space-between'} mt={'30px'} ml={'60px'}>
            <Text size={'xl'} fontWeight={'bold'}>
              COURSE LIST
            </Text>
            <Input placeholder="Search"  w={'200px'} size={'sm'}
             onChange={(e) => {
              setFilter(e.target.value);
            }}></Input>
          </Flex>

          <Box mt={'30px'}>
            <TableContainer ml={'40px'}>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Name</Th>
                    <Th>Description</Th>
                    <Th>Instructor</Th>
                    <Th>Instrument</Th>
                    <Th>Day of Week</Th>
                    <Th># of Students</Th>
                    <Th>Price</Th>
                    <Th>Status</Th>
                    <Th>Action</Th>
                  </Tr>
                </Thead>

                <Tbody>
                  {data.length > 0 ? data.map((e) => (
                    <Tr key={e.id}>
                      <Td>{e.course}</Td>
                      <Td>{e.description}</Td>
                      <Td>{e.instructor}</Td>
                      <Td>{e.instrument}</Td>
                      <Td>{e.day}</Td>
                      <Td>40</Td>
                      <Td>{e.price}</Td>
                      <Td>{e.status}</Td>
                      <Td>
                        <Menu>
                          <MenuButton>
                            <svg width="50px" height="30px" viewBox="0 0 22 22" id="three-dots" xmlns="http://www.w3.org/2000/svg">
                              <g id="_20x20_three-dots--grey" data-name="20x20/three-dots--grey" transform="translate(24) rotate(90)">
                                <rect id="Rectangle" width="24" height="24" fill="none" />
                                <circle id="Oval" cx="1" cy="1" r="1" transform="translate(5 11)" stroke="#000000" stroke-miterlimit="10" stroke-width="0.5" />
                                <circle id="Oval-2" data-name="Oval" cx="1" cy="1" r="1" transform="translate(11 11)" stroke="#000000" stroke-miterlimit="10" stroke-width="0.5" />
                                <circle id="Oval-3" data-name="Oval" cx="1" cy="1" r="1" transform="translate(17 11)" stroke="#000000" stroke-miterlimit="10" stroke-width="0.5" />
                              </g>
                            </svg>
                          </MenuButton>
                          <MenuList>
                            <MenuItem>
                              <Button bg='white' fontWeight={'bold'} ml={'-15px'} onClick={() => openEditModal(e)}>Edit</Button>
                            </MenuItem>
                            <MenuItem color={'black'} fontWeight={'bold'} onClick={() => closeFunc(e)}>
                              {e.status === 'open' ? 'Close' : 'Open'}
                            </MenuItem>
                            <MenuItem color={'black'} fontWeight={'bold'} onClick={() => archiveFunc(e)}>
                              {e.status === 'archive' ? 'Unarchive' : 'Archive'}
                            </MenuItem>
                          </MenuList>
                        </Menu>
                      </Td>
                    </Tr>
                  )) : <Heading color={'red'} mt={'50px'}>Not Found</Heading>}
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        </Box>

        {/* Edit Modal */}
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Edit page</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Input
                value={editCourse}
                onChange={(e) => setEditCourse(e.target.value)}
                placeholder="Edit name"
              ></Input>
              <Input
                value={editPrice}
                onChange={(e) => setEditPrice(e.target.value)}
                placeholder="Edit price"
              ></Input>
              <Input
                value={editInstructor}
                onChange={(e) => setEditInstructor(e.target.value)}
                placeholder="Edit instructor"
              ></Input>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="pink" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button
                variant="ghost"
                onClick={() => {
                  editFunc({ id: editingItemId, ...data });
                }}
              >
                Save
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>

      <Flex padding={"20px 50px"} justifyContent={"center"}>
        {totalPages && (
          <Pagination
            totalPages={totalPages}
            handlePageChange={handlePageChange}
            currentPage={page}
          />
        )}
      </Flex>
    </>

  );
};

export default Courses;
