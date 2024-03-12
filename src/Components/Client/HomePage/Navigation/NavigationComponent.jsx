import React, { Component } from 'react'

export default class NavigationComponent extends Component {
  render() {
    return (
      <div>
         <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                <a href="//" className="navbar-brand p-0">
                    <h1 className="m-0"><i className="fa fa-map-marker-alt me-3"></i>TravelZen</h1>
                     {/* <img src="/img/logo.png" alt="Logo"/>  */}
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0"  >
              
                        <a href="index.html" className="nav-item nav-link " style={{display:'flex',alignItems:'center'}} ><i className="me-2"><ion-icon name="bed-outline"style={{fontSize:'25px'}}></ion-icon></i>Stays</a>
                        <a href="about.html" className="nav-item nav-link" style={{display:'flex',alignItems:'center'}}><i className="me-2"><ion-icon name="airplane-outline" style={{fontSize:'25px'}}></ion-icon></i>Flights</a>
                        <a href="services.html" className="nav-item nav-link" style={{display:'flex',alignItems:'center'}}><i  className="me-2"><ion-icon name="globe-outline" style={{fontSize:'25px'}}></ion-icon></i>Flight + Hotel</a>
                        <a href="packages.html" className="nav-item nav-link" style={{display:'flex',alignItems:'center'}}><i className="me-2"><ion-icon name="car-outline" style={{fontSize:'25px'}}></ion-icon></i>Car rentals</a>
                        <a href="blog.html" className="nav-item nav-link" style={{display:'flex',alignItems:'center'}}><i className="me-2"><ion-icon name="magnet-outline" style={{fontSize:'25px'}}></ion-icon></i>Attractions</a>
                        <a href="blog.html" className="nav-item nav-link" style={{display:'flex',alignItems:'center'}}><i className="me-2"><ion-icon name="car-sport-outline" style={{fontSize:'25px'}}></ion-icon></i>Airport taxis</a>

                       
                    
                    </div>
                    <a href="//" className="btn btn-primary rounded-pill py-2 px-4 ms-lg-4">Book Now</a>
                </div>
            </nav>
      </div>
    )
  }
}
