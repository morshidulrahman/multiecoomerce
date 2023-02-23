import React from "react";
import Routers from "../../../routes/Routes";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { useLocation } from "react-router-dom";
import AdminNav from "../Admin/AdminNav";
function Layout() {
  const location = useLocation();
  return (
    <>
      {location.pathname.startsWith("/dashboard") ? <AdminNav /> : <Header />}

      <div>
        <Routers />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
