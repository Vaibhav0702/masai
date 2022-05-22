import { Button } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { Navbar } from "../Navbar/Navbar"
import Marquee from "react-fast-marquee";
import "./home.css"
import { Clogos } from "../Company/Clogos";

import { ChevronRightIcon, StarIcon, CheckIcon, TimeIcon } from '@chakra-ui/icons';


import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

import SchoolIcon from '@mui/icons-material/School';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { Carousel } from 'react-responsive-carousel';


export const Home = () => {

    return <>

        {/* <Navbar /> */}

        <div className="box">
            <div>
                <p className="heading">Driven by Outcomes,<br /> Fuelled by Ambitions.</p>
            </div>
            <div>
                <p className="p1">Launch your dream career</p>
                <p className="p2">at 0 upfront fees.</p>
                <img className="line" src="https://www.masaischool.com/img/homepage/scribble.png" alt="" />
            </div>
            <div>
                <Link to="/login">
                    <Button colorScheme='red' variant='solid'>
                        APPLY NOW FOR FREE
                    </Button>
                </Link>
            </div>
        </div>

        {/* -------------------- */}

        <div className="tv">
            <Marquee gradientWidth pauseOnHover >
                <div> <img src="https://masai-website-images.s3.ap-south-1.amazonaws.com/stud_image_desktop_upload_793ed2b430.png" alt="" /></div>
                <div> <img src="https://masai-website-images.s3.ap-south-1.amazonaws.com/stud_image_desktop_upload_793ed2b430.png" alt="" /></div>
            </Marquee>
        </div>

        {/* --------------------- */}

        <div className="hair">

            <div>
                <p className="hairp1">Have a Dream Company In Mind?</p>
            </div>
            <div>
                <p className="hairp2">Meet Some Of Our 700+ Hiring Partners</p>
            </div>
            <div>

                <div className="div1">
                    <Marquee gradientWidth pauseOnHover style >
                        <Clogos Props={`http://localhost:8080/company1`} />
                    </Marquee>
                </div>

                <div className="div2">
                    <Marquee gradientWidth pauseOnHover >
                        <Clogos Props={`http://localhost:8080/company2`} />
                    </Marquee>
                </div>

            </div>

        </div>


        {/* ------------------------------- */}

        <div className="infodabba">
            <div>
                <div>
                    <p className="hairp2" >Thousands Trust Masai To</p>
                </div>
                <div>
                    <p className="hairp2" >Launch Their Career</p>
                </div>
            </div>

            <div id="topper" >

                <Carousel autoPlay={true} infiniteLoop={true} width={"50%"} showStatus={false}   >

                    <div className="info">

                        <div><img src="https://masai-website-images.s3.ap-south-1.amazonaws.com/Aayushi_527cd1c2a3.jpg" alt="" /></div>

                        <div className="infoboxA">
                            <div className="infobox1">


                                <div>
                                    <p className="para">
                                        I got placed within 2 days after graduation! I’m happy I am part of the Masai family, not because they helped me but because of their mission to help other lost...
                                    </p>
                                </div>
                            </div>

                            <div className="infobox2">
                                <p> Aayushi Shah</p>
                                <img src="https://masai-website-images.s3.ap-south-1.amazonaws.com/sharechat_rect_73d95cd4e1.svg" alt="" />
                            </div>




                        </div>

                    </div>

                    <div className="info">

                        <div><img src="https://masai-website-images.s3.ap-south-1.amazonaws.com/Kritika_Tripathi_716c47cbbd.jpg" alt="" /></div>

                        <div className="infoboxB">
                            <div className="infobox1">



                                <div>
                                    <p className="para">
                                        Masai brought discipline to my life, helped me develop a coder’s mindset and increase my concentration as well as time management skills. It took me...
                                    </p>
                                </div>

                            </div>
                            <div className="infobox2">
                                <p> Kritika Tripathi</p>
                                <img src="https://masai-website-images.s3.ap-south-1.amazonaws.com/instamojo_8763e704f7.png" alt="" />
                            </div>
                        </div>

                    </div>

                    <div className="info">

                        <div><img src="https://masai-website-images.s3.ap-south-1.amazonaws.com/Lokesh_Nimje_90cfa775e3.jpg" alt="" /></div>

                        <div className="infoboxC">
                            <div>
                                <div className="infobox1">

                                    <div>
                                        <p className="para">
                                            Projects are a part of journey at Masai. It gives the opportunity to work in a team, which gives a real experience of the corporate world. This helps students to....
                                        </p>
                                    </div>

                                </div>

                                <div className="infobox2">
                                    <p> Lokesh Nimje</p>
                                    <img src="https://masai-website-images.s3.ap-south-1.amazonaws.com/MPL_7713ca3d5b.svg" alt="" />
                                </div>

                            </div>
                        </div>


                    </div>

                    <div className="info">

                        <div><img src="https://masai-website-images.s3.ap-south-1.amazonaws.com/Lalitha_9c1e4f1cab.jpg" alt="" /></div>

                        <div className="infoboxD">

                            <div>
                                <div className="infobox1">


                                    <div>
                                        <p className="para">
                                            I left a job at Infosys to learn coding. Masai helped me get 3X more salary in a product-based company.
                                        </p>
                                    </div>


                                </div>
                                <div className="infobox2">
                                    <p>Lalitha Perumalla</p>
                                    <img src="https://masai-website-images.s3.ap-south-1.amazonaws.com/Ajio_2ba59d62cb.svg" alt="" />
                                </div>
                            </div>

                        </div>

                    </div>


                </Carousel>




            </div>

            <div className="storybtn">
                <Button colorScheme='red' variant='solid' >
                    <div className="story"> <p>More Stories</p> <div> <ChevronRightIcon w={6} h={6} color="white" /></div></div>
                </Button>
            </div>


        </div>


        {/* --------------------------------------- */}

        <div className="ADbox">

            <div className="ADboxL">

                <div className="ADboxLU">
                    <div >

                        <div><img className="spark" src="https://www.masaischool.com/img/homepage/sunshine.png" alt="" /></div>
                        <div style={{ "marginTop": "-30px" }} >
                            <p> <span style={{ color: "yellow" }}>7000+ </span>  Students Currently</p>
                        </div>

                    </div>

                    <div>
                        <div> <p>Enrolled</p></div>
                    </div>
                    <div>
                        <div> <p> <span style={{ color: "yellow" }}>96% </span> Placement Rate</p></div>
                        <img style={{ "marginLeft": "70px", "marginTop": "-7px" }} src="https://www.masaischool.com/img/homepage/underline.svg" alt="" />
                    </div>
                </div>

                <div className="ADboxLL">

                    <div className="ADboxLL1">
                        <div>
                            <StarIcon w={8} h={8} m={5} color="white" />
                        </div>

                        <div>
                            <p style={{ "fontWeight": "bold", "fontSize": "30px" }}>7.5 LPA <br /> Average <br /> Salary</p>
                        </div>

                    </div>

                    <div className="ADboxLL2">

                        <div>
                            <CheckIcon w={8} h={8} m={5} color="white" />
                        </div>

                        <div>
                            <p style={{ "fontWeight": "bold", "fontSize": "30px" }}>36 LPA <br /> Highest <br />  Salary</p>
                        </div>
                    </div>

                </div>


            </div>


            <div className="ADboxR">

                <div>
                    <img src="https://www.masaischool.com/img/homepage/media.png" alt="" />
                </div>

                <div>

                    <p>Masai In The News</p>

                    <Button colorScheme='white' variant='outline' >
                        <div > <p>KNOW MORE</p> </div>
                    </Button>

                </div>

            </div>

        </div>


        {/* ------------------------------------------ */}


        <div className="readyBox">
            <div>
                <div>
                    <p className="hairp2" >Ready To Realise Your</p>
                </div>
                <div>
                    <p className="hairp2" >Career Potential?</p>
                </div>
            </div>


            <div className="readyBox1">

                <div className="readyBoxO">
                    <div className="readyBoxI" >
                        <p>1</p>
                    </div>
                    <div>
                        <p>
                            Apply For The <br /> Program
                        </p>
                    </div>
                </div>

                <div className="readyBoxO">
                    <div className="readyBoxI" >
                        <p>2</p>
                    </div>
                    <div>
                        <p>
                            Crack The <br /> Admission Test
                        </p>
                    </div>
                </div>

                <div className="readyBoxO">
                    <div className="readyBoxI" >
                        <p>3</p>
                    </div>
                    <div>
                        <p>
                            Learn At 0 <br /> Upfront Fee
                        </p>
                    </div>
                </div>

                <div className="readyBoxO">
                    <div className="readyBoxI" >
                        <p>4</p>
                    </div>
                    <div>
                        <p>
                            Get Placed
                        </p>
                    </div>
                </div>


                <div className="readyBoxO">
                    <div className="readyBoxI" >
                        <p>5</p>
                    </div>
                    <div>
                        <p>
                            Pay When You <br /> Earn 5 LPA
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* -------------------------------------------------- */}

        <div className="Dbox">

            <div>
                <div>
                    <p className="hairp2" >Three Fields</p>
                </div>
                <div>
                    <p className="hairp2" >High Growth Career Options</p>
                </div>
            </div>


            <div className="Dbox1">

                <div className="DboxA" >

                    <div className="DboxA1" >

                        <p className="DboxAp">

                        </p>
                        <div className="DboxAS">
                            <p>  Software Development</p>
                        </div>

                    </div>

                    <div className="DboxA2" >
                        <p>
                            Start your coding career and become an industry-ready Full Stack Web Developer in India's ever-growing technology job market.
                        </p>
                    </div>


                    <div className="DboxA3">

                        <div className="DboxA31">
                            <div>
                                <CurrencyRupeeIcon style={{ color: "gray" }} />
                            </div>
                            <div>
                                <p>Pay Only After You Earn 5LPA</p>
                                <img style={{ marginTop: "-14px" }} src="https://www.masaischool.com/img/homepage/scribble.png" alt="" />
                            </div>
                        </div>


                        <div className="DboxA32">
                            <div>
                                <TimeIcon color="gray" />
                            </div>
                            <div>
                                <p>Full Time | Part Time</p>
                            </div>
                        </div>

                        <div className="DboxA33">
                            <div>
                                <SchoolIcon style={{ color: "gray" }} />
                            </div>
                            <div>
                                <p>4 Programs</p>
                            </div>
                        </div>

                    </div>


                    <div className="DboxA4">

                        <div>
                            <div>
                                <p>
                                    VIEW DETAILS
                                </p>
                            </div>
                            <div> <ChevronRightIcon w={6} h={6} color="red.500" /></div>
                        </div>

                    </div>


                </div>


                <div className="DboxA" >

                    <div className="DboxB1" >

                        <p className="DboxBp">

                        </p>
                        <div className="DboxBS">
                            <p>  Data Analytics </p>
                        </div>

                    </div>

                    <div className="DboxA2" >
                        <p>
                            Break into the fast-growing field of Data Analytics and launch yourself into a variety of roles like Business Intelligence Analyst, Data Analyst & Data Scientist among others.
                        </p>
                    </div>

                    <div className="DboxB3" style={{ marginBottom: "30px" }}>

                        <div className="DboxA31">
                            <div>
                                <CurrencyRupeeIcon style={{ color: "gray" }} />
                            </div>
                            <div>
                                <p>Pay Only After You Earn 5LPA</p>
                                <img style={{ marginTop: "-14px" }} src="https://www.masaischool.com/img/homepage/scribble.png" alt="" />
                            </div>
                        </div>


                        <div className="DboxA32">
                            <div>
                                <TimeIcon color="gray" />
                            </div>
                            <div>
                                <p>Part Time</p>
                            </div>
                        </div>

                        <div className="DboxA33">
                            <div>
                                <SchoolIcon style={{ color: "gray" }} />
                            </div>
                            <div>
                                <p>1 Program</p>
                            </div>
                        </div>

                    </div>


                    <div className="DboxA4">

                        <div>
                            <div>
                                <p>
                                    VIEW DETAILS
                                </p>
                            </div>
                            <div> <ChevronRightIcon w={6} h={6} color="red.500" /></div>
                        </div>

                    </div>


                </div>


                <div className="DboxC" >

                    <div className="DboxC1" >

                        <p className="DboxCp">

                        </p>
                        <div className="DboxCS">
                            <p>Design</p>
                        </div>

                    </div>

                    <div className="DboxA2" >
                        <p>
                            Become the catalyst that bridges the interaction between humans and computers by landing job roles in UI Design, UX Design, Product Design among many others.
                        </p>
                    </div>

                    <div className="DboxC4">

                        <div>
                            <div>
                                <p>
                                    COMMING SOON
                                </p>
                            </div>
                        </div>

                    </div>


                </div>


            </div>


        </div>




    </>

}