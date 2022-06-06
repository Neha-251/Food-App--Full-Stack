import { Route, Routes } from "react-router-dom";
import { FilterBrand } from "./filterBrand";
import { FilterTag } from "./filterTag";
import { Navbar } from "./Navbar";
import { ProductComponent } from "./products";
import { FilterPrice } from "./FilterPrice";





export const AllRoutes = () => {
    return (
        <>
          <Navbar/>
         
          {/* <ProductComponent /> */}

          <Routes>
              <Route to="/" element={<ProductComponent />}></Route>
              <Route to="/filter/tag/:tag" element={<FilterTag />}> </Route>
              <Route to="/filter/brand/:brand" element={<FilterBrand />}></Route>
              <Route to="/filter/price/:price" element={<FilterPrice />}></Route>

          </Routes>
        </>
    )
}