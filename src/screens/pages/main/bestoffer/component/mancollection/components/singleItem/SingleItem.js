import React from 'react'
import { FaStar } from "react-icons/fa";
import img123 from "../../../../../../../../assets/Images/img123.png";
import { IoMdHeartEmpty } from "react-icons/io";
import { useLocation } from 'react-router-dom';

export default function SingleItem() {
    const product = useLocation().state
    console.log(product);
    return (
        <div className=' container'>
            <div className='row d-flex  '>
                <div className='col'>
                    <img src={product.image} className=' w-100 h-100 rounded border' alt='img123' />
                </div>
                <div className='col d-flex  flex-column gap-2'>
                    <div className='d-flex justify-content-between'>
                        <h3>{product.name}</h3>
                        <button className='border-0  rounded-pill p-2'> <IoMdHeartEmpty /> Add to Wishlist</button>
                    </div>
                    <>
                        <h5>{product.offer_description}</h5>
                    </>
                    <div className='d-flex text-center align-items-center gap-2'>
                        <h6 className='mb-0'>{product.rating} </h6>
                        <FaStar />
                        |<h6 className='mb-0'> {product.reviews}k Ratings</h6>
                    </div>

                    <hr></hr>
                    <div className='d-flex gap-3'>
                        <h4>Rs. {product.offer_price} </h4>
                        <span className='fw-nomal fs-5'>MRP</span>
                        <h4 className='fw-lighter text-decoration-line-through'>Rs. {product.price} </h4>
                        <h4 className='text-danger '>(80% OFF )</h4>
                    </div>
                    <div>
                    <h6 className='text-success'> inclusive of all taxes</h6>
                    </div>
                    <div>
                    <h6> Colors: </h6>
                    </div>
                    <div className=' d-flex gap-4 '>
                        <button className='p-3 bg-secondary border-0 rounded-circle width '></button>
                        <button className='p-3 bg-primary border-0 rounded-circle width '></button>
                        <button className='p-3 bg-danger border-0 rounded-circle width '></button>
                    </div>
                    <div>
                        <h6>Size:</h6>
                        <div className=' d-flex gap-3'>
                            <button className=' border'>5UK</button>
                            <button className=' border'>6UK</button>
                            <button className=' border'>7UK</button>
                            <button className=' border'>8UK</button>
                            <button className=' border '>9UK</button>
                        </div>
                    </div>
                    {/* <div className='pt-4' >
                        <h5>Product Detail:</h5>
                        <table className="table ">
                            <tr>
                                <th scope="col">Material type</th>
                                <td>Polyuret hane</td>
                            </tr>
                            <tr>
                                <th scope="col">Closure type</th>
                                <td>Lace-Up</td>
                            </tr>
                            <tr>
                                <th scope="col">Heel type</th>
                                <td>Flat</td>
                            </tr>
                            <tr>
                                <th scope="col">Water resistance level</th>
                                <td>Not water resistance</td>
                            </tr>
                            <tr>
                                <th scope="col">Sole material</th>
                                <td>thermoplastic Elastomers</td>
                            </tr>
                            <tr>
                                <th scope="col">Style</th>
                                <td>Sneaker</td>
                            </tr>
                            <tr>
                                <th scope="col">Country of Origin</th>
                                <td>Bangladesh</td>
                            </tr>

                        </table>
                    </div> */}

                </div>
            </div>
        </div>
    )
}
