import React from 'react'
import '../components/css/header.css'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';
const Footer = () => {
    return (
       <footer>
           <p className="p">  Developed By Akash dubey- MERN Stack developer:)</p>
           <a href="https://www.linkedin.com/in/akash-dubey-1040791a7/">
               <LinkedInIcon/>
           </a>
           <a href="https://www.facebook.com/profile.php?id=100025704156015">
               <FacebookIcon/>
           </a>
           <a href="https://github.com/akashdubey2211">
               <GitHubIcon/>
           </a>
           <a href="https://akash-dubey-portfolio-websites.herokuapp.com/">
               <LanguageIcon/>
           </a>
           

       </footer>
    )
}

export default Footer;