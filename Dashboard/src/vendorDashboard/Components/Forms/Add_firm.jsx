import React from 'react'

const Add_firm = () => {
  return (
    <div className="firmSection">
        
        <form className="tableForm">
        <h2>Add Firm</h2>
    
        <label>Firm Name</label>
        <input type="text" placeholder='Enter Firm Name' />
        <label>Area</label>
        <input type="" placeholder='Enter Your Area' />
        
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

        {/* <label>region</label> */}
        <div className='checkInp'>
            <label>Region</label>
            <div className="inputsContainer">
            
                <div className="regBoxContainer">
                    <label>South-Indian</label>
                    <input type='checkbox' vlaue="south-indian" />
                </div>
                <div className="regBoxContainer">
                    <label>North_Indian</label>
                    <input type='checkbox' vlaue="North-Indian" />
                </div>
                <div className="regBoxContainer">
                    <label>Chinese</label>
                    <input type='checkbox' vlaue="Chinese" />
                </div>
                <div className="regBoxContainer">
                    <label>Bakery</label>
                    <input type='checkbox' vlaue="Bakery" />
                </div>
            </div>
        </div>
        <input type="text"  />
        <label>offer</label>
        <input type="text" placeholder='' />
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

export default Add_firm