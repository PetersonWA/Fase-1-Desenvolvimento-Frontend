import React, { useState } from 'react';

const Book = ({ book, onDelete, onEdit }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedBook, setEditedBook] = useState({ ...book });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedBook({ ...editedBook, [name]: value });
    };

    const handleSave = () => {
      if (onEdit) {
          onEdit(editedBook);
      } else {
          console.error("A função onEdit não foi fornecida.");
      }
      setIsEditing(false);
    };

    return (
        <>
            {isEditing ? (
                <li>
                    <input
                        type="text"
                        name="title"
                        value={editedBook.title}
                        onChange={handleInputChange}
                        placeholder="Título"
                    />
                    <input
                        type="text"
                        name="autor"
                        value={editedBook.autor}
                        onChange={handleInputChange}
                        placeholder="Autor"
                    />
                    <input
                        type="text"
                        name="genero"
                        value={editedBook.genero}
                        onChange={handleInputChange}
                        placeholder="Gênero"
                    />
                    <input
                        type="date"
                        name="data"
                        value={editedBook.data}
                        onChange={handleInputChange}
                    />
                    <button onClick={handleSave} style={{ marginLeft: "10px" }}>Salvar</button>
                    <button onClick={() => setIsEditing(false)} style={{ marginLeft: "10px" }}>Cancelar</button>
                </li>
            ) : (
                <li>
                    <h3>{book.title}</h3>
                    <p>Autor: {book.autor}</p>
                    <p>Gênero: {book.genero}</p>
                    <p>Data: {new Date(book.data).toLocaleDateString()}</p>
                    <button onClick={() => setIsEditing(true)} style={{ marginLeft: "10px" }}>Editar</button>
                    <button onClick={onDelete} style={{ marginLeft: "10px" }}>Excluir</button>
                </li>
            )}
        </>
    );
};

export default Book;
