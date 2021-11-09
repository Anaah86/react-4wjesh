import React from 'react';
import Product from './Product';

import Product2 from './Product2';
import ProductPanel from './ProductPanel';

function App(){
  return( 
    <div> 
      
      <Product2 name="Apple"  id="item1"  datePurchased={Date()} > </Product2>
      <br/> <br/>
      <ProductPanel/>

      {/* <Product/> */}

    </div>

  );

}
export default App;