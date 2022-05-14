import { Button } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { Navbar } from "../Navbar/Navbar"
import Marquee from "react-fast-marquee";
import "./home.css"
import { Clogos } from "../Company/Clogos";

import { ChevronRightIcon, StarIcon, CheckIcon } from '@chakra-ui/icons'



export const Home = () => {

    return <>

        <Navbar />

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

                        <div><img style={{ "margin-left": "50px" }} src="https://www.masaischool.com/img/homepage/sunshine.png" alt="" /></div>
                        <div style={{ "margin-top": "-30px" }} >
                            <p> <span style={{ color: "yellow" }}>7000+ </span>  Students Currently</p>
                        </div>

                    </div>

                    <div>
                        <div> <p>Enrolled</p></div>
                    </div>
                    <div>
                        <div> <p> <span style={{ color: "yellow" }}>96% </span> Placement Rate</p></div>
                        <img style={{   "margin-left":"70px" , "margin-top":"-7px"  }} src="https://www.masaischool.com/img/homepage/underline.svg" alt="" />
                    </div>
                </div>

                <div className="ADboxLL">

                    <div className="ADboxLL1">
                        <div>
                            <StarIcon w={8} h={8} m={5} color="white" />
                        </div>

                        <div>
                            <p style={{ "font-weight": "bold", "font-size": "30px" }}>7.5 LPA <br /> Average <br /> Salary</p>
                        </div>

                    </div>

                    <div className="ADboxLL2">

                        <div>
                            <CheckIcon w={8} h={8} m={5} color="white" />
                        </div>

                        <div>
                            <p style={{ "font-weight": "bold", "font-size": "30px" }}>36 LPA <br /> Highest <br />  Salary</p>
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







    </>

}