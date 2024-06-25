
import React from 'react';
import { Link } from 'react-router-dom';
import salebanner from "../../../../../../assets/Images/salebanner.jpg";


const Discount = () => {
  
  const menuItems = [
    { text: 'SUMMER COLLECTION', link: '#'},
    { text: 'SUMMER SALE', link: '#' },
    { text: 'MAN', link: '#' },
    { text: 'WOMEN', link: '#' },
    { text: 'KID', link: '#' }
  ];
  return (
    <div className='container bg-light py-3'>
      {/* <div className='menu d-flex gap-4 justify-content-center pb-3'>
        {menuItems.map((menuItem, index) => (
          <Link key={index} to={menuItem.link} className='text-decoration-none text-dark'>
            {menuItem.text}
          </Link>
        ))}
      </div> */}
    
      <div className='row'>
        <img src={salebanner} alt='salebanner' />
      </div>
      </div>
   
  );
};
export default Discount;