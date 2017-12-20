import React, {PropTypes} from 'react';
import ProductListRow from './productListRow';

const ProductList = ({products, editAction}) => {
    return (
       <div>
           <table className='table table-striped'>
               <thead>
                   <tr>
                       <th>Name</th>
                       <th>Rotation Period</th>
                       <th>Orbital Period</th>
                       <th>terrain</th>
                       </tr>
                           </thead>
                           <tbody>
                               
                {(products!== undefined && products !== null && products.length)? products.map((product, index) => 
                    <ProductListRow key={Math.random()} product={product} editAction={editAction}/>):''

                           }
</tbody>
</table>
</div>
    );
};



export default ProductList;