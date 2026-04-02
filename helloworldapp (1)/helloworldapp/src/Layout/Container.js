import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import AboutUs from './AboutUs';
import Contact from './Contact';
import Login from "../Membership/Login";
import Register from '../Membership/Register';
import List from '../ProductCatalog/List';
import Goodbye from '../Layout/Goodbye';
import Hello from '../Layout/Hello';
import Cart from '../ShoppingCart/Cart';




function Container() {
  return (
    <div>
      <h1>Transflower Store</h1>

      <Router>
        <Link to="/Home">Home</Link> |
        <Link to="/Contact">Contact Us</Link> |
        <Link to="/AboutUs">About Us</Link> |
        <Link to="/Hello">Hello</Link> |
        <Link to="/Login">Login</Link> |
        <Link to="/Register">Register</Link>|
        <Link to="/Flowers">List</Link> |
         <Link to="/Cart">MyShopping Cart</Link>
        <hr />

        <Routes>
          <Route path="/" element={<Goodbye />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Hello" element={<Hello />} />
          <Route path="/Login" element={<Login />} />
          
          <Route path="/Flowers" element={<List />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<Hello />} />
          <Route path="/Goodbye" element={<Goodbye />} />
        </Routes>

      </Router>
    </div>
  );
}

export default Container;