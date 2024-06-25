import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container-xxl bd-gutter flex-wrap flex-lg-nowrap p-3 ">
      <div className='d-flex justify-content-between ms-5 me-4'>
        <div className='menu d-flex gap-5 '>
          <Link to={""} className="text-decoration-none text-dark blue">MAN</Link>
          <Link to={""} className="text-decoration-none  text-dark blue">WOMEN</Link>
          <Link to={""} className="text-decoration-none  text-dark blue">KID</Link>
          <Link to={""} className="text-decoration-none text-dark blue">NEW ARRIVALS</Link>
          <Link to={""} className="text-decoration-none text-dark blue">TOP BRANDS</Link>
          <Link to={""} className="text-decoration-none text-dark blue">PERSONAL CARE</Link>
        </div>
        <div className='button d-flex gap-5'>
          <Link to={""}><button className='border-0 py-1 px-2 pink text-light'> PRODUCTS</button></Link>
          <Link to={""}><button className=' bg-primary border-0 py-1 px-2  text-light'>OFFERS</button></Link>
          <Link to={""}><button className='border-0  py-1 px-2 orange text-light'>VIDEOS</button></Link>
        </div>
      </div>
    </div>
    )
}
export default Navbar;

// const Navbar = () => {
//   return (
//     <nav class="navbar navbar-expand-lg navbar-light bg-light">
//       <a class="navbar-brand" href="#">Navbar</a>
//       <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//         <span class="navbar-toggler-icon"></span>
//       </button>

//       <div class="collapse navbar-collapse" id="navbarSupportedContent">
//         <ul class="navbar-nav mr-auto">
//           <li class="nav-item active">
//             <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
//           </li>
//           <li class="nav-item">
//             <a class="nav-link" href="#">Link</a>
//           </li>
//           <li class="nav-item dropdown">
//             <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//               Dropdown
//             </a>
//             <div class="dropdown-menu" aria-labelledby="navbarDropdown">
//               <a class="dropdown-item" href="#">Action</a>
//               <a class="dropdown-item" href="#">Another action</a>
//               <div class="dropdown-divider"></div>
//               <a class="dropdown-item" href="#">Something else here</a>
//             </div>
//           </li>
//           <li class="nav-item">
//             <a class="nav-link disabled" href="#">Disabled</a>
//           </li>
//         </ul>
//         <form class="form-inline my-2 my-lg-0">
//           <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
//           <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//         </form>
//       </div>
//     </nav>
//   )
// }
// export default Navbar;
