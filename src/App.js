import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainRoute from './screens/routes/mainroute/MainRoute';
import Trackorder from './screens/pages/main/trackorder/Trackorder';
import AuthRoute from './screens/routes/authroute/AuthRoute';
// import EditProfile from './pages/screen/auth/components/Editprofile/EditProfile';
import Login from './screens/pages/auth/components/login/Login';
import Register from './screens/pages/auth/components/register/Register';
import Bestoffer from './screens/pages/main/bestoffer/Bestoffer';
import KidCollection from './screens/pages/main/bestoffer/component/kidcollection/KidCollection';
import WomenCollection from './screens/pages/main/bestoffer/component/womencollection/WomenCollection';
import ManCollection from './screens/pages/main/bestoffer/component/mancollection/ManCollection';
import SingleItem from './screens/pages/main/bestoffer/component/mancollection/components/singleItem/SingleItem';
import Account from './screens/pages/main/account/Account';
import Home from './screens/pages/main/home/Home';
import CartBag from "./screens/pages/components/header/components/addtocart/CartBag"
import Order from './screens/pages/main/account/components/orders/Order';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/track-order" element={<Trackorder />} />
          <Route path="/best-Offers" element={<Bestoffer />} />
          <Route path="/kid-Collection" element={<KidCollection />} />
          <Route path="/woman-Collection" element={<WomenCollection />} />
          <Route path="/man-Collection" element={<ManCollection />} />
          <Route path="/single-Item" element={<SingleItem />} />
          <Route path="/account" element={<Account />} /> 
          <Route path="/cart-bag" element={<CartBag />} />
          <Route path="/order" element={<Order />} />
        
        </Route>

        <Route path="/auth" element={<AuthRoute />}>
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/Register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App;

