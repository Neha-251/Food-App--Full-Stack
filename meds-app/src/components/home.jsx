import { Link } from "react-router-dom";



export const Home = () => {
    return (
        <div>
            <Link to="/product" >
               <button>Go to Product Page</button>
            </Link>
        </div>
    )
}