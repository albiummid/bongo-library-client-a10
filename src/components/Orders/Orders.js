import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Order.css'
import { useForm } from "react-hook-form";
import { UserContext } from '../../App';
import SummaryCard from '../SummaryCard/SummaryCard';
const Orders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, watch, errors } = useForm();
    const [selectedProduct, setSelectedProduct] = useState([]);
    const [userOrders, setUserOrders] = useState([]);
    const { name, image, author,price } = selectedProduct;
    const { id } = useParams();
    useEffect(() => {
        const url = `https://bongo-library-api.herokuapp.com/userOrders?email=${loggedInUser.email}`;
        fetch(url)
            .then(res => res.json())
        .then(data => setUserOrders(data))
    }, [userOrders]);
    
 // handle delete
 const handleDelete = (id) => {
    const url = `https://bongo-library-api.herokuapp.com/deleteOrder/${id}`;
    fetch(url, {
        method: "DELETE"
    })
        .then(res => res.json())
        .then(data => {
            if (data) {
                alert("Your Order Successfully Removed !");
            }
        })
   
}


    useEffect(() => {
        const url = `https://bongo-library-api.herokuapp.com/book/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setSelectedProduct(data[0]))
    }, [id]);
    const onSubmit = (data) => {
        const date = new Date().toDateString().toString();
        const orderInfo = { ...selectedProduct, ...data, date };
        delete orderInfo._id;
        fetch('https://bongo-library-api.herokuapp.com/addOrders', {
            method:"POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(orderInfo)

        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert("Successfully Order Placed")
                }
                else {
                    alert("Order placing failed")
                }
              
            })

    }

   

 
    return (
        <div className="order-page">
            <div className="ordered-container">
                <h1 style={{ textAlign: "center" }}>Your Orders</h1>
                {userOrders.length>0 &&
                    userOrders.map(book => <SummaryCard handleDelete={handleDelete} book={book} key={book._id}></SummaryCard> )
                }
            </div>
            {
                id &&
                <div className="order-container">
                    <h1 onClick={handleDelete} style={{textAlign:"center"}}>Cart Item</h1>
                <div className="book-card">
                    <img src={image} alt="" />
                    <h3>{name}</h3>
                        <p>Author: {author}</p>
                        <h3>$ { price}</h3>
                </div>
                <div className="order-info">
                    <form onSubmit={handleSubmit(onSubmit)} className="form-container">
                        <fieldset>
                            <legend>Name</legend>
                            <input type="text" defaultValue={loggedInUser.name} name="user-name" ref={register} required />
                        </fieldset>

                        <fieldset>
                            <legend>Email</legend>
                            <input type="text" defaultValue={loggedInUser.email} name="email" ref={register} required />
                        </fieldset>
                        <fieldset>
                            <legend>Phone</legend>
                            <input type="text" name="phone" ref={register} required />
                        </fieldset>
                        <fieldset>
                            <legend>Address</legend>
                            <input type="text" name="address" ref={register} required />
                            </fieldset>
                            <br/>
                            <fieldset>
                            <input type="submit" className="btn btn-confirm"  />
                            </fieldset>
                    </form>

                </div>
            </div>
           }
        </div>
    );
};

export default Orders;