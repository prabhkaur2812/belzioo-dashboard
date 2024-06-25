import React from 'react'
import { LuArrowDownUp } from 'react-icons/lu'
import { Link } from 'react-router-dom'

const Order = () => {
  return (
    <div className='container bg rounded mt-4 p-3'>
    <div className='text-box  ms-5 me-5 '>
      <h2>All Orders</h2>
      <hr className='' />
      <div className=' d-flex justify-content-between align-items-center'>
        < div className=' d-flex gap-2 align-items-center '>
          <h6>show</h6>
          <div className="dropdown ">
            <button className="btn border dropdown-toggle px-3" type="button" data-bs-toggle="dropdown" >
              10
            </button>
            <div className="dropdown-menu  dropdown-menu-lg-end">
              <Link className="dropdown-item" to={""}>9</Link>
              <Link className="dropdown-item" to={""}>8</Link>
              <Link className="dropdown-item" to={""}>7</Link>
              <Link className="dropdown-item" to={""}>6</Link>
              <Link className="dropdown-item" to={""}>5</Link>
              <Link className="dropdown-item" to={""}>4</Link>
              <Link className="dropdown-item" to={""}>3</Link>
              <Link className="dropdown-item" to={""}>2</Link>
              <Link className="dropdown-item" to={""}>1</Link>
            </div>
          </div>
          <h6>entries</h6>
        </div>
        <div className='d-flex gap-3 align-items-center'>
          <h6>Search</h6>
          <input type='search' className='searchbar border-1 rounded  px-2' />
        </div>
      </div>
      <table className="table  mt-3">
        <thead>
          <tr>
            <th scope="col "># <id><LuArrowDownUp /></id></th>
            <th scope="col"> Order Code  <id><LuArrowDownUp /></id> </th>
            <th scope="col"> Product Name</th>
            <th scope="col">Qty </th>
            <th scope="col">Price </th>
            <th scope="col">
              Delivery Status
              <id><LuArrowDownUp /></id> </th>
            <th scope="col">
              Order Status<id><LuArrowDownUp /></id></th>
            <th scope="col"> Payout
              <id><LuArrowDownUp /></id></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">01</th>
            <td>365jYQwb9803</td>
            <td>Covercoco 250gm Serum</td>
            <td>1</td>
            <td>450</td>
            <td><Link to ={""}><button className="text-white purple px-3 py-1 border-0">Pending</button></Link></td>
            <td><Link to ={""}><button className="text-white bg-primary  px-3 py-1 border-0">Active</button></Link></td>
            <td><Link to ={""}><button className='text-dark bg-success px-3 py-1 border-0'>active</button></Link></td>
          </tr>
          <tr className="bordertransparent">
            <td colSpan={4}>
              <h6 className=' d-flex justify-content-end me-3'>Total</h6></td>
            <td colSpan={5}>
              <h6>450</h6>
            </td>
          </tr>
        </tbody>
      </table>
      <div className=' d-flex justify-content-between'>
        <h6>Showing 1 to 1 entries</h6>
        <Link to={""}><button className='px-4 py-1 border'> Previous <id className="bg-dark px-1 text-light">1</id>  Next</button></Link>
      </div>
    </div>
  </div>
  )
}

export default Order
