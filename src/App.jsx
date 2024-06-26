

import { BrowserRouter, Route, Routes } from 'react-router-dom'


import Home from './Pages/Home'
import Navbar from './Layouts/Navbar'
import BooksView from './features/books/BooksView'
import AddBook from './features/books/AddBook'
import EditBook from './features/books/EditBook'

function App() {


  return (
  
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/show-books' element={<BooksView></BooksView>}></Route>
        <Route path='/addBook' element={<AddBook></AddBook>}></Route>
        <Route path='/edit-Book' element={<EditBook></EditBook>}></Route>
      </Routes>
      </BrowserRouter>
    
  )
}

export default App
