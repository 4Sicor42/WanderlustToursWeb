import { Box } from "@mui/material";
import Subscribe from "./Subscribe";

        
const Footer = () => {
  return <Box className="footer-container">
    <div class="container">
        <div class="footer__box">
            <Subscribe />
        </div>
        <div class="footer__inner">
            <div class="footer__logo">
                <a href="/" class="logo">
                    <img class="logo__img" src="img/logo.svg" alt="logo"/>
                </a>
                <div class="footer__social">
                    <a href="https:/facebook.com" class="footer__social-link">
                        <img class="footer__social-img" src="img/social/facebook.svg" alt="Facebook"/>
                    </a>
                    <a href="https:/twitter.com" class="footer__social-link">
                        <img class="footer__social-img" src="img/social/twitter.svg" alt="Twitter"/>
                    </a>
                    <a href="https:/youtube.com" class="footer__social-link">
                        <img class="footer__social-img" src="img/social/youtube.svg" alt="Youtube"/>
                    </a>
                    <a href="https:/instagram.com" class="footer__social-link">
                        <img class="footer__social-img" src="img/social/instagram.svg" alt="Instagram"/>
                    </a>
                </div>
            </div>
            <nav class="footer__nav">
                <div class="footer__nav-inner">
                    <h2 class="footer__nav-titel">Contact Us</h2>
                    <ul class="footer__menu">
                        <li class="footer__item">
                            <a href="#" class="footer__link">Our Story</a>
                        </li>
                        <li class="footer__item">
                            <a href="#" class="footer__link">Work with us</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
  </Box>;
};

export default Footer;
