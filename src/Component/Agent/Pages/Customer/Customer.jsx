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
import AddCustomer from "./AddCustomer";
import axios from "axios";
import { endpoints } from "../../../apiEndpoints";
import { useNavigate } from "react-router-dom";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import toast from "react-hot-toast";






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
    const [formData, setformData] = useState({
      
    })
    const [open, setopen] = useState(false);
    const [edit, setedit] = useState(false);
    const [views, setviews] = useState(false);
    const navigate = useNavigate();
    const [CustomerData, setCustomerData] = useState([]);



    const handleChange = (event, customerId) => {
        const { name, value } = event.target;
        setformData((prevData) => ({
            ...prevData,
            [name]: value,
            customerId: customerId,  // Store customerId in state
        }));

        // Call the API when status changes
        InvoiceStatusChange(value, customerId);
    };



    const getAllCustomers = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(endpoints.GetAllCustomer, {
                headers: { Authorization: `Token ${token}` }
            });

            toast.success(response.data.message);
            setCustomerData(Array.isArray(response.data.data) ? response.data.data : []);
        } catch (error) {
           toast.error(error.response.data.message);
            setCustomerData([]); // Set an empty array to prevent crashes
        }
    };



    console.log("this is customer data", CustomerData)


    useEffect(() => {
        getAllCustomers();
    }, [])



    const InvoiceStatusChange = async (status, customerId) => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.patch(
                `${endpoints.ChangeCustomeStatus}/${customerId}?status=${status}`, // Pass customerId as a query param
                {},
                {
                    headers: { Authorization: `Token ${token}` },
                }
            );
            toast.success(response.data.message);
            getAllCustomers();
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };




    const add = () => {
        navigate('/agent/customer/add-Customer')
    }
 
    const handleEdit = (user) => {
        navigate('/agent/customer/EditCustomer', {
            state: {
                _id: user._id,
            }
        });
    }

    const handleView = (user) => {
        navigate('/agent/customer/ViewDetail', {
            state: {
                _id: user._id,
            }
        });
    };





    return (
        <>
            <Box sx={{ display: 'flex', flexFlow: "row", justifyContent: 'space-between', width: '100%', }}>
                <Typography

                    style={{
                        fontFamily: "Outfit",
                        fontWeight: 500,
                        fontSize: "25px",
                        lineHeight: "31px",
                        color: "#0F75BC"
                    }}>
                    {`${"Dashboard>"}`}
                    <span style={{
                        color: "#2B2B2B"
                    }}>Customer</span>

                </Typography>
                <Box sx={{ display: 'flex', }}>
                    <Button style={{
                        backgroundColor: "#0F75BC",
                        fontFamily: "Outfit",
                        fontSize: "14px",
                        lineHeight: "16px",
                        fontWeight: 500,
                        textTransform: "none",
                        width: "115px",
                        height: "50px",
                        margin: "0px 0px 50px 0px"

                    }}
                        variant="contained"
                        startIcon={<AddIcon />}
                        onClick={add}
                    >Add</Button>
                </Box>
            </Box>



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
                                <TableCell style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: "14px", lineHeight: "21px" }}>Change Status</TableCell>
                                <TableCell style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: "14px", lineHeight: "21px" }}>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {Array.isArray(CustomerData) && CustomerData.length > 0 ? (
                                CustomerData.map((row) => (
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
                                        <TableCell sx={{
                                            color: row.status === "Active" ? "#55BB36" : row.status === "InActive" ? "#E50909" : "inherit",
                                        }}>{row.status}</TableCell>
                                        <TableCell>


                                            <FormControl
                                                sx={{
                                                    width: "130px",

                                                    color: "#FFFFFF",

                                                }}
                                            >
                                                <Select displayEmpty style={{ color: "#2B2B2B", borderRadius: "20px", backgroundColor: "#FFFFFF", height: "30px", }}
                                                name="status"
                                                value={formData.status}
                                                // onChange={handleChange}
                                                onChange={(event) => handleChange(event, row._id)}
                                                >
                                                     <MenuItem disabled>Select Status</MenuItem>
                                                    <MenuItem value='Active'>Active</MenuItem>
                                                    <MenuItem value='InActive'>InActive</MenuItem>


                                                </Select>
                                            </FormControl>


                                        </TableCell>
                                        <TableCell>
                                            <Box sx={{ display: "flex", gap: "5px" }}>
                                                <VisibilityIcon
                                                    style={{ color: "#55BB36", border: "1px solid #2B2B2B", borderRadius: "20px", padding: "4px" , cursor:"pointer" }}
                                                    onClick={() => handleView(row)}
                                                />
                                                <CreateOutlinedIcon
                                                    style={{ color: "#0F75BC", border: "1px solid #2B2B2B", borderRadius: "20px", padding: "4px" , cursor:"pointer"}}
                                                    onClick={() => handleEdit(row)}
                                                />
                                            </Box>
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={12} align="center">No Customers Available</TableCell>
                                </TableRow>
                            )}
                        </TableBody>


                    </Table>

                </Box>


            </Box>



        </>
    )
}


export default Customer;