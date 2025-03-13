import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';
import axios from "axios";
import { endpoints } from "../../../apiEndpoints";
import toast from "react-hot-toast";





const Graph = () => {

    const [GraphData, setGraphData] = useState(null);
    const [SaleData, setSaleData] = useState(null);




    const getTotalSale = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(endpoints.GetAgentTotalSale, {
                headers: { Authorization: `Token ${token}` }
            });

            console.log("API Response:", response.data);
            setSaleData(response.data.data);
        } catch (error) {
            console.error("API Error:", error);
            setSaleData([]); // Set an empty array to prevent crashes
        }
    };


    useEffect(() => {
        getTotalSale();
    }, [])

    const getGraphData = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(endpoints.GetDashboardGraph, {
                headers: { Authorization: `Token ${token}` }
            });

            console.log("API Response:", response.data);

            // Transform API data into chart-friendly format
            const formattedData = response.data.data.map((item) => ({
                name: item._id, // Month name
                revenue: item.totalSale // Total sale value
            }));

            setGraphData(formattedData);
            toast.success(response.data.message);
        } catch (error) {
            toast.error(error.response.data.message);
            setGraphData([]);
        }
    };
    useEffect(() => {
        getGraphData();
    }, [])





    return (
        <>
            <Grid container spacing={3} mt={6}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Box
                        sx={{
                            width: "100%",
                            height: "auto",
                            borderRadius: "10px",
                            backgroundColor: "#FFFFFF",
                            padding: "15px"
                        }}
                    >
                        <Box sx={{ display: 'flex', flexFlow: "row", justifyContent: 'space-between', width: '100%', }}>
                            <Typography
                                style={{
                                    fontFamily: "Outfit",
                                    fontWeight: 500,
                                    fontSize: "25px",
                                    lineHeight: "31px",
                                    color: "#2B2B2B"
                                }}>
                                Invoice Analytics
                            </Typography>
                            <Box sx={{ display: 'flex', }}>
                                {/* <img
                                    src="/image/year.png"
                                /> */}
                            </Box>
                        </Box>
                        <ResponsiveContainer width="100%" height={400}>
                            <BarChart data={GraphData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis tickFormatter={(value) => `$${value.toLocaleString()}`} />
                                <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                                <Bar dataKey="revenue" fill="#1976d2" />
                            </BarChart>
                        </ResponsiveContainer>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Box sx={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "10px",
                        backgroundColor: "#55BB36",
                        padding: "20px"
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
                                Total Sale
                                <Typography
                                    style={{
                                        fontFamily: "Outfit",
                                        fontWeight: 500,
                                        fontSize: "25px",
                                        lineHeight: "31px",
                                        color: "#FFFFFF",
                                        marginTop: "20px"
                                    }}>
                                  {`$${SaleData?.totalSale}`}
                                </Typography>
                            </Typography>
                            <Box sx={{ display: 'flex', }}>
                                <img
                                    src="/image/dollor.png"
                                />
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "10px",
                        backgroundColor: "#0F75BC",
                        padding: "20px",
                        marginTop: "20px"
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
                                Total Invoice
                                <Typography
                                    style={{
                                        fontFamily: "Outfit",
                                        fontWeight: 500,
                                        fontSize: "25px",
                                        lineHeight: "31px",
                                        color: "#FFFFFF",
                                        marginTop: "20px"
                                    }}>
                                 {SaleData?.totalInvoices}
                                </Typography>
                            </Typography>
                            <Box sx={{ display: 'flex', }}>
                                <img
                                    src="/image/invoice.png"
                                />
                            </Box>
                        </Box>
                    </Box>
                </Grid>

            </Grid>
        </>
    )
}

export default Graph;

