import React from 'react';
import { productSpecs } from '../constant/productSpecs';

const ProductSpecs: React.FC = () => {
  console.log('productSpecs', productSpecs);

  return (
    <div>
      <h2>Product Specs</h2>
      <div className="table-container">
        {productSpecs &&
          Object.entries(productSpecs).map(([key, value]) => (
            <div className="table-row">
              <div className="table-cell">{key}</div>
              <div className="table-cell">{value}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductSpecs;
