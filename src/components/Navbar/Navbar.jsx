
import "./Nav.css"
import { ChevronDownIcon, ChevronRightIcon, HamburgerIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'


import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuGroup,
    MenuDivider,

} from '@chakra-ui/react';


import { Link } from "react-router-dom";






export const Navbar = () => {




    return (
        <>
            <div className="top">
                <div className="upper">
                    <div>
                        <p className="upperp">Register for The Coding Classroom and learn the basics of web development for free.</p>
                    </div>
                    <div>
                        <Button className="topbtn" variant='ghost' _hover={{ bg: '#FFF5F5', color: "#C53030" }}>
                            <div className="rgt" ><p>REGISTER</p> <div> <ChevronRightIcon w={6} h={6} color="red.500" /></div></div>
                        </Button>
                    </div>
                </div>
            </div>
            <div className="Navbar">
                <div className="header">

                    <div className="Sidebar" >
                       
                           

                    <div >
                        <Menu>
                            <MenuButton variant='ghost' _hover={{ bg: '#FFF5F5', color: "#C53030" }} as={Button} >
                               <HamburgerIcon/>
                            </MenuButton>
                            <MenuList>
                            <MenuGroup title='Courses'  _hover={{ bg: '#FFF5F5' }} ></MenuGroup>
                                <MenuGroup title='Full Time'>
                                    <MenuItem _hover={{ bg: '#FFF5F5' }}>
                                        <div>
                                            <div className="menulist">
                                                <div>
                                                    <a href="/">
                                                        <div>
                                                            <p>Full Stack Web Development</p>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div>
                                                    <ChevronRightIcon w={6} h={6} color="red.500" />
                                                </div>
                                            </div>
                                            <div>
                                                <p className="smalltext">"30 Weeks | 18 - 20 Yrs | Online"</p>
                                            </div>
                                        </div>
                                    </MenuItem>
                                </MenuGroup>
                                <MenuGroup title='Part Time'>
                                    <MenuItem _hover={{ bg: '#FFF5F5' }}>
                                        <div>
                                            <div className="menulist">
                                                <div>
                                                    <a href="/">
                                                        <div>
                                                            <p>Full Stack Android Development</p>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div>
                                                    <ChevronRightIcon w={6} h={6} color="red.500" />
                                                </div>
                                            </div>
                                            <div>
                                                <p className="smalltext">"30 Weeks | 18 - 20 Yrs | Online"</p>
                                            </div>
                                        </div>
                                    </MenuItem>
                                    <MenuItem _hover={{ bg: '#FFF5F5' }}>
                                        <div>
                                            <div className="menulist">
                                                <div>
                                                    <a href="/">
                                                        <div>
                                                            <p>Full Stack Web Development</p>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div>
                                                    <ChevronRightIcon w={6} h={6} color="red.500" />
                                                </div>
                                            </div>
                                            <div>
                                                <p className="smalltext">"30 Weeks | 18 - 20 Yrs | Online"</p>
                                            </div>
                                        </div>
                                    </MenuItem>
                                    <MenuItem _hover={{ bg: '#FFF5F5' }}  >
                                        < div >
                                            <div className="menulist">
                                                <div className="arro1">
                                                    <a href="/">
                                                        <div>
                                                            <p>Data Analytics</p>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="arro">
                                                    <ChevronRightIcon w={6} h={6} color="red.500" />
                                                </div>
                                            </div>
                                            <div>
                                                <p className="smalltext">"30 Weeks | 18 - 20 Yrs | Online"</p>
                                            </div>
                                        </div>
                                    </MenuItem>
                                </MenuGroup>
                                <MenuGroup  title='Fees & ISA'  _hover={{ bg: '#FFF5F5' }}   > </MenuGroup>
                                <MenuGroup title='About US'  _hover={{ bg: '#FFF5F5' }} ></MenuGroup>
                                <MenuGroup title='Hair From US'  _hover={{ bg: '#FFF5F5' }} ></MenuGroup>
                                <MenuGroup title='FAQ'  _hover={{ bg: '#FFF5F5' }} ></MenuGroup>
                            </MenuList>
                        </Menu>
                    </div>



                    </div>


                    <Link to="/">
                        <div className="logo">
                            <img src="https://www.masaischool.com/img/navbar/logo.svg" alt="" />
                        </div>

                    </Link>

                    {/* ------------------------------------------- */}


                    <div className="course">
                        <Menu>
                            <MenuButton variant='ghost' _hover={{ bg: '#FFF5F5', color: "#C53030" }} as={Button} rightIcon={<ChevronDownIcon />}>
                                COURSES
                            </MenuButton>
                            <MenuList>
                                <MenuGroup title='Full Time'>
                                    <MenuItem _hover={{ bg: '#FFF5F5' }}>
                                        <div>
                                            <div className="menulist">
                                                <div>
                                                    <a href="/">
                                                        <div>
                                                            <p>Full Stack Web Development</p>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div>
                                                    <ChevronRightIcon w={6} h={6} color="red.500" />
                                                </div>
                                            </div>
                                            <div>
                                                <p className="smalltext">"30 Weeks | 18 - 20 Yrs | Online"</p>
                                            </div>
                                        </div>
                                    </MenuItem>
                                </MenuGroup>
                                <MenuGroup title='Part Time'>
                                    <MenuItem _hover={{ bg: '#FFF5F5' }}>
                                        <div>
                                            <div className="menulist">
                                                <div>
                                                    <a href="/">
                                                        <div>
                                                            <p>Full Stack Android Development</p>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div>
                                                    <ChevronRightIcon w={6} h={6} color="red.500" />
                                                </div>
                                            </div>
                                            <div>
                                                <p className="smalltext">"30 Weeks | 18 - 20 Yrs | Online"</p>
                                            </div>
                                        </div>
                                    </MenuItem>
                                    <MenuItem _hover={{ bg: '#FFF5F5' }}>
                                        <div>
                                            <div className="menulist">
                                                <div>
                                                    <a href="/">
                                                        <div>
                                                            <p>Full Stack Web Development</p>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div>
                                                    <ChevronRightIcon w={6} h={6} color="red.500" />
                                                </div>
                                            </div>
                                            <div>
                                                <p className="smalltext">"30 Weeks | 18 - 20 Yrs | Online"</p>
                                            </div>
                                        </div>
                                    </MenuItem>
                                    <MenuItem _hover={{ bg: '#FFF5F5' }}  >
                                        < div >
                                            <div className="menulist">
                                                <div className="arro1">
                                                    <a href="/">
                                                        <div>
                                                            <p>Data Analytics</p>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="arro">
                                                    <ChevronRightIcon w={6} h={6} color="red.500" />
                                                </div>
                                            </div>
                                            <div>
                                                <p className="smalltext">"30 Weeks | 18 - 20 Yrs | Online"</p>
                                            </div>
                                        </div>
                                    </MenuItem>
                                </MenuGroup>
                            </MenuList>
                        </Menu>
                    </div>


                    {/* ---------------------------------------- */}

                    <div className="list">
                        <div>
                            <Button variant='ghost' _hover={{ bg: '#FFF5F5', color: "#C53030" }}>
                                FEES & ISA
                            </Button>
                        </div>
                        <div>
                            <Button variant='ghost' _hover={{ bg: '#FFF5F5', color: "#C53030" }}>
                                FEES & ISA
                            </Button>
                        </div>
                        <div>
                            <Button variant='ghost' _hover={{ bg: '#FFF5F5', color: "#C53030" }}>
                                ABOUT US
                            </Button>
                        </div>
                        <div>
                            <Button variant='ghost' _hover={{ bg: '#FFF5F5', color: "#C53030" }}>
                                HAIR FORM US
                            </Button>
                        </div>
                        <div>
                            <Button variant='ghost' _hover={{ bg: '#FFF5F5', color: "#C53030" }}>
                                FAQ
                            </Button>
                        </div>
                        <div>
                            <Button variant='ghost' _hover={{ bg: '#FFF5F5', color: "#C53030" }}>
                                EVENTS
                            </Button>
                        </div>
                    </div>

                    {/* ---------------------------- */}

                    <div className="btn">


                        <div className="Lbutton">
                            <Link to="/login">
                                <Button colorScheme='red' variant='solid'>
                                    APPLY NOW FOR FREE
                                </Button>
                            </Link>
                        </div>
                        <div>
                            <Link to="/login">
                                <Button colorScheme='red' variant='outline'>
                                    LOGIN
                                </Button>
                            </Link>
                        </div>

                    </div>

                </div>
            </div >
        </>
    )


};