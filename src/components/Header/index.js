import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="header-container">
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="logo"
      />
    </div>
    <ul className="links">
      <Link to="/">
        <li className="link">Home</li>
      </Link>
      <Link to="products">
        <li className="link">Products</li>
      </Link>
      <Link to="/cart">
        <li className="link">Cart</li>
      </Link>
      <div>
        <button type="button" className="logout-btn">
          Logout
        </button>
      </div>
    </ul>
  </div>
)

export default Header
