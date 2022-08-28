import * as React from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Logout from "../pages/logout/Logout";
import SignUp from "../pages/signUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import { useSelector } from "react-redux";
import CommonHeader from "../commonComponents/commonHeader/CommonHeader";
import Product from "../pages/product/Product";
import AddProperty from "../pages/addProperty/AddProperty";
import AddPropertyInput from "../pages/addProperty/addPropertyInput/AddPropertyInput";
import DelProduct from "../pages/addProperty/delProduct/DelProduct";
import Footer from "../commonComponents/footer/Footer";


export default function Routing() {
    const isAllowed = useSelector((store) => store.AuthSlice.isAllowed)
    return (
        <BrowserRouter>
            <CommonHeader />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product" element={<Product />} />
                <Route element={<PublicRoute isAllowed={isAllowed} />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/logout" element={<Logout />} />
                </Route>
                <Route element={<PrivateRoute isAllowed={isAllowed} />}>
                    {/* <Route path="/addProperty" element={<AddProperty />} /> */}
                    <Route path="/addPropertyInput" element={<AddPropertyInput />} />
                    <Route path="/delProduct" element={<DelProduct />} />
                </Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}


