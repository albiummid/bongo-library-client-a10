import React, { useEffect, useState } from 'react';
import ManageCard from '../ManageCard/ManageCard';
import deleteIcon from '../../../images/delete.ico'
import './ManageBooks.css'
const ManageBooks = (props) => {
    const { handleDelete,handleEdit, setOption  } = props;
    const [books, setBooks] = useState([]);
    useEffect(() => {
        const url = "http://localhost:5009/books";
        fetch(url)
            .then(res => res.json())
        .then(data => setBooks(data))
    }, [])
    

    return (

        <div className="manage-container">
            <h1>Manage Books</h1>
            <div className="manage-card-titles">
            <b>Book Name</b>
            <b> Author Name</b>
            <b> Price</b>
                <b> Action</b>
            </div>
            <div className="manage-card-container">
                <ol>
                {
                        books.map(book => <li><ManageCard handleEdit={handleEdit} setOption={setOption} book={book} key={book._id}>
                            <button onClick={()=>handleDelete(book._id)} > <img src={deleteIcon} alt=""/> </button> 
                        </ManageCard></li>)
                }
                </ol>
                
            </div>
        </div>
    );
};

export default ManageBooks;