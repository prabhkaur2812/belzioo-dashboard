import { CiSearch } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { BiShoppingBag } from "react-icons/bi";
// import { FaUserCircle } from "react-icons/fa";
// import profile from "../../assets/Images/profile.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
// import LoginBtn from "./component/loginbtn/LoginBtn";
// import Login from "../../../../pages/screen/auth/components/login/Login";
import { Button } from "react-bootstrap";
import DefaultButton from "../../../components/DefaultButton/DefaultButton";
import User from "./components/user/User";

const Header = () => {
    const navigate = useNavigate()
    const [isLoggined, setIsLoggined] = useState(false);
    const handleLogginChange = () => {
        setIsLoggined(isLoggined);
    }
    return (
        <header className="py-4 d-flex gap-4 justify-content-between align-items-center">
            <div className="menu d-flex gap-4 bg-light">
                {/* <div className="dropdown">
                    <button className="btn btn-light m-2 dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
                        All Categories
                    </button>
                    <ul className="dropdown-menu zIndex" aria-labelledby="dropdownMenuButton">
                        <li><Link className="dropdown-item" to="/">Man-Collection</Link></li>
                        <li><Link className="dropdown-item" to="/home">Women-Collection</Link></li>
                        <li><Link className="dropdown-item" to="/">Kid-Collection</Link></li>
                    </ul>
                </div> */}
                <input className="from-control bg-light border-0 p-2" type="search" placeholder="Search" />
                <id className=" fs-5 me-3 pt-2 "><CiSearch /></id>
            </div>
            <div className="d-flex gap-4 align-items-center">
                {/* <Link to={"/"}><IoNotificationsOutline className="fs-4  text-dark" /></Link>
                <Link to={"/"}><FaRegHeart className="fs-4  ms-2 text-dark" /></Link> */}
                <div className=" d-flex">
                    <div className=" d-flex flex-column align-items-center">
                        <Link to={"/Cart-Bag"}><BiShoppingBag className="fs-4  ms-2 text-dark text-decoration-none" /></Link>
                        <span className="dot  rounded-circle bg-danger"></span>
                    </div>
                    <span className="pt-1">1</span>
                </div>
                <div className="profile" onClick={handleLogginChange}>
                    {localStorage.getItem("auth_token") ?
                        <DefaultButton
            
                            classNames={"bg-white border-0"}
                            type="button"
                        >   
                            <User />
                        </DefaultButton>
                        :
                        // <Link to={"/auth/Login"} className="btn bg-primary m-2 border text-light " type="button" >
                        //     Log in
                        // </Link>
                        <DefaultButton anchor onPress={"/auth/Login"}>
                            Login
                        </DefaultButton>
                    }
                </div>
            </div>
        </header>
    )
}
export default Header;