import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import Cart from "./Components/Cart";



function App() {

  return (
    <>
      <BrowserRouter>
       
        <Header />
        <Routes>
          <Route  path="/"  element={<Home/>}  />
          <Route  path="/menu"  element={<Menu/>} />
          <Route  path="/cart"  element={<Cart/>} />
        </Routes>


      </BrowserRouter>


    </>

  );
}

export default App;

