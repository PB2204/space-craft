import './App.css';
import SignupPage from './pages/SignupPage';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import Cart from './features/cart/Cart';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/Checkout';


const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home></Home>),
  },
  {
    path: "/login",
    element: (<LoginPage></LoginPage>),
  },
  {
    path: "/signup",
    element: (<SignupPage></SignupPage>),
  },
  {
    path: "/cart",
    element: (<CartPage></CartPage>),
  },
  {
    path: "/checkout",
    element: (<CheckoutPage></CheckoutPage>),
  },
]);

function App() {
  return (
    <div className="App">
            <RouterProvider router={router} />
    </div>
  );
}

export default App;
