import React from 'react'
 import Routers from "../../../routes/Routes"
 import Header from "../../Components/Header/Header"
 import Footer from "../../Components/Footer/Footer"
function Layout() {
  return (
  < >
   <Header/>
   <div>
      <Routers/>
   </div>
   <Footer/>
  </>
  )
}

export default Layout