import React from 'react';
import './AddProduct.css'
import { useForm } from "react-hook-form"
import axios from 'axios';
import { useState } from 'react';
const AddProduct = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageUrl, setImageUrl] = useState(null);
    const onSubmit = data => {
        const productInfo = {
            name: data.name,
            author: data.author,
            price: data.price,
            image: imageUrl
        }
        const url = `http://localhost:5009/addProduct`
        console.log(productInfo);
        fetch(url, {
            method: "POST",
            headers:{
                "content-type": 'application/json'
            },
            body: JSON.stringify(productInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert("Successfully Data Uploaded on Server 😍")
                    window.location.reload();
                }
                else {
                    console.log("not added");
                }
        })
       
    }
    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', 'b70ec09f117505d271f0a605e9978bb9');
        imageData.append('image', event.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
              console.log(response.data.data.display_url);
              setImageUrl(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form-container">
            <fieldset>
                <legend>Book Name</legend>
                <input type="text" name="name" required ref={register}/>
            </fieldset>
           
            <fieldset>
                <legend>Author Name</legend>
                <input type="text" name="author" required ref={register}/>
            </fieldset>
            <fieldset>
                <legend>Add Price</legend>
                <input type="text" name="price" required ref={register}/>
            </fieldset>
           
            <fieldset>
                <legend>Add Book Cover Photo</legend>
                <input type="file" required onChange={handleImageUpload}/>
            </fieldset>
         
            {
                imageUrl ? <input type="submit" className="btn" /> :
                    <p style={{color:"red",textAlign:"center"}}>Complete all field then submit button will appers</p>
           }
        </form>
    );
};

export default AddProduct;