import React from 'react';

function ProductPanel(){

  //React Hooks:
  const[productName,setProductName]=React.useState(); 

  // setting value
  function onChangeHandler(event){
    let someValue = event.target.value;
    setProductName(someValue)
    // window.alert(productName);
  }

  // function for clear button
  function clear(event){
    setProductName("")

  }

  return(


  <div>
    {/* inputvalue */}
    <input placeholder="some value to enter" value ={productName}  onChange= {onChangeHandler}/>

    {/* check value being entered */}
    

    {/* clear button */}

    <button onClick ={event => clear()} > Clear </button>
    <br/>

    {productName}
  </div>


  )

}
export default ProductPanel;