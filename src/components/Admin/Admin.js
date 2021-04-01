import React, { useState } from 'react';
import AddBook from './AddBook/AddBook';
import './Admin.css'
const Admin = () => {
    const [option, setOption] = useState();
    return (
        <div className="admin-page">
            <div className="admin-nav">
                <h1>Admin Pannel</h1>
               
                <span className={option === "manage" && "selected"} onClick={() => setOption("manage")}>Manage Books</span>
               
                <span className={option === "add" && "selected"} onClick={() => setOption("add")}>Add Book</span>
              
                <span className={option === "edit" && "selected"} onClick={() => setOption("edit")}>Edit Book</span>
            </div>
            <div className="nav-display">
                {
                    option === "add" &&
                    <AddBook></AddBook>
                }
            </div>


        </div>
    );
};

export default Admin;