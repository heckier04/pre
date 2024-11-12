import { getItemId } from "../asyncMock";

import React from 'react';

const ItemDetail = ({ item }) => {
    return (
        <div className="container1">
            <div className="product-detail">
                <img src={item.img} alt={item.name} />
                <div>
                    <h2 className="title">{item.name}</h2>
                    <p className="description">{item.description}</p>
                    <p className="category">Categoría: {item.category}</p>
                    <p className="price">Precio: ${item.price}</p>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;
