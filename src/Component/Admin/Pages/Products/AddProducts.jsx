import React from "react";
import { useState, useEffect } from "react";
import { Box, Typography, Divider, TextField, Button } from "@mui/material";
import Grid from '@mui/material/Grid2';
import { useLocation, useNavigate } from 'react-router-dom';
import { endpoints } from "../../../apiEndpoints";
import axios from "axios";
import { Button as MuiButton, IconButton } from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import toast from "react-hot-toast";





const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const AddProducts = () => {
    const navigate = useNavigate();
    const [formData, setformData] = useState({
        name: "",
        price: "",
        quantity: "",
        image: null
    });
    const [imagePreview, setImagePreview] = useState(null);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setformData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setformData((prevData) => ({
                ...prevData,
                image: file
            }));

            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = () => {
        navigate('/admin/products')
    }


    const CreatsProduct = async () => {
        try {
            const token = localStorage.getItem("token");

            // Create FormData object to send multipart/form-data
            const formDataToSend = new FormData();
            formDataToSend.append('name', formData.name);
            formDataToSend.append('price', formData.price);
            formDataToSend.append('quantity', formData.quantity);

            // Append image file if it exists
            if (formData.image) {
                formDataToSend.append('image', formData.image);
            }

            const response = await axios.post(endpoints.CreateProducts, formDataToSend, {
                headers: {
                    Authorization: `Token ${token}`,
                    'Content-Type': 'multipart/form-data'
                },
            });

            if (response.status === 200) {
                // TODO: Add success handling (e.g., show success message, reset form, navigate)
                console.log("Product created successfully", response.data);
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
                    {`${"Dashboard>Products>"}`}
                    <span style={{
                        color: "#2B2B2B"
                    }}>Add Product</span>
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
                    Add Product Details
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
                                    Product Name*
                                </Typography>
                                <TextField fullWidth
                                    placeholder="Enter Product Name**"
                                    name="name"
                                    value={formData.name}
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
                                    Price*
                                </Typography>
                                <TextField fullWidth
                                    placeholder="Enter Price*"
                                    name="price"
                                    value={formData.price}
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
                                    Qty*
                                </Typography>
                                <TextField fullWidth
                                    placeholder="Enter phone"
                                    name="quantity"
                                    value={formData.quantity}
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
                                    Products  Image*
                                </Typography>
                                <MuiButton
                                    component="label"
                                    variant="contained"
                                    startIcon={<CloudUploadIcon />}
                                    sx={{
                                        backgroundColor: "#0F75BC",
                                        '&:hover': { backgroundColor: "#0A5A8C" }
                                    }}
                                >
                                    Upload Image
                                    <VisuallyHiddenInput
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageUpload}
                                    />
                                </MuiButton>
                                {imagePreview && (
                                    <Box sx={{
                                        mt: 2,
                                        display: 'flex',
                                        justifyContent: 'center',
                                        maxWidth: '200px',
                                        maxHeight: '200px'
                                    }}>
                                        <img
                                            src={imagePreview}
                                            alt="Product Preview"
                                            style={{
                                                maxWidth: '100%',
                                                maxHeight: '100%',
                                                objectFit: 'contain'
                                            }}
                                        />
                                    </Box>
                                )}
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
                                onClick={CreatsProduct}
                            >Add Products</Button>
                        </Box>
                    </Box>
                </Box>














                {/* Min Grid End */}
            </Box>

        </>
    )
}


export default AddProducts;