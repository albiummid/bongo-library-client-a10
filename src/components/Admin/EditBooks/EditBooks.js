import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import ManageBooks from '../ManageBooks/ManageBooks';
import ManageCard from '../ManageCard/ManageCard';
import './EditBook.css'

const EditBooks = (props) => {
    const { register, handleSubmit, watch, errors } = useForm();
    const { handleEdit,setOption,showInput ,selectedBook} = props;
    const [books, setBooks] = useState([]);
    const { name, author, price } = selectedBook;
    console.log(name);
    const [updateInfo,setUpdateInfo] = useState({})
    useEffect(() => {
        const url = "http://localhost:5009/books";
        fetch(url)
            .then(res => res.json())
        .then(data => setBooks(data))
    }, [])
    const onSubmit = (data)=>{
        console.log(data);
    }
    return (
        <ManageBooks handleEdit={handleEdit}><form onSubmit={handleSubmit(onSubmit)} className="manage-card-titles">
        <div>
            <b>Book Name</b>
            <br/>
            {
                showInput &&
                <div className="update-div">
                <small style={{color:"teal",fontWeight:"bold"}}>Previous Name:</small>
           <br/>
                    <small>{name}</small>
                    <br />
                    <input type="text" name="name" ref={register}/>
                </div>
               
       }
        </div>
        <div>
            <b> Author Name</b>
            <br />
            {showInput &&
                 <div className="update-div">
                 <small style={{color:"teal",fontWeight:"bold"}}>Previous author:</small>
<br/>
                <small>{author}</small>
                <br />
                <input type="text" name="author" ref={register}/>
            
                 </div>
               }
            
        </div>
        <div>
            <b> Price</b>
            <br />
            {showInput &&
                <div className="update-div">
                <small style={{color:"teal",fontWeight:"bold"}}>Previous Price:</small>
                <br/>
                <small > $ {price}</small>
                <br />
                <input type="text" name="Price" ref={register}/>
                </div>
                
            }
           
        </div>
        <div>
            <b> Action</b>
            <br />
            <br />
            <br/>
            {showInput &&
                <input type="submit" />
            }
            
        </div>
    
    
    
       
    </form></ManageBooks>
//         <div className="manage-container">
//             <h1>Edit Books</h1>
//             <form onSubmit={handleSubmit(onSubmit)} className="manage-card-titles">
//                 <div>
//                     <b>Book Name</b>
//                     <br/>
//                     {
//                         showInput &&
//                         <div className="update-div">
//                         <small style={{color:"teal",fontWeight:"bold"}}>Previous Name:</small>
//                    <br/>
//                             <small>{name}</small>
//                             <br />
//                             <input type="text" name="name" ref={register}/>
//                         </div>
                       
//                }
//                 </div>
//                 <div>
//                     <b> Author Name</b>
//                     <br />
//                     {showInput &&
//                          <div className="update-div">
//                          <small style={{color:"teal",fontWeight:"bold"}}>Previous author:</small>
// <br/>
//                         <small>{author}</small>
//                         <br />
//                         <input type="text" name="author" ref={register}/>
                    
//                          </div>
//                        }
                    
//                 </div>
//                 <div>
//                     <b> Price</b>
//                     <br />
//                     {showInput &&
//                         <div className="update-div">
//                         <small style={{color:"teal",fontWeight:"bold"}}>Previous Price:</small>
//                         <br/>
//                         <small > $ {price}</small>
//                         <br />
//                         <input type="text" name="Price" ref={register}/>
//                         </div>
                        
//                     }
                   
//                 </div>
//                 <div>
//                     <b> Action</b>
//                     <br />
//                     <br />
//                     <br/>
//                     {showInput &&
//                         <input type="submit" />
//                     }
                    
//                 </div>
            
            
            
               
//             </form>
//             <div className="manage-card-container">
//                 <ol>
//                 {
//                         books.map(book => <li><ManageCard handleEdit={handleEdit} setOption={setOption} book={book} key={book._id}>
//                         </ManageCard></li>)
//                 }
//                 </ol>
                
//             </div>
//         </div>
    );
};

export default EditBooks;