


import { Button } from '@chakra-ui/react'
import React from 'react'


import "./Footer.css"

const Footer = () => {
    return (
        <>


            <div className="footerbox">

                <div className="footerUpper">

                    <div className="FUL">

                        <p className='FULH'>Connect with a growing <br /> community of learners</p>

                        <img src="" alt="" />
                        

                        <Button colorScheme='white' bg="white" variant='solid'>
                             <p style={{color:"black"}}>JOIN OUR DISCORD</p>
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










            </div>






        </>
    )
}

export default Footer