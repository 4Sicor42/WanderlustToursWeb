import { Container } from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter"
function App() {
  return (
    <BrowserRouter>
      <AppRouter/>
  
      <Header />
      <Container maxWidth={false} className="container">
        <Home />
      </Container>
      <Footer />
      </BrowserRouter>
  );
}

export default App;
