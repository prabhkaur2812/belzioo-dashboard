import React from 'react'
import mfootwear1 from "../../../../../../assets/Images/mfootwear1.png";
import footwear2 from "../../../../../../assets/Images/footwear2.png";
import manfootwear3 from "../../../../../../assets/Images/manfootwear3.png";
import sneaker4 from "../../../../../../assets/Images/sneaker4.png";
import black5 from "../../../../../../assets/Images/black5.png"
import bg6 from "../../../../../../assets/Images/bg6.png"
import gray7 from "../../../../../../assets/Images/gray7.png"
import img8 from "../../../../../../assets/Images/img8.png"
import { Link } from 'react-router-dom';
import data from '../../../../../../data/shoes';

const ManCollection = () => {
    return (
        <div className='container'>
        <h1 className=' d-flex justify-content-center p-3 text-dark fw-bold'>KID COLLECTION</h1>
        <div className='row d-flex justify-content-between pt-4'>

            {data.categories[0].products.map((item)=>(<div className='col-sm-3'>
                <div className=" p-3">
                    <Link to={"/single-Item"} state={item} className=' text-decoration-none  text-dark'>
                        <img src={item.image} alt="" className='w-100 h-100' />
                        <div className="text d-flex flex-column">
                            <h6 className="pt-3 fw-bold">{item.name}</h6>
                            <h6 className='fw-normal'>{item.offer_description}</h6>
                            <div className=' d-flex gap-3'>
                                <span className='fw-normal'>Rs.{item.offer_price}</span>
                                <span className=' text-decoration-line-through'> Rs.{item.price}</span>
                                <span className=' text-danger fw-normal'>(56% OFF)</span>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>))}

{/* 
            <div className='row d-flex justify-content-between  pt-4'>
                <div className='col'>
                    <div className=" p-3">
                        <Link to={"/single-Item"} className=' text-decoration-none  text-dark'>
                            <img src={mfootwear1} alt=" mfootwear1" />
                            <div className="text d-flex flex-column">
                                <h6 className="pt-3 fw-bold">Red Tape</h6>
                                <h6 className='fw-normal'>Men Lace-Ups Sneakers</h6>
                                <div className=' d-flex gap-3'>
                                    <span className='fw-normal'>Rs.1119</span>
                                    <span className=' text-decoration-line-through'> Rs.5599</span>
                                    <span className=' text-danger fw-normal'>(80% OFF)</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='col'>
                    <div className=" p-3">
                        <Link to={"/single-Item"} className=' text-decoration-none  text-dark'>
                            <img src={footwear2} alt="footwear2" />
                            <div className="text d-flex flex-column">
                                <h6 className="pt-3 fw-bold">U.S. Polo Assn.</h6>
                                <h6 className='fw-normal'>Men Clarkin Sneakers</h6>
                                <div className=' d-flex gap-3'>
                                    <span className='fw-normal'>Rs.1499</span>
                                    <span className=' text-decoration-line-through'> Rs.2999</span>
                                    <span className=' text-danger fw-normal'>(50% OFF)</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='col'>
                    <div className=" p-3">
                        <Link to={"/single-Item"} className=' text-decoration-none  text-dark'>
                            <img src={manfootwear3} alt=" manfootwear3" />
                            <div className="text d-flex flex-column">
                                <h6 className="pt-3 fw-bold">Puma</h6>
                                <h6 className='fw-normal'>Unisex Divecate V2 Lite Sliders</h6>
                                <div className=' d-flex gap-3'>
                                    <span className='fw-normal'>Rs.799</span>
                                    <span className=' text-decoration-line-through'> Rs.1999</span>
                                    <span className=' text-danger fw-normal'>(60% OFF)</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='row d-flex justify-content-between  pt-4'>
                <div className='col'>
                    <div className=" p-3">
                        <Link to={"/single-Item"} className=' text-decoration-none  text-dark'>
                            <img src={sneaker4} alt=" sneaker4" />
                            <div className="text d-flex flex-column">
                                <h6 className="pt-3 fw-bold">Red Tape</h6>
                                <h6 className='fw-normal'>Men colourblocked Sneakers</h6>
                                <div className=' d-flex gap-3'>
                                    <span className='fw-normal'>Rs.1119</span>
                                    <span className=' text-decoration-line-through'> Rs.5599</span>
                                    <span className=' text-danger fw-normal'>(80% OFF)</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='col'>
                    <div className=" p-3">
                        <Link to={"/single-Item"} className=' text-decoration-none  text-dark'>
                            <img src={black5} alt=" black5" />
                            <div className="text d-flex flex-column">
                                <h6 className="pt-3 fw-bold">Red Tape</h6>
                                <h6 className='fw-normal'>Men Textured Walking Shoes</h6>
                                <div className=' d-flex gap-3'>
                                    <span className='fw-normal'>Rs.959</span>
                                    <span className=' text-decoration-line-through'> Rs.4799</span>
                                    <span className=' text-danger fw-normal'>(80% OFF)</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='col'>
                    <div className=" p-3">
                        <Link to={"/single-Item"} className=' text-decoration-none  text-dark'>
                            <img src={bg6} alt=" " />
                            <div className="text d-flex flex-column">
                                <h6 className="pt-3 fw-bold">HRX by Hrithik Roshan</h6>
                                <h6 className='fw-normal'>Men Running Sport Shoes </h6>
                                <div className=' d-flex gap-3'>
                                    <span className='fw-normal'>Rs.999</span>
                                    <span className=' text-decoration-line-through'> Rs.2999</span>
                                    <span className=' text-danger fw-normal'>(Rs.2000 OFF)</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='row d-flex justify-content-between  pt-4'>
                <div className='col'>
                    <div className=" p-3">
                        <Link to={"/Single-Item"} className=' text-decoration-none  text-dark'>
                            <img src={gray7} alt="" />
                            <div className="text d-flex flex-column">
                                <h6 className="pt-3 fw-bold">Red Tape</h6>
                                <h6 className='fw-normal'>Men solid Sneakers</h6>
                                <div className=' d-flex gap-3'>
                                    <span className='fw-normal'>Rs.1499</span>
                                    <span className=' text-decoration-line-through'> Rs.2999</span>
                                    <span className=' text-danger fw-normal'>(50% OFF)</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='col'>
                    <div className=" p-3">
                        <Link to={"/Single-Item"} className=' text-decoration-none  text-dark'>
                            <img src={img8} alt="" />
                            <div className="text d-flex flex-column">
                                <h6 className="pt-3 fw-bold"> HRX by Hrithik Roshan</h6>
                                <h6 className='fw-normal'>Men club culture shoes</h6>
                                <div className=' d-flex gap-3'>
                                    <span className='fw-normal'>Rs.1391</span>
                                    <span className=' text-decoration-line-through'> Rs.4799</span>
                                    <span className=' text-danger fw-normal'>(71% OFF)</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='col'>
                    <div className=" p-3">
                        <Link to={"/single-Item"} className=' text-decoration-none  text-dark'>
                            <img src={sneaker4} alt=" sneaker4" />
                            <div className="text d-flex flex-column">
                                <h6 className="pt-3 fw-semibold">Red Tape</h6>
                                <h6 className='fw-normal'>Men colourblocked Sneakers</h6>
                                <div className=' d-flex gap-3'>
                                    <span className='fw-normal'>Rs.1139</span>
                                    <span className=' text-decoration-line-through'> Rs.5699</span>
                                    <span className=' text-danger fw-normal'>(80% OFF)</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div> */}
        </div>
        </div>



    )
}

export default ManCollection;
