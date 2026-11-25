
import React, { useState } from "react";
import "./App.css";

const perfumes = [
  {
    id: 1,
    name: "Midnight Oud",
    category: "Men",
    price: 2499,
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 2,
    name: "Rose Velvet",
    category: "Women",
    price: 1899,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 3,
    name: "Golden Aura",
    category: "Unisex",
    price: 2199,
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 4,
    name: "Royal Essence",
    category: "Men",
    price: 2799,
    image: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 5,
    name: "Bloom Mist",
    category: "Women",
    price: 1699,
    image: "/assets/images/bloom.jpg",
  },
  {
    id: 6,
    name: "Amber Woods",
    category: "Unisex",
    price: 2299,
    image: "/assets/images/amber.jpg",
  },
];

function Header({ page, navigate, cartCount }) {
  const links = [
    ["Home", "home"],
    ["Perfumes", "gallery"],
    ["About", "about"],
    ["Services", "services"],
    ["Contact", "contact"],
  ];

  return (
    <header className="site-header">
      <button className="brand" onClick={() => navigate("home")}>
        <span className="brand-mark">FA</span>
        <span>
          <strong>FRAGRANCE</strong>
          <small>AVENUE</small>
        </span>
      </button>

      <nav className="main-nav">
        {links.map(([label, target]) => (
          <button
            key={target}
            className={page === target ? "nav-link active" : "nav-link"}
            onClick={() => navigate(target)}
          >
            {label}
          </button>
        ))}
      </nav>

      <button className="cart-button" onClick={() => navigate("cart")}>
        Bag ({cartCount})
      </button>
    </header>
  );
}

function ProductCard({ product, addToCart }) {
  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img src={product.image} alt={product.name} />
        <span className="product-tag">{product.category}</span>
      </div>
      <div className="product-info">
        <p className="product-category">FRAGRANCE AVENUE</p>
        <h3>{product.name}</h3>
        <p className="product-price">
          ₹{product.price.toLocaleString("en-IN")}
        </p>
        <button
          className="outline-button"
          onClick={() => addToCart(product)}
        >
          Add to Bag
        </button>
      </div>
    </article>
  );
}

function Home({ navigate, addToCart }) {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">THE ART OF FINE FRAGRANCE</p>
          <h1>
            A Scent That
            <br />
            <span>Defines You.</span>
          </h1>
          <p className="hero-description">
            Discover captivating fragrances crafted to leave a lasting
            impression. Find the scent that tells your story.
          </p>
          <button
            className="gold-button"
            onClick={() => navigate("gallery")}
          >
            EXPLORE COLLECTION
          </button>
        </div>

        <div className="hero-visual">
          <img
            src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1000&q=85"
            alt="Luxury perfume collection"
          />
          <span className="hero-caption">
            YOUR SIGNATURE. YOUR SCENT.
          </span>
        </div>
      </section>

      <section className="benefits">
        <div><strong>✦</strong><span>Curated Fragrances</span></div>
        <div><strong>✧</strong><span>Elegant Collections</span></div>
        <div><strong>◇</strong><span>Perfect for Gifting</span></div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">DISCOVER YOUR SIGNATURE</p>
          <h2>Featured Fragrances</h2>
          <p>Find your next unforgettable scent.</p>
        </div>

        <div className="product-grid">
          {perfumes.slice(0, 3).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>

        <div className="center-button">
          <button
            className="gold-button"
            onClick={() => navigate("gallery")}
          >
            VIEW ALL PERFUMES
          </button>
        </div>
      </section>

      <section className="quote-section">
        <p className="eyebrow">MORE THAN A FRAGRANCE</p>
        <h2>“Make memories. Leave a beautiful trail.”</h2>
        <button
          className="text-button"
          onClick={() => navigate("about")}
        >
          DISCOVER OUR STORY →
        </button>
      </section>
    </>
  );
}

function Gallery({ addToCart }) {
  const [category, setCategory] = useState("All");

  const filteredPerfumes =
    category === "All"
      ? perfumes
      : perfumes.filter((product) => product.category === category);

  return (
    <section className="section page-section">
      <div className="section-heading">
        <p className="eyebrow">THE FRAGRANCE COLLECTION</p>
        <h1>Find Your Signature Scent</h1>
        <p>Explore fragrances for every mood and moment.</p>
      </div>

      <div className="filter-buttons">
        {["All", "Men", "Women", "Unisex"].map((item) => (
          <button
            key={item}
            className={category === item ? "filter active-filter" : "filter"}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {filteredPerfumes.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section page-section">
      <div className="about-layout">
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=900&q=80"
            alt="Elegant perfume bottle"
          />
        </div>

        <div className="about-copy">
          <p className="eyebrow">OUR STORY</p>
          <h1>Fragrance Is Your Invisible Signature.</h1>
          <p>
            Welcome to Fragrance Avenue, a destination for discovering
            beautiful scents and expressing your individuality.
          </p>
          <p>
            From rich woody notes to delicate florals and refreshing
            fragrances, our curated collection helps you find a scent for
            every occasion.
          </p>
          <p>
            We believe the right fragrance is more than a finishing touch.
            It is a feeling, a memory, and a part of your identity.
          </p>
        </div>
      </div>
    </section>
  );
}

function Services({ navigate }) {
  const services = [
    {
      icon: "✧",
      title: "Signature Fragrances",
      text: "Explore scents suited to different moods, personalities and occasions.",
    },
    {
      icon: "◇",
      title: "Gift Collections",
      text: "Discover fragrance gift ideas for birthdays and special moments.",
    },
    {
      icon: "✦",
      title: "Fragrance Discovery",
      text: "Browse floral, woody, fresh and oriental fragrance families.",
    },
  ];

  return (
    <section className="section page-section">
      <div className="section-heading">
        <p className="eyebrow">THE FRAGRANCE EXPERIENCE</p>
        <h1>Our Services</h1>
        <p>A little luxury for every moment.</p>
      </div>

      <div className="service-grid">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <span className="service-icon">{service.icon}</span>
            <h2>{service.title}</h2>
            <p>{service.text}</p>
          </article>
        ))}
      </div>

      <div className="center-button">
        <button
          className="gold-button"
          onClick={() => navigate("gallery")}
        >
          EXPLORE PERFUMES
        </button>
      </div>
    </section>
  );
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="section page-section">
      <div className="section-heading">
        <p className="eyebrow">WE WOULD LOVE TO HEAR FROM YOU</p>
        <h1>Contact Us</h1>
        <p>Have a question? Send us a message.</p>
      </div>

      <div className="contact-layout">
        <div className="contact-details">
          <h2>Let's Talk Fragrance.</h2>
          <p>We are here to help you with your fragrance enquiries.</p>
          <p><strong>Brand</strong><br />Fragrance Avenue</p>
          <p>
            <strong>Email</strong>
            <br />
            hello@fragranceavenue.com
          </p>
          <p className="form-note">
            Replace this sample email with your actual business email.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Your Name
            <input name="name" type="text" placeholder="Enter your name" required />
          </label>
          <label>
            Email Address
            <input name="email" type="email" placeholder="Enter your email" required />
          </label>
          <label>
            Subject
            <input name="subject" type="text" placeholder="How can we help?" required />
          </label>
          <label>
            Message
            <textarea name="message" rows="5" placeholder="Write your message..." required />
          </label>
          <button className="gold-button" type="submit">
            SEND MESSAGE
          </button>
          {submitted && (
            <p className="success-message">
              Thank you! Your form has been submitted in this demo.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function Cart({ cart, removeFromCart, navigate }) {
  const total = cart.reduce((sum, product) => sum + product.price, 0);

  return (
    <section className="section page-section">
      <div className="section-heading">
        <p className="eyebrow">YOUR SELECTED FRAGRANCES</p>
        <h1>Your Shopping Bag</h1>
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Your bag is empty. Find your favourite fragrance.</p>
          <button
            className="gold-button"
            onClick={() => navigate("gallery")}
          >
            SHOP PERFUMES
          </button>
        </div>
      ) : (
        <div className="cart-list">
          {cart.map((product, index) => (
            <div
              className="cart-item"
              key={`${product.id}-${index}`}
            >
              <img src={product.image} alt={product.name} />

              <div className="cart-item-info">
                <h3>{product.name}</h3>
                <p>₹{product.price.toLocaleString("en-IN")}</p>
              </div>

              <button
                className="remove-button"
                onClick={() => removeFromCart(index)}
              >
                Remove
              </button>
            </div>
          ))}

          <h2 className="cart-total">
            Total: ₹{total.toLocaleString("en-IN")}
          </h2>

          <div className="center-button">
            <button
              className="gold-button"
              onClick={() => navigate("order")}
            >
              ORDER NOW →
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

function OrderForm({ cart, navigate, placeOrder }) {
  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    pincode: "",
    payment: "Cash on Delivery",
  });

  const total = cart.reduce((sum, product) => sum + product.price, 0);

  function handleChange(event) {
    const { name, value } = event.target;
    setCustomer((previous) => ({ ...previous, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    placeOrder(customer);
  }

  if (cart.length === 0) {
    return (
      <section className="section page-section empty-cart">
        <h1>Your bag is empty</h1>
        <button className="gold-button" onClick={() => navigate("gallery")}>
          SHOP PERFUMES
        </button>
      </section>
    );
  }

  return (
    <section className="section page-section">
      <div className="section-heading">
        <p className="eyebrow">FRAGRANCE AVENUE</p>
        <h1>Complete Your Order</h1>
        <p>Enter your delivery details below.</p>
      </div>

      <div className="checkout-layout">
        <form className="contact-form checkout-form" onSubmit={handleSubmit}>
          <h2>Customer Details</h2>

          <label>
            Full Name
            <input name="name" value={customer.name} onChange={handleChange} placeholder="Enter your full name" required />
          </label>

          <label>
            Phone Number
            <input name="phone" type="tel" value={customer.phone} onChange={handleChange} placeholder="10-digit mobile number" pattern="[0-9]{10}" maxLength={10} required />
          </label>

          <label>
            Email Address
            <input name="email" type="email" value={customer.email} onChange={handleChange} placeholder="Enter your email" required />
          </label>

          <label>
            Delivery Address
            <textarea name="address" value={customer.address} onChange={handleChange} rows="3" placeholder="House number, street and area" required />
          </label>

          <div className="checkout-row">
            <label>
              City
              <input name="city" value={customer.city} onChange={handleChange} placeholder="Your city" required />
            </label>
            <label>
              PIN Code
              <input name="pincode" value={customer.pincode} onChange={handleChange} placeholder="6-digit PIN" pattern="[0-9]{6}" maxLength={6} required />
            </label>
          </div>

          <label>
            Payment Method
            <select name="payment" value={customer.payment} onChange={handleChange} required>
              <option value="Cash on Delivery">Cash on Delivery (COD)</option>
              <option value="Online Payment Demo">Online Payment (Demo Only)</option>
            </select>
          </label>

          <button className="gold-button" type="submit">
            PLACE ORDER
          </button>

          <p className="form-note">
            Demo only: no real payment or delivery booking is processed.
          </p>
        </form>

        <aside className="order-summary">
          <p className="eyebrow">YOUR SELECTION</p>
          <h2>Order Summary</h2>

          {cart.map((product, index) => (
            <div className="summary-item" key={`${product.id}-${index}`}>
              <img src={product.image} alt={product.name} />
              <div>
                <h3>{product.name}</h3>
                <p>₹{product.price.toLocaleString("en-IN")}</p>
              </div>
            </div>
          ))}

          <div className="summary-total">
            <span>Total Amount</span>
            <strong>₹{total.toLocaleString("en-IN")}</strong>
          </div>

          <button
            type="button"
            className="text-button"
            onClick={() => navigate("cart")}
          >
            ← BACK TO BAG
          </button>
        </aside>
      </div>
    </section>
  );
}

function OrderSuccess({ customer, orderItems, orderNumber, navigate }) {
  const total = orderItems.reduce((sum, product) => sum + product.price, 0);

  return (
    <section className="section page-section order-success">
      <div className="success-icon">✓</div>
      <p className="eyebrow">FRAGRANCE AVENUE</p>
      <h1>Thank You, {customer.name}!</h1>
      <h2>Your demo order is confirmed.</h2>
      <p>Order Reference: {orderNumber}</p>
      <p>
        <strong>Delivery Address:</strong> {customer.address}, {customer.city} - {customer.pincode}
      </p>
      <p><strong>Phone:</strong> {customer.phone}</p>
      <p><strong>Payment:</strong> {customer.payment}</p>
      <h2>Total: ₹{total.toLocaleString("en-IN")}</h2>
      <p className="form-note">
        This is a demo confirmation. No real order or payment has been processed.
      </p>
      <button className="gold-button" onClick={() => navigate("gallery")}>
        CONTINUE SHOPPING
      </button>
    </section>
  );
}

function Footer({ navigate }) {
  return (
    <footer className="site-footer">
      <button className="footer-brand" onClick={() => navigate("home")}>
        FRAGRANCE AVENUE
      </button>
      <p>A scent that stays with you.</p>
      <div className="footer-links">
        <button onClick={() => navigate("about")}>Our Story</button>
        <button onClick={() => navigate("gallery")}>Shop</button>
        <button onClick={() => navigate("contact")}>Contact</button>
      </div>
      <small>
        © {new Date().getFullYear()} Fragrance Avenue. All rights reserved.
      </small>
    </footer>
  );
}

function App() {
  const [page, setPage] = useState("home");
  const [cart, setCart] = useState([]);
  const [customer, setCustomer] = useState(null);
  const [orderItems, setOrderItems] = useState([]);
  const [orderNumber, setOrderNumber] = useState("");

  function navigate(nextPage) {
    setPage(nextPage);
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  function addToCart(product) {
    setCart((currentCart) => [...currentCart, product]);
    navigate("cart");
  }

  function removeFromCart(indexToRemove) {
    setCart((currentCart) =>
      currentCart.filter((_, index) => index !== indexToRemove)
    );
  }

  function placeOrder(details) {
    setCustomer(details);
    setOrderItems([...cart]);
    setOrderNumber(`FA-${Date.now().toString().slice(-8)}`);
    setCart([]);
    navigate("success");
  }

  let currentPage;

  switch (page) {
    case "gallery":
      currentPage = <Gallery addToCart={addToCart} />;
      break;
    case "about":
      currentPage = <About />;
      break;
    case "services":
      currentPage = <Services navigate={navigate} />;
      break;
    case "contact":
      currentPage = <Contact />;
      break;
    case "cart":
      currentPage = (
        <Cart
          cart={cart}
          removeFromCart={removeFromCart}
          navigate={navigate}
        />
      );
      break;
    case "order":
      currentPage = (
        <OrderForm
          cart={cart}
          navigate={navigate}
          placeOrder={placeOrder}
        />
      );
      break;
    case "success":
      currentPage = customer ? (
        <OrderSuccess
          customer={customer}
          orderItems={orderItems}
          orderNumber={orderNumber}
          navigate={navigate}
        />
      ) : (
        <Home navigate={navigate} addToCart={addToCart} />
      );
      break;
    default:
      currentPage = <Home navigate={navigate} addToCart={addToCart} />;
  }

  return (
    <div className="app">
      <Header page={page} navigate={navigate} cartCount={cart.length} />
      <main>{currentPage}</main>
      <Footer navigate={navigate} />
    </div>
  );
}

export default App;
