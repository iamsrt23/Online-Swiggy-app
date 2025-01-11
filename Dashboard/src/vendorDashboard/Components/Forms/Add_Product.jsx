import React, {useState} from 'react'
import API_PATH from '../../data/apiPath'

const Add_Product = () => {

  const [productName,setProductName] = useState("")
  const [price,setPrice] = useState("")
  const [category,setCategory] = useState([])
  const [bestSeller,setBestSeller] = useState(false)
  const [file,setFile] = useState(null)
  const [description,setDescription] = useState("")

  const handleCategoryChange = (event)=>{
    const value = event.target.value
    if(category.includes(value)){
      setCategory(category.filter((item)=> item !== value))

    }else{
      setCategory([...category,value])
    }
  }
  const handleBestSellerChange = (event)=>{
    const value = event.target.value ==='true'
    setBestSeller(value)
  }
  const handleImageUpload = (event)=>{
    const selectedImage = event.target.files[0]
    setFile(selectedImage)
}


  const handleAddProduct = async(e)=>{
    e.preventDefault()
    try {

      // get the Firm id and loginToken from localstorage
      const loginToken = localStorage.getItem('loginToken')
      const firmId = localStorage.getItem('firmId')

      //  if there is no loginToken

      if(!loginToken || !firmId){
        console.error("User not Authenticated")
      }

      const formData = new FormData();
          formData.append('productName',productName)
          formData.append('price',price)
          
          formData.append('image',file)
          formData.append('description',description)

          category.forEach((value)=>{
            formData.append('category',value)

          })

      
        const response = await fetch(`${API_PATH}product/add-product/${firmId}`,{
          method:'POST',
          body: formData
        })

        const data = await response.json()
        if(response.ok){
          alert("Product Added Sucessfully")
        }
        setProductName("")
        setPrice("")
        setCategory([])
        setBestSeller(false)
        setFile(null)
        setDescription("")


 

      

    }catch (error) {
      alert('Failed to add product')
    }
    

  }





  return (
    <div className="firmSection">
        
    <form className="tableForm" onSubmit={handleAddProduct}>
    <h2>Add Product</h2>

    <label>Product Name</label>
    <input type="text" placeholder='Enter Firm Name' value={productName} onChange={(e)=>setProductName(e.target.value)} />
    <label>Price</label>
    <input type="text" placeholder='Enter Your Area' value={price} onChange={(e)=>setPrice(e.target.value)} />
    
    <div className='checkInp'>
            <label>category</label>
            <div className="inputsContainer">
            
                <div className="checkBoxContainer">
                    <label>veg</label>
                    <input type='checkbox' value="veg" checked={category.includes('veg')} onChange={handleCategoryChange}/>
                </div>
                <div className="checkBoxContainer">
                    <label>non-veg</label>
                    <input type='checkbox' value="non-veg" checked={category.includes('non-veg')} onChange={handleCategoryChange}/>
                </div>
            </div>
    </div>
    <div className="checkInp">
     <label >Best Seller</label>
         <div className="inputsContainer">
         <div className="checkBoxContainer">
                 <label>Yes</label>
                 <input type="radio" value="true" checked={bestSeller==true} onChange={handleBestSellerChange}/><br />
               </div>
               <div className="checkBoxContainer">
                 <label>No</label>
                 <input type="radio" value="false" checked={bestSeller==false} onChange={handleBestSellerChange} /> <br />
               </div>
         </div>

    </div>
      
    
    <label>Description</label>
    <input type="text" placeholder='Enter ' value={description} onChange={(e)=>setDescription(e.target.value)}/>
    <label>image</label>
    <input type="file" onChange={handleImageUpload}/>
    <br />

    <div className="btn-submit">
        <button type='submit'>submit</button>
    </div>
    </form>
    

</div>
  )
}

export default Add_Product