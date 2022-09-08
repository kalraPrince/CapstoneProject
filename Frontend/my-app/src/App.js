
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import Product from "./Pages/ProductSlider/product";
import SofaChairs from './Pages/Category/Sofachairs'
import Light from "./Pages/Category/Lighting";
import Garden from "./Pages/Category/Garden";
import Dinning from "./Pages/Category/Dinning";
import Decor from "./Pages/Category/Decor";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login></Login>}></Route>
          < Route path="register" element={<Register></Register>}></Route>
          <Route path="product" element={<Product></Product>}></Route>
          <Route path="Sofachairs" element={<SofaChairs></SofaChairs>}></Route>
          <Route path="Lighting" element={<Light></Light>}></Route>
          <Route path="Garden" element={<Garden></Garden>}></Route>
          <Route path="Dinning" element={<Dinning></Dinning>}></Route>
          <Route path="Decor" element={<Decor></Decor>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
