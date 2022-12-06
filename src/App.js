import { useEffect } from 'react';
import {
    BrowserRouter,
    Route,
    Routes,
    useLocation
} from 'react-router-dom';
import Footer from './components/Footer/Footer';
import CheckoutScreen from './screens/Checkout/CheckoutScreen/CheckoutScreen';
import Confirmation from './screens/Checkout/Confirmation';
import CartMenu from './screens/global/CartMenu';
import NavBar from './screens/global/Navbar';
import Home from './screens/Home/Home';
import ItemDetails from './screens/ItemDetails/ItemDetails';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0,0);
  }, [pathname])

  return null;
}

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <NavBar/>
      <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="item/:itemId" element={<ItemDetails/>} />
          <Route path="/checkout" element={<CheckoutScreen/>} />
          <Route path="/checkout/success" element={<Confirmation/>} />
        </Routes>
        <CartMenu/>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
