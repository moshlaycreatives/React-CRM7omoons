import React, { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Tooltip,
} from "@mui/material";
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { endpoints } from "../../../apiEndpoints";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import toast from "react-hot-toast";
import { useLocation } from 'react-router-dom';


// const url = "https://x4tlhqkd-3000.inc1.devtunnels.ms"
// const url = "http://13.60.141.161:3000"
const url = "https://crm.7omoons.com:3000"
// const url = "https://13.60.141.161:3000"





const Invoices = () => {
    const location = useLocation();
    const { _id } = location.state || {};
    console.log("this is graph  id", _id)
    const [formData, setformData] = useState({});
    const [open, setopen] = useState(false);
    const [InVoiceData, setInVoiceData] = useState(null)
    const navigate = useNavigate();






    const handleChangeInvoiceStatus = (event, customerId) => {
        const { value } = event.target;

        // Update form data state if necessary
        setformData(prevData => ({
            ...prevData,
            invoiceStatus: value,
            customerId: customerId,
        }));

        // Call the API to change invoice status
        InvoiceStatusChange(value, customerId);
    };

    const handleChangeOrderStatus = (event, customerId) => {
        const { value } = event.target;

        // Update form data state if necessary
        setformData(prevData => ({
            ...prevData,
            orderStatus: value,
            customerId: customerId,
        }));

        // Call the API to change order status
        OrderStatus(value, customerId);
    };



    const getAllInvoice = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(`${endpoints.GetAllInvoiceBYAgent}?userId=${_id}`, {
                headers: { Authorization: `Token ${token}` }
            });

            toast.success(response.data.message);
            setInVoiceData(Array.isArray(response.data.data) ? response.data.data : []);
        } catch (error) {
            toast.error(error.response.data.message);
            setInVoiceData([]); // Set an empty array to prevent crashes
        }
    };






    useEffect(() => {
        getAllInvoice();
    }, [])



    const InvoiceStatusChange = async (status, customerId) => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.patch(
                `${endpoints.ChangeInvoiceStatus}${customerId}?invoiceStatus=${status}`, // Pass customerId as a query param
                {},
                {
                    headers: { Authorization: `Token ${token}` },
                }
            );

            toast.success(response.data.message);
            getAllInvoice();
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };

    const OrderStatus = async (statu, customerId) => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.patch(
                `${endpoints.OrderStatusChange}${customerId}?status=${statu}`, // Pass customerId as a query param
                {},
                {
                    headers: { Authorization: `Token ${token}` },
                }
            );

            toast.success(response.data.message);
            getAllInvoice();
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };




    const add = () => {
        navigate('/agent/invoices/Add-Invoices')
    }



    const VIewPDF = (pdfUrl) => {
        if (pdfUrl) {
            const fullPDFUrl = `${url}${pdfUrl}`;
            window.open(fullPDFUrl, "_blank");
        } else {
            alert("PDF URL not found!");
        }
    };



    return (
        <>
           


            <Box sx={{
                boxShadow: "0px 4px 30px 0px #0000001A",
                borderRadius: "10px",
                backgroundColor: "white"
            }}>
                <Box style={{ overflowX: "auto" }}>
                    <Table sx={{ border: "1px solid #EFEFEF", minWidth: "70rem" }}>
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: "14px", lineHeight: "21px" }}>Id</TableCell>
                                <TableCell style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: "14px", lineHeight: "21px" }}>Company Name</TableCell>
                                <TableCell style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: "14px", lineHeight: "21px" }}>Client name</TableCell>
                                {/* <TableCell style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: "14px", lineHeight: "21px" }}>Products Name</TableCell> */}
                                <TableCell style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: "14px", lineHeight: "21px" }}>Total Amount</TableCell>
                                <TableCell style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: "14px", lineHeight: "21px" }}>Invoice No.</TableCell>
                                <TableCell style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: "14px", lineHeight: "21px" }}>Date</TableCell>
                                <TableCell style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: "14px", lineHeight: "21px" }}>Invoice Status</TableCell>
                                <TableCell style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: "14px", lineHeight: "21px" }}>Invoice Status</TableCell>
                                <TableCell style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: "14px", lineHeight: "21px" }}>Order Status</TableCell>
                                <TableCell style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: "14px", lineHeight: "21px" }}>Order Status</TableCell>

                                <TableCell style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: "14px", lineHeight: "21px" }}>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {InVoiceData?.map((row) => (

                                <TableRow key={row.id}>
                                    <TableCell>{row?.invoiceNo || "N/A"}</TableCell>
                                    <TableCell>{row?.customer?.companyName || "N/A"}</TableCell>
                                    <TableCell>{row?.customer?.clientName || "N/A"}</TableCell>
                                    {/* <TableCell>
                                        {row?.order?.products?.map(p => p?.product?.name).join(', ') || 'No Products'}
                                    </TableCell> */}
                                    <TableCell>{`$${row?.total || "N/A"}`}</TableCell>
                                    <TableCell>{row?.invoiceNo || "N/A"}</TableCell>
                                    <TableCell>{row?.date ? new Date(row.date).toLocaleDateString() : "N/A"}</TableCell>
                                    <TableCell
                                        sx={{
                                            color:
                                                row?.invoiceStatus === "Pending"
                                                    ? "#FFA20A"
                                                    : row?.invoiceStatus === "Paid"
                                                        ? "#55BB36"
                                                        : row?.invoiceStatus === "Cancel"
                                                            ? "red"
                                                            : "inherit",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {row?.invoiceStatus || "N/A"}
                                    </TableCell>

                                    <TableCell>
                                        <FormControl sx={{ width: "130px" }}>
                                            <Select
                                                displayEmpty
                                                style={{ color: "#2B2B2B", borderRadius: "20px", backgroundColor: "#FFFFFF", height: "30px" }}
                                                name="status"
                                                value={formData.status}
                                                onChange={(event) => handleChangeInvoiceStatus(event, row?._id)}
                                            >
                                                <MenuItem disabled>Select Status</MenuItem>
                                                <MenuItem value='Pending'>Pending</MenuItem>
                                                <MenuItem value='Paid'>Paid</MenuItem>
                                                <MenuItem value='Cancel'>Cancel</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            color:
                                                row?.order?.orderStatus === "InProcess"
                                                    ? "#FFA201"
                                                    : row?.order?.orderStatus === "Shipped"
                                                        ? "#01AAAE"
                                                        : row?.order?.orderStatus === "Delivered"
                                                            ? "#55BB36"
                                                            : "inherit",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {row?.order?.orderStatus || "N/A"}
                                    </TableCell>

                                    <TableCell>
                                        <FormControl sx={{ width: "130px" }}>
                                            <Select
                                                displayEmpty
                                                style={{ color: "#2B2B2B", borderRadius: "20px", backgroundColor: "#FFFFFF", height: "30px" }}
                                                name="statu"
                                                value={formData.statu}
                                                onChange={(event) => handleChangeOrderStatus (event, row?._id)}
                                            >
                                                <MenuItem disabled>Order Status</MenuItem>
                                                <MenuItem value='InProcess'>InProcess</MenuItem>
                                                <MenuItem value='Shipped'>Shipped</MenuItem>
                                                <MenuItem value='Delivered'>Delivered</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </TableCell>
                                    <TableCell>
                                        <Box sx={{ display: "flex", gap: "5px" }}>
                                            <VisibilityIcon
                                                onClick={() => VIewPDF(row.pdfUrl)}
                                                style={{ color: "#55BB36", border: "1px solid #2B2B2B", borderRadius: "20px", padding: "4px" , cursor:"pointer" }}
                                            />
                                        </Box>
                                    </TableCell>
                                </TableRow>

                            ))}
                        </TableBody>


                    </Table>

                </Box>


            </Box>



        </>
    )
}


export default Invoices;