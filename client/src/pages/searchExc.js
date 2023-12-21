import React from 'react';
import { Container } from "@mui/material";
import SearchHeader from "../components/Search/SearchHeader"


const homepage = () => {
    return(
        <>

            <Container maxWidth={false} className="container">
            <div class="wrapper">
        <SearchHeader/>
        <main class="main">
            <section class="flights hotel-search">
                <div class="container">
                    <div class="flights__intro">
                        <h1 class="flights__titel">Make your travel whishlist, we’ll do the rest</h1>
                        <p class="flights__subtitel">Special offers to suit your plan</p>
                        <div class="search flights__search">
                            <h1 class="search__titel">Where are you flying? </h1>
                            <form class="search__inner">
                                <div class="search__info">
                                    <fieldset class="search__fieldset search__fieldset_xl">
                                        <legend class="search__legend">Enter Destination</legend>
                                        <input class="search__input search__input_img" type="text" placeholder="Istanbul, Turkey"/>
                                    </fieldset>
                                    <fieldset class="search__fieldset search__fieldset_width">
                                        <legend class="search__legend">Check In</legend>
                                        <input class="search__input" type="date" placeholder="Fri 12/2"/>
                                    </fieldset>
                                    <fieldset class="search__fieldset search__fieldset_width">
                                        <legend class="search__legend">Check Out</legend>
                                        <input class="search__input" type="date" placeholder="Sun 12/4"/>
                                    </fieldset>
                                    <fieldset class="search__fieldset search__fieldset_width">
                                        <legend class="search__legend">Rooms & Guests</legend>
                                        <select class="search__select-room search__select-room_img" name="" id="">
                                            <option class="search__option-room" value="1">1 room, 2 guests</option>
                                            <option class="search__option-room" value="2">2 room, 4 guests</option>
                                            <option class="search__option-room" value="3">1 room, 1 guests</option>
                                            <option class="search__option-room" value="4">3 room, 6 guests</option>
                                        </select>
                                    </fieldset>
                                </div>
                                <div class="search__button">
                                    <input class="search__input-code" type="text" placeholder="+ Add Promo Code"/>
                                    <button class="search__btn search__btn_build">Show Places</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <section class="recent">
                <div class="container">
                    <h1 class="recent__titel">Your recent searches</h1>
                    <div class="recent__content">
                        <a href="#" class="trip__link">
                            <div class="trip__card">
                                <img class="trip__card-img" src="img/index/trip/1.jpg" alt="Image"/>
                                <div class="trip__info">
                                    <h3 class="trip__info-titel">Istanbul, Turkey</h3>
                                    <p class="trip__info-text">Flights • Hotels • Resorts</p>
                                </div>
                            </div>
                        </a>
                        <a href="#" class="trip__link">
                            <div class="trip__card">
                                <img class="trip__card-img" src="img/index/trip/2.jpg" alt="Image"/>
                                <div class="trip__info">
                                    <h3 class="trip__info-titel">Sydney, Australia</h3>
                                    <p class="trip__info-text">Flights • Hotels • Resorts</p>
                                </div>
                            </div>
                        </a>
                        <a href="#" class="trip__link">
                            <div class="trip__card">
                                <img class="trip__card-img" src="img/index/trip/3.jpg" alt="Image"/>
                                <div class="trip__info">
                                    <h3 class="trip__info-titel">Baku, Azerbaijan</h3>
                                    <p class="trip__info-text">Flights • Hotels • Resorts</p>
                                </div>
                            </div>
                        </a>
                        <a href="#" class="trip__link">
                            <div class="trip__card">
                                <img class="trip__card-img" src="img/index/trip/4.jpg" alt="Image"/>
                                <div class="trip__info">
                                    <h3 class="trip__info-titel">Malé, Maldives</h3>
                                    <p class="trip__info-text">Flights • Hotels • Resorts</p>
                                </div>
                            </div>
                        </a>
                        <a href="#" class="trip__link">
                            <div class="trip__card">
                                <img class="trip__card-img" src="img/index/trip/5.jpg" alt="Image"/>
                                <div class="trip__info">
                                    <h3 class="trip__info-titel">Paris, France</h3>
                                    <p class="trip__info-text">Flights • Hotels • Resorts</p>
                                </div>
                            </div>
                        </a>
                        <a href="#" class="trip__link">
                            <div class="trip__card">
                                <img class="trip__card-img" src="img/index/trip/6.jpg" alt="Image"/>
                                <div class="trip__info">
                                    <h3 class="trip__info-titel">New York, US</h3>
                                    <p class="trip__info-text">Flights • Hotels • Resorts</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
            <section class="travel-info">
                <div class="container">
                    <div class="heading">
                        <div class="heading__inner">
                            <h1 class="heading__titel">Fall into travel</h1>
                            <h4 class="heading__subtitel">Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination.</h4>
                        </div>
                        <a href="hotel-listing.html" class="heading__link-btn">See All</a>
                    </div>
                    <div class="travel">
                        <div class="travel__card">
                            <div class="travel__inner">
                                <div class="travel__info">
                                    <div class="tarvel__heading">
                                        <h3 class="travel__titel">Melbourne</h3>
                                        <p class="travel__text">An amazing journey</p>
                                    </div>
                                    <p class="travel__priсe">$ 700</p>
                                </div>
                                <button href="#" class="travel__btn">Book Flight</button>
                            </div>
                        </div>
                        <div class="travel__card travel__card_paris">
                            <div class="travel__inner">
                                <div class="travel__info">
                                    <div class="tarvel__heading">
                                        <h3 class="travel__titel">Paris</h3>
                                        <p class="travel__text">A Paris Adventure</p>
                                    </div>
                                    <p class="travel__priсe">$ 600</p>
                                </div>
                                <button href="#" class="travel__btn">Book Flight</button>
                            </div>
                        </div>
                        <div class="travel__card travel__card_london">
                            <div class="travel__inner">
                                <div class="travel__info">
                                    <div class="tarvel__heading">
                                        <h3 class="travel__titel">London</h3>
                                        <p class="travel__text">London eye adventure</p>
                                    </div>
                                    <p class="travel__priсe">$ 350</p>
                                </div>
                                <button href="#" class="travel__btn">Book Flight</button>
                            </div>
                        </div>
                        <div class="travel__card travel__card_columbia">
                            <div class="travel__inner">
                                <div class="travel__info">
                                    <div class="tarvel__heading">
                                        <h3 class="travel__titel">Columbia</h3>
                                        <p class="travel__text">Amazing streets</p>
                                    </div>
                                    <p class="travel__priсe">$ 700</p>
                                </div>
                                <button href="#" class="travel__btn">Book Flight</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="traveling">
                <div class="container">
                    <div class="heading">
                        <div class="heading__inner">
                            <h1 class="heading__titel">Fall into travel</h1>
                            <h4 class="heading__subtitel">Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination.</h4>
                        </div>
                        <a href="#" class="heading__link-btn">See All</a>
                    </div>
                    <div class="traveling__content">
                        <div class="traveling__info">
                            <div class="traveling__inner">
                                <h1 class="traveling__titel">Backpacking Sri Lanka</h1>
                                <div class="traveling__total">
                                    <p class="traveling__total-text">From</p>
                                    <p class="traveling__price">$ 700</p>
                                </div>
                            </div>
                            <p class="traveling__text">Traveling is a unique experience as it's the best way to unplug from the pushes and pulls of daily life. It helps us to forget about our problems, frustrations, and fears at home. During our journey, we experience life in different ways. We explore new places, cultures, cuisines, traditions, and ways of living.</p>
                            <button class="traveling__btn">Book Flight</button>
                        </div>
                        <div class="traveling__image">
                            <img class="traveling__img" src="img/flight/t1.jpg" alt="#"/>
                        </div>
                        <div class="traveling__image">
                            <img class="traveling__img" src="img/flight/t2.jpg" alt="#"/>
                        </div>
                        <div class="traveling__image">
                            <img class="traveling__img" src="img/flight/t3.jpg" alt="#"/>
                        </div>
                        <div class="traveling__image">
                            <img class="traveling__img" src="img/flight/t4.jpg" alt="#"/>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        @@include("chunk/footer.html")
    </div>

            </Container>

        </>
    )

}

export default homepage;



