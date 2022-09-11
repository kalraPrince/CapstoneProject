import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import Product from "./Pages/ProductSlider/product";
import Sofachairs from './Pages/Category/Sofachairs'
import Lighting from "./Pages/Category/Lighting";
import Garden from "./Pages/Category/Garden";
import Dinning from "./Pages/Category/Dinning";
import Decor from "./Pages/Category/Decor";
import Cart from "./Pages/Cart/Cart"
import UserProfile from "./Pages/UserProfile";
import SpectatorNavbar from './Pages/Navbar/SpectatorNavbar';
import UserNavbar from './Pages/Navbar/UserNavbar';
import AdminNavbar from './Pages/Navbar/AdminNavbar';
import CardProfile from './Pages/Navbar/Profile';
import Footer from './Components/Footer';
import AboutInfo from './Pages/About';
import SalesTable from './Pages/Sales/Sales';
import StockTable from './Pages/Stocks/Stock';
import UserDashBoard from "./Pages/Dashboard/UserDashBoard";
import NoMatch from "./Pages/NoMatch";
import WishList from "./Pages/WishList/WishListItem";

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <SpectatorNavbar/> */}
      <UserNavbar/>
      {/*<AdminNavbar/> */}
        <Routes>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path='/' element={<UserDashBoard/>}/> 
          <Route path="/product" element={<Product></Product>}></Route>
          <Route path="/Sofachairs" element={<Sofachairs></Sofachairs>}></Route>
          <Route path="/Lighting" element={<Lighting></Lighting>}></Route>
          <Route path="/Garden" element={<Garden></Garden>}></Route>
          <Route path="/Dinning" element={<Dinning></Dinning>}></Route>
          <Route path="/Decor" element={<Decor></Decor>}></Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<WishList/>}/>
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/profile" element={<CardProfile />} />
          <Route path="/about" element={<AboutInfo />} />
          <Route path="/sales" element={<SalesTable />} />
          <Route path="/stock" element={<StockTable />} />
          <Route path="*" element={<NoMatch/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
