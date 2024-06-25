import React, { useState } from 'react'
import img2 from "../../../../../../assets/Images/img2.png";
// import kidshoes1 from "../../../../../assets/Images/kidshoes1.png";
import kidshoes2 from "../../../../../../assets/Images/kidshoes1.png";
import kidshoes3 from "../../../../../../assets/Images/kidshoes3.png"
import kidshoes4 from "../../../../../../assets/Images/kidshoes4.png"
import kidshoes5 from "../../../../../../assets/Images/kidshoes5.png"
import kidshoes6 from "../../../../../../assets/Images/kidshoes6.png"
import kidshoes7 from "../../../../../../assets/Images/kidshoes7.png"
import kidshoes8 from "../../../../../../assets/Images/kidshoes8.png"
import kidshoes9 from "../../../../../../assets/Images/kidshoes9.png"
import kidshoes10 from "../../../../../../assets/Images/kidshoes10.png"
import { Link } from 'react-router-dom';
import data from "../../../../../../data/shoes"



const KidCollection = () => {
    console.log("abdb")
    return (
        <div className='container'>
            <h1 className=' d-flex justify-content-center p-3 text-dark fw-bold'>KID COLLECTION</h1>
            <div className='row d-flex justify-content-between pt-4'>

                {data.categories[2].products.map((item)=>(<div className='col-sm-3'>
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

                {/* <div className='col'>
                    <div className=" p-3">
                        <Link to={"/single-Item"} className=' text-decoration-none  text-dark'>
                            <img src={img2} alt="img2" />
                            <div className="text d-flex flex-column">
                                <h6 className="pt-3 fw-bold">BASED</h6>
                                <h6 className='fw-normal'>Kids Doraeman Musical Sandals</h6>
                                <div className=' d-flex gap-3'>
                                    <span className='fw-normal'>Rs.419</span>
                                    <span className=' text-decoration-line-through'> Rs.419</span>
                                    <span className=' text-danger fw-normal'>(79% OFF)</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>


                <div className='col'>
                    <div className=" p-3">
                        <Link to={"/single-Item"} className=' text-decoration-none  text-dark'>
                            <img src={kidshoes10} alt=" " />
                            <div className="text d-flex flex-column">
                                <h6 className="pt-3 fw-bold">BASED</h6>
                                <h6 className='fw-normal'>Kids Doraeman Musical Sandals</h6>
                                <div className=' d-flex gap-3'>
                                    <span className='fw-normal'>Rs.419</span>
                                    <span className=' text-decoration-line-through'> Rs.419</span>
                                    <span className=' text-danger fw-normal'>(79% OFF)</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className='col'>
                    <div className=" p-3">
                        <Link to={"/single-Item"} className=' text-decoration-none  text-dark'>
                            <img src={kidshoes7} alt=" " />
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
                </div> */}
            </div>
            {/* <div className='row d-flex justify-content-between  pt-4'>
                <div className='col'>
                    <div className=" p-3">
                        <Link to={"/single-Item"} className=' text-decoration-none  text-dark'>
                            <img src={kidshoes2} alt=" " />
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
                            <img src={kidshoes3} alt=" " />
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
                            <img src={kidshoes9} alt=" " />
                            <div className="text d-flex flex-column">
                                <h6 className="pt-3 fw-bold">BASED</h6>
                                <h6 className='fw-normal'>Kids Doraeman Musical Sandals</h6>
                                <div className=' d-flex gap-3'>
                                    <span className='fw-normal'>Rs.419</span>
                                    <span className=' text-decoration-line-through'> Rs.419</span>
                                    <span className=' text-danger fw-normal'>(79% OFF)</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>


                <div className='col'>
                    <div className=" p-3">
                        <Link to={"/single-Item"} className=' text-decoration-none  text-dark'>
                            <img src={kidshoes4} alt=" " />
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
            <div className='row d-flex justify-content-between border pt-4'>
                <div className='col'>
                    <div className=" p-3">
                        <Link to={"/single-Item"} className=' text-decoration-none  text-dark'>
                            <img src={kidshoes5} alt="" />
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
                        <Link to={"/single-Item"} className=' text-decoration-none  text-dark'>
                            <img src={kidshoes6} alt="" />
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
                            <img src={kidshoes7} alt=" " />
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
                <div className='col'>
                    <div className=" p-3">
                        <Link to={"/single-Item"} className=' text-decoration-none  text-dark'>
                            <img src={kidshoes8} alt=" " />
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

    )
}

export default KidCollection
