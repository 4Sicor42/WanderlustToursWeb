import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

const SearchHeader = ({ label, linkPath }) => {
  return (
    <header class="header">
            <div class="container">
                <nav class="nav">
                    <ul class="menu">
                        <li class="menu__item">
                            <a href="flight-search.html" class="menu__link menu__link_airplane">Find Flight</a>
                        </li>
                        <li class="menu__item">
                            <a href="hotel-search.html" class="menu__link menu__link_hotel active">Find Stays</a>
                        </li>
                    </ul>
                    <a href="/" class="logo">
                        <img class="logo__img" src="img/logo.svg" alt="logo"/>
                    </a>
                    <ul class="menu">
                        <li class="menu__item">
                            <a href="#" class="menu__link menu__link_color">Login</a>
                        </li>
                        <li class="menu__item">
                            <a href="#" class="menu__link menu__link_sign">Sign up</a>
                        </li>
                    </ul>
                    <button class="menu-btn">
                        <span></span>
                    </button>
                    <ul class="menu-mobile">
                        <li class="menu__item">
                            <a href="flight-search.html" class="menu__link menu__link_airplane">Find Flight</a>
                        </li>
                        <li class="menu__item">
                            <a href="hotel-search.html" class="menu__link menu__link_hotel">Find Stays</a>
                        </li>
                        <li class="menu__item">
                            <a href="#" class="menu__link">Login</a>
                        </li>
                        <li class="menu__item">
                            <a href="#" class="menu__link menu__link_sign">Sign up</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
  );
};

export default SearchHeader;


