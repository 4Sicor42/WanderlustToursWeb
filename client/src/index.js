import React from "react";
import ReactDOM from "react-dom/client";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import "./styles/styles";
import theme from "./Theme";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import NotFound from "./pages/NotFound"
import Excursion from "./pages/excursion"
import Search from "./pages/searchExc"
import Home from "./pages/homepage"
import Work from "./pages/work"
import Story from "./pages/story"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/excursion"element={<Excursion/>}/>
          <Route path="/search"element={<Search/>}/>
          <Route path="/story"element={<Story/>}/>
          <Route path="/work"element={<Work/>}/>
          <Route path="*"element={<NotFound/>}/>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

