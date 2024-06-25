import React from 'react'
// import womenshoes from "../../../../../assets/Images/womenshoes.webp";
import womenimg1 from "../../../../../../assets/Images/womenimg1.png";
import wimg2 from "../../../../../../assets/Images/wimg2.png";
import manfootwear3 from "../../../../../../assets/Images/manfootwear3.png";
import img3w3 from "../../../../../../assets/Images/img3w3.png";
import imgwomen4 from "../../../../../../assets/Images/imgwomen4.png";
import shoes6 from "../../../../../../assets/Images/shoes6.png";
import sliper7 from "../../../../../../assets/Images/sliper7.png"
import womenshoes3 from "../../../../../../assets/Images/womenshoes3.png"
// import img8 from "../../../../../assets/Images/img8.png"
import womenshoes1 from "../../../../../../assets/Images/womenshoes1.png";
import womenshoes2 from "../../../../../../assets/Images/womenshoes2.png";

import { Link } from 'react-router-dom';
import data from '../../../../../../data/shoes';

const WomenCollection = () => {
    return (
        <div className='container'>
        <h1 className=' d-flex justify-content-center p-3 text-dark fw-bold'>KID COLLECTION</h1>
        <div className='row d-flex justify-content-between pt-4'>

            {data.categories[1].products.map((item)=>(<div className='col-sm-3'>
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

            {/* <div className='row d-flex justify-content-between pt-4'>
                <div className='col'>
                    <div className=" p-3">
                        <Link to={"/single-Item"} className=' text-decoration-none  text-dark'>
                            <img src={womenimg1} alt="" />
                            <div className="text d-flex flex-column">
                                <h6 className="pt-3 fw-bold">Red Tape</h6>
                                <h6 className='fw-normal'>Women Textured Sneakers</h6>
                                <div className=' d-flex gap-3'>
                                    <span className='fw-normal'>Rs.1219</span>
                                    <span className=' text-decoration-line-through'> Rs.6099</span>
                                    <span className=' text-danger fw-normal'>(80% OFF)</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='col'>
                    <div className=" p-3">
                        <Link to={"/single-Item"} className=' text-decoration-none  text-dark'>
                            <img src={wimg2} alt="wimg2" />
                            <div className="text d-flex flex-column">
                                <h6 className="pt-3 fw-bold">AXIUM</h6>
                                <h6 className='fw-normal'>Embellished Kitten Heels</h6>
                                <div className=' d-flex gap-3'>
                                    <span className='fw-normal'>Rs.1299</span>
                                    <span className=' text-decoration-line-through'> Rs.2799</span>
                                    <span className=' text-danger fw-normal'>(Rs. 1500 OFF)</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='col'>
                    <div className=" p-3">
                        <Link to={"/single-Item"} className=' text-decoration-none  text-dark'>
                            <img src={womenshoes1} alt="" />
                            <div className="text d-flex flex-column">
                                <h6 className="pt-3 fw-bold">AXIUM</h6>
                                <h6 className='fw-normal'>Embellished Kitten Heels</h6>
                                <div className=' d-flex gap-3'>
                                    <span className='fw-normal'>Rs.1299</span>
                                    <span className=' text-decoration-line-through'> Rs.2799</span>
                                    <span className=' text-danger fw-normal'>(Rs. 1500 OFF)</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='col'>
                    <div className=" p-3">
                        {/* <div className='position-reletive'>
                            <div className='position-absolute bg-dark p-2 top start'>50%</div>
                        </div>
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
            <div className='row d-flex justify-content-between pt-4'>
                <div className='col'>
                    <div className=" p-3">
                        <Link to={"/single-Item"} className=' text-decoration-none  text-dark'>
                            <img src={img3w3} alt=" " />
                            <div className="text d-flex flex-column">
                                <h6 className="pt-3 fw-bold">Puma</h6>
                                <h6 className='fw-normal'>Women Smashic Sneakers</h6>
                                <div className=' d-flex gap-3'>
                                    <span className='fw-normal'>Rs.1574</span>
                                    <span className=' text-decoration-line-through'> Rs.4499</span>
                                    <span className=' text-danger fw-normal'>(65% OFF)</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='col'>
                    <div className=" p-3">
                        <Link to={"/single-Item"} className=' text-decoration-none  text-dark'>
                            <img src={imgwomen4} alt=" " />
                            <div className="text d-flex flex-column">
                                <h6 className="pt-3 fw-bold">Rodster</h6>
                                <h6 className='fw-normal'>Lightweight Walking Shoes</h6>
                                <div className=' d-flex gap-3'>
                                    <span className='fw-normal'>Rs.791</span>
                                    <span className=' text-decoration-line-through'> Rs.2399</span>
                                    <span className=' text-danger fw-normal'>(67% OFF)</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='col'>
                    <div className=" p-3">
                        <Link to={"/single-Item"} className=' text-decoration-none  text-dark'>
                            <img src={womenshoes3} alt="" />
                            <div className="text d-flex flex-column">
                                <h6 className="pt-3 fw-bold">AXIUM</h6>
                                <h6 className='fw-normal'>Embellished Kitten Heels</h6>
                                <div className=' d-flex gap-3'>
                                    <span className='fw-normal'>Rs.1299</span>
                                    <span className=' text-decoration-line-through'> Rs.2799</span>
                                    <span className=' text-danger fw-normal'>(Rs. 1500 OFF)</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className='col'>
                    <div className=" p-3">
                        <Link to={"/single-Item"} className=' text-decoration-none  text-dark'>
                            <img src={shoes6} alt="" />
                            <div className="text d-flex flex-column">
                                <h6 className="pt-3 fw-bold">Red Tape</h6>
                                <h6 className='fw-normal'>Women Walking shoes</h6>
                                <div className=' d-flex gap-3'>
                                    <span className='fw-normal'>Rs.1179</span>
                                    <span className=' text-decoration-line-through'> Rs.5899</span>
                                    <span className=' text-danger fw-normal'>(80% OFF)</span>
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
                            <img src={sliper7} alt="" />
                            <div className="text d-flex flex-column">
                                <h6 className="pt-3 fw-bold">Puma</h6>
                                <h6 className='fw-normal'>Unisex Wave Thong Flip-Flops</h6>
                                <div className=' d-flex gap-3'>
                                    <span className='fw-normal'>Rs.899</span>
                                    <span className=' text-decoration-line-through'> Rs.1999</span>
                                    <span className=' text-danger fw-normal'>(55% OFF)</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='col'>
                    <div className=" p-3">
                        <Link to={"/single-Item"} className=' text-decoration-none  text-dark'>
                            <img src={img3w3} alt="" />
                            <div className="text d-flex flex-column">
                                <h6 className="pt-3 fw-bold">Puma </h6>
                                <h6 className='fw-normal'>Women Samashic Sneakers</h6>
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
                            <img src={womenshoes2} alt=" " />
                            <div className="text d-flex flex-column">
                                <h6 className="pt-3 fw-bold">AXIUM</h6>
                                <h6 className='fw-normal'>Embellished Kitten Heels</h6>
                                <div className=' d-flex gap-3'>
                                    <span className='fw-normal'>Rs.1299</span>
                                    <span className=' text-decoration-line-through'> Rs.2799</span>
                                    <span className=' text-danger fw-normal'>(Rs. 1500 OFF)</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className='col'>
                    <div className=" p-3">
                        <Link to={"/single-Item"} className=' text-decoration-none  text-dark'>
                            <img src={manfootwear3} alt=" " />
                            <div className="text d-flex flex-column">
                                <h6 className="pt-3 fw-semibold">Red Tape</h6>
                                <h6 className='fw-normal'>Women colourblocked Sneakers</h6>
                                <div className=' d-flex gap-3'>
                                    <span className='fw-normal'>Rs.1139</span>
                                    <span className=' text-decoration-line-through'> Rs.5699</span>
                                    <span className=' text-danger fw-normal'>(80% OFF)</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>  */}
    </div>
    </div>
    
                    )
                }

export default WomenCollection
