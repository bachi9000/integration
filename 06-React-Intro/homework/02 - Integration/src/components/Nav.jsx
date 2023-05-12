import SearchBar from "../components/SearchBar";
import { Link } from "react-router-dom";

const Nav = ({onSearch}) => {
    return (
        <div >
            <SearchBar onSearch={(onSearch)}/>
            <Link to="/home" >
            <button>HOME</button> 
            </Link>

            <Link to="/about">
            <button>ABOUT</button>
            </Link>
            <Link to='/Favorite'>
                <button>Favorite</button>

            </Link>
        </div>
    )
};

export default Nav;
