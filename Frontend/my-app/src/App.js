import Slider from "./Componenets/DashBoard/UserDash";
import { Provider } from 'react-redux'
import store from "./Componenets/DashBoard/Store/store";
import UserProduct from "./Componenets/UserProduct";
function App() {
  return (
    <div>
      <Slider></Slider>
      <Provider store={store}>
        <UserProduct></UserProduct>
    </Provider>
     
    </div>
  );
}

export default App;
