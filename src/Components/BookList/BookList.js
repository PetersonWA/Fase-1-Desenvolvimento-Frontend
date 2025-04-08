

// O código abaixo é equivalente ao código comentado, este está implementado botão de exclusão:
import React from 'react';
import Book from './Book';

const BookList = ({ books, onDeleteBook, onEditBook}) => {
    return (
        <div className="book-list" style={{ textAlign: "center" }}>
            <h1>Livros cadastrados</h1>

            {books.length === 0 ? (
                <p>Não há livros cadastrados</p>
            ) : (
                <ul>
                    {books.map((book, index) => (
                        <Book 
                            key={index} 
                            book={book} 
                            onDelete={() => onDeleteBook(index)}
                            onEdit={onEditBook}
                        />
                    ))}
                </ul>
            )}
        </div>
    );
};

export default BookList;


/*

// O código acima é equivalente ao seguinte código:
import React, { useState } from 'react';
import Book from './Book';

const BookList = ({ books }) => {
    return (
        <div className="book-list" style={{textAlign: "center"}}>
            <h1>Livros cadastrados</h1>
            
            {books.length === 0 ? (
                <p>Não há livros cadastrados</p>
            ) : (
                <ul>
                    {books.map((book, index) => (
                        <Book key={index} book={book} />
                    ))}
                </ul>
            )}
        </div>
    );
};

export default BookList;*/