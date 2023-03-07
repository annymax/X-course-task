import { Link } from 'react-router-dom';

export default function Card(props) {

    return (
      <div className="card" id={props.item.id}>
              <img  
              alt={props.item.title}
              src={props.item.image} 
              className="book_img"/>
              <h2 className="book_title">{props.item.title}</h2>
              <div className="price_wrapper">
                <p>Price: {props.item.price} $</p>
                <Link to="/specific-book" className="btn_link">
                  <button className="btn_view">View</button>
                </Link>
              </div> 
      </div>
    );
    
  }