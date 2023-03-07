import React from 'react';
import './BookList.css';
import data from './books.json';
import Header from '../header/Header.js';
import Card from '../card/Card.js';

export default function BookList() {
  console.log(data.books);
  console.log(typeof(data.books));

    return (
      <div className="book-list">
        <Header />
    <div>
        <form className="form-search"> 
            <input type="text" name="text" className="search-book" placeholder="Search by bookname"/>
            <input type="submit" name="submit" className="search" value="Search"/>
            <input type="text" name="text" className="search-price" placeholder="Price"/>
        </form>
        <div className="content">
        {data.books.map((elem) => <Card item={elem} key={elem.id} />)}
        </div>
    </div>  
      </div>
    );
    
  }