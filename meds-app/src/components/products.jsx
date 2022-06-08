import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";




export const ProductComponent = () => {

    const navigate = useNavigate();
    const [data, setData] = useState({});
    // const [pages, setPages] = useState(1);
    const [product, setProduct] = useState([]);
   // const [currPage, setCurrPage] = useState(0);

    const search = useLocation().search;
    const page = new URLSearchParams(search).get('page') || 1
    const pagesize = new URLSearchParams(search).get('pagesize') || 5
    const brand = new URLSearchParams(search).get('brand') || "all"
    const tag = new URLSearchParams(search).get('tag') || "all"
    const sort = new URLSearchParams(search).get('sort') || 1






    const getData = async () => {

        let res = await fetch(`https://food-app-full-stack.herokuapp.com/meds/?page=${page}&pagesize=${pagesize}&brand=${brand}&tag=${tag}&sort=${sort}`)

        // let res = await fetch(`http://localhost:3000/meds?page=${page}&pagesize=${pagesize}&brand=${brand}&tag=${tag}&sort=${sort}`)
        let res_data = await res.json();

         setData(res_data);
        setProduct(res_data.product)
       // setData(res_data.total_pages)
        console.log("res_data", res_data);
        

    }

     const [pages, setPages] = useState([]);

   

    useEffect(() => {
        getData();
       
        console.log("getData called");
    }, [page, brand, tag, sort])

   useEffect(()=> {
    
        let arr = [];

        for(let i = 1; i <= data.total_pages; i++) {
            arr.push(i);
        }
            
        setPages(arr);
   }, [data])


   console.log("pages", pages)
 
    console.log("data", data);

    console.log("product", product)

    // const handlePageChangePrev = () => {
    //     setCurrPage(prev => prev - 1)
    //     navigate(`/product?page=${currPage}&pagesize=${pagesize}&brand=${brand}&tag=${tag}&sort=${sort}`)
    // }
    // const handlePageChangeNext = () => {
    //     setCurrPage(prev => prev + 1)
    //     navigate(`/product?page=${currPage}&pagesize=${pagesize}&brand=${brand}&tag=${tag}&sort=${sort}`)
    // }

    return (
        <>

            <nav className="navbar">
                <h2>Filter</h2>
                <div>
                    <h3>Filter By Brand</h3>

                    <select onChange={(e) => { navigate(`/product?page=1&pagesize=5&brand=${e.target.value}&tag=${tag}&sort=${sort}`) }} >
                        <option value="Savlon">Savlon</option>
                        <option value="Mahalaxmi Enterprises" >Mahalaxmi Enterprises</option>
                        <option value="Status">Status</option>
                        <option value="Reliance">Reliance</option>
                    </select>

                </div>
                <div>
                    <h3>Filter By Category</h3>
                    <select onChange={(e) => { navigate(`/product?page=1&pagesize=5&brand=${brand}&tag=${e.target.value}&sort=${sort}`) }}>
                        <option value="Covid%-%Essentials">Covid Essentials</option>
                        <option value="Savlon">Savlon</option>
                        <option value="Devices%and%Measurements">Devices and Measurements</option>
                        <option value="Fitness">Fitness</option>
                    </select>
                </div>

                <div>
                    <h3>Filter By Price</h3>
                    <select name="sort by price" onChange={(e) => { navigate(`/product?page=1&pagesize=5&brand=${brand}&tag=${tag}&sort=${Number(e.target.value)}`) }}>
                        <option value="-1">High to Low</option>
                        <option value="1">Low to High</option>
                    </select>

                </div>


                <Link to="/product">
                    <button>Clear Filter</button>
                </Link>

            </nav>


            <div className="mainContainer">
                {


                    product.map((el) => {
                        return (
                            <div key={el._id}>
                                <img src={el.img} alt={el.name} className="image" />
                                <p>{el.name}</p>
                                <p>{el.tag}</p>
                                <p>{el.brand}</p>
                                <div>
                                    <p>{el.price} Rs</p>
                                    <p style={{ textDecoration: "line-through" }}>{el.stprice} Rs</p>
                                </div>
                            </div>
                        )
                    })
                }


            </div>

            {/* <div className="pageDiv">
                <button className={currPage !== 1 ? "pageBtn" : "none"} onClick={handlePageChangePrev}>{currPage !== 1 ? "Prev" : ""}</button>
                <button className="pageBtn">{currPage}</button>
                <button className={currPage !== pages ? "pageBtn" : "none"} onClick={handlePageChangeNext}>{currPage !== pages ? "Next" : ""}</button>
            </div> */}
            <div className="pageDiv">
                {pages.length !== 0 ? pages.map((e) => {

                    return Number(page) === e ? <button key={e} >{e}</button> : <button className="pageBtn" onClick={() => navigate(`/product?page=${e}&pagesize=${pagesize}&brand=${brand}&tag=${tag}&sort=${sort}`)} key={e} >{e}</button>
                }) : null}
            </div>
            
        </>
    )
}