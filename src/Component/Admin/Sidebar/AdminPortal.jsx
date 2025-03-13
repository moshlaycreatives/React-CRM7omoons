import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Nav from "./Nav";
import menuData from "./menuData";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Staff from "../Pages/Staff/Staff";
import Products from "../Pages/Products/Products";
import Payment from "../Pages/Payment/Payment";
import EditStaff from "../Pages/Staff/EditStaff";
import Section from "../Pages/Staff/Section";
import AddProducts from "../Pages/Products/AddProducts";
import AddStaff from "../Pages/Staff/AddStaff";





const Root = styled(Box)(({ theme }) => ({
    backgroundColor: "rgb(241,241,241)",
    width: "100%",
    minHeight: "100vh",
    height: "auto",
    boxSizing: "border-box",
    padding: "50px 24px 0px 350px",
    [theme.breakpoints.down("lg")]: {
        padding: "0px 24px 24px 24px",
    },
    [theme.breakpoints.down("sm")]: {
        margin: "50px 0px 0px 0px",
    },
}));

const AdminPortal = () => {
    return (
        <Fragment>
            <Nav menuData={menuData} />
            <Root>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/staff" element={<Staff />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/payment" element={<Payment />} />
                    <Route path="/staff/editStaff" element={<EditStaff />} />
                    <Route path="/staff/section" element={<Section />} />
                    <Route path="/products/add-Products" element={<AddProducts />} />
                    <Route path="/staff/add-Staff" element={<AddStaff />} />

                </Routes>
            </Root>
        </Fragment>
    );
};

export default AdminPortal;
