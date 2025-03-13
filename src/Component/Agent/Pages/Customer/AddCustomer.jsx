import React, { useState } from "react";
import { Box, Typography, Divider, TextField, Button } from "@mui/material";
import Grid from '@mui/material/Grid2';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from "axios";
import toast from "react-hot-toast";
import { endpoints } from "../../../apiEndpoints";
import { useNavigate } from "react-router-dom";







const states = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado",
    "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho",
    "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana",
    "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota",
    "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",
    "New Hampshire", "New Jersey", "New Mexico", "New York",
    "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon",
    "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
    "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington",
    "West Virginia", "Wisconsin", "Wyoming"
];



const AddCustomer = () => {
    const navigate = useNavigate();

    const [formData, setformData] = useState({
        companyName: "",
        clientName: "",
        // repName: "",
        phone: "",
        email: "",
        city: "",
        state: "",
        zipCode: "",
        address: "",
        str: ""
    })


    const handleChange = (event) => {
        const { name, value } = event.target;
        setformData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }


    const handleNavigate = () => {
        navigate('/agent/customer')
    }


    console.log("this is formDaa", formData)

    const CreateCustomers = async () => {


        try {

            const token = localStorage.getItem("token");
            const response = await axios.post(endpoints.CreateCustomer, formData, {
                headers: { Authorization: `Token ${token}` },
            });


            if (response.status === 200) {

                
            }
            toast.success(response.data.message);
            handleNavigate();
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
                    {`${"Dashboard>Customer>"}`}
                    <span style={{
                        color: "#2B2B2B"
                    }}>Add Customer</span>
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
                    Add Customer Details
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
                                    Company Name*
                                </Typography>
                                <TextField fullWidth
                                    placeholder="Enter company name"
                                    name="companyName"
                                    value={formData.companyName}
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
                                    Client Name*
                                </Typography>
                                <TextField fullWidth
                                    placeholder="Enter client name"
                                    name="clientName"
                                    value={formData.clientName}
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
                                    Email*
                                </Typography>
                                <TextField fullWidth
                                    placeholder="Enter email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}

                                />
                            </Grid>

                        </Grid>
                    </Box>
                    <Box >
                        <Grid container spacing={2} mt={2}>
                            {/* <Grid size={{ xs: 12, md: 6 }}>
                                <Typography style={{
                                    fontFamily: "Outfit",
                                    fontWeight: 500,
                                    fontSize: "18px",
                                    lineHeight: "31px",
                                    color: "#2B2B2B",
                                    margin: "0px 0px 15px 0px"
                                }}>
                                    Rep Name*
                                </Typography>
                                <TextField fullWidth
                                    placeholder="Chris Adam"
                                    name="repName"
                                    value={formData.repName}
                                    onChange={handleChange}
                                />
                            </Grid> */}
                            <Grid size={{ xs: 12, md: 12 }}>
                                <Typography style={{
                                    fontFamily: "Outfit",
                                    fontWeight: 500,
                                    fontSize: "18px",
                                    lineHeight: "31px",
                                    color: "#2B2B2B",
                                    margin: "0px 0px 15px 0px"
                                }}>
                                    City*
                                </Typography>
                                <TextField fullWidth
                                    placeholder="Enter city"
                                    name="city"
                                    value={formData.city}
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
                                    State*
                                </Typography>
                                <FormControl fullWidth>
                                    <Select
                                        name="state"
                                        value={formData.state}
                                        onChange={handleChange}
                                    >
                                        {states.map((state) => (
                                            <MenuItem key={state} value={state}>
                                                {state}
                                            </MenuItem>
                                        ))}
                                        {/* </Select> */}
                                    </Select>
                                </FormControl>
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
                                    Zip Code*
                                </Typography>
                                <TextField fullWidth
                                    placeholder="Enter zip code"
                                    name="zipCode"
                                    value={formData.zipCode}
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
                                    Address*
                                </Typography>
                                <TextField fullWidth
                                    placeholder="Enter Address"
                                    name="address"
                                    value={formData.address}
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
                                    Str/Apt/Bid*
                                </Typography>
                                <TextField fullWidth
                                    placeholder="Enter street or apartment or building"
                                    name="str"
                                    value={formData.str}
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
                                width: "130px",
                                height: "40px",
                                margin: "30px 0px 0px 15px"
                            }}
                                variant="contained"
                                onClick={CreateCustomers}
                            >Save</Button>
                        </Box>
                    </Box>








                </Box>














                {/* Min Grid End */}
            </Box >

        </>
    )
}


export default AddCustomer;