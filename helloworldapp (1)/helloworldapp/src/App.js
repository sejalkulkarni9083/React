import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import Container from './Layout/Container';
import Dashboard from './Dashboard';

function App() {
  return (
    <div className="App">
     {/* <Container></Container> */}
     <Dashboard></Dashboard>
    </div>
  );
}

export default App;







