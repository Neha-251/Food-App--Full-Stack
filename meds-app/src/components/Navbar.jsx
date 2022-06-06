import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";



export const Navbar = () => {

    const [price, setPrice] = useState(500);
    const navigate = useNavigate();

    const handlePriceChange = (e) => {
        const changedPrice = e.target.value;
        setPrice(changedPrice);
    }

    const handlePriceApply = () => {
       
        navigate(`filter/price/${price}`)
    }

   const handleChange = (e) => {
      let brand = e.target.value;
      navigate(`/filter/brand/${brand}`)
   }

   const handleTagChange = (e) => {
       let tag = e.target.value;
       navigate(`/filter/tag/${tag}`);
   }


    return (
        <nav className="navbar">
            <h2>Filter</h2>
            <div>
                <h3>Filter By Brand</h3>
                
                <input onChange={handleChange} type="checkbox" value="Savlon" /><label>Savlon</label> <br />
                <input onChange={handleChange} type="checkbox" value="Mahalaxmi Enterprises" /><label>Mahalaxmi Enterprises</label> <br />
                <input onChange={handleChange} type="checkbox" value="Status" /><label>Status</label> <br />
                <input onChange={handleChange} type="checkbox" value="Reliance" /><label>Reliance</label> <br />
               
            </div>
            <div>
                <h3>Filter By Category</h3>
                <input onChange={handleTagChange} type="checkbox" value="Covid - Essentials" /><label>Covid Essentials</label> <br />
                <input onChange={handleTagChange} type="checkbox" value="Savlon" /><label>Savlon</label> <br />
                <input onChange={handleTagChange} type="checkbox" value="Devices and Measurements" /><label>Devices and Measurements</label> <br />
                <input onChange={handleTagChange} type="checkbox" value="Fitness" /><label>Fitness</label> <br />
            </div>

            <div>
                <h3>Filter By Price</h3>
                <input type="range"
                    value={price}
                    onChange={handlePriceChange}
                    min="0"
                    max="2000"
                    step="10"
                />
                <p className="priceSort">{price}</p>
                <button onClick={handlePriceApply}>Apply</button>
            </div>


           <Link to="/">
           <button>Clear Filter</button>
           </Link>

        </nav>
    )
}