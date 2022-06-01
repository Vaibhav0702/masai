


import { Button, Divider } from '@chakra-ui/react'
import React from 'react'


import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

import GitHubIcon from '@material-ui/icons/GitHub';

import YouTubeIcon from '@material-ui/icons/YouTube';

import "./Footer.css"

const Footer = () => {
    return (
        <>


            <div className="footerbox">

                <div className="footerUpper">

                    <div className="FUL">

                        <p className='FULH'>Connect with a growing <br /> community of learners</p>

                        <img src="" alt="" />


                        <Button colorScheme='white' bg="white" variant='solid' className='discordbtn'>
                            <p style={{ color: "black" }}>JOIN OUR DISCORD</p>
                        </Button>
                    </div>

                    <div className="RUL">

                        <p className='RULH'>Have more <br />
                            questions?</p>

                        <Button colorScheme='red' variant='outline'>
                            CHECK OUR FAQS
                        </Button>


                    </div>




                </div>

                <div className="footerLower">

                    <div className="FLO">

                        <div className="FLOL">
                            <img src="https://www.masaischool.com/img/footer/masai-logo.svg" alt="" />
                        </div>

                        <div className="FLOR">

                            <div>
                                Follow Us -
                            </div>

                            <div className='icon'> 

                            {/* due to target and rel page will be open on another tab */}

                                <a href="https://twitter.com/masaischool"  target="_blank" rel="noopener noreferrer" > <TwitterIcon /></a>
                                
                                <a href="https://www.facebook.com/masaischool/"  target="_blank" rel="noopener noreferrer" >  <FacebookIcon /></a>

                                <a href="https://www.linkedin.com/company/masai-school/"  target="_blank" rel="noopener noreferrer" ><LinkedInIcon /></a>

                                <a href="https://www.instagram.com/masaischool/"  target="_blank" rel="noopener noreferrer" > <InstagramIcon /></a>

                                <a href="https://github.com/masai-school" target="_blank" rel="noopener noreferrer" >   < GitHubIcon /></a> 


                                <a href="https://www.youtube.com/channel/UCENOACKQiqejXP-bb9sCnMg?view_as=subscriber"  target="_blank" rel="noopener noreferrer" ><YouTubeIcon /></a> 
                            
                            
                            </div>

                        </div>


                    </div>

                    <Divider className='Done' />

                    <div className="FLT">

                        <div className='FLTO'>
                            <p>Masai Alumni</p>
                            <p>Our Investors</p>
                            <p>Newsroom</p>
                            <p>Blog</p>
                        </div>

                        <div className='FLTT'>
                            <p>
                                Hire From Us</p>
                            <p>
                                We Are Hiring</p>
                            <p>
                                Become an Industry Mentor</p>

                            <p>
                                Contact Us</p>
                        </div>

                        <div className='FLTTH'>
                            <p>
                                Contact Us</p>
                            <p>
                                Testimonials</p>
                            <p>
                                Referral Program</p>

                        </div>

                    </div>

                    <Divider />

                    <div className="FLTH">

                        <div>
                            <p>© 2022 by Masai School | A Nolan Edutech Pvt Ltd Venture</p>
                        </div>

                        <div>
                            <a href="/">Privacy Policy</a> & <a href="/">Terms and Conditions</a>
                        </div>

                    </div>



                </div>








            </div>






        </>
    )
}

export default Footer