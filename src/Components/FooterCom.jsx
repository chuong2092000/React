import React from "react";

function FooterCom() {
    return (<footer>
      
    <div className="footer">
       <div className="container">
          <div className="row">
             <div className=" col-md-4">
                <h3>Contact US</h3>
                <ul className="conta">
                   <li><i className="fa fa-map-marker" aria-hidden="true"></i> Address</li>
                   <li><i className="fa fa-mobile" aria-hidden="true"></i> +01 1234569540</li>
                </ul>
             </div>
             <div className="col-md-4">
                <h3>Menu Link</h3>
                <ul className="link_menu">
                   <li><a href="about.html"> asdsadsadasdsadsad</a></li>
                   <li><a href="room.html">Our Room</a></li>
                   <li><a href="gallery.html">Gallery</a></li>
                   <li><a href="blog.html">Blog</a></li>
                   <li><a href="contact.html">Contact Us</a></li>
                </ul>
             </div>
             <div className="col-md-4">
                <h3>News letter</h3>
                <form className="bottom_form">
                   <input className="enter" placeholder="Enter your email" type="text" name="Enter your email"/>
                   <button className="sub_btn">subscribe</button>
                </form>
              
             </div>
          </div>
       </div>
       <div className="copyright">
          <div className="container">
             <div className="row">
                <div className="col-md-10 offset-md-1">
                   
                   
                   © 2019 All Rights Reserved. Design by <a href="https://html.design/"> Free Html Templates</a>
                   
                   

                </div>
             </div>
          </div>
       </div>
    </div>
 </footer>)
   
            
}


export default FooterCom;