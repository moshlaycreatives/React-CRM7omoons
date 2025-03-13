import React from "react";
import { useState, useEffect } from "react";
import { Box, Typography, Divider, TextField, Button } from "@mui/material";
import Grid from '@mui/material/Grid2';
import { useLocation, useNavigate } from 'react-router-dom';
import { endpoints } from "../../../apiEndpoints";
import axios from "axios";
import toast from "react-hot-toast";





const EditStaff = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { _id } = location.state || {};
    const [formData, setformData] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",

    })


    const handleChange = (event) => {
        const { name, value } = event.target;
        setformData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }





    const getAgentbyID = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(`${endpoints.GetAgent}${_id}`, {
                headers: { Authorization: `Token ${token}` }
            });

            console.log("API Response:", response.data); // Debugging

            if (response.data.success && response.data.data.length > 0) {
                setformData(response.data.data[0]); // Extract first object from array
            } else {
                console.error("No data found for this agent.");
            }
            toast.success(response.data.message);
        } catch (error) {
            toast.error(error.response.data.message);
            setformData({ name: "", email: "", password: "", phone: "" }); // Reset to prevent errors
        }
    };





    useEffect(() => {
        if (_id) {
            getAgentbyID();
        }
    }, [_id]);



    console.log("this is edit staff data", formData)


    const handleSubmit = () => {
        navigate('/admin/staff')
    }


    const UpdateAgent = async () => {

        try {

            const token = localStorage.getItem("token");
            const response = await axios.put(`${endpoints.UpdateAgent}${_id}`, formData, {
                headers: { Authorization: `Token ${token}` },
            });

            if (response.status === 200) {

            }
            toast.success(response.data.message);
            handleSubmit();
        } catch (error) {
            toast.error(error.response.data.message);
        }
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
                        color: "#0F75BC",
                        margin: "0px 0px 40px 0px"
                    }}>
                    {`${"Dashboard>Staff>"}`}
                    <span style={{
                        color: "#2B2B2B"
                    }}>Add Staff</span>
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
                    Edit Staff Details
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

                            <Grid size={{ xs: 12, md: 6 }}>
                                <Typography style={{
                                    fontFamily: "Outfit",
                                    fontWeight: 500,
                                    fontSize: "18px",
                                    lineHeight: "31px",
                                    color: "#2B2B2B",
                                    margin: "0px 0px 15px 0px"
                                }}>
                                    Agent Name*
                                </Typography>
                                <TextField fullWidth
                                    placeholder="Enter Agent Name*"
                                    name="name"
                                    // value={formData.name}
                                    value={formData.name || ""}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <Typography style={{
                                    fontFamily: "Outfit",
                                    fontWeight: 500,
                                    fontSize: "18px",
                                    lineHeight: "31px",
                                    color: "#2B2B2B",
                                    margin: "0px 0px 15px 0px"
                                }}>
                                    Email*
                                </Typography>
                                <TextField fullWidth
                                    placeholder="Enter Email*"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}


                                />
                            </Grid>

                        </Grid>
                    </Box>

                    <Box >
                        <Grid container spacing={2} mt={2}>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <Typography style={{
                                    fontFamily: "Outfit",
                                    fontWeight: 500,
                                    fontSize: "18px",
                                    lineHeight: "31px",
                                    color: "#2B2B2B",
                                    margin: "0px 0px 15px 0px"
                                }}>
                                    Phone*
                                </Typography>
                                <TextField fullWidth
                                    placeholder="Enter phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <Typography style={{
                                    fontFamily: "Outfit",
                                    fontWeight: 500,
                                    fontSize: "18px",
                                    lineHeight: "31px",
                                    color: "#2B2B2B",
                                    margin: "0px 0px 15px 0px"
                                }}>
                                    Password*
                                </Typography>
                                <TextField fullWidth
                                    placeholder="Enter Password*"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}


                                />
                            </Grid>

                        </Grid>
                    </Box>


                    <Box sx={{ marginTop: 'auto', display: 'flex', flexFlow: "row", justifyContent: 'space-between', width: '100%', }}>
                        <Button style={{
                            border: "1px solid #0F75BC",
                            color: "#0F75BC",
                            fontSize: "14px",
                            lineHeight: "16px",
                            fontWeight: 500,
                            textTransform: "none",
                            width: "150px",
                            height: "40px",
                            margin: "30px 0px 0px 0px"
                        }}
                            variant="outlined"

                        >Cancel</Button>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Button style={{
                                backgroundColor: "#0F75BC",
                                fontSize: "14px",
                                lineHeight: "16px",
                                fontWeight: 500,
                                textTransform: "none",
                                width: "150px",
                                height: "40px",
                                margin: "30px 0px 0px 15px"
                            }}
                                variant="contained"
                                onClick={UpdateAgent}
                            >Update Staff</Button>
                        </Box>
                    </Box>


                </Box>

                {/* Min Grid End */}
            </Box>

        </>
    )
}


export default EditStaff;