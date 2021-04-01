import React from 'react';
import './SummaryCard.css'
const SummaryCard = (props) => {
    // {date}.toDateString('dd/MM/yyyy')
    const { name, price, image, author, date } = props.product;
    // const orderDate = {date}.toDateString('dd/MM/yy');
    return (
        <div className="summary-card">
            <div className="book-preview">
                <img src={image} alt="" />
                <div> <p>Name: {name}  </p>
                    <p> Author : {author}  </p>
                    <p> Order Date : {date}  </p></div>
            </div>
            <p>Quantity: 1 </p>
            <p>$  {price}</p>
        </div>
    );
};

export default SummaryCard;