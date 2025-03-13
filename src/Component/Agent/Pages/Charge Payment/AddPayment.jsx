import React from "react";
import { useState } from "react";
import { Box, Typography, Divider, TextField, Button } from "@mui/material";
import Grid from '@mui/material/Grid2';
import Popup from "./Popup";
import axios from "axios";
import { endpoints } from "../../../apiEndpoints";





const AddPayment = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [formData, setformData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        amount:""
    })





    const handleChange = (event) => {
        const { name, value } = event.target;
        setformData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }


    // const CreatePayment = async () => {

    //     try {

    //         const token = localStorage.getItem("token");
    //         const response = await axios.post(endpoints.CreatePayment, formData, {
    //             headers: { Authorization: `Token ${token}` },
    //         });

    //         if (response.status === 200) {

    //         }

    //     } catch (error) {

    //     }
    // };


    // const CreatePayment = async () => {
    //     try {
    //         const token = localStorage.getItem("token");
    //         const response = await axios.post(endpoints.CreatePayment, formData, {
    //             headers: { Authorization: `Token ${token}` },
    //         });
    
    //         if (response.status === 200) {
    //             // const paymentUrl = response.data.url; // API se milne wala URL
    //             const paymentUrl = response.data.session.url;
    //             localStorage.setItem("paymentUrl", paymentUrl); // URL ko localStorage mein save karein
    
    //             console.log("Payment URL saved:", paymentUrl);
    
    //             // URL ko turant call karein
    //             await callStoredUrl(paymentUrl);
    //         }
    //     } catch (error) {
    //         console.error("Error creating payment:", error);
    //     }
    // };
    

    const CreatePayment = async () => {
        try {
            const token = localStorage.getItem("token");
            const response = await axios.post(endpoints.CreatePayment, formData, {
                headers: { Authorization: `Token ${token}` },
            });
    
            if (response.status === 200) {
                const paymentUrl = response.data.session?.url; // Extracting URL safely
                if (paymentUrl) {
                    localStorage.setItem("paymentUrl", paymentUrl); // Saving URL in localStorage
                    console.log("Payment URL saved:", paymentUrl);
    
                    // Open the payment URL in a new tab
                    window.open(paymentUrl, "_blank");
                } else {
                    console.error("Payment URL not found in response.");
                }
            }
        } catch (error) {
            console.error("Error creating payment:", error);
        }
    };
    

    // Yeh function stored URL ko call karega
    const callStoredUrl = async (url) => {
        try {
            const response = await axios.get(url); // URL ko call karein
            console.log("Response from stored URL:", response.data);
        } catch (error) {
            console.error("Error calling stored URL:", error);
        }
    };
    

    const handleopenPopup = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <>
            {showPopup && (
                <Popup onClose={handleClosePopup} />
            )}

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
                    }}>Customer</span>
                </Typography>
            </Box>
            <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 4 }}>
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
                            padding: "20px"
                        }}>
                            Client Information
                        </Typography>
                        <Box>
                            <Divider
                                sx={{
                                    backgroundColor: "#737373",
                                }}
                            />
                        </Box>

                        <Box
                            sx={{
                                padding: "20px"
                            }}
                        >
                            <Typography style={{
                                fontFamily: "Outfit",
                                fontWeight: 500,
                                fontSize: "18px",
                                lineHeight: "31px",
                                color: "#2B2B2B",
                                margin: "0px 0px 15px 0px"
                            }}>
                                Client Name
                            </Typography>
                            <TextField fullWidth
                                placeholder="Enter client name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            <Typography style={{
                                fontFamily: "Outfit",
                                fontWeight: 500,
                                fontSize: "18px",
                                lineHeight: "31px",
                                color: "#2B2B2B",
                                margin: "15px 0px 15px 0px"
                            }}>
                                Email
                            </Typography>
                            <TextField fullWidth
                                placeholder="Enter email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <Typography style={{
                                fontFamily: "Outfit",
                                fontWeight: 500,
                                fontSize: "18px",
                                lineHeight: "31px",
                                color: "#2B2B2B",
                                margin: "15px 0px 15px 0px"
                            }}>
                                Phone
                            </Typography>
                            <TextField fullWidth
                                placeholder="Enter phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                            <Typography style={{
                                fontFamily: "Outfit",
                                fontWeight: 500,
                                fontSize: "18px",
                                lineHeight: "31px",
                                color: "#2B2B2B",
                                margin: "15px 0px 15px 0px"
                            }}>
                                Company
                            </Typography>
                            <TextField fullWidth
                                placeholder="Enter Company name"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                            />
                            <Typography style={{
                                fontFamily: "Outfit",
                                fontWeight: 500,
                                fontSize: "18px",
                                lineHeight: "31px",
                                color: "#2B2B2B",
                                margin: "0px 0px 15px 0px"
                            }}>
                                Amount
                            </Typography>
                            <TextField fullWidth
                                placeholder="Enter client name"
                                name="amount"
                                value={formData.amount}
                                onChange={handleChange}
                            />
                        </Box>

                        <Button
                            sx={{
                                fontFamily: "Outfit",
                                fontWeight: 500,
                                fontSize: "20px",
                                lineHeight: "31px",
                                color: "#FFFFFF",
                                backgroundColor: "#0F75BC",
                                textTransform: "none",
                                width: "100%",
                                height: "56px",
                                borderRadius: "12px",
                                margin: "40px 0px 10px 0px"
                            }}
                            onClick={CreatePayment}
                        >
                            Confirm and Pay
                        </Button>


                    </Box>
                </Grid>

            </Grid>




        </>
    )
}

export default AddPayment;









