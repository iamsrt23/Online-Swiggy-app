import React,{useState} from 'react'
import NavBar from '../Components/NavBar'
import SideBar from '../Components/SideBar'
import LoginFile from '../Components/Forms/LoginFile'
import Register from '../Components/Forms/Register'
import Add_firm from '../Components/Forms/Add_firm'
import Add_Products from '../Components/Forms/Add_Product'
import Add_Product from '../Components/Forms/Add_Product'
import Welcome from '../Components/Welcome'


const LandingPage = () => {
   const[showLogin,setShowLogin] = useState(false)
   const[showRegister,setShowRegister] = useState(false)
   const[showFirm,setShowFirm] = useState(false)
   const[showProduct,setShowProduct] = useState(false)
   const[showWelcome,setShowWelcome] = useState(false)

   const showLoginHandler = ()=>{
    setShowLogin(true)
    setShowRegister(false)
    setShowFirm(false)
    setShowProduct(false)
    setShowWelcome(false)
   }
   const showRegisterHandler = ()=>{
    setShowRegister(true)
    setShowLogin(false)
    setShowFirm(false)
    setShowProduct(false)
    setShowWelcome(false)
    
   }

   const showFirmHandler =()=>{
    setShowRegister(false)
    setShowLogin(false)
    setShowFirm(true)
    setShowProduct(false)
    setShowWelcome(false)
   }

   const showProductHandler = ()=>{
    setShowProduct(true)
    setShowRegister(false)
    setShowLogin(false)
    setShowFirm(false)
    setShowWelcome(false)
   }

   const showWelcomeHandler = () =>{
    setShowProduct(false)
    setShowRegister(false)
    setShowLogin(false)
    setShowFirm(false)
    setShowWelcome(true)

   }








  return (
    <>
        <section className='landingsection'>
            <NavBar showLoginHandler={showLoginHandler} showRegisterHandler={showRegisterHandler} />
            <div className="collectionSection">
            <SideBar showFirmHandler={showFirmHandler} showProductHandler={showProductHandler} />
            {/* after login it is redirected to Welcome Page */}
            {showLogin && <LoginFile  showWelcomeHandler={showWelcomeHandler}/>}
            {/* After Register it is redirected to Login page */}
            {showRegister && <Register showLoginHandler={showLoginHandler} />}
            {showFirm && <Add_firm />}
            {showProduct && <Add_Product />}
            {showWelcome && <Welcome />}
           
    

            </div>

        </section>
    </>
  )
}

export default LandingPage