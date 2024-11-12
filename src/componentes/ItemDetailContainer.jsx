

import { useEffect, useState } from 'react';
import { getItemId } from '../asyncMock'; 
import ItemDetail from './itemdetail';


const ItemDetailContainer = ({ itemId }) => {
    const [item, setItem] = useState(null); 

    useEffect(() => {
        
        getItemId(itemId)
            .then((itemData) => {
                setItem(itemData);  
            })
            
    }, [itemId]);  

    return (
        <div>
            {item && <ItemDetail item={item} />}
        </div>
    );
};

export default ItemDetailContainer;
