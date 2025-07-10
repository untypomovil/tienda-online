// src/pages/ProductsPage.jsx
import ProductList from '../components/ProductList';
import productos from '../data/products';

const ProductsPage = ({ searchTerm }) => {
  return (
    <section className="products-page">
      <h1>Todos los productos</h1>
      <ProductList productos={productos} searchTerm={searchTerm} />
    </section>
  );
};

export default ProductsPage;