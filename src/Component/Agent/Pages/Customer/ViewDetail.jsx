import React, { useEffect } from "react";
import { useState } from "react";
import { Box, Typography, Divider, TextField, Button } from "@mui/material";
import Grid from '@mui/material/Grid2';
import EditCustomer from "./EditCustomer";
import axios from "axios";
import { endpoints } from "../../../apiEndpoints";
import { useLocation, useNavigate } from 'react-router-dom';





const ViewDetail = () => {
    const [CustomerData, setCustomerData] = useState('');
    const [open, setopen] = useState(false);
    const location = useLocation();
    const { _id } = location.state || {};





    console.log("CustomerId", _id)



    const getAllCustomers = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(`${endpoints.GetCustomer}/${_id}`, {
                headers: { Authorization: `Token ${token}` }
            });

           
            setCustomerData(response.data.data);
        } catch (error) {
            console.error("API Error:", error);
            setCustomerData([]); // Set an empty array to prevent crashes
        }
    };


   console.log("this is one user data",CustomerData )

    useEffect(() => {
        getAllCustomers();
    }, [])



    const add = () => {
        setopen(true)
    }
    if (open) {

        return <EditCustomer />
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
                        color: "#0F75BC",
                        margin: "0px 0px 40px 0px"
                    }}>
                    {`${"Dashboard>Customer>"}`}
                    <span style={{
                        color: "#2B2B2B"
                    }}>Customer Info</span>
                </Typography>
            </Box>


            <Box sx={{

                boxShadow: "0px 4px 30px 0px #0000001A",
                borderRadius: "10px",
                backgroundColor: "white"
            }}>
                <Typography style={{
                    fontFamily: "Outfit",
                    fontWeight: 500,
                    fontSize: "25px",
                    lineHeight: "31px",
                    color: "#2B2B2B",
                    padding: "30px 30px 15px 30px",
                }}>
                    Customer Info
                </Typography>
                <Box

                >
                    <Divider
                        sx={{
                            backgroundColor: "#737373",
                        }}
                    />
                </Box>




                <Box sx={{
                    padding: "30px"
                }}>
                    <Box>
                        <Grid container spacing={2}>
                            <Grid size={{ xs: 6, md: 2 }}>
                                <Typography style={{
                                    fontFamily: "Outfit",
                                    fontWeight: 500,
                                    fontSize: "18px",
                                    lineHeight: "31px",
                                    color: "#2B2B2B",
                                    margin: "0px 0px 10px 0px"
                                }}>
                                    Company Name*
                                </Typography>
                                <Typography style={{
                                    fontFamily: "Outfit",
                                    fontWeight: 400,
                                    fontSize: "16px",
                                    lineHeight: "31px",
                                    color: "#737373",

                                }}>
                                {CustomerData?.companyName}
                                </Typography>

                            </Grid>
                            <Grid size={{ xs: 6, md: 2 }}>
                                <Typography style={{
                                    fontFamily: "Outfit",
                                    fontWeight: 500,
                                    fontSize: "18px",
                                    lineHeight: "31px",
                                    color: "#2B2B2B",
                                    margin: "0px 0px 15px 0px"
                                }}>
                                    Client Name*
                                </Typography>
                                <Typography style={{
                                    fontFamily: "Outfit",
                                    fontWeight: 400,
                                    fontSize: "16px",
                                    lineHeight: "31px",
                                    color: "#737373",

                                }}>
                                  {CustomerData?.clientName}
                                </Typography>
                            </Grid>
                            <Grid size={{ xs: 6, md: 2 }}>
                                <Typography style={{
                                    fontFamily: "Outfit",
                                    fontWeight: 500,
                                    fontSize: "18px",
                                    lineHeight: "31px",
                                    color: "#2B2B2B",
                                    margin: "0px 0px 15px 0px"
                                }}>
                                    Phone
                                </Typography>
                                <Typography style={{
                                    fontFamily: "Outfit",
                                    fontWeight: 400,
                                    fontSize: "16px",
                                    lineHeight: "31px",
                                    color: "#737373",

                                }}>
                                      {CustomerData?.phone}
                                </Typography>
                            </Grid>
                            <Grid size={{ xs: 6, md: 2 }}>
                                <Typography style={{
                                    fontFamily: "Outfit",
                                    fontWeight: 500,
                                    fontSize: "18px",
                                    lineHeight: "31px",
                                    color: "#2B2B2B",
                                    margin: "0px 0px 15px 0px"
                                }}>
                                    Email
                                </Typography>
                                <Typography style={{
                                    fontFamily: "Outfit",
                                    fontWeight: 400,
                                    fontSize: "16px",
                                    lineHeight: "31px",
                                    color: "#737373",

                                }}>
                                      {CustomerData?.email}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box>
                        <Grid container spacing={2} mt={3}>
                            <Grid size={{ xs: 6, md: 2 }}>
                                <Typography style={{
                                    fontFamily: "Outfit",
                                    fontWeight: 500,
                                    fontSize: "18px",
                                    lineHeight: "31px",
                                    color: "#2B2B2B",
                                    margin: "0px 0px 10px 0px"
                                }}>
                                    City
                                </Typography>
                                <Typography style={{
                                    fontFamily: "Outfit",
                                    fontWeight: 400,
                                    fontSize: "16px",
                                    lineHeight: "31px",
                                    color: "#737373",

                                }}>
                                     {CustomerData?.city}
                                </Typography>

                            </Grid>
                            <Grid size={{ xs: 6, md: 2 }}>
                                <Typography style={{
                                    fontFamily: "Outfit",
                                    fontWeight: 500,
                                    fontSize: "18px",
                                    lineHeight: "31px",
                                    color: "#2B2B2B",
                                    margin: "0px 0px 15px 0px"
                                }}>
                                    State
                                </Typography>
                                <Typography style={{
                                    fontFamily: "Outfit",
                                    fontWeight: 400,
                                    fontSize: "16px",
                                    lineHeight: "31px",
                                    color: "#737373",

                                }}>
                                     {CustomerData?.state}
                                </Typography>
                            </Grid>
                            <Grid size={{ xs: 6, md: 2 }}>
                                <Typography style={{
                                    fontFamily: "Outfit",
                                    fontWeight: 500,
                                    fontSize: "18px",
                                    lineHeight: "31px",
                                    color: "#2B2B2B",
                                    margin: "0px 0px 15px 0px"
                                }}>
                                    Zip Code
                                </Typography>
                                <Typography style={{
                                    fontFamily: "Outfit",
                                    fontWeight: 400,
                                    fontSize: "16px",
                                    lineHeight: "31px",
                                    color: "#737373",

                                }}>
                                  {CustomerData?.zipCode}
                                </Typography>
                            </Grid>

                        </Grid>
                    </Box>
                    <Box>
                        <Grid container spacing={2} mt={3}>
                            <Grid size={{ xs: 6, md: 2 }}>
                                <Typography style={{
                                    fontFamily: "Outfit",
                                    fontWeight: 500,
                                    fontSize: "18px",
                                    lineHeight: "31px",
                                    color: "#2B2B2B",
                                    margin: "0px 0px 10px 0px"
                                }}>
                                    Address
                                </Typography>
                                <Typography style={{
                                    fontFamily: "Outfit",
                                    fontWeight: 400,
                                    fontSize: "16px",
                                    lineHeight: "31px",
                                    color: "#737373",

                                }}>
                                      {CustomerData?.address}
                                </Typography>

                            </Grid>
                            <Grid size={{ xs: 6, md: 2 }}>
                                <Typography style={{
                                    fontFamily: "Outfit",
                                    fontWeight: 500,
                                    fontSize: "18px",
                                    lineHeight: "31px",
                                    color: "#2B2B2B",
                                    margin: "0px 0px 15px 0px"
                                }}>
                                    Str/Apr/Build
                                </Typography>
                                <Typography style={{
                                    fontFamily: "Outfit",
                                    fontWeight: 400,
                                    fontSize: "16px",
                                    lineHeight: "31px",
                                    color: "#737373",

                                }}>
                                      {CustomerData?.str}
                                </Typography>
                            </Grid>


                        </Grid>
                    </Box>



                    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                        <Button
                            style={{
                                backgroundColor: "#0F75BC",
                                color: "white",
                                textTransform: "none",
                                width: "180px",
                                height: "50px",
                                borderRadius: "10px"
                            }}
                            onClick={add}
                        >
                            Edit
                        </Button>
                    </Box>
                </Box>
                {/* Min Grid End */}
            </Box>

        </>
    )
}


export default ViewDetail;