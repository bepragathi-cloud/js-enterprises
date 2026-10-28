import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'Wholesale Order',
    message: ''
  });

  const products = [
    {
      id: 1,
      title: 'Organic Turmeric Powder',
      subtitle: 'High Curcumin Grade',
      desc: 'Sourced directly from organic farms. Triple-ground to preserve natural golden color, essential oils, and rich aroma.',
      tag: 'Best Seller',
      localImage: '/images/turmeric.jpg',
      fallbackImage: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80',
      specs: ['100% Pure', 'High Curcumin', 'No Additives']
    },
    {
      id: 2,
      title: 'Premium Red Chilli',
      subtitle: 'Rich Color & Natural Heat',
      desc: 'Sun-dried red chillies processed under strict hygienic standards. Delivers vibrant natural color and balanced spice.',
      tag: 'High Demand',
      localImage: '/images/chilli.jpg',
      fallbackImage: 'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?auto=format&fit=crop&w=800&q=80',
      specs: ['Sun Dried', 'Vibrant Red', 'Stemless Grade']
    },
    {
      id: 3,
      title: 'Natural Spice Collection',
      subtitle: 'Artisanal Whole & Ground',
      desc: 'Curated mix of whole and blended spices crafted for commercial kitchens, retail buyers, and everyday cooking.',
      tag: 'Custom Pack',
      localImage: '/images/spices.jpg',
      fallbackImage: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80',
      specs: ['Wholesale Ready', 'Aroma Sealed', 'Custom Grinds']
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && (formData.email || formData.phone)) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
      setFormData({ name: '', email: '', phone: '', inquiryType: 'Wholesale Order', message: '' });
    }
  };

  const handleImageError = (e, fallbackUrl) => {
    e.target.onerror = null;
    e.target.src = fallbackUrl;
  };

  return (
    <div className="site-wrapper">
      {/* HEADER / NAVIGATION */}
      <header className="navbar-header">
        <nav className="navbar container">
          <a href="#home" className="brand-logo">
            <span className="logo-badge">🌿</span>
            <div className="brand-titles">
              <span className="brand-name">JS ENTERPRISES</span>
              <span className="brand-subtext">Organic Spices & Wholesale</span>
            </div>
          </a>

          <div className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
            <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="#products" onClick={() => setMobileMenuOpen(false)}>Products</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>About Us</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            <a href="#contact" className="btn btn-primary btn-sm" onClick={() => setMobileMenuOpen(false)}>
              Get Quote
            </a>
          </div>

          <button 
            className="mobile-hamburger" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation"
          >
            <span className={`bar ${mobileMenuOpen ? 'active' : ''}`}></span>
          </button>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section id="home" className="hero-section">
        <div className="container hero-grid">
          <div className="hero-text-block">
            <span className="pill-badge">✨ 100% Certified Organic Quality</span>
            <h1 className="hero-heading">
              Bringing Nature’s Finest Flavours to Your Kitchen
            </h1>
            <p className="hero-lead">
              Trusted supplier of pure, unadulterated organic spices. We supply retail buyers and bulk wholesale partners with guaranteed fresh taste and uncompromising quality.
            </p>
            
            <div className="hero-btn-group">
              <a href="#products" className="btn btn-primary">Explore Products</a>
              <a href="#contact" className="btn btn-outline">Request Bulk Price</a>
            </div>

            <div className="hero-features-row">
              <div className="hero-feature">
                <strong>100% Pure</strong>
                <span>No Artificial Dyes</span>
              </div>
              <div className="feature-divider"></div>
              <div className="hero-feature">
                <strong>Flexible Supply</strong>
                <span>Retail & Wholesale</span>
              </div>
              <div className="feature-divider"></div>
              <div className="hero-feature">
                <strong>Strict QC</strong>
                <span>Hygienically Packed</span>
              </div>
            </div>
          </div>

          <div className="hero-image-block">
            <div className="hero-image-frame">
              <img 
                src="/images/spices.jpg" 
                onError={(e) => handleImageError(e, 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80')}
                alt="JS Enterprises Spices Showcase" 
              />
              <div className="hero-floating-card">
                <span className="floating-icon">🌱</span>
                <div>
                  <strong>Direct From Source</strong>
                  <p>Farm fresh & unadulterated</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section id="products" className="products-section">
        <div className="container">
          <div className="section-title-wrapper text-center">
            <span className="section-category">Our Product Range</span>
            <h2 className="section-title">Nature's Finest Ingredients</h2>
            <p className="section-description">
              Handpicked and processed under strict hygiene controls to retain natural oils, color, and rich flavor.
            </p>
          </div>

          <div className="product-cards-grid">
            {products.map((item) => (
              <div className="product-card" key={item.id}>
                <div className="product-image-wrap">
                  <span className="product-tag">{item.tag}</span>
                  <img 
                    src={item.localImage} 
                    onError={(e) => handleImageError(e, item.fallbackImage)}
                    alt={item.title} 
                  />
                </div>
                <div className="product-card-body">
                  <span className="product-subhead">{item.subtitle}</span>
                  <h3 className="product-title">{item.title}</h3>
                  <p className="product-desc">{item.desc}</p>
                  
                  <div className="spec-tags">
                    {item.specs.map((spec, idx) => (
                      <span className="spec-pill" key={idx}>✓ {spec}</span>
                    ))}
                  </div>

                  <a href="#contact" className="btn btn-card">
                    Enquire Now →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="about-section">
        <div className="container about-grid">
          <div className="about-image-side">
            <div className="about-image-card">
              <img 
                src="https://images.unsplash.com/photo-1509358271058-acd01cc9386a?auto=format&fit=crop&w=800&q=80" 
                alt="Spice Sourcing and Quality" 
              />
              <div className="about-experience-badge">
                <strong>JS</strong>
                <span>Enterprises</span>
              </div>
            </div>
          </div>

          <div className="about-content-side">
            <span className="section-category">About Us</span>
            <h2 className="section-title">Quality Spices. Authentic Flavours.</h2>
            <p className="about-text">
              JS Enterprises is dedicated to providing superior-grade organic spices to households, kitchens, and commercial distributors. We focus on purity, authentic taste, and dependable service.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">🌿</div>
                <div>
                  <h4>100% Organic Sourcing</h4>
                  <p>Procured directly from growers with zero chemical preservatives.</p>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon">📦</div>
                <div>
                  <h4>Retail & Bulk Wholesale</h4>
                  <p>Flexible packaging tailored for individual retail or large institutional needs.</p>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon">🛡️</div>
                <div>
                  <h4>Strict Quality Assurance</h4>
                  <p>Triple-checked for purity, natural color, and essential oil retention.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info-side">
              <span className="section-category light">Get In Touch</span>
              <h2 className="section-title light">Let's Connect & Discuss Your Order</h2>
              <p className="contact-lead">
                Have questions about our products, custom packaging, or wholesale prices? Reach out directly or drop us a message.
              </p>

              <div className="contact-cards-list">
                <div className="contact-card">
                  <span className="card-icon">📞</span>
                  <div>
                    <label>Phone / WhatsApp</label>
                    <p>+90 89460 03502</p>
                  </div>
                </div>

                <div className="contact-card">
                  <span className="card-icon">✉️</span>
                  <div>
                    <label>Email Address</label>
                    <p>Karthiagri@gmail.com</p>
                  </div>
                </div>

                <div className="contact-card">
                  <span className="card-icon">📍</span>
                  <div>
                    <label>Location</label>
                    <p>JS Enterprises Industrial Park, Tamil Nadu, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-side">
              <div className="form-box">
                <h3>Send Us an Enquiry</h3>
                
                {submitted && (
                  <div className="alert-success">
                    ✅ Thank you! Your enquiry has been received. We will contact you shortly.
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Your Name *</label>
                    <input 
                      type="text" 
                      name="name" 
                      required 
                      placeholder="e.g. Rahul Kumar"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Email Address</label>
                      <input 
                        type="email" 
                        name="email" 
                        placeholder="rahul@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="form-group">
                      <label>Phone Number *</label>
                      <input 
                        type="tel" 
                        name="phone" 
                        required 
                        placeholder="+91 00000 00000"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Inquiry Type</label>
                    <select 
                      name="inquiryType" 
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                    >
                      <option value="Wholesale Order">Wholesale Bulk Order</option>
                      <option value="Retail Purchase">Retail Purchase</option>
                      <option value="Distributorship">Distributorship / Partnership</option>
                      <option value="General Question">General Question</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Message / Required Quantity</label>
                    <textarea 
                      name="message" 
                      rows="4" 
                      placeholder="Specify required quantity or any special instructions..."
                      value={formData.message}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary btn-full">
                    Submit Requirement
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="container footer-top">
          <div className="footer-brand">
            <div className="brand-logo">
              <span className="logo-badge">🌿</span>
              <span className="brand-name light">JS ENTERPRISES</span>
            </div>
            <p>Bringing pure, organic, and aromatic spices directly to retail and wholesale markets.</p>
          </div>

          <div className="footer-columns">
            <div className="footer-col">
              <h4>Navigation</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#products">Products</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Products</h4>
              <ul>
                <li><a href="#products">Organic Turmeric</a></li>
                <li><a href="#products">Red Chilli Powder</a></li>
                <li><a href="#products">Spice Collection</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container footer-bottom-flex">
            <p>© {new Date().getFullYear()} JS Enterprises. All rights reserved.</p>
            <p>Designed for Quality & Excellence</p>
          </div>
        </div>
      </footer>
    </div>
  );
}