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
            <h2>Focused on Property Records and Diligence</h2>
            <p className="opacity-75">Detailing DigiLR's Solutions for Real Estate Market Challenges</p>
            <p><a className="btn btn-lg btn-primary" href="/">Sign up today</a></p>
          </div>
        </div>
      </div>
      <div className="carousel-item">
      <img src="/front2.png" className="d-block w-100" style={{height: "90vh", objectFit: "cover"}} alt=""/>        
      <div className="container">
          <div className="carousel-caption" style={{backgroundColor: "rgba(0, 0, 0, 0.4)", padding: "15px", borderRadius: "10px", color: "white", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)"}}>
            <h2>Focused on Property Records and Diligence</h2>
            <p>Some representative placeholder content for the second slide of the carousel.</p>
            <p><a className="btn btn-lg btn-primary" href="/">Learn more</a></p>
          </div>
        </div>
      </div>
      <div className="carousel-item">
      <img src="/front3.png" className="d-block w-100" style={{height: "90vh", objectFit: "cover"}} alt=""/>
        <div className="container">
          <div className="carousel-caption text-end" style={{backgroundColor: "rgba(0, 0, 0, 0.4)", padding: "15px", borderRadius: "10px", color: "white", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)"}}>
            <h2>One more for good measure.</h2>
            <p>Some representative placeholder content for the third slide of this carousel.</p>
            <p><a className="btn btn-lg btn-primary" href="/">Browse gallery</a></p>
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
