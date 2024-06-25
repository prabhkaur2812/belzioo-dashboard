import React from 'react'
import { Link } from 'react-router-dom'
import profile from "../../../../assets/Images/profile.png"
import { FaRegUser } from "react-icons/fa";
import { FcCancel } from "react-icons/fc";
import { CiStar } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
import { LuFileKey } from "react-icons/lu";
import { FaShoppingBag } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";


const Account = () => {
  return (
    <div className=' container'>
      <div className='row'>
        <div>
          <h3>Profile</h3>
        </div>
        <div className='col col-md-3 '>
          <div className='d-flex bg-light  rounded p-3'>
            <img src={profile} className='w-25 h-25' />
            <div className='d-flex flex-column justify-content-center'>
              <>
                <h6 className='ms-4'>Hello</h6>
              </>
              <>
                <h5 className=' ms-4'>Deep Sharma</h5>
              </>
            </div>
          </div>
          <div className=' d-flex flex-column gap-4 mt-4 bg-light p-3 rounded  '>
            <Link to={""} className=' gap-2 d-flex align-item-center border-bottom  py-2 text-decoration-none text-dark   '>
              <FaRegUser className='fs-5' />
              <h6>My Accounts</h6>
            </Link>

            <Link to={"/order"} className=' gap-2 d-flex align-item-center  text-decoration-none text-dark  '>
              <FaShoppingBag className='fs-5' />
              <h6>My Orders</h6>
            </Link>
            {/* <Link to={""} className=' gap-2 d-flex align-item-center border-bottom text-decoration-none text-dark '>
              < FcCancel className='fs-5' />
              <h6>Returns & Cancel</h6>
            </Link>
            <Link to={""} className=' gap-2 d-flex align-item-center border-bottom text-decoration-none text-dark'>
              <CiStar className='fs-5' />
              <h6>My Rating & Reviews</h6>
            </Link>
            <Link to={""} className=' gap-2 d-flex align-item-center border-bottom text-decoration-none text-dark '>
              <IoIosHeartEmpty className='fs-5' />
              <h6>My Wishlist</h6>
            </Link>
            <Link to={""} className=' gap-2 d-flex align-item-center text-decoration-none text-dark  '>
              <LuFileKey className='fs-5' />
              <h6>Change Password</h6>
            </Link> */}
          </div>
        </div>
        <div className='col bg-light p-3 rounded '>
          <h5>Personal Information</h5>
          <hr></hr>
          <div className='d-flex  justify-content-between '>
            <img src={profile} className='' />
            <Link to={""}
              className='d-flex gap-2 text-decoration-none '>
              <FaRegEdit className='fs-5' />
              <h6> Change Profile Information</h6>
            </Link>
          </div>
          <div className='pt-3'>
            <h6>Name</h6>
            <input type='Name' placeholder='name' className='rounded' />
          </div>
          <div className='pt-3'>
            <h6>Email</h6>
            <input type='' placeholder='Email' className='rounded' />
          </div>
          {/* <div className='pt-3'>
            <h6>Gender</h6>
            <div className=' d-flex gap-5'>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Female
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  defaultChecked=""
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Male
                </label>
              </div>
            </div>
          </div>
          <div className='pt-3'>
            <h6>Phone Number</h6>
            <input type='Contact' placeholder='+91  ' className='rounded' />
          </div> */}
          <button className=' btn bg-danger border-0 p-2 fs-5 fw-semibold  d-flex justify-content-center mt-4 rounded text-light'>Save Changes</button>
        </div>
      </div>

    </div>
  )
}

export default Account;
