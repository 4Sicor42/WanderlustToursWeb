import React from 'react';
import { Container } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../components/Home";
import Reviews from"../components/Reviews"

const homepage = () => {
    return(
        <>
        <Header />
            <Container maxWidth={false} className="container">
                <Home />
                <Reviews/>
            </Container>
        <Footer/>
        </>
    )

}

export default homepage;
