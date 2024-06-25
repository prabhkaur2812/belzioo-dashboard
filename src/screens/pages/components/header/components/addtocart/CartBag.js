import React from 'react'
// import { IoIosNotificationsOutline } from "react-icons/io";
// import { CiHeart } from "react-icons/ci";
import { FaComment } from "react-icons/fa";
// import { IoGrid } from "react-icons/io5";
// import { FaRegUser } from "react-icons/fa6";
// import { MdShoppingCart } from "react-icons/md";
// import { IoIosNotifications } from "react-icons/io";
// import { FaHeart } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa";
import { FaCaretLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { MdOutlineDelete } from "react-icons/md";
import cart1 from "../../../../../../assets/Images/cart1.jpeg"
import cart2 from "../../../../../../assets/Images/cart2.jpeg"
import cart3 from "../../../../../../assets/Images/cart3.jpeg"

const CartBag = () => {
  return (
    <div className=' container '>
      {/* <div className=' row d-flex justify-content-between align-items-center border-bottom border-secondary'>
        <div className=' col'>
          <input className="from-control  rounded input-width " type="search" placeholder="  Search" />

        </div>
        <div className=' col'>
          <h1>shoes</h1>
        </div>
        <div className=' col col-md-3 d-flex justify-content-between'>
          <IoIosNotifications className=' fs-5' />
          <FaHeart className=' fs-5' />
          <FaComment className=' fs-5' />
          <span>|</span>
          <IoGrid className=' fs-5' />
          <FaRegUser className='fs-5' />
          <MdShoppingCart className=' fs-5' />
        </div>
      </div> */}
      <div >
        <h2 className=' fw-semibold py-3'>Cart</h2>
      </div>
      <div className=' row py-4'>
        <div className=' d-flex mb-3  p-1 align-items-center gap-2'>
          <button className=' border rounded'>1</button>
          <h6 className='bg-light'>Review product's set</h6>
        </div>
        <div className='col col-8'>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <div className='d-flex  justify-content-between align-items-center w-100'>
                    <div className='d-flex align-items-center gap-3'>
                      <FaRegCircle />
                      <div>
                        <button className='bg-primary border-0 rounded'>
                          <span> <FaCaretRight className=' text-light fs-5' /></span>
                          <span><FaCaretLeft className=' text-light fs-5' /></span>
                        </button>
                      </div>
                      <h6 className='text-danger'>Sheila-Kathryn Nicholoas </h6>
                    </div>
                    <div className='d-flex gap-2'>
                      <FaComment className=' fs-5 text-danger' />
                      <h6 className=' me-3 text-danger'>Message Seller</h6>
                    </div>
                  </div>
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div className='d-flex justify-content-between'>
                    <div>
                      <img src={cart1} className='cart' />
                    </div>
                    <h6 className='text-decoration-underline'>Multifunction 8 In 1 Tool Mini Aluminum Protected+....</h6>
                    <nav aria-label="Page navigation example">
                      <ul className="pagination">
                        <li className="page-item">
                          <Link className="page-link" >
                            -
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link className="page-link" >
                            2
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link className="page-link" href="#">
                            +
                          </Link>
                        </li>
                      </ul>
                    </nav>
                    <div className='border h-25 px-4 py-1 rounded px-3'>
                      $119.00
                    </div>
                    <h6>$238.00</h6>
                    <MdOutlineDelete className='fs-5' />
                  </div>


                  <div className="d-flex justify-content-between">
                    <div> <img src={cart2} className='cart' /></div>
                    <div>
                      <h6 className='text-decoration-underline'>Wall mount Smart WiFi Inverter split air conditioner</h6>
                      <div className=' d-flex gap-4 '>
                        <span className='border rounded px-2'>SMALL</span>
                        <span className=' border rounded px-2'>WHITE</span>
                      </div>
                    </div>
                    <nav aria-label="Page navigation example">
                      <ul className="pagination">
                        <li className="page-item">
                          <Link className="page-link" >
                            -
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link className="page-link" >
                            2
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link className="page-link" >
                            +
                          </Link>
                        </li>
                      </ul>
                    </nav>
                    <div className='border h-25 px-4 py-1 rounded px-3'>
                      $14.45
                    </div>
                    <h6>$28.90</h6>
                    <MdOutlineDelete className='fs-5' />
                  </div>
                  <div className="d-flex justify-content-between">

                    <img src={cart3} className='cart' />

                    <h6 className='text-decoration-underline'>High purity natural gold mica substrate pearl pigme....</h6>
                    <nav aria-label="Page navigation example">
                      <ul className="pagination">
                        <li className="page-item">
                          <Link className="page-link" >
                            -
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link className="page-link" >
                            2
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link className="page-link">
                            +
                          </Link>
                        </li>
                      </ul>
                    </nav>
                    <div className='border h-25 px-4 py-1 rounded px-3'>
                      $49.99
                    </div>
                    <h6>$99.98</h6>
                    <MdOutlineDelete className='fs-5' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col col-4 bg-light '>
          <h4 className='py-3'>Selected offer summary</h4>
          <div className=' d-flex flex-column gap-3' >
            <div className='d-flex justify-content-between' >
              <h6 className=' text-secondary'>Proposed total</h6>
              <h5 className='fw-semibold'>$366.88</h5>
            </div>
            <div className='d-flex justify-content-between'>
              <h6 className=' text-secondary'>Operation Fee (6%)</h6>
              <h5 className='fw-semibold'>$22.01</h5>
            </div>
            <hr className=''></hr>
            <div className='d-flex justify-content-between' >
              <h6 className=' text-secondary'>TOTAL</h6>
              <h5 className='fw-semibold'>$388.89</h5>
            </div>
            <div className='d-flex justify-content-end pt-3 '>
            <button className=' btn   bg-primary px-3 py-2 border-0 text-light w-25 fw-semibold fs-5 '>Pay</button>
          </div>
          </div>

        </div>
      </div>
    </div>

  )
}

export default CartBag;


