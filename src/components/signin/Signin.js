import './Signin.css';
import { Link } from 'react-router-dom';
import avatar from './images/avatar.png';
import Header from '../header/Header.js';
import Footer from '../footer/Footer.js';

export default function Signin() {

    return (
      <div className="signin">
        <Header />
             <img src={avatar} alt="Зображення аватару" className="center avatar"/>
        <form action="/" method="get">
           <div>
                <label className="center label" htmlFor="Username"><b>Username</b></label>
            </div>
            <div>
                <input className="center input" type="text" id="Username" name="Username" placeholder="type Username"/>
           </div>
           <div className="container-btn">
           <Link to="/book-list" className="link center"><button type="submit" className="btn-signin center">Sign-in</button></Link>
           </div>
        </form> 
        <Footer />
      </div>
    );
    
  }