import './Header.css';
import { Link } from 'react-router-dom';
import cart from './images/cart.svg';
import avatar from './images/avatar.png';

export default function Header() {

    return (
      <div className="header">
        <nav className="nav">
          <h2 className="h2">JS BAND STORE/ Anna Lapko</h2>
          <div className="nav-wrapper">
          <Link to="/cart">
              <img
                src={cart}
                alt="Лого кошика"
                width="30px"
                height="30px"
            /></Link> 
            <button type="submit" className="btn1">Sign-out</button>
            <img
              src={avatar}
              alt="Лого користувача"
              width="30px"
              height="30px"
            />
            <span>Username</span>
          </div>
        </nav>   
      </div>
    );
    
  }