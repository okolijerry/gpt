
import Logo from "../../assets/logo.svg"

import "./footer.css"

const Footer = () => {
  return (
    <>

    <div className="gpt3__footer section__padding">

      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">Do you want to step in to the future before others</h1>
      </div>

      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>

      <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={Logo} alt="" />
        <p> &copy;Felinech groups, All Rights Reserved</p>
      </div>

      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>

      
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      
      </div>



      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>Felinech group, Felicitas owner & CEO.</p>
        <p>09025579441</p>
        <p>@okolijerryneche</p>
        
      </div>
    </div>
    </div>

    
    <div className="gpt3__footer-copyright">
      <p>2024 JerryCodes. All rights reserved.</p>
    </div>
    
    </>
  )
}

export default Footer