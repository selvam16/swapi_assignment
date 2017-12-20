import React, {PropTypes} from 'react';
const ProductListRow = ({product,editAction}) => {

  //  var img_src = require('../../assets/' + product.p_image)

    return (
       <tr style={{padding: '10px',margin:'5px'}} key={Math.random()} onClick={()=>editAction(product)}>
       <td>{product.name}</td>
       <td>{product.rotation_period}</td>
       <td>{product.orbital_period}</td>
       <td>{product.terrain}</td>
       </tr>
    );
};

ProductListRow.prototype = {
    product: PropTypes.object.isRequired,
    editAction: PropTypes.func.isRequired,
    deleteAction: PropTypes.func.isRequired,
    changeCartQty: PropTypes.func.isRequired
}

export default ProductListRow;