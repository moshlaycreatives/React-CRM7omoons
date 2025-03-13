import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Nav from "./Nav";
import menuData from "./menuData";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Customer from "../Pages/Customer/Customer";
import Invoices from "../Pages/Invoices/Invoices";
import Products from "../Pages/Products/Products";
import Payment from "../Pages/Charge Payment/Payment";
import ViewDetail from "../Pages/Customer/ViewDetail";
import EditCustomer from "../Pages/Customer/EditCustomer";
import AddInvoices from "../Pages/Invoices/AddInvoices";
import AddCustomer from "../Pages/Customer/AddCustomer";




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

const AgentPortal = () => {
  return (
    <Fragment>
      <Nav menuData={menuData} />
      <Root>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/products" element={<Products />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/customer/ViewDetail" element={<ViewDetail />} />
          <Route path="/customer/EditCustomer" element={<EditCustomer />} />
          <Route path="/customer/add-Customer" element={<AddCustomer />} />
          <Route path="/invoices/Add-Invoices" element={<AddInvoices />} />

        </Routes>
      </Root>
    </Fragment>
  );
};

export default AgentPortal;
