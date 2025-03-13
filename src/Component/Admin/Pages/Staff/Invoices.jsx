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
import { useLocation } from 'react-router-dom';



const Data = [
    {
        id: "1",
        Id: "12",
        Company: "Moody moon",
        client: "Shyamal Patel",
        Products: "CBlue Raspberry, Vanilla Mint",
        amount: "$2,345",
        Invoice: "2004",
        date: "12-03-2025",
        status: "Pending",
        Change: "Select Status",
    },
    {
        id: "2",
        Id: "13",
        Company: "Moody moon",
        client: "Shyamal Patel",
        Products: "CBlue Raspberry, Vanilla Mint",
        amount: "$2,345",
        Invoice: "2004",
        date: "12-03-2025",
        status: "Paid",
        Change: "Select Status",
    },
    {
        id: "3",
        Id: "14",
        Company: "Moody moon",
        client: "Shyamal Patel",
        Products: "CBlue Raspberry, Vanilla Mint",
        amount: "$2,345",
        Invoice: "2004",
        date: "12-03-2025",
        status: "Pending",
        Change: "Select Status",
    },
    {
        id: "4",
        Id: "15",
        Company: "Moody moon",
        client: "Shyamal Patel",
        Products: "CBlue Raspberry, Vanilla Mint",
        amount: "$2,345",
        Invoice: "2004",
        date: "12-03-2025",
        status: "Cancle",
        Change: "Select Status",
    },
    {
        id: "5",
        Id: "16",
        Company: "Moody moon",
        client: "Shyamal Patel",
        Products: "CBlue Raspberry, Vanilla Mint",
        amount: "$2,345",
        Invoice: "2004",
        date: "12-03-2025",
        status: "Paid",
        Change: "Select Status",
    },
    {
        id: "6",
        Id: "17",
        Company: "Moody moon",
        client: "Shyamal Patel",
        Products: "CBlue Raspberry, Vanilla Mint",
        amount: "$2,345",
        Invoice: "2004",
        date: "12-03-2025",
        status: "Pending",
        Change: "Select Status",
    },
    {
        id: "6",
        Id: "18",
        Company: "Moody moon",
        client: "Shyamal Patel",
        Products: "CBlue Raspberry, Vanilla Mint",
        amount: "$2,345",
        Invoice: "2004",
        date: "12-03-2025",
        status: "Cancle",
        Change: "Select Status",
    },
    {
        id: "6",
        Id: "19",
        Company: "Moody moon",
        client: "Shyamal Patel",
        Products: "CBlue Raspberry, Vanilla Mint",
        amount: "$2,345",
        Invoice: "2004",
        date: "12-03-2025",
        status: "Pending",
        Change: "Select Status",
    },
]



const Invoices = () => {
    const location = useLocation();
    const { _id } = location.state || {};
    console.log("this is graph  id", _id)

    const [InVoiceData, setInVoiceData] = useState(null)
    const navigate = useNavigate();







    const getAllInvoice = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(`${endpoints.GetAllInvoiceBYAgent}?userId=${_id}`, {
                headers: { Authorization: `Token ${token}` }
            });

            console.log("API Response:", response.data);
            setInVoiceData(Array.isArray(response.data.data) ? response.data.data : []);
        } catch (error) {
            console.error("API Error:", error);
            setInVoiceData([]); // Set an empty array to prevent crashes
        }
    };



    console.log("this is customer data", InVoiceData)


    useEffect(() => {
        getAllInvoice();
    }, [])











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
                                <TableCell style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: "14px", lineHeight: "21px" }}>Products Name</TableCell>
                                <TableCell style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: "14px", lineHeight: "21px" }}>Total Amount</TableCell>
                                <TableCell style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: "14px", lineHeight: "21px" }}>Invoice No.</TableCell>
                                <TableCell style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: "14px", lineHeight: "21px" }}>Date</TableCell>
                                <TableCell style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: "14px", lineHeight: "21px" }}>Status</TableCell>
                                {/* <TableCell style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: "14px", lineHeight: "21px" }}>Change Status</TableCell>
                                <TableCell style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: "14px", lineHeight: "21px" }}>Action</TableCell> */}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {InVoiceData?.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell>{row?.customer?.customerId || "N/A"}</TableCell>
                                    <TableCell>{row?.customer?.companyName || "N/A"}</TableCell>
                                    <TableCell>{row?.customer?.clientName || "N/A"}</TableCell>
                                    <TableCell>
                                        {row?.order?.products?.map(p => p?.product?.name).join(', ') || 'No Products'}
                                    </TableCell>
                                    <TableCell>{`$${row?.total || "N/A"}`}</TableCell>
                                    <TableCell>{row?.invoiceNo || "N/A"}</TableCell>
                                    <TableCell>{row?.date ? new Date(row.date).toLocaleDateString() : "N/A"}</TableCell>
                                    <TableCell>{row?.invoiceStatus || "N/A"}</TableCell>
                                  
                                    {/* <TableCell>
                                        <Box sx={{ display: "flex", gap: "5px" }}>
                                            <VisibilityIcon
                                                style={{ color: "#55BB36", border: "1px solid #2B2B2B", borderRadius: "20px", padding: "4px" }}
                                            />
                                        </Box>
                                    </TableCell> */}
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