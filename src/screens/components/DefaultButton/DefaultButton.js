import React from 'react'
import { Link } from 'react-router-dom';

const DefaultButton = ({anchor,onPress,classNames,children}) => {
    return (
        anchor ?
            <Link to={onPress}
                className={`bg-danger btn m-2 border text-light ${classNames}`}>
                {children}
            </Link>
            :
            <button onClick={onPress}
                className={`bg-primary btn m-2 border text-light ${classNames}`}>
                {children}
            </button>
    )
}

export default DefaultButton;
