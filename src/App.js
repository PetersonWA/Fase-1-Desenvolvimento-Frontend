import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import BookForm from './Components/BookForm/BookForm';
import BookList from './Components/BookList/BookList';
//import './App.css';


function App() {
  const Links = ["Página incial", "Sobre","Lista de livros", "Cadastro de livros"]

  const [books, setBooks] = useState([]);

  const addBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  const deleteBook = (index) => {
    const updatedBooks = books.filter((_, i) => i !== index);
    setBooks(updatedBooks);
  };

  const editBook = (updatedBook) => {
    const updatedBooks = books.map((book) =>
      book.id === updatedBook.id ? updatedBook : book
    );
    setBooks(updatedBooks);
  };


  return ( 
    <Router>
      <div>
        <NavBar Links={Links} />
        <Routes>
          <Route path="/" element={<div className="home" style={{textAlign: "center"}}> 
                                        <h1>Página Inicial</h1>
                                        <p>Bem Vindo A Reading Journal!</p>
                                    </div>} />
          <Route path="/sobre" element={<div className="sobre" style={{textAlign: "center"}}>
                                          <h1>Sobre</h1>
                                          <p>Está é uma aplicação para um CRUD de um Reading jornal. Este projeto foi elaborado na disciplina de Desenvolvimento de Sistemas Frontend do Curso de Graduação Online da PUCRS</p>                                      
                                        </div>} />
          <Route path="/lista-de-livros" element={<BookList books={books} onDeleteBook={deleteBook} onEditBook={editBook} />} />
          <Route path="/cadastro-de-livros" element={<BookForm onaddBook={addBook} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
