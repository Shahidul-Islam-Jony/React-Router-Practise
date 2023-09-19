import axios from "axios";
import { useEffect, useState } from "react";

const Phones = () => {
    const [phones,setPhones] = useState([]);

    useEffect(()=>{
        axios.get('https://openapi.programming-hero.com/api/phones?search=a')
        .then(data=>setPhones(data.data.data))
    },[])
    return (
        <div>
            <h2 className="text-3xl font-bold">Phones : {phones.length}</h2>
        </div>
    );
};

export default Phones;