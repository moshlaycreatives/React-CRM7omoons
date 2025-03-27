import React from "react";
import { useState, useEffect } from "react";
import { Box, Typography, Divider, Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import Grid from '@mui/material/Grid2';
import AddProducts from "./AddProducts";
import { endpoints } from "../../../apiEndpoints";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


// const BASE_URL = "https://x4tlhqkd-3000.inc1.devtunnels.ms/"; // Replace with actual base URL
// const BASE_URL = "http://13.60.141.161:3000/"; // Replace with actual base URL
const BASE_URL = "https://crm.7omoons.com:3000/"; // Replace with actual base URL


const Products = () => {
    const navigate = useNavigate();
    const [open, setopen] = useState(false);
    const [productData, setproductData] = useState([])











    const getAllproducts = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(endpoints.GetAllProduts, {
                headers: { Authorization: `Token ${token}` }
            });

            console.log("API Response:", response.data);
            setproductData(Array.isArray(response.data.data) ? response.data.data : []);
            toast.success(response.data.message);
        } catch (error) {
            toast.error(error.response.data.message);
            setproductData([]); // Set an empty array to prevent crashes
        }
    };



    useEffect(() => {
        getAllproducts();
    }, [])





    const add = () => {
        navigate('/admin/products/add-Products')
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
                    }}>Products</span>

                </Typography>
                <Box sx={{ display: 'flex', }}>
                    <Button style={{
                        backgroundColor: "#0F75BC",
                        fontFamily: "Outfit",
                        fontSize: "14px",
                        lineHeight: "16px",
                        fontWeight: 500,
                        textTransform: "none",
                        width: "150px",
                        height: "50px",
                        margin: "0px 0px 50px 0px"

                    }}
                        variant="contained"
                        startIcon={<AddIcon />}
                        onClick={add}
                    >Add Product</Button>
                </Box>
            </Box>


            <Box >



                <Grid container spacing={2} mt={5}>
                    {productData?.map((item) => (
                        <Grid item size={{ xs: 12, sm: 6, md: 4 }} key={item.id}>
                            <Box
                                sx={{
                                    cursor: 'pointer',
                                    height: "300px",  // Fixed height for all boxes
                                    padding: "10px 20px",
                                    boxShadow: "0px 4px 30px 0px #0000001A",
                                    borderRadius: "10px",
                                    backgroundColor: "white",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between"  // Ensures consistent placement of content
                                }}

                            >


                                {/* Image Container */}
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        height: "220px", // Fixed height for images
                                        overflow: "hidden",
                                        margin: "20px 0px 40px 0px"
                                    }}
                                >
                                    <img
                                        src={`${BASE_URL}${item.image}`}
                                        alt={item.name}
                                        style={{ width: "100%", height: "100%", objectFit: "contain" }} // Maintain aspect ratio
                                    />
                                </Box>

                                <Divider sx={{ backgroundColor: "#737373" }} />

                                <Box sx={{ padding: "10px 20px" }}>
                                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                        <Typography
                                            style={{
                                                fontFamily: "Outfit",
                                                fontWeight: 500,
                                                fontSize: "18px",
                                                lineHeight: "31px",
                                                color: "#2B2B2B",
                                            }}
                                        >
                                            {item.name}
                                        </Typography>
                                        <Typography
                                            style={{
                                                fontFamily: "Outfit",
                                                fontWeight: 500,
                                                fontSize: "18px",
                                                lineHeight: "31px",
                                                color: "red",
                                            }}
                                        >
                                            {item.quantity}
                                            <Typography
                                            style={{
                                                fontFamily: "Outfit",
                                                fontWeight: 500,
                                                fontSize: "18px",
                                                lineHeight: "31px",
                                                color: "green",
                                            }}
                                        >
                                            {`-${item.sold}`}
                                        </Typography>
                                        </Typography>
                                      
                                    </Box>

                                    <Typography
                                        style={{
                                            fontFamily: "Outfit",
                                            fontWeight: 500,
                                            fontSize: "18px",
                                            lineHeight: "31px",
                                            color: "#0F75BC",
                                        }}
                                    >
                                        {`$ ${item.price}`}
                                    </Typography>
                                </Box>
                            </Box>

                        </Grid>
                    ))}


                </Grid>

            </Box>






        </>
    )
}


export default Products;