import React from "react";
import { useState } from "react";


export default function BookForm({ onaddBook }) {

    const [book, setBook] = useState({
        title: "",
        autor: "",
        genero: "",
        data: "",
    })

    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState(""); // Estado para a mensagem de sucesso

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBook((prevBook) => ({
            ...prevBook,
            [name]: value,
        }));
    };

    const handleBookFormSubmit = (e) => {
        e.preventDefault();
        // Verificação se todos os campos estão preenchidos
        if (!book.title || !book.autor || !book.genero || !book.data) {
            setError("Por favor, preencha todos os campos antes de enviar.");
            setSuccessMessage(""); // Limpa a mensagem de sucesso
            return;
        }        
        setError(""); // Limpa a mensagem de erro e adiciona o livro
        setSuccessMessage("Livro adicionado com sucesso!"); // Define a mensagem de sucesso
        onaddBook(book); // Usa a função passada via props
        setBook({
          title: "",
          autor: "",
          genero: "",
          data: "",
        });
      };

      // Remove a mensagem de sucesso após alguns segundos
      setTimeout(() => {setSuccessMessage("");}, 50000);
        
    

    return (
        <>
        <div className="book-form" style={{textAlign: "center"}} >
        <h1>Cadastrar</h1>
        <h2>Adicione um livro</h2>
        <form onSubmit={handleBookFormSubmit}>
            <input 
                type="text"
                name="title"
                value={book.title}
                onChange={handleChange}
                placeholder="Título"
                style={{ marginBottom: "10px" }}
            />
            <br/>
            <input
                type="text"
                name="autor"
                value={book.autor}
                onChange={handleChange}
                placeholder="Autor(a)"
                style={{ marginBottom: "10px" }}
            />
            <br/>
            <input
                type="text"
                name="genero"
                value={book.genero}
                onChange={handleChange}
                placeholder="Genero"
                style={{ marginBottom: "10px" }}
            />
            <br/>
            <input
                type="date"
                name="data"
                value={book.data}
                onChange={handleChange}
                placeholder="Data de lançamento"
                style={{ marginBottom: "10px" }}
            />
            <br/>
            <button type="submit"  >Adicionar Livro!</button>
        </form>

            {/* Exibe a mensagem de erro, se houver */}
            {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}

            {/* Exibe a mensagem de sucesso, se houver */}
            {successMessage && <p style={{ color: "green", marginTop: "10px" }}>{successMessage}</p>}

        </div>
        </>
    );
    

}