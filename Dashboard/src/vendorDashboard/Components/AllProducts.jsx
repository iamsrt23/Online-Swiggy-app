import React,{useState,useEffect} from 'react'
import API_PATH from '../data/apiPath'

const AllProducts = () => {
    const [products,setProducts] = useState([])

    const productHandler  = async()=>{
        const firmId = localStorage.getItem('firmId')
        try {

            const response = await fetch(`${API_PATH}product/${firmId}/products`)

            const newProductsData = await response.json()

            setProducts(newProductsData.products)
            console.log(newProductsData)
            
        } catch (error) {
            console.error("Failed to Fetch Products",error)
            alert('failed to Fetch Products')
            
        }

    }

    // To reflect data on FE
    useEffect(()=>{
        productHandler()
        console.log('This is Use Effect')

    },[])//if we don't put empty dependency [] it will call continuously

    const deleteProductById = async (productId) => {
        try {
            // Show confirmation dialog to the user
            const userConfirmed = window.confirm("Are you sure you want to delete this product?");
            if (!userConfirmed) {
                // User clicked "Cancel"
                alert("Deletion cancelled");
                return;
            }
    
            // Proceed with API call if user confirmed
            const response = await fetch(`${API_PATH}product/${productId}`, {
                method: 'DELETE',
            });
    
            if (response.ok) {
                // Update state if deletion is successful
                setProducts(products.filter(product => product._id !== productId));
                alert("Product Deleted Successfully");
            } else {
                // Handle failed response
                console.error("Failed to delete product:", response.statusText);
                alert("Failed to delete the product.");
            }
        } catch (error) {
            console.error("Failed to delete product:", error);
            alert("An error occurred while trying to delete the product.");
        }
    };

    
    
  return (
    <div>
        {!products? (
            <p>No Products Added</p>

        ):(
            <table className="product-table">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th> Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((item)=>{
                        return (
                            <>
                                <tr key={item._id}>
                                    <td>{item.productName}</td>
                                    <td>{item.price}</td>
                                <td>
                                    {item.image && (
                                        <img src={`${API_PATH}uploads/${item.image}`} 
                                        alt={item.productName}
                                        style={{ width: '50px', height:'50px'  }}
                                        />
                                    )}
                                </td>
                                <td>
                                    <button onClick={()=>deleteProductById(item._id)}>delete</button>
                                </td>
                                </tr>
                            </>
                        )

                    })}
                </tbody>
            </table>
        )}
    </div>
  )
}

export default AllProducts