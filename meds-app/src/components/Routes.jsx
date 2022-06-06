import { Route, Routes } from "react-router-dom"
import { FilterBrand } from "./filterBrand"
import { FilterTag } from "./filterTag"
import { Navbar } from "./Navbar"
import { ProductComponent } from "./products"




export const AllRoutes = () => {
    return (
        <>
          <Navbar/>
          {/* <Product/> */}
          
          <Routes>
              <Route exact to="/" element={<ProductComponent />}/>
          </Routes>
        </>
    )
}