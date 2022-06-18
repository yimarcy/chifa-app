import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";
import childRoutes from './childRoutes';

function App() {
  return (
    <div className="App">
      <header>
      <Link to="/about">About</Link> |{" "}
      <Link to="/expenses">Expenses</Link>
      </header>
      { childRoutes }
    </div>
  );
}

export default App;
