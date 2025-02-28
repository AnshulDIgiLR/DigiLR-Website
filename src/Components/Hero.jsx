import React from "react";

export default function Hero() {
  return (
    <div className="w-full bg-gray-100">
      {/* <div className="container-fluid px-4 py-5"> */}
        <div className="row flex-lg-row-reverse align-items-center mx-5 g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src="hero image.png"
              className="d-block mx-lg-auto img-fluid rounded-lg shadow-lg lg:mb-0"
              alt="DigiLR Hero"
              width="100%"
              height="auto"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6 text-center">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              DIGILR
            </h1>
            <h2 className="display-10 fw-bold text-body-emphasis lh-1 mb-3">
              Transforming Land Administration
            </h2>
            <p className="lead" align="left">
              DIGILR's digital infrastructure simplifies legal due diligence for
              real estate assets. Our unified platform integrates all essential
              tools seamlessly, offering high customization and effortless
              implementation. Experience efficiency dividends from day one with
              a smarter, more streamlined approach to real estate due diligence.
            </p>
            <div className="mt-6 flex justify-center">
              <input
                className="w-2/3 sm:w-1/2 lg:w-1/3 p-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Search by Plot Number, Owner Name..."
              />
              <button className="ml-2 mx-3 btn btn-primary btn-lg">
                Search
              </button>
            </div>
          </div>
        </div>
      {/* </div> */}
    </div>
  );
}
