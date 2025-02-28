import React from 'react'
import '../styles.css';

export default function Front() {
  return (
    <>
        <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-label="Slide 1" aria-current="true"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className=""></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className=""></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
      <img src="/front1.png" className="d-block w-100" style={{height: "90vh", objectFit: "cover"}} alt="" />
        <div className="container">
          <div className="carousel-caption text-start" style={{ backgroundColor: "rgba(0, 0, 0, 0.4)", color: "white", padding: "15px", borderRadius: "10px", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)"}}
          >
            <h2>Revolutionizing Real Estate Transparency</h2>
            <p className="opacity-75">Secure, digital property records for hassle-free transactions.</p>
            <p><a className="btn btn-lg btn-primary" href="/">Get Started</a></p>
          </div>
        </div>
      </div>
      <div className="carousel-item">
      <img src="/front2.png" className="d-block w-100" style={{height: "90vh", objectFit: "cover"}} alt=""/>        
      <div className="container">
          <div className="carousel-caption" style={{backgroundColor: "rgba(0, 0, 0, 0.4)", padding: "15px", borderRadius: "10px", color: "white", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)"}}>
            <h2>Verify Property Ownership with Ease</h2>
            <p>DigiLR ensures accurate, tamper-proof property records.</p>
            <p><a className="btn btn-lg btn-primary" href="/">Learn more</a></p>
          </div>
        </div>
      </div>
      <div className="carousel-item">
      <img src="/front3.png" className="d-block w-100" style={{height: "90vh", objectFit: "cover"}} alt=""/>
        <div className="container">
          <div className="carousel-caption text-end" style={{backgroundColor: "rgba(0, 0, 0, 0.4)", padding: "15px", borderRadius: "10px", color: "white", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)"}}>
            <h2>Smart Due Diligence for Smarter Investments</h2>
            <p>Access complete property history and legal insights before you buy.</p>
            <p><a className="btn btn-lg btn-primary" href="/">Explore Features</a></p>
          </div>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
        </div>
    </> 
  )
}
