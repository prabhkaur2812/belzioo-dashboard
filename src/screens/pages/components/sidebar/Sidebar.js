import { IoGrid } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { CiDeliveryTruck } from "react-icons/ci";
// import { BsShopWindow } from "react-icons/bs";
// import { IoBookOutline } from "react-icons/io5";
import { RiArrowDropRightLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { TbUserEdit } from "react-icons/tb";
import logo from "../../../../assets/Images/logo.png";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar d-flex flex-column  p-2">
      <div className="logo ms-3 py-4">
        <Link to={"/"} className=" cookie-regular">StepIntoStyle</Link>
       
      </div>
      <div className="d-flex flex-column gap-4 ">
        <h3 className="fs-3 fw-bolder ms-3 ">Explore</h3>
        <Link to={"/"} className="d-flex gap-2 ms-2  p-2 me-3 fs-5 fw-lighter text-white grad align-items-center text-decoration-none">
          <IoGrid className="ms-2 fs-5" />
          <h6 className=" pt-2 fw-light">Categories</h6>
        </Link>
      </div>
      <div className=" nav-menu d-flex flex-column h-screen ">
        <div className="topdiv">
          <ul className="nav flex-column gap-4 pt-3">
            <li className="nav-item">
              <Link to={"/best-Offers"} className="icon text-dark  ms-4 fs-5 group gap-2 align-items-center d-flex">
                <BiSolidOffer />
                <span className="group  fs-6  text-dark">Best Offer</span>
              </Link>
            </li>
            {/* <li className="nav-item  ">
              <Link to={"/sell-with-us"} className="icon text-dark  ms-4 fs-5 group gap-2 align-items-center d-flex">
                <BsShopWindow />
                 <span className="group  fs-6  text-dark">Sell with Us</span>
                 </Link>
            </li> */}
            <li className="nav-item   ">
              <Link to={"/track-order"} className="icon text-dark  ms-4 fs-4 group gap-2 align-items-center d-flex">
                <CiDeliveryTruck />
                <span className="group  fs-6  text-dark">Track order</span>
              </Link>

            </li>
            {/* <li className="nav-item  ">
              <Link to={"/Blogs"} className="icon text-dark  ms-4 fs-4 group gap-2 align-items-center d-flex">
                <IoBookOutline />
                 <span className="group  fs-6  text-dark">Blogs</span>
                 </Link>

            </li> */}
          </ul>
        </div>
        <div>
          <hr className="w-60 ms-4 me-3" />
          <ul className="nav">
            <li className="nav-item">
              <Link to={"/account"} className=" text-dark  ms-4 fs-5 group gap-2 align-items-center d-flex">
                <TbUserEdit />
                <span className="group fs-6 text-dark">Account</span>
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link to={"/Setting"} className="icon text-dark  ms-4 fs-5 group gap-2 align-items-center d-flex">
                <IoSettingsOutline />
                <span className="group  fs-6  text-dark">Settings</span></Link>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Sidebar;