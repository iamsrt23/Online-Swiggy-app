import React,{useState} from 'react'
import API_PATH from '../../data/apiPath'
import { send } from 'vite'

const Add_firm = () => {
    const [firmName,setFirmName] = useState("")
    const [area,setArea] = useState("")
    const[category,setCategory] =useState([])
    const[region,setRegion] = useState([])
    const[offer,setOffer] = useState("")
    const [file,setFile] = useState(null)

// To set the array values
    const handleCategoryChange = (event) =>{
        const value = event.target.value
        if(category.includes(value)){
            setCategory(category.filter((item)=>item !== value))

        }else{
            setCategory([...category,value])
        }
    }
    const handleRegionChange = (event)=>{
        const value = event.target.value
        if(region.includes(value)){
            setRegion(region.filter((item)=> item !== value))
        }else{
            setRegion([...region,value])
        }
    }
    const handleImageUpload = (event)=>{
        const selectedImage = event.target.file
        setFile(selectedImage)
    }


    const handleFirmSubmit = async (e)=>{
        e.preventDefault();
        try {
            // to get the Login token from local storage
            const loginToken = localStorage.getItem('loginToken')
            if(!loginToken){
                console.error("User Not Authenticated")

            }

            const formData = new FormData();
                formData.append('firmName',firmName)
                formData.append('area',area)
                formData.append('offer',offer)
                // Append Each Value to the Form
                category.forEach((value)=>{
                    formData.append('category',value)
                })
                region.forEach((value)=>{
                    formData.append('region',value)
                })
            
            

            const response = await fetch(`${API_PATH}firm/add-firm`, {
                method: 'POST',
                headers: {
                    'token': `${loginToken}`, // Include the token header
                },
                body: formData, // Use FormData directly
            });
            const data = await response.json()
            if(response.ok){
                console.log(data)
                
                setFirmName("")
                setArea("")
                setCategory([])
                setRegion([])
                setOffer("")
                setFile(null)
                alert('Firm Added Successfully')

            }

              


            
        } catch (error) {
            console.error("failed to Add Firm",error)

            
        }
    }


















  return (
    <div className="firmSection">
        
        <form className="tableForm" onSubmit={handleFirmSubmit}>
        <h2>Add Firm</h2>
    
            <label>Firm Name</label>
            <input type="text" name='firmName' value={firmName} onChange={(e)=>setFirmName(e.target.value)} />
            <label>Area</label>
            <input type="text" name="area" value={area} onChange={(e)=>setArea(e.target.value)}/>
        
        <div className='checkInp'>
            <label>Category</label>
            <div className="inputsContainer">
            
                <div className="checkBoxContainer">
                    <label>veg</label>
                    <input type='checkbox'checked={category.includes('veg')} value="veg" onChange={handleCategoryChange}/>
                </div>
                <div className="checkBoxContainer">
                    <label>Non-Veg</label>
                    <input type='checkbox'checked={category.includes('non-veg')} value="non-veg" onChange={handleCategoryChange} />
                </div>
            </div>
        </div>

        {/* <label>region</label> */}
       

        <label>offer</label>
        <input type="text" name="offer" value={offer} onChange={(e)=>setOffer(e.target.value)} />
        <div className='checkInp'>
            <label>Region</label>
            <div className="inputsContainer">
            
                <div className="regBoxContainer">
                    <label>South-Indian</label>
                    <input type='checkbox'checked={region.includes('south-indian')} value="south-indian" onChange={handleRegionChange} />
                </div>
                <div className="regBoxContainer">
                    <label>North-Indian</label>
                    <input type='checkbox'checked={region.includes('north-indian')} value="north-indian" onChange={handleRegionChange}/>
                </div>
                <div className="regBoxContainer">
                    <label>Chinese</label>
                    <input type='checkbox'checked={region.includes('chinese')} value="chinese" onChange={handleRegionChange} />
                </div>
                <div className="regBoxContainer">
                    <label>Bakery</label>
                    <input type='checkbox'checked={region.includes('bakery')} value="bakery" onChange={handleRegionChange}/>
                </div>
            </div>
        </div>
        <label>image</label>
        <input type="file"  onChange={handleImageUpload} />
        <br />
    
        <div className="btn-submit">
            <button type='submit'>submit</button>
        </div>
        </form>
        

    </div>
  )
}

export default Add_firm