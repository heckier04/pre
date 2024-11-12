import React from 'react';

const Item = ({ producto }) => {
    return (
        <div className='productos1'>
            <img src={producto.img} alt={producto.name} />
            <div>
                <h3>{producto.name}</h3>
                <p>Precio: ${producto.price}</p>
                <p>Categoría: {producto.category}</p>
                <p>{producto.description}</p>
                <a className='mas' href={`/item/${producto.id}`}>Saber más</a>
            </div>
        </div>
    );
}

export default Item;
