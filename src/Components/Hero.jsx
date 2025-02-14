import React from 'react'

export default function Hero() {
  return (
    <div className='w-full bg-gray-100'>
      <div className="container-fluid px-4 py-5">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src="hero image.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="100%" height="auto" loading="lazy" />
      </div>
      <div className="col-lg-6 text-center">
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">DIGILR</h1>
        <h2 className="display-10 fw-bold text-body-emphasis lh-1 mb-3">Transforming Land Administration</h2>
        <p className="lead" align="left">DIGILR's digital infrastructure simplifies legal due diligence for real estate assets. Our unified platform integrates all essential tools seamlessly, offering high customization and effortless implementation. Experience efficiency dividends from day one with a smarter, more streamlined approach to real estate due diligence.</p>
        <div className="mt-6 flex justify-center">
          <input className="w-1/3 p-1" placeholder="Search by Plot Number, Owner Name..." />
          <button className="ml-2 bg-orange-500 hover:bg-orange-600 mx-3">Search</button>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}
