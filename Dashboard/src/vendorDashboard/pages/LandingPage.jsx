import React,{useState,useEffect} from 'react'
import NavBar from '../Components/NavBar'
import SideBar from '../Components/SideBar'
import LoginFile from '../Components/Forms/LoginFile'
import Register from '../Components/Forms/Register'
import Add_firm from '../Components/Forms/Add_firm'
import Add_Products from '../Components/Forms/Add_Product'
import Add_Product from '../Components/Forms/Add_Product'
import Welcome from '../Components/Welcome'
import AllProducts from '../Components/AllProducts'


const LandingPage = () => {
   const[showLogin,setShowLogin] = useState(false)
   const[showRegister,setShowRegister] = useState(false)
   const[showFirm,setShowFirm] = useState(false)
   const[showProduct,setShowProduct] = useState(false)
   const[showWelcome,setShowWelcome] = useState(false)
   const[showAllProducts,setShowAllProducts] = useState(false)
   const[showLogOut,setShowLogOut] = useState(false)
   const[showFirmTitle,setShowFirmTitle] = useState(true)



   useEffect(()=>{
    const loginToken = localStorage.getItem('loginToken')
    if(loginToken){
      setShowLogOut(true)

       
    }
   },[])




   useEffect(()=>{
    const firmName = localStorage.getItem('firmName');
    const firmId = localStorage.getItem('firmId')
    if(firmName || firmId ){
        setShowFirmTitle(false)
        setShowWelcome(true)
    }
     },[])


     const logOutHandler =()=>{
      confirm("Are you sure to logout?")
        localStorage.removeItem("loginToken");
        localStorage.removeItem("firmId");
        localStorage.removeItem('firmName')
        setShowLogOut(false)
        setShowFirmTitle(true)
        setShowWelcome(false)
    }






   const showLoginHandler = ()=>{
    setShowLogin(true)
    setShowRegister(false)
    setShowFirm(false)
    setShowProduct(false)
    setShowWelcome(false)
    setShowAllProducts(false)
   }
   const showRegisterHandler = ()=>{
    setShowRegister(true)
    setShowLogin(false)
    setShowFirm(false)
    setShowProduct(false)
    setShowWelcome(false)
    setShowAllProducts(false)
    
   }

   const showFirmHandler = ()=>{
    if(showLogOut){
      setShowRegister(false)
      setShowLogin(false)
      setShowFirm(true)
      setShowProduct(false)
      setShowWelcome(false)
      setShowAllProducts(false)
    }else{
      alert("please login");
      setShowLogin(true)
    }
  }

  const showProductHandler = ()=>{
    if(showLogOut){
      setShowRegister(false)
      setShowLogin(false)
      setShowFirm(false)
      setShowProduct(true)
      setShowWelcome(false)
      setShowAllProducts(false)
      }else{
          alert("please login")
          setShowLogin(true)
      }
  
  }
  

   const showWelcomeHandler = () =>{
    setShowProduct(false)
    setShowRegister(false)
    setShowLogin(false)
    setShowFirm(false)
    setShowWelcome(true)
    setShowAllProducts(false)

   }

   const showAllProductsHandler = ()=>{
    if(showLogOut){
      setShowRegister(false)
      setShowLogin(false)
      setShowFirm(false)
      setShowProduct(false)
      setShowWelcome(false)
      setShowAllProducts(true)
  
  }else{
      alert("please login")
      setShowLogin(true)
   }


  }




  return (
    <>
        <section className='landingsection'>
            <NavBar showLoginHandler={showLoginHandler} showRegisterHandler={showRegisterHandler}
            showLogOut={showLogOut}
            logOutHandler={logOutHandler} 
            />
            <div className="collectionSection">
            {/* we send props here */}
            <SideBar showFirmHandler={showFirmHandler} showProductHandler={showProductHandler}
            showAllProductsHandler={showAllProductsHandler} 
            showFirmTitle={showFirmTitle}/>
            {/* after login it is redirected to Welcome Page */}
            {showLogin && <LoginFile  showWelcomeHandler={showWelcomeHandler}/>}
            {/* After Register it is redirected to Login page */}
            {showRegister && <Register showLoginHandler={showLoginHandler} />}
            {showFirm && showLogOut &&  <Add_firm />}
            {showProduct && showLogOut && <Add_Product />}
            {showWelcome && <Welcome />}
            {showAllProducts &&showLogOut &&  <AllProducts /> }
           
    

            </div>

        </section>
    </>
  )
}

export default LandingPage