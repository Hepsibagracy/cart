import { useContext, useEffect, useState } from "react";
import axios from 'axios';
import { Cartcontext } from "./Context";



function Menu() {
    const [data, setData] = useState([])
    const Globalstate =useContext(Cartcontext)
    console.log(Globalstate)

    const fetchData = async () => {
        const response = await axios.get("https://fakestoreapi.com/products");
        setData(response.data);
        console.log(data);
    };
    useEffect(() => {
        fetchData();
    },)
    return (
        <>


            <h1>Menu</h1>
            <div className="home">
                {data.map((item, index) => {
                    return (
                        <div className="card" >
                            <img src={item.image} alt="" />
                            <p>{item.title}</p>
                            <h3>Rs.{item.price}</h3>
                            <button >
                                add to cart
                            </button>
                        </div>
                    );
                })}



            </div>

        </>
    )
}

export default Menu;