import { Route, Routes } from "react-router-dom";
import Footer from "./layout/footer";
import Header from "./layout/header";
import Contact from "./pages/contact";
import Home from "./pages/Home";
import Services from "./pages/services";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Header />
      <Helmet>
        <title>AZCARGO</title>
      </Helmet>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
