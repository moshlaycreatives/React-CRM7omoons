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
import AddStaff from "./AddStaff";
import Section from "./Section";
import { endpoints } from "../../../apiEndpoints";
import axios from "axios";
import toast from "react-hot-toast";








const Data = [
    {
        id: "1",
        Id: "12",
        Name: "Tim David",
        Mail: "abc@gmail.com",
        phone: "(248) 571-2790",
        Password: "********",
        Dashboard: "View Dashboard",
    },
    {
        id: "1",
        Id: "13",
        Name: "Tim David",
        Mail: "abc@gmail.com",
        phone: "(248) 571-2790",
        Password: "********",
        Dashboard: "View Dashboard",
    },
    {
        id: "1",
        Id: "14",
        Name: "Tim David",
        Mail: "abc@gmail.com",
        phone: "(248) 571-2790",
        Password: "********",
        Dashboard: "View Dashboard",
    },
    {
        id: "1",
        Id: "15",
        Name: "Tim David",
        Mail: "abc@gmail.com",
        phone: "(248) 571-2790",
        Password: "********",
        Dashboard: "View Dashboard",
    },
    {
        id: "1",
        Id: "16",
        Name: "Tim David",
        Mail: "abc@gmail.com",
        phone: "(248) 571-2790",
        Password: "********",
        Dashboard: "View Dashboard",
    },
    {
        id: "1",
        Id: "17",
        Name: "Tim David",
        Mail: "abc@gmail.com",
        phone: "(248) 571-2790",
        Password: "********",
        Dashboard: "View Dashboard",
    },
    {
        id: "1",
        Id: "18",
        Name: "Tim David",
        Mail: "abc@gmail.com",
        phone: "(248) 571-2790",
        Password: "********",
        Dashboard: "View Dashboard",
    },
    {
        id: "1",
        Id: "19",
        Name: "Tim David",
        Mail: "abc@gmail.com",
        phone: "(248) 571-2790",
        Password: "********",
        Dashboard: "View Dashboard",
    },

]



const Staff = () => {
    const [open, setopen] = useState(false);
    const [check, setcheck] = useState(false);
    const [StaffData, setStaffData] = useState([]);
    const navigate = useNavigate();






    const getAllStaff = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(endpoints.GetAllAgent, {
                headers: { Authorization: `Token ${token}` }
            });

            console.log("API Response:", response.data);
            setStaffData(response.data.data);
            toast.success(response.data.message);
        } catch (error) {
            toast.error(error.response.data.message);
            setStaffData([]); // Set an empty array to prevent crashes
        }
    };



    console.log("this is Staff data", StaffData)


    useEffect(() => {
        getAllStaff();
    }, [])






    const add = () => {
        navigate('/admin/staff/add-Staff')
    }

    const close = (user) => {
        navigate('/admin/staff/section', {
            state: {
                _id: user._id,
            }
        });
    }



    const handleEdit = (user) => {
        navigate('/admin/staff/editStaff', {
            state: {
                _id: user._id,
            }
        });
    }









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
                    }}>Staff</span>

                </Typography>
                <Box sx={{ display: 'flex', }}>
                    <Button style={{
                        backgroundColor: "#0F75BC",
                        fontFamily: "Outfit",
                        fontSize: "14px",
                        lineHeight: "16px",
                        fontWeight: 500,
                        textTransform: "none",
                        width: "120px",
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
                                <TableCell style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: "14px", lineHeight: "21px" }}>Agent Name</TableCell>
                                <TableCell style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: "14px", lineHeight: "21px" }}>Mail</TableCell>
                                <TableCell style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: "14px", lineHeight: "21px" }}>Phone#</TableCell>
                                <TableCell style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: "14px", lineHeight: "21px" }}>Password</TableCell>
                                <TableCell style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: "14px", lineHeight: "21px" }}>Dashboard</TableCell>
                                <TableCell style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: "14px", lineHeight: "21px" }}>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {StaffData?.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell>{row.userNo}</TableCell>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell>{row.email}</TableCell>
                                    <TableCell>{row.phone}</TableCell>
                                    <TableCell>{row.password}</TableCell>
                                    <TableCell
                                        onClick={() => close(row)}
                                        sx={{ cursor: 'pointer' , color:"green" }}
                                    >
                                        View Dashboard
                                    </TableCell>

                                    <TableCell>
                                        <Box sx={{ display: "flex", gap: "5px" }}>
                                            <CreateOutlinedIcon
                                                style={{ color: "#0F75BC", border: "1px solid #2B2B2B", borderRadius: "20px", padding: "4px" }}
                                                onClick={() => handleEdit(row)}
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


export default Staff;