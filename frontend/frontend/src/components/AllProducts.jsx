import React, { useState } from 'react';
import { ShoppingCart, Plus, Minus, Trash2, Send, Package } from 'lucide-react';
import '../styles/allProduts.css'; // Import the CSS file
import flour from  "../assets/flour.jpg"
import food from  "../assets/foodItems(1).jpg"
import milk from  "../assets/milk.jpg"
import oil from  "../assets/oil.jpg"
import rice from  "../assets/rice.png"
import spagg from  "../assets/spagg.jpg"
import tomato from  "../assets/tomato.jpg"



// Sample products
const SAMPLE_PRODUCTS = [
  { id: 1, name: 'flour', price: 15000, category: 'flour', image: flour },
  { id: 2, name: 'food', price: 25000, category: 'Grains', image: food},
  { id: 3, name: 'milk', price: 3500, category: 'Milk', image: milk },
  { id: 4, name: 'oil', price: 8000, category: 'Oil', image: oil },
  { id: 5, name: 'rice', price: 12000, category: 'Grains', image: rice },
  { id: 6, name: 'spagg', price: 2000, category: 'Pasta', image: spagg },
  { id: 7, name: 'tomatoe', price: 6500, category: 'Tomatoes', image: tomato },
];

// Product Card Component
const ProductCard = ({ product, onAddToCart }) => (
  <div className="card">
    <div className="card-image-wrapper">
      <img src={product.image} alt={product.name} />
      <span className="badge">{product.category}</span>
    </div>
    <div className="card-body">
      <h3>{product.name}</h3>
      <p className="price">₦{product.price.toLocaleString()}</p>
      <button className="btn btn-primary" onClick={() => onAddToCart(product)}>
        <Plus size={18} /> Add to Cart
      </button>
    </div>
  </div>
);

// Cart Item Component
const CartItem = ({ item, onUpdateQuantity, onRemove }) => (
  <div className="cart-item">
    <div className="cart-item-header">
      <div>
        <h4>{item.name}</h4>
        <p>₦{item.price.toLocaleString()} each</p>
      </div>
      <button className="btn btn-danger" onClick={() => onRemove(item.id)} title="Remove item">
        <Trash2 size={18} />
      </button>
    </div>
    <div className="cart-item-body">
      <div className="cart-controls">
        <button className="qty-btn" onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>
          <Minus size={16} />
        </button>
        <span>{item.quantity}</span>
        <button className="qty-btn" onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>
          <Plus size={16} />
        </button>
      </div>
      <div className="cart-subtotal">
        <p>Subtotal</p>
        <p>₦{(item.price * item.quantity).toLocaleString()}</p>
      </div>
    </div>
  </div>
);

// Main App Component
export default function WhatsAppShoppingCart() {
  const [cart, setCart] = useState([]);
  const [whatsappNumber, setWhatsappNumber] = useState('2348012345678');
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    setCart(prevCart => {
      const existing = prevCart.find(item => item.id === product.id);
      if (existing) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    setShowCart(true);
  };

  const updateQuantity = (id, qty) => {
    if (qty < 1) return removeFromCart(id);
    setCart(prev => prev.map(item => item.id === id ? { ...item, quantity: qty } : item));
  };

  const removeFromCart = (id) => setCart(prev => prev.filter(item => item.id !== id));
  const clearCart = () => { if (window.confirm('Clear cart?')) setCart([]); };

  const getTotalItems = () => cart.reduce((sum, item) => sum + item.quantity, 0);
  const getTotalPrice = () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const sendToWhatsApp = () => {
    if (!whatsappNumber.trim()) return alert('Please enter WhatsApp number');
    if (cart.length === 0) return alert('Your cart is empty');

    let message = '🛒 *NEW ORDER REQUEST*\n━━━━━━━━━━━━━━━━━━━\n\n';
    cart.forEach((item, i) => {
      message += `${i + 1}. *${item.name}*\n   💰 Price: ₦${item.price.toLocaleString()}\n   📦 Quantity: ${item.quantity}\n   💵 Subtotal: ₦${(item.price * item.quantity).toLocaleString()}\n\n`;
    });
    message += `━━━━━━━━━━━━━━━━━━━\n📊 *Total Items:* ${getTotalItems()}\n💰 *TOTAL AMOUNT:* ₦${getTotalPrice().toLocaleString()}\n\n✅ Please confirm this order.\nThank you for shopping with us! 🙏`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encoded}`, '_blank');
  };

  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="container header-content">
          <div className="logo">
            <Package size={32} />
            My Shop
          </div>
          <button className="btn btn-primary" onClick={() => setShowCart(!showCart)}>
            <ShoppingCart size={20} />
            Cart ({getTotalItems()})
          </button>
        </div>
      </header>

      <main className="container grid grid-3">
        {/* Products */}
        <div className="grid grid-2">
          {SAMPLE_PRODUCTS.map(product => (
            <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
          ))}
        </div>

        {/* Cart */}
        {showCart && (
          <div className="cart">
            <div>
              <label>WhatsApp Number</label>
              <input type="tel" value={whatsappNumber} onChange={e => setWhatsappNumber(e.target.value)} />
            </div>
            <div>
              {cart.length === 0 ? (
                <div className="empty">
                  <ShoppingCart size={48} />
                  <p>Your cart is empty</p>
                </div>
              ) : (
                cart.map(item => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onUpdateQuantity={updateQuantity}
                    onRemove={removeFromCart}
                  />
                ))
              )}
            </div>
            {cart.length > 0 && (
              <>
                <div className="summary">
                  <p>Total Items: {getTotalItems()}</p>
                  <p className="total">₦{getTotalPrice().toLocaleString()}</p>
                </div>
                <button className="btn btn-primary" onClick={sendToWhatsApp}>
                  <Send size={20} /> Send Order via WhatsApp
                </button>
              </>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
