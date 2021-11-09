import React from 'react';

function Product2(prop){

  function toString(){


    return  "[ id " + prop.id + " name " + prop.name + " datePurchased " + prop.datePurchased + " ] "

  }

  return(
    <div>
      {/* print to string function  */}
    {toString()}

    </div>
  );

}

export default Product2;
