




import { Divider } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { Carousel } from 'react-responsive-carousel';



import "./Instructor.css"

export const Instructor = ({ Props }) => {


    const [data, setData] = useState([]);


    useEffect(() => {

        getData();

        return () => {

            console.log(data);
        }

    }, []);


    const getData = async () => {

        try {
            const data = await fetch(Props).then((d) => d.json());

            setData(data);
        }
        catch (err) {
            console.log(err);
        }

    };

    console.log("data", data);

    return <>

        <div className="InsContainer">


            {
                data.map((t) => (

                    <div className="card" >
                        <div>
                            <img className="Pimg" src={t.img} alt="" />
                        </div>

                        <div className="text">
                            <div>
                                <p className="name">{t.name}</p>
                                <div>
                                    <p className="position">{t.position}</p>

                                </div>
                                <Divider />
                            </div>

                            <div>
                                <img className="Cimg" src={t.company} alt="" />
                            </div>
                        </div>

                    </div>

                ))
            }



        </div>



        <div className="RESINScontainer">


            <Carousel autoPlay={true} infiniteLoop={true} width={"53%"} showStatus={false}  >

                {
                    data.map((t) => (

                        <div className="card" >
                            <div>
                                <img className="Pimg" src={t.img} alt="" />
                            </div>

                            <div className="text">
                                <div>
                                    <p className="name">{t.name}</p>
                                    <div>
                                        <p className="position">{t.position}</p>

                                    </div>
                                    <Divider />
                                </div>

                                <div>
                                    <img className="Cimg" style={{ width: "35%" }} src={t.company} alt="" />
                                </div>
                            </div>

                        </div>

                    ))
                }

            </Carousel>




        </div>


    </>



}