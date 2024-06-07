import logo from './logo.svg';
import './App.css';
import AddBook from './components/AddBook';
import SearchBook from './components/SearchBook';
import RemoveBook from './components/RemoveBook';
import BookList from './components/BookList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddBook/>}/>
      <Route path='/remove' element={<RemoveBook/>}/>
      <Route path='/search' element={<SearchBook/>}/>
      <Route path='/list' element={<BookList/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
