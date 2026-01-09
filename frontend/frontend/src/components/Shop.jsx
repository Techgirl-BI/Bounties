import rice from "../assets/rice.png";
import flour from "../assets/flour.jpg";
import milk from "../assets/milk.jpg";
import oil from "../assets/oil.jpg";
import spagg from "../assets/spagg.jpg";
import tomato from "../assets/tomato.jpg";
import "../styles/shop.css";

const Shop = () => {
  const shopItems = [
    { image: rice, title: "Rice" },
    { image: oil, title: "Vegetable Oil" },
    { image: milk, title: "Milk" },
    { image: flour, title: "Flour" },
    { image: spagg, title: "Pasta" },
    { image: tomato, title: "Tomato Paste" },
  ];

  const products = [
    { image: rice, title: "Rice", price: "₦4,000" },
    { image: oil, title: "Vegetable Oil", price: "₦4,000" },
    { image: milk, title: "Milk", price: "₦4,000" },
    { image: flour, title: "Flour", price: "₦4,000" },
    { image: spagg, title: "Pasta", price: "₦4,000" },
    { image: tomato, title: "Tomato Paste", price: "₦4,000" },
    { image: spagg, title: "Pasta", price: "₦4,000" },
    { image: tomato, title: "Tomato Paste", price: "₦4,000" },
  ];

  return (
    <section className="shop-page">
      {/* Shop Categories */}
      <div className="shop-categories">
        {shopItems.map((item, index) => (
          <div className="shop-card" key={index}>
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>

      {/* Products Header */}
      <div className="products-intro">
        <h2>Our Products</h2>
        <p>
          Pick up your digital basket and fill it with our variety of products
          available at our store. Get them delivered to your doorstep, enjoy a
          healthy life, and special perks on your first 5 orders!
        </p>
      </div>

      {/* Products Grid */}
      <div className="products-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p className="price">{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Shop;
