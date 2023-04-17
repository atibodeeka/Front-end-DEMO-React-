import React from 'react';
import { Link } from 'react-router-dom';
import './ShopLogo.css';

const ShopLogo = () => {
  return (
    <div className="shop-header">
      <Link to="/"><h1>John's Book Store</h1></Link>
      <h2><Link to="/books">Books</Link></h2>
      <nav>
        <ul>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default ShopLogo;