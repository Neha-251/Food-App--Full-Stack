import { Route, Routes } from "react-router-dom";
import { Home } from "./home";

import { ProductComponent } from "./products";





export const AllRoutes = () => {
    return (
        <>
          
         <Routes>
           <Route path="/" element={<Home/>}></Route>
           <Route path="/product" element={<ProductComponent/>}></Route>
         </Routes>
         
        </>
    )
}