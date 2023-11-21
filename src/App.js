import React from "react";
import "./assets/css/style.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Products from "./components/Products";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Menu />
      <Products />
      <Review />
      <Contact />
      <Blog />
      <Footer />
    </>
  );
};

export default App;


// import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import "./assets/css/style.css";
// import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import About from "./components/About";
// import Menu from "./components/Menu";
// import Products from "./components/Products";
// import Review from "./components/Review";
// import Contact from "./components/Contact";
// import Blog from "./components/Blog";
// import Footer from "./components/Footer";

// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Route path="/" exact component={Home} />
//       <Route path="/about" component={About} />
//       <Route path="/menu" component={Menu} />
//       <Route path="/products" component={Products} />
//       <Route path="/review" component={Review} />
//       <Route path="/contact" component={Contact} />
//       <Route path="/blog" component={Blog} />
//       <Footer />
//     </Router>
//   );
// };

// export default App;

