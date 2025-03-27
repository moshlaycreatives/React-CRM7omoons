import React, { useState, useEffect } from "react";
import { Box, Typography, Card, CardContent, Avatar } from "@mui/material";
import Grid from '@mui/material/Grid2';
import Graph from "./Graph";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from "axios";
import { endpoints } from "../../../apiEndpoints";
import { useLocation } from 'react-router-dom';
import toast from "react-hot-toast";


const states = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];



const Report = () => {
    const location = useLocation();
    const { _id } = location.state || {};
    console.log("this is graph  id", _id)
    const [formData, setformData] = useState({
        month: ""
    })
    const [reportData, setreportData] = useState('');
    const [OrderData, setOrderData] = useState('');
    const [MonthData, setMonthData] = useState('');


    const handleChange = (event) => {
        const { name, value } = event.target;
        setformData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }




    const getReportData = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(`${endpoints.GetDashboardReport}?userId=${_id}`, {
                headers: { Authorization: `Token ${token}` }
            });

            console.log("API Response:", response.data);
            setreportData(response.data.data);
        } catch (error) {
            console.error("API Error:", error);
            setreportData([]); // Set an empty array to prevent crashes
        }
    };
    const getOrderData = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(`${endpoints.GetAdminOrdernbyDate}?userId=${_id}`, {
                headers: { Authorization: `Token ${token}` }
            });

            console.log("API Response:", response.data);
            setOrderData(response.data.data);
        } catch (error) {
            console.error("API Error:", error);
            // Set an empty array to prevent crashes
        }
    };

    const GetInvoiceMonth = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(`${endpoints.GetInvoicebymonth}?month=${formData.month}&userId=${_id}`, {
                headers: { Authorization: `Token ${token}` }
            });

            console.log("API Response:", response.data);
            setMonthData(response.data);
            toast.success(response.data.message);
        } catch (error) {
            toast.error(error.response.data.message);
            // Set an empty array to prevent crashes
        }
    };

    console.log("this is month data", MonthData)

    useEffect(() => {
        GetInvoiceMonth();
    }, [formData.month])


    useEffect(() => {
        getReportData();
        getOrderData();
    }, [])

    return (
        <>
            <Box sx={{ display: 'flex', flexFlow: "row", justifyContent: 'space-between', width: '100%', }}>
                <Typography

                    style={{
                        fontFamily: "Outfit",
                        fontWeight: 500,
                        fontSize: "25px",
                        lineHeight: "31px",
                        color: "#0F75BC",
                        margin: "0px 0px 40px 0px"
                    }}>
                    {`${"Dashboard>"}`}
                    <span style={{
                        color: "#2B2B2B"
                    }}>Reports</span>
                </Typography>
            </Box>


            <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 3 }}>
                    <Box sx={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "10px",
                        backgroundColor: "#0F75BC",
                        padding: "15px"
                    }}>
                        <Box sx={{ display: 'flex', flexFlow: "row", justifyContent: 'space-between', width: '100%', }}>
                            <Typography
                                style={{
                                    fontFamily: "Outfit",
                                    fontWeight: 500,
                                    fontSize: "25px",
                                    lineHeight: "31px",
                                    color: "#FFFFFF",

                                }}>
                                Pending
                                <Typography
                                    style={{
                                        fontFamily: "Outfit",
                                        fontWeight: 500,
                                        fontSize: "25px",
                                        lineHeight: "31px",
                                        color: "#FFFFFF",
                                        marginTop: "30px"

                                    }}>
                                    {`${reportData?.Pending ?? 0}`}
                                </Typography>
                            </Typography>

                            <Box sx={{ display: 'flex', }}>
                                <img
                                    src="/image/D1.png"
                                />


                            </Box>
                        </Box>

                    </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 3 }}>
                    <Box sx={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "10px",
                        backgroundColor: "#FFA201",
                        padding: "15px"
                    }}>
                        <Box sx={{ display: 'flex', flexFlow: "row", justifyContent: 'space-between', width: '100%', }}>
                            <Typography
                                style={{
                                    fontFamily: "Outfit",
                                    fontWeight: 500,
                                    fontSize: "25px",
                                    lineHeight: "31px",
                                    color: "#FFFFFF",

                                }}>
                                In Process
                                <Typography
                                    style={{
                                        fontFamily: "Outfit",
                                        fontWeight: 500,
                                        fontSize: "25px",
                                        lineHeight: "31px",
                                        color: "#FFFFFF",
                                        marginTop: "30px"

                                    }}>
                                    {`${reportData?.InProcess ?? 0}`}
                                </Typography>
                            </Typography>

                            <Box sx={{ display: 'flex', }}>
                                <img
                                    src="/image/D2.png"
                                />
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 3 }}>
                    <Box sx={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "10px",
                        backgroundColor: "#01AAAE",
                        padding: "15px"
                    }}>
                        <Box sx={{ display: 'flex', flexFlow: "row", justifyContent: 'space-between', width: '100%', }}>
                            <Typography
                                style={{
                                    fontFamily: "Outfit",
                                    fontWeight: 500,
                                    fontSize: "25px",
                                    lineHeight: "31px",
                                    color: "#FFFFFF",

                                }}>
                                Shipped
                                <Typography
                                    style={{
                                        fontFamily: "Outfit",
                                        fontWeight: 500,
                                        fontSize: "25px",
                                        lineHeight: "31px",
                                        color: "#FFFFFF",
                                        marginTop: "30px"

                                    }}>
                                    {reportData?.Shipped ?? 0}
                                </Typography>
                            </Typography>

                            <Box sx={{ display: 'flex', }}>
                                <img
                                    src="/image/D3.png"
                                />
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 3 }}>
                    <Box sx={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "10px",
                        backgroundColor: "#55BB36",
                        padding: "15px"
                    }}>
                        <Box sx={{ display: 'flex', flexFlow: "row", justifyContent: 'space-between', width: '100%', }}>
                            <Typography
                                style={{
                                    fontFamily: "Outfit",
                                    fontWeight: 500,
                                    fontSize: "25px",
                                    lineHeight: "31px",
                                    color: "#FFFFFF",

                                }}>
                                Delivered
                                <Typography
                                    style={{
                                        fontFamily: "Outfit",
                                        fontWeight: 500,
                                        fontSize: "25px",
                                        lineHeight: "31px",
                                        color: "#FFFFFF",
                                        marginTop: "30px"

                                    }}>
                                    {reportData?.Delivered ?? 0}
                                </Typography>
                            </Typography>

                            <Box sx={{ display: 'flex', }}>
                                <img
                                    src="/image/D4.png"
                                />
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>


            <Grid container spacing={2} mt={4}>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Box sx={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "10px",
                        backgroundColor: "#71357B",
                        padding: "15px"
                    }}>
                        <Box sx={{ display: 'flex', flexFlow: "row", justifyContent: 'space-between', width: '100%', }}>
                            <Typography
                                style={{
                                    fontFamily: "Outfit",
                                    fontWeight: 500,
                                    fontSize: "25px",
                                    lineHeight: "31px",
                                    color: "#FFFFFF"
                                }}>
                                No of Invoice
                            </Typography>
                            <Box sx={{ display: 'flex', }}>
                                <FormControl
                                    sx={{
                                        width: "130px",

                                        color: "#FFFFFF",

                                    }}
                                >
                                    <Select displayEmpty style={{ color: "#2B2B2B", borderRadius: "20px", backgroundColor: "#FFFFFF", height: "30px", }}
                                        name="month"
                                        value={formData.month}
                                        onChange={handleChange}
                                    >

                                        {states.map((state) => (
                                            <MenuItem key={state} value={state} >
                                                {state}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Box>
                        </Box>
                        <Box>
                            <Typography
                                style={{
                                    fontFamily: "Outfit",
                                    fontWeight: 400,
                                    fontSize: "20px",
                                    lineHeight: "30px",
                                    color: "#FFFFFF",
                                    marginTop: "10px"
                                }}>
                                {MonthData?.month ?? 0}
                            </Typography>
                            <Typography
                                style={{
                                    fontFamily: "Outfit",
                                    fontWeight: 400,
                                    fontSize: "55px",
                                    lineHeight: "30px",
                                    color: "#FFFFFF",
                                    marginTop: "35px"
                                }}>
                                {MonthData?.currentMonthInvoices ?? 0}
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexFlow: "row", justifyContent: 'space-between', width: '100%', marginTop: "30px" }}>
                            <Typography
                                style={{
                                    fontFamily: "Outfit",
                                    fontWeight: 300,
                                    fontSize: "25px",
                                    lineHeight: "31px",
                                    color: "#FFFFFF",

                                }}>
                                Total
                            </Typography>
                            <Box sx={{ display: 'flex', }}>
                                <Typography

                                    style={{
                                        fontFamily: "Outfit",
                                        fontWeight: 500,
                                        fontSize: "20px",
                                        lineHeight: "31px",
                                        color: "#E50909"
                                    }}>
                                    {MonthData?.percentageChange ?? 0}
                                    <span style={{
                                        color: "#FFFFFF"
                                    }}>% last month</span>

                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Grid>






                <Grid size={{ xs: 12, md: 8 }}>
                    <Box sx={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "10px",
                        backgroundColor: "#2C85ED26",
                        padding: "35px",
                        display: "flex"
                    }}>
                        <Typography style={{
                            fontFamily: "Outfit",
                            fontWeight: 500,
                            fontSize: "40px",
                            lineHeight: "50px",
                            color: "#2B2B2B",
                            margin: "0px 20px 0px 0px"
                        }}>
                            Invoices <br />
                            Status
                        </Typography>


                        <Box sx={{ display: "flex", gap: "20px" }}>
                            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#e3f2fd" }}>
                                <Card
                                    sx={{
                                        width: 135,
                                        textAlign: "center",
                                        borderRadius: 2,
                                        position: "relative",
                                        backgroundColor: "#fff",
                                        overflow: "visible", // Ensures the circle is visible outside
                                        boxShadow: "0px 4px 10px rgba(0,0,0,0.1)", // Optional for better look
                                    }}
                                >
                                    {/* Green Circle - Half Inside, Half Outside */}
                                    <Box
                                        sx={{
                                            width: 30,
                                            height: 30,
                                            backgroundColor: "green",
                                            borderRadius: "50%",
                                            position: "absolute",
                                            top: -15, // This ensures half inside, half outside
                                            left: "50%",
                                            transform: "translateX(-50%)",

                                        }}
                                    />
                                    <CardContent>
                                        <Typography style={{
                                            fontFamily: "Outfit",
                                            fontWeight: 400,
                                            fontSize: "18px",
                                            lineHeight: "22px",
                                            color: "#2B2B2B",
                                            marginTop: "5px"
                                        }}>
                                            Total Paid
                                        </Typography>
                                        <Typography style={{
                                            fontFamily: "Outfit",
                                            fontWeight: 500,
                                            fontSize: "40px",
                                            lineHeight: "50px",
                                            color: "#2B2B2B",
                                            marginTop: "5px"
                                        }}>
                                            {OrderData?.Paid?.totalInvoices ?? 0}
                                        </Typography>
                                        <Typography style={{
                                            fontFamily: "Outfit",
                                            fontWeight: 500,
                                            fontSize: "18px",
                                            lineHeight: "22px",
                                            color: "#2B2B2B",
                                            marginTop: "5px"
                                        }}>
                                            {`$${OrderData?.Paid?.totalSale ?? 0}`}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Box>



                            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#e3f2fd" }}>
                                <Card
                                    sx={{
                                        width: 135,
                                        textAlign: "center",
                                        borderRadius: 2,
                                        position: "relative",
                                        backgroundColor: "#fff",
                                        overflow: "visible", // Ensures the circle is visible outside
                                        boxShadow: "0px 4px 10px rgba(0,0,0,0.1)", // Optional for better look
                                    }}
                                >
                                    {/* Green Circle - Half Inside, Half Outside */}
                                    <Box
                                        sx={{
                                            width: 30,
                                            height: 30,
                                            backgroundColor: "#FFA201",
                                            borderRadius: "50%",
                                            position: "absolute",
                                            top: -15, // This ensures half inside, half outside
                                            left: "50%",
                                            transform: "translateX(-50%)",

                                        }}
                                    />
                                    <CardContent>
                                        <Typography style={{
                                            fontFamily: "Outfit",
                                            fontWeight: 400,
                                            fontSize: "18px",
                                            lineHeight: "22px",
                                            color: "#2B2B2B",
                                            marginTop: "5px"
                                        }}>
                                            Total Unpaid
                                        </Typography>
                                        <Typography style={{
                                            fontFamily: "Outfit",
                                            fontWeight: 500,
                                            fontSize: "40px",
                                            lineHeight: "50px",
                                            color: "#2B2B2B",
                                            marginTop: "5px"
                                        }}>
                                            {OrderData?.Pending?.totalInvoices ?? 0}
                                        </Typography>
                                        <Typography style={{
                                            fontFamily: "Outfit",
                                            fontWeight: 500,
                                            fontSize: "18px",
                                            lineHeight: "22px",
                                            color: "#2B2B2B",
                                            marginTop: "5px"
                                        }}>
                                            {`$${OrderData?.Pending?.totalSale ?? 0}`}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Box>
                            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#e3f2fd" }}>
                                <Card
                                    sx={{
                                        width: 135,
                                        textAlign: "center",
                                        borderRadius: 2,
                                        position: "relative",
                                        backgroundColor: "#fff",
                                        overflow: "visible", // Ensures the circle is visible outside
                                        boxShadow: "0px 4px 10px rgba(0,0,0,0.1)", // Optional for better look
                                    }}
                                >
                                    {/* Green Circle - Half Inside, Half Outside */}
                                    <Box
                                        sx={{
                                            width: 30,
                                            height: 30,
                                            backgroundColor: "#E50909",
                                            borderRadius: "50%",
                                            position: "absolute",
                                            top: -15, // This ensures half inside, half outside
                                            left: "50%",
                                            transform: "translateX(-50%)",

                                        }}
                                    />
                                    <CardContent>
                                        <Typography style={{
                                            fontFamily: "Outfit",
                                            fontWeight: 400,
                                            fontSize: "18px",
                                            lineHeight: "22px",
                                            color: "#2B2B2B",
                                            marginTop: "5px"
                                        }}>
                                            Cancelled
                                        </Typography>
                                        <Typography style={{
                                            fontFamily: "Outfit",
                                            fontWeight: 500,
                                            fontSize: "40px",
                                            lineHeight: "50px",
                                            color: "#2B2B2B",
                                            marginTop: "5px"
                                        }}>
                                            {OrderData?.Cancel?.totalInvoices ?? 0}
                                        </Typography>
                                        <Typography style={{
                                            fontFamily: "Outfit",
                                            fontWeight: 500,
                                            fontSize: "18px",
                                            lineHeight: "22px",
                                            color: "#2B2B2B",
                                            marginTop: "5px"
                                        }}>
                                            {`$${OrderData?.Cancel?.totalSale ?? 0}`}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Box>

































                        </Box>

                    </Box>
                </Grid>

            </Grid>

            <Box>
                <Graph />
            </Box>


        </>
    )
}


export default Report;