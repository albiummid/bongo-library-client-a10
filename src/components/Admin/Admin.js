import React, { useEffect, useState } from 'react';
import AddBook from './AddBook/AddBook';
import './Admin.css'
import EditBooks from './EditBooks/EditBooks';
import { faEdit, faPlus, faTasks } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ManageBooks from './ManageBooks/ManageBooks';
import { useHistory } from 'react-router';
const Admin = () => {
    const history = useHistory();
    const [selectedBook, setSelectedBook] = useState([]);
    const [key, setKey] = useState();
    const [showInput,setShowInput] = useState(false)
    const [option, setOption] = useState("add");
    const handleDelete = (id) => {
        const url = `http://localhost:5009/delete/${id}`;
        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert("deleted");
                    setOption("empty")
                    setOption("manage")
            }
        })
        console.log(id);
    }
    
    useEffect(() => {
        const url = `http://localhost:5009/book/${key}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setSelectedBook(data[0]) )
    }, [key]);
    
    // console.log(selectedBook);
    const handleEdit = (id) => {
        setShowInput(true);
        setKey(id);
        console.log(id);
    }
    return (
        <div className="admin-page">
            <div className="admin-nav">
                <h1>Admin Pannel</h1>
                <br />
                <br />
                <span className={option === "manage" && "selected"} onClick={() => setOption("manage")}>
                    <FontAwesomeIcon icon={faTasks} size="1x" />                    Manage Books
                    </span>

                <span className={option === "add" && "selected"} onClick={() => setOption("add")}>
                <FontAwesomeIcon icon={faPlus} size="1x" />  Add Book</span>

                <span className={option === "edit" && "selected"} onClick={() => setOption("edit")}>
                <FontAwesomeIcon icon={faEdit} size="1x" />  Edit Book</span>
            </div>
            <div className="nav-display">
                {
                    option === "add" &&
                    <AddBook></AddBook>
                }
                {
                    option === "edit" &&
                    <EditBooks showInput={showInput} setOption={setOption} handleEdit={handleEdit} selectedBook={selectedBook} ></EditBooks>
                }
                {
                    option === "manage" &&
                    <ManageBooks handleEdit={handleEdit} handleDelete={handleDelete} setOption={setOption} ></ManageBooks>
                }
                {
                    option === "empty" &&
                    <div>
                        <h1>Loading</h1>
                    </div>
                }
            </div>


        </div>
    );
};

export default Admin;