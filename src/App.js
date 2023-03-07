import Signin from './components/signin/Signin.js';
import BookList from './components/book-list/BookList.js';
import SpecificBook from './components/specific-book/SpecificBook.js';
import Cart from './components/cart/Cart.js';
import Page404 from './components/page404/Page404.js';
import { HashRouter, Routes, Route } from 'react-router-dom';

export function App() {
  return (
    <HashRouter>
      <Routes>
          <Route path="/" element={App}/>
          <Route index element={<Signin />}/>          
          <Route path="book-list" element={<BookList/>}/>
          <Route path="specific-book" element={<SpecificBook/>}/>
          <Route path="cart" element={<Cart />}/>
          <Route path="*" element={<Page404/>}/>
        </Routes>
      </HashRouter>
  );
}

export default App;
