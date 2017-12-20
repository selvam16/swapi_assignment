import React, {PropTypes} from 'react';
import ProductListRow from './productListRow';

const NodeList = ({products}) => {
    return (
       <div key={products}><div>{products.notes}</div>
</div>
    );
};



export default NodeList;