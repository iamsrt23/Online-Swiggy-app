import React from 'react'

const Add_Product = () => {
  return (
    <div className="firmSection">
        
    <form className="tableForm">
    <h2>Add Product</h2>

    <label>Product Name</label>
    <input type="text" placeholder='Enter Firm Name' />
    <label>Price</label>
    <input type="text" placeholder='Enter Your Area' />
    
    <div className='checkInp'>
            <label>Category</label>
            <div className="inputsContainer">
            
                <div className="checkBoxContainer">
                    <label>Veg</label>
                    <input type='checkbox' vlaue="Veg" />
                </div>
                <div className="checkBoxContainer">
                    <label>Non-Veg</label>
                    <input type='checkbox' vlaue="Non-Veg" />
                </div>
            </div>
    </div>
    <div className="checkInp">
     <label >Best Seller</label>
         <div className="inputsContainer">
         <div className="checboxContainer">
                 <label>Yes</label>
                 <input type="radio" value="true" />
               </div>
               <div className="checboxContainer">
                 <label>No</label>
                 <input type="radio" value="false" />
               </div>
         </div>

    </div>
      
    
    <label>Description</label>
    <input type="text" placeholder='Enter ' />
    <label>image</label>
    <input type="file" />
    <br />

    <div className="btn-submit">
        <button>submit</button>
    </div>
    </form>
    

</div>
  )
}

export default Add_Product