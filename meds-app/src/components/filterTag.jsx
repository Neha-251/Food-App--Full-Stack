import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";




export const FilterTag = () => {

    const [data, setData] = useState([]);
    const tag = useParams()


    const getData = () => {
        axios.get(`https://food-app-full-stack.herokuapp.com/meds/sort?tag=${tag}`).then(res => setData(res.data)).catch(err => console.log("err", err))
    }

    useEffect(() => {
        getData();
    }, [])



    return (
        <>
            <div className="mainContainer">
                {
                    data.map((el) => {
                        return (
                            <div key={el._id}>
                                <img src={el.img} alt={el.name} className="image" />
                                <p>{el.name}</p>
                                <p>{el.tag}</p>
                                <p>{el.brand}</p>
                                <div>
                                    <p>{el.price} Rs</p>
                                    <p style={{textDecoration: "line-through"}}>{el.stprice} Rs</p>
                                </div>
                            </div>
                        )
                    })
                }


            </div>

           
        </>
    )
}