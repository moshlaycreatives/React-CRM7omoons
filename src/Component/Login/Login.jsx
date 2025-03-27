import React from "react";
import { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import Grid from '@mui/material/Grid2';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { endpoints } from "../apiEndpoints";
import toast from "react-hot-toast";



const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');





    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(endpoints.LoginUsers, {
                email: email,
                password: password,
            });

            if (response.status === 200) {
                const usertype = response.data.data.userRole;
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("usertype", JSON.stringify(usertype));
                localStorage.setItem("name", response.data.data.name);




                // Check userRole and navigate accordingly
                if (usertype === "Admin") {
                    console.log("Navigating to /admin/dashboard");
                    navigate("/admin/dashboard");
                } else if (usertype === "Agent") {
                    console.log("Navigating to /agent/dashboard");
                    navigate("/agent/dashboard");
                } else {
                    console.log("Unknown user type:", usertype);
                    toast.error("Unauthorized access or unknown user type.");
                }

                toast.success(response.data.message);
            } else {
                toast.error("Login failed with status: " + response.message);
                console.log("Login failed with status: ", response.status);
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "An error occurred");
        }
    };





    return (
        <>

            <Grid container spacing={2} sx={{
                overflow: "hidden",
                height: "100vh",



            }}>
                <Grid size={{ xs: 12, md: 6 }}
                    sx={{ display: { xs: "none", md: "block" } }}
                >
                    <img
                        src="/image/LoginImage.png"
                        style={{
                            width: "100%",
                            height: "100vh",
                            objectFit: "cover", // Ensures the image covers the screen
                            objectPosition: "center",
                            padding: "40px"

                        }}
                    />


                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Box sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: "110px 0px 0px 0px"
                    }}>
                        <img
                            src="/image/Logo.png"
                            style={{
                                width: "200px",
                                height: "105px",
                                display: "flex",

                            }}

                        />
                    </Box>

                    <Box sx={{
                        padding: "60px"
                    }}>
                        <Box sx={{
                            padding: "30px",
                            boxShadow: "0px 4px 30px 0px #0000001A",
                            borderRadius: "10px",
                            backgroundColor: "white"
                        }}>
                            <Typography style={{
                                fontFamily: "Outfit",
                                fontWeight: 600,
                                fontSize: "26px",
                                lineHeight: "32px",
                                color: "#2B2B2B",
                                textAlign: "center"
                            }}>
                                Sign In
                            </Typography>
                            <Typography style={{
                                fontFamily: "Outfit",
                                fontWeight: 400,
                                fontSize: "20px",
                                lineHeight: "25px",
                                color: "#2B2B2B",
                                textAlign: "center"
                            }}>
                                Welcome! Please enter your details
                            </Typography>
                            <Typography style={{
                                fontFamily: "Outfit",
                                fontWeight: 500,
                                fontSize: "18px",
                                lineHeight: "31px",
                                color: "#2B2B2B",
                                margin: "60px 0px 0px 0px"

                            }}>
                                Email
                            </Typography>
                            <TextField
                                fullWidth
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                style={{
                                    margin: "10px 0px 0px 0px"
                                }}
                            />
                            <Typography style={{
                                fontFamily: "Outfit",
                                fontWeight: 500,
                                fontSize: "18px",
                                lineHeight: "31px",
                                color: "#2B2B2B",
                                margin: "15px 0px 0px 0px"

                            }}>
                                Password
                            </Typography>
                            <TextField
                                fullWidth
                                type="password"
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                style={{
                                    margin: "10px 0px 0px 0px"
                                }}
                            />

                            <Box sx={{ marginTop: "30px", display: "flex", justifyContent: "flex-end" }}>
                                <Button
                                    style={{
                                        backgroundColor: "#0F75BC",
                                        color: "white",
                                        textTransform: "none",
                                        width: "180px",
                                        height: "50px",
                                        borderRadius: "10px"
                                    }}
                                    onClick={handleSubmit}
                                >
                                    Login
                                </Button>
                            </Box>


                        </Box>
                    </Box>

                </Grid>

            </Grid>
        </>
    )
}

export default Login;