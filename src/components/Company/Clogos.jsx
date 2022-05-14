

import { useEffect, useState } from "react";

import "./clogo.css"


export const Clogos = ({ Props }) => {


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


    return <>



        <div className="container">
            {
                data.map((t) => (<div className="clogo"> <img src={t.image} alt="" /> </div>))
            }
        </div>



    </>



}