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

import axios from "axios";
import { endpoints } from "../../../apiEndpoints";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';




const Data = [
    {
        id: "1",
        Id: "12",
        Company: "Moody moon",
        client: "Shyamal Patel",
        name: "Chris Adam",
        phone: "(248) 571-2790",
        email: "muraddahche@gmail.com",
        city: "Hudson",
        state: "Wi",
        code: "54016",
        status: "Active",
        Change: "Select Status",
    },
    {
        id: "2",
        Id: "13",
        Company: "Moody moon",
        client: "Shyamal Patel",
        name: "Chris Adam",
        phone: "(248) 571-2790",
        email: "muraddahche@gmail.com",
        city: "Hudson",
        state: "Wi",
        code: "54016",
        status: "Active",
        Change: "Select Status",
    },
    {
        id: "3",
        Id: "14",
        Company: "Moody moon",
        client: "Shyamal Patel",
        name: "Chris Adam",
        phone: "(248) 571-2790",
        email: "muraddahche@gmail.com",
        city: "Hudson",
        state: "Wi",
        code: "54016",
        status: "Active",
        Change: "Select Status",
    },
    {
        id: "4",
        Id: "15",
        Company: "Moody moon",
        client: "Shyamal Patel",
        name: "Chris Adam",
        phone: "(248) 571-2790",
        email: "muraddahche@gmail.com",
        city: "Hudson",
        state: "Wi",
        code: "54016",
        status: "InActive",
        Change: "Select Status",
    },
    {
        id: "5",
        Id: "16",
        Company: "Moody moon",
        client: "Shyamal Patel",
        name: "Chris Adam",
        phone: "(248) 571-2790",
        email: "muraddahche@gmail.com",
        city: "Hudson",
        state: "Wi",
        code: "54016",
        status: "InActive",
        Change: "Select Status",
    },
    {
        id: "6",
        Id: "17",
        Company: "Moody moon",
        client: "Shyamal Patel",
        name: "Chris Adam",
        phone: "(248) 571-2790",
        email: "muraddahche@gmail.com",
        city: "Hudson",
        state: "Wi",
        code: "54016",
        status: "Active",
        Change: "Select Status",
    },
    {
        id: "6",
        Id: "18",
        Company: "Moody moon",
        client: "Shyamal Patel",
        name: "Chris Adam",
        phone: "(248) 571-2790",
        email: "muraddahche@gmail.com",
        city: "Hudson",
        state: "Wi",
        code: "54016",
        status: "Active",
        Change: "Select Status",
    },
    {
        id: "6",
        Id: "19",
        Company: "Moody moon",
        client: "Shyamal Patel",
        name: "Chris Adam",
        phone: "(248) 571-2790",
        email: "muraddahche@gmail.com",
        city: "Hudson",
        state: "Wi",
        code: "54016",
        status: "InActive",
        Change: "Select Status",
    },
]



const Customer = () => {
    const location = useLocation();
    const { _id } = location.state || {};
    const [userData, setuserData] = useState(null);

    console.log("this customer id", _id)


    const getAllCustomers = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(`${endpoints.GetAllCustomer}?agentId=${_id}`, {
                headers: { Authorization: `Token ${token}` }
            });

            console.log("API Response:", response.data); // Debugging Log

            if (response.data.success && response.data.data) {
                setuserData(response.data.data); // Directly set the object
            } else {
                console.error("No data found for this customer.");
            }
        } catch (error) {
            console.error("API Error:", error);
        }
    };



    useEffect(() => {
        if (_id) {
            getAllCustomers();
        }
    }, [_id]); // Ensure _id is available before calling the API




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
                                <TableCell style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: "14px", lineHeight: "21px" }}>Rep name</TableCell>
                                <TableCell style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: "14px", lineHeight: "21px" }}>Phone#</TableCell>
                                <TableCell style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: "14px", lineHeight: "21px" }}>Email</TableCell>
                                <TableCell style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: "14px", lineHeight: "21px" }}>City</TableCell>
                                <TableCell style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: "14px", lineHeight: "21px" }}>State</TableCell>
                                <TableCell style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: "14px", lineHeight: "21px" }}>Zip Code</TableCell>
                                <TableCell style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: "14px", lineHeight: "21px" }}>Status</TableCell>
                                {/* <TableCell style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: "14px", lineHeight: "21px" }}>Change Status</TableCell>
                                <TableCell style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: "14px", lineHeight: "21px" }}>Action</TableCell> */}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {userData?.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell>{row.customerId}</TableCell>
                                    <TableCell>{row.companyName}</TableCell>
                                    <TableCell>{row.clientName}</TableCell>
                                    <TableCell>{row.repName}</TableCell>
                                    <TableCell>{row.phone}</TableCell>
                                    <TableCell>{row.email}</TableCell>
                                    <TableCell>{row.city}</TableCell>
                                    <TableCell>{row.state}</TableCell>
                                    <TableCell>{row.zipCode}</TableCell>
                                    <TableCell>{row.status}</TableCell>
                                    <TableCell>{row.Change}</TableCell>
                                    {/* <TableCell>
                                        <Box sx={{ display: "flex", gap: "5px" }}>
                                            <VisibilityIcon
                                                style={{ color: "#55BB36", border: "1px solid #2B2B2B", borderRadius: "20px", padding: "4px" }}
                                            />
                                            <CreateOutlinedIcon
                                                style={{ color: "#0F75BC", border: "1px solid #2B2B2B", borderRadius: "20px", padding: "4px" }}
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


export default Customer;