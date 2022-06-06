import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import RequiredAuth from "./hoc/RequiredAuth";
import Home from './pages/Home'
import Login from './pages/Login'

function App() {
  return (
    <div className="App">
      {
        // Code here
      }
      <Navbar></Navbar>
      <Routes>
        {/* <Route path="/" element={<Home></Home>}></Route> */}
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/products" element={<RequiredAuth><Products></Products></RequiredAuth>}></Route>
      </Routes>
    </div>
  );
}

export default App;
