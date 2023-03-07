import './SpecificBook.css';
import { Link } from 'react-router-dom';
import Header from '../header/Header.js';
import Footer from '../footer/Footer.js';

export default function SpecificBook() {

    return (
      <div className="specific-book">
         <Header />
           <div className="container">
        <section className="container">
          <div>
            <h1 className="hidden">Book description</h1>
            <img
              className="image"
              src="/images/angular_up_and_running.jpg"
              alt="Обкладинка книги"
            />
            <p className="short-description">
              Description: A book providing an introduction to the
              Javascript language and programming in general.
            </p>
          </div>
          <div>
            <ul>
              <li>Book name:<p className="title"></p></li>
              <li>Book author:<p className="author"></p></li>
              <li>Book description:<p className="description"></p></li>
            </ul>
          </div>
        </section>
        <section className="about-price">
          <h1 className="hidden">About price</h1>
          <form className="form">
            <div className="columns">
              <div className="left-column">
                <p>Price,$</p>
                <label for="count">Count</label>
                <p>Total price, $</p>
              </div>
              <div className="right-column">
                <span className="price"></span>
                <input
                  type="number"
                  id="count"
                  name="count"
                  min="1"
                  max="42"
                  value="1"
                  className="count-input"
                />
                <span className="total-price"></span>
              </div>
            </div>
            <Link to="/cart"><button className="btn add-to-cart" type="button">Add to cart</button></Link>
          </form>
        </section>
      </div> 
      <Footer />  
      </div>
    );
    
  }