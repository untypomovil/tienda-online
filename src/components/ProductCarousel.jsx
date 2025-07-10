import { Link } from 'react-router-dom';
import productos from '../data/products';
import '../styles/ProductCarousel.css';

function ProductCarousel() {
  return (
    <div className="slider-carousel">
      <h2>Nuestros productos</h2>
      <div className="slider-carousel__track">
        {[...productos, ...productos].map((producto, index) => (
          <div
            key={`${producto.id}-${index}`}
            className="slider-carousel__item"
          >
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="slider-carousel__imagen"
            />
            <h3>{producto.nombre}</h3>
            <p>${producto.precio}</p>
            <Link to={`/producto/${producto.id}`}>
              <button className="slider-carousel__boton">
                Ver producto
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCarousel;