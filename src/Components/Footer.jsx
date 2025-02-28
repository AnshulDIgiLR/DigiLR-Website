import React from 'react';
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";


export default function Footer() {
  return (
    <div className='text-white bg-dark py-4' id='contact'>
      <div className="container">
  <footer>
    <div className="row">
      <div className="col-6 col-md-3 mb-3">
        <h5>DigiLR Solutions</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-white">Home</a></li>
          <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-white">Features</a></li>
          <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-white">Pricing</a></li>
          <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-white">FAQs</a></li>
          <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-white">About</a></li>
        </ul>
      </div>

      <div className="col-6 col-md-3 mb-3">
        <h5>Links</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-white">Terms of Use</a></li>
          <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-white">Privacy Policy</a></li>
          <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-white">Refund Policy</a></li>
          <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-white">API Documentation</a></li>
        </ul>
      </div>

      <div className="col-md-5 offset-md-1 mb-3">
        <form>
          <h5>Get in touch</h5>
          <p>Monthly digest of what's new and exciting from us.</p>
          <div className="d-flex flex-column flex-sm-row w-100 gap-2">
            <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Email address"/>
            <button className="btn btn-primary" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>

    <div className="d-flex flex-column flex-sm-row justify-content-between py-2 my-0 border-top">
      <p>© 2024 DigiLR Solutions, Inc. All rights reserved.</p>
      <ul className="list-unstyled d-flex">
        <li className="ms-3"><a className="text-white" href="/"><FaTwitter size={24} /></a></li>
        <li className="ms-3"><a className="text-white" href="/"><FaInstagram size={24} /></a></li>
        <li className="ms-3"><a className="text-white" href="/"><FaFacebook size={24} /></a></li>
      </ul>
    </div>
  </footer>
</div>
    </div>
  )
}
