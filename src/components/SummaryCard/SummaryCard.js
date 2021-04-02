import React from 'react';
import './SummaryCard.css'
import deleteIcon from '../../images/delete.ico'
const SummaryCard = (props) => {
    const { name, price, image, author, date,_id } = props.product;
    const { handleDelete } = props;
  
    console.log(props);
    return (
        <div className="summary-card">
            <div className="book-preview">
                <img src={image} alt="" />
                <div style={{textAlign:"justify"}}> <p>Name: {name}  </p>
                    <p> Author : {author}  </p>
                    <p> Order Date : {date}  </p>
                     <p>Quantity: 1 </p>
            <p>Price : $  {price}</p>
                </div>
            </div>
            <div onClick={()=>handleDelete(_id)}>
                <img  style={{width:"30px"}} src={deleteIcon} alt=""/>
            </div>
           
        </div>
    );
};

export default SummaryCard;