import "./App.css";
import CartProvider from "./contexts/CartContext";
import AboutPage from "./pages/about";
import CartPage from "./pages/cart";
import ContactPage from "./pages/contact";
import HomePage from "./pages/home";
import NotFoundPage from "./pages/notfound";
import ProductPage from "./pages/product";
import ProductsPage from "./pages/products";
import ResumePage from "./pages/resume";
import { BrowserRouter, Route, Routes } from "react-router";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
