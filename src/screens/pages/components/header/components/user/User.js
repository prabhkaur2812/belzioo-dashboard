import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import profile from "../../../../../../assets/Images/profile.png";
import { Button } from 'react-bootstrap';

const User = () => {
    const navigate = useNavigate()
    return (
        <div className="dropdown ">
            <button className="btn   dropdown-toggle border-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown">
                <img src={profile} />
            </button>
            <ul className="dropdown-menu  p-3" aria-labelledby="dropdownMenuButton1">
                <li>user1@gmail.com </li>
                <li className="dropdown-item text-center"> 
                <img src={profile} />
                </li>
                <li className="dropdown-item text-center fs-5 fw-semibold">Deep Sharma</li>
                <li ><Link className="dropdown-item fs-6 text-start" to="/Account">Edit Profile</Link></li>
                <hr></hr>
                <li className="dropdown-item fs-6 text-start">
                    <Button
                        className="dropdown-item  fw-bold text-danger"
                        onClick={() => {
                            localStorage.removeItem("auth_token")
                            navigate("/auth/Login")
                        }}>Logout</Button>
                </li>
            </ul>
        </div>
    )
}

export default User
