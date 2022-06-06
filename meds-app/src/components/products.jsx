import axios from "axios";
import { useEffect, useState } from "react";




export const ProductComponent = () => {

    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);

    const getData = () => {
        axios.get(`https://food-app-full-stack.herokuapp.com/meds?page=${page}`).then(res => setData(res.data)).catch(err => console.log("err", err))
    }

    useEffect(() => {
        getData();
    }, [page])


    const handleNextPage = () => {
        setPage(prev => prev + 1)
    }

    const handlePrevPage = () => {
        setPage(prev => prev - 1)
    }
    console.log(data);

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

            <div className="pageDiv">
                <button className={page !== 1 ? "pageBtn" : "none"} onClick={handlePrevPage}>{page !== 1 ? "Prev" : ""}</button>
                <button className="pageBtn">{page}</button>
                <button className={page !== 7 ? "pageBtn" : "none"} onClick={handleNextPage}>{page !== 7 ? "Next" : ""}</button>
            </div>
        </>
    )
}