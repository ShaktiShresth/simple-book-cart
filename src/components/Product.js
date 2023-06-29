import data from "../ourdata/data";
import "../styles/product.css";
import ProductCard from "../components/ProductCard";

const Product = ({ handleClick }) => {
  return (
    <section>
      {data.map((item) => (
        <ProductCard key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
  );
};

export default Product;
