// import React from "react"
// import { Link } from "react-router-dom"

// export default function Card(props) {
//     const products = props.data.categories[0].products
//     console.log(props)
//     return (
//         <div>
//             {products.map(item=>(
//                 <div className=" d-flex flex-row">
//              <div className="card border w-25 my-3 d-flex flex-column">
//                 <Link href="/Single-Item"></Link>
//                 <img src={item.image} className="w-100  p-1  rounded height d-flex flex-column"></img>
//                 <div className="w-100 p-1">
//                     <h5 className="fw-semibold pt-2 ">{item.name}</h5>
//                     < h6 className="fw-semibold ">{item.brand}</h6>
//                     <h6 className="fw-semibold ">{item.price}</h6>
//                     <h6 className="fw-semibold ">{item.color}</h6>
//                 </div>
//             </div>
//           </div> ))}
//         </div>
//     )
// }


import React from "react";
import { Link } from "react-router-dom";

export default function Card(props) {
    const products = [...props.data.categories[0].products, ...props.data.categories[1].products, props.data.categories[2].products];

    return (
        <div className="d-flex flex-wrap">
            {products.map(item => (
                <div key={item.id} className="card border m-3">
                    <Link to="/single-Item" state={item}>
                        <img src={item.image} className="w-100 p-1 rounded height" alt={item.name} />
                    </Link>
                    <div className="w-100 p-1">
                        <h5 className="fw-semibold pt-2">{item.name}</h5>
                        <h6 className="fw-semibold">{item.brand}</h6>
                        <h6 className="fw-semibold">{item.price}</h6>
                        <h6 className="fw-semibold">{item.color}</h6>
                    </div>
                </div>
            ))}
        </div>
    );
}


