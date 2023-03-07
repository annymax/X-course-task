import './Cart.css';
import Header from '../header/Header.js';
import cart from './images/cart.svg';
import Footer from '../footer/Footer.js';

export default function Cart() {

    return (
      <div className="cart">
        <Header />
           <div className="container-btn">
       <a href="../book-list/index.html" className="btn-purchase">Purchase</a>
        </div>
        <div className="container_cart" id="contcart">
          <div className="container_img">
            <img className="empty-cart" src={cart} alt="Empty cart"/>
          </div>
          <p className="text-cart">Cart empty...</p>
      </div>
      <div className="book_choice">
        <p className="title"></p>
      </div>  
      <Footer />
      </div>
    );
    
  }