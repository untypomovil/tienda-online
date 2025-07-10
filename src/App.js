import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CartPage from './pages/CartPage';
import ContactPage from './pages/ContactPage';
import Cart from './components/Cart';
import ProductsPage from './pages/ProductsPage';
import ProductDetail from './pages/ProductDetail';
import ProductCarousel from './components/ProductCarousel';
import Banner from './components/Banner';
import MisComprasPage from './pages/MisComprasPage';
import { Link } from 'react-router-dom';
import ChatBot from './components/ChatBot';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [mostrarCarrito, setMostrarCarrito] = useState(false);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const toggleCarrito = () => {
    setMostrarCarrito(!mostrarCarrito);
  };

  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Header onSearch={handleSearch} onCartClick={toggleCarrito} />

      <Routes>
          <Route path="/" element={
              <>
                <Banner />
                <ProductCarousel />

                <div className="inicio-boton">
                  <Link to="/productos">
                    <button className="inicio-boton-productos">🛍️ Ver todos lo productos</button>
                  </Link>
                </div>
              </>
            }
          />

          <Route path="/" element={<Banner />}          />
          <Route path="/productos" element={<ProductsPage searchTerm={searchTerm} />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/producto/:id" element={<ProductDetail />} />
          <Route path="/mis-compras" element={<MisComprasPage />} />              
        <Route path="/carrito" element={<CartPage />} />
      </Routes>
      <Cart />
      <Footer />
      <ChatBot />
    </div>
  </Router>
</CartProvider>
  );
}

export default App;