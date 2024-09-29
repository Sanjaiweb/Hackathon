import React from 'react'

function Food() {
     
    return (
      <div>
        <h1>Product List</h1>
        <ul>
          {products.map(product => (
            <li key={product.id}>{product.name}</li>  // Using product.id as key
          ))}
        </ul>
      </div>
    );
  }

export default Food