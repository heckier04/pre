

import React from 'react';
import Item from './item';



const ItemList = ({ productos }) => {
    return (
        <div className="container1">
            <h2 className="title">Productos</h2>
            <div className="product-container">
                {productos.map((producto) => (
                    <Item producto={producto} key={producto.id} />
                ))}
            </div>
        </div>
    );
};

export default ItemList;
