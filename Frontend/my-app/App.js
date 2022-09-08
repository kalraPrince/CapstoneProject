import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from "./components/Cart";
import UserProfile from "./components/UserProfile";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='cart' element={<Cart />} />
          <Route path='profile' element={<UserProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
