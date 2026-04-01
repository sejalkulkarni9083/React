import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from "./Membership/Login";
import Register from './Membership/Register';
import List from './ProductCatalog/List';
import Goodbye from './Layout/Goodbye';
import Hello from './Layout/Hello';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Hello />} />
          <Route path="/Goodbye" element={<Goodbye />} />
           <Route path="/Login" element={<Login />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;

function BasicRouting() {
  return (
    <div>
      <h1>Transflower Store</h1>

      <Router>
        <Link to="/Home">Home</Link> |
        <Link to="/Contact">Contact Us</Link> |
        <Link to="/Hello">Hello</Link> |
        <Link to="/Login">Login</Link> |
        <Link to="/Register">Register</Link>|
        <Link to="/Flowers">List</Link>

        <hr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Hello" element={<Hello />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Flowers" element={<List />} />
          <Route path="/Register" element={<Register />} />
        </Routes>

      </Router>
    </div>
  );
}


function Contact(){
  return (
    <div>
    <h2>Transflower Learning pvt Ltd</h2>
    <p>Hollo World</p>
</div>
  );
}


function Home(){
  return(
    
  <div>
    <div className="jumbotron text-center">
      <h1>Transflower Learning Pvt. Ltd.</h1>
      <p>Mentor as a Service</p>
      <p>React JS Learning is a fun</p>
    </div>

    <div className="container">
      <div className="row">

        <div className="col-sm-4">
          <p>Flowers</p>
          <p>Celebrate every moment using flowers</p>
        </div>

        <div className="col-sm-4">
          <p>Fruits</p>
          <p>Enjoy healthy life using fresh fruits</p>
        </div>

        <div className="col-sm-4">
          <Login></Login>
          
        </div>

      </div>
    </div>
  </div>
);

}