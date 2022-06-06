import { useState } from "react"




export const Navbar = () => {

    const [price, setPrice] = useState(500);

    const handlePriceChange = (e) => {
        const changedPrice = e.target.value;
        setPrice(changedPrice);
    }



    return (
        <nav className="navbar">
            <h2>Filter</h2>
            <div>
                <h3>Filter By Brand</h3>
                <input type="checkbox" value="Savlon" /><label>Savlon</label> <br />
                <input type="checkbox" value="Savlon" /><label>Savlon</label> <br />
                <input type="checkbox" value="Savlon" /><label>Savlon</label> <br />
                <input type="checkbox" value="Savlon" /><label>Savlon</label> <br />
            </div>
            <div>
                <h3>Filter By Category</h3>
                <input type="checkbox" value="Savlon" /><label>Covid Essentials</label> <br />
                <input type="checkbox" value="Savlon" /><label>Savlon</label> <br />
                <input type="checkbox" value="Savlon" /><label>Savlon</label> <br />
                <input type="checkbox" value="Savlon" /><label>Savlon</label> <br />
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
                <p className="price_sort">{price}</p>
            </div>


            <button>Apply</button>

        </nav>
    )
}