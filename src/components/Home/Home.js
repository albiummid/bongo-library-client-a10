import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import BookCard from '../BookCard/BookCard';
import './Home.css'
const Home = () => {
    
    const [books, setBooks] = useState([]);
    useEffect(() => {
        const url = "https://bongo-library-api.herokuapp.com/books";
        fetch(url)
            .then(res => res.json())
        .then(data => setBooks(data))
    },[])
    return (
        <div className="home-container">
           
            <div className="search-bar">
                <input placeholder="Search Your Desire !" type="text"/><button className="btn">search</button>
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