import React from 'react'
import kid from "../../../../../../assets/Images/kid.jpg";
import women from "../../../../../../assets/Images/woman.jpg";
import man from "../../../../../../assets/Images/man.jpg";
import { Link } from 'react-router-dom';

const Cards = () => {
    return (
        <div className='container  bg-light'>
            <h2 className='d-flex justify-content-center p-3'>FEATURED COLLECTION</h2>
            <div className='cards d-flex gap-4 p-2'>
                <div className='col'>
                    <Link to={"/kid-Collection"} className='text-decoration-none '>
                        <img src={kid} className='w-100' alt='' />
                        <div className=' d-flex justify-content-center p-3 text-dark fw-semibold'>
                            <h5>KID COLLECTION</h5>
                        </div>
                    </Link>
                </div>
                <div className='col'>
                    <Link to={"/woman-Collection"} className='text-decoration-none '>
                        <img src={women} className='w-100 ' alt='' />
                        <div className=' d-flex justify-content-center p-3 text-dark fw-semibold'>
                            <h5>WOMEN COLLECTION</h5>
                        </div>
                    </Link>
                </div>
                <div className='col'>
                    <Link to={"/man-Collection"} className='text-decoration-none '>
                        <img src={man} className='w-100' alt='' />
                        <div className=' d-flex justify-content-center p-3 text-dark fw-semibold'>
                            <h5>MAN COLLECTION</h5>
                        </div>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Cards
