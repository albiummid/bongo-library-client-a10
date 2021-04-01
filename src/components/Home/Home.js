import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import BookCard from '../BookCard/BookCard';
import './Home.css'
const Home = () => {
    
    const [books, setBooks] = useState([]);
    useEffect(() => {
        const url = "http://localhost:5009/books";
        fetch(url)
            .then(res => res.json())
        .then(data => setBooks(data))
    },[])
    return (
        <div className="home-container">
           
            <h1 style={{ textAlign: "center" }}>This is Home</h1>
            <div className="search-bar">
                <input type="text"/><button className="btn">search</button>
            </div>
            <div className="cards-container">
                {
                    books.map(book=> <BookCard book={book} key={book._id}></BookCard>)
        }
            </div>
        </div>
    );
};

export default Home;