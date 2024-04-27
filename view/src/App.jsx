import React, { useEffect } from "react";

// React Router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Redux imports
import { useDispatch } from "react-redux";
import { loadUser } from "./actions/userAction";

// components imports
import Home from "./components/layout/Home/Home";
import ProductDetails from "./components/layout/product/productDetails.jsx";
import Product from "./components/layout/product/product.jsx";
import MyCart from "./components/layout/cart/mycart.jsx";
import MyOrder from "./components/layout/order/MyOrder";
import Login from "./components/layout/user/login";
import Signup from "./components/layout/user/signup";
import Layout from "./components/layout/layout";
import Account from "./components/layout/user/account.jsx";
import ProtectedRoute from "./components/Route/ProtectedRoute.jsx";
import Shipping from "./components/layout/cart/Shipping.jsx";
import ConfirmOrder from "./components/layout/cart/ConfirmOrder";
import PaymentSuccess from "./components/layout/cart/PaymentSuccess";

// import bootstrap and css file
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";

// creating App component
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/product/:id" element={<ProductDetails />} />
          <Route exact path="/products/" element={<Product />} />
          <Route path="/products/:keyword" element={<Product />} />
          <Route path="/products/category/:category" element={<Product />} />
          <Route exact path="/mycart/" element={<MyCart />} />
        </Route>

        <Route exact path="/" element={<ProtectedRoute />}>
          <Route exact path="/user/account" element={<Account />} />
          <Route exact path="/shipping" element={<Shipping />} />
          <Route exact path="/order/confirm" element={<ConfirmOrder />} />
          <Route exact path="/orders/" element={<MyOrder />} />
          <Route exact path="/payment/success" element={<PaymentSuccess />} />
        </Route>
        <Route exact path="/user/login/" element={<Login />} />
        <Route exact path="/user/signup/" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;