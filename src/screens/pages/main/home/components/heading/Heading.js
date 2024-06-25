import React, { Component } from 'react'

export default class Heading extends Component {
  render() {
    return (
      <div className="d-flex gap-3 mt-4">
        <h1 className="d-flex gap-2 pb-3">Top<b>Products</b></h1>
        {/* <p className='pt-3'>view all</p> */}
      </div>
    )
  }
}
