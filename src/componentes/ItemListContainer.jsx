

import { useEffect, useState } from "react";
import { getProducts } from "../asyncMock";  
import ItemList from "./ItemList";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]); 

    useEffect(() => {

        getProducts()
            .then((items) => {
                setProductos(items);  
            })
            .catch((error) => {
                console.error("Error al obtener los productos", error);
            });
    }, []);  

    return (
        <div>
            <h2>Productos</h2>
            <ItemList productos={productos} />  
        </div>
    );
};

export default ItemListContainer;
