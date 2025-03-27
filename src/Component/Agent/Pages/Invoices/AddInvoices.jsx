import React, { useState, useEffect } from "react";
import { Box, Typography, Divider, TextField, Button, } from "@mui/material";
import Grid from '@mui/material/Grid2';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AddIcon from '@mui/icons-material/Add';
import { endpoints } from "../../../apiEndpoints";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';






// const BASE_URL = "https://x4tlhqkd-3000.inc1.devtunnels.ms/";
const BASE_URL = "https://crm.7omoons.com:3000/";



const AddInvoices = () => {
    const [CompanyName, setCompanyName] = useState([])
    const [ClientName, setClientName] = useState([])
    const [selectedCompany, setSelectedCompany] = useState('')
    const [selectedClient, setSelectedClient] = useState('')
    const [productData, setproductData] = useState([]);
    const navigate = useNavigate();

    const [formData, setformData] = useState({
        companyName: "",
        clientName: "",
        date: dayjs(),
        subTotal: "",
        discount: "",
        shippingFee: "",
        total: "",
        order: [],
    })



    const add = () => {
        navigate('/agent/invoices')
    }


    const [productEntries, setProductEntries] = useState([{
        selectedProduct: null,
        quantity: '',
        unitPrice: '',
        totalPrice: ''
    }]);

    const [addedProducts, setAddedProducts] = useState([]);
    const [overallTotalPrice, setOverallTotalPrice] = useState('$ 0.00');
    const [discount, setDiscount] = useState('0');
    const [shippingFees, setShippingFees] = useState('0');
    const [finalTotal, setFinalTotal] = useState('$ 0.00');


    const getALLCompany = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(endpoints.GetCompanybyClient, {
                headers: { Authorization: `Token ${token}` }
            });

            console.log("Full API Response:", response.data);

            // Ensure we're accessing the correct data structure
            const apiData = response.data.data || response.data;

            // Extract unique company names
            const uniqueCompanies = [...new Set(apiData.allCompanies)];
            setCompanyName(uniqueCompanies);

            // Set clients, ensuring it's an array
            const clients = Array.isArray(apiData.allClients)
                ? apiData.allClients
                : [];

            setClientName(clients);

            console.log("Unique Companies:", uniqueCompanies);
            console.log("Clients:", clients);
        } catch (error) {
            console.error("API Error:", error);
            setCompanyName([]);
            setClientName([]);
        }
    };


    useEffect(() => {
        getALLCompany();
    }, [])

    useEffect(() => {
        console.log("ClientName state:", ClientName);
    }, [ClientName]);

    useEffect(() => {
        getAllproducts();
    }, [])

    const getAllproducts = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(endpoints.GetAllProduts, {
                headers: { Authorization: `Token ${token}` }
            });

            console.log("API Response:", response.data);
            setproductData(Array.isArray(response.data.data) ? response.data.data : []);
        } catch (error) {
            console.error("API Error:", error);
            setproductData([]); // Set an empty array to prevent crashes
        }
    };





    const handleProductSelect = (item, entryIndex) => {
        const updatedEntries = [...productEntries];
        updatedEntries[entryIndex] = {
            ...updatedEntries[entryIndex],
            selectedProduct: item,
            unitPrice: item.price, 
            totalPrice: ''
        };
        setProductEntries(updatedEntries);
    };






    const handleUnitPriceChange = (e, entryIndex) => {
        const inputValue = e.target.value;
        const numericValue = inputValue.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');

        const unitPrice = parseFloat(numericValue) || '';

        const updatedEntries = [...productEntries];
        const currentEntry = updatedEntries[entryIndex];
        const quantity = parseFloat(currentEntry.quantity) || 0;
        const totalPrice = quantity * unitPrice;

        updatedEntries[entryIndex] = {
            ...currentEntry,
            unitPrice: numericValue,
            totalPrice: totalPrice ? totalPrice.toFixed(2) : ''
        };

        setProductEntries(updatedEntries);
    };


   
    const handleQuantityChange = (e, entryIndex) => {
        const inputValue = e.target.value;
        const numericValue = inputValue.replace(/[^0-9.]/g, '');

        const updatedEntries = [...productEntries];
        const currentEntry = updatedEntries[entryIndex];

        if (currentEntry.selectedProduct) {
            const unitPrice = currentEntry.unitPrice || 0;
            const quantity = parseFloat(numericValue) || 0;
            const total = quantity * unitPrice;

            updatedEntries[entryIndex] = {
                ...currentEntry,
                quantity: numericValue,
                totalPrice: total ? `$ ${total.toFixed(2)}` : ''
            };

            setProductEntries(updatedEntries);
        } else {
            updatedEntries[entryIndex] = {
                ...currentEntry,
                quantity: numericValue
            };
            setProductEntries(updatedEntries);
        }
    };






    const handleAddProduct = () => {
        setProductEntries([...productEntries, {
            selectedProduct: null,
            quantity: '',
            unitPrice: '',
            totalPrice: ''
        }]);
    };


    const handleRemoveProduct = (entryIndex) => {
        const updatedEntries = productEntries.filter((_, index) => index !== entryIndex);
        setProductEntries(updatedEntries);
    };


    useEffect(() => {
        const calculateSubtotal = () => {
            const subtotal = productEntries.reduce((total, entry) => {
                const entryTotal = entry.totalPrice
                    ? parseFloat(entry.totalPrice.replace(/[^0-9.-]/g, ''))
                    : 0;
                return total + entryTotal;
            }, 0);
            setOverallTotalPrice(`$ ${subtotal.toFixed(2)}`);
            const discountValue = parseFloat(discount.replace(/[^0-9.-]/g, '')) || 0;
            const isPercentage = discount.includes('%');

            let discountAmount = 0;
            if (isPercentage) {

                discountAmount = subtotal * (discountValue / 100);
            } else {

                discountAmount = discountValue;
            }
            const shippingFeesValue = parseFloat(shippingFees.replace(/[^0-9.-]/g, '')) || 0;

            const total = Math.max(subtotal - discountAmount, 0) + shippingFeesValue;
            setFinalTotal(`$ ${total.toFixed(2)}`);
        };

        calculateSubtotal();
    }, [productEntries, discount, shippingFees])


    const handleShippingFeesChange = (e) => {
        const inputValue = e.target.value;

        const cleanedValue = inputValue.replace(/[^0-9.]/g, '');

        setShippingFees(cleanedValue);
    };


    const handleChange = (newValue) => {
        console.log("Raw New Date Value:", newValue);

     
        const dayjsDate = newValue ? dayjs(newValue) : null;

        if (dayjsDate && dayjsDate.isValid()) {
            setformData((prevData) => ({
                ...prevData,
                date: dayjsDate, 
            }));
        } else {
            console.error("Invalid date selected:", newValue);
        }
    };



    const invoiceData = {
        ...formData,
        date: formData.date,
      
    };
    console.log('Invoice Data:', invoiceData);


    const Createinvoice = async () => {
        try {
            const orderProducts = productEntries
                .filter(entry => entry.selectedProduct && entry.quantity)
                .map(entry => {
                    if (!entry.selectedProduct._id) {
                        console.warn('Product without _id detected:', entry.selectedProduct);
                    }
                    if (!entry.quantity) {
                        console.warn('Product without quantity detected:', entry.selectedProduct);
                    }

                    const totalPrice = parseFloat(entry.totalPrice.replace(/[^0-9.-]/g, ''));

                    return {
                        product: entry.selectedProduct._id,
                        quantity: parseFloat(entry.quantity),
                        salePrice: entry.unitPrice,
                        totalPrice: totalPrice
                    };
                });

            if (orderProducts.length === 0) {
                throw new Error('No products selected for the invoice');
            }

            const invoiceData = {
                ...formData,
                date: formData.date ? formData.date.format("YYYY-MM-DD") : null, // ✅ Format only before sending
                subTotal: overallTotalPrice.replace(/[^0-9.-]/g, ''),
                discount: discount,
                discountAmount: discountAmount,
                shippingFee: shippingFees,
                total: finalTotal.replace(/[^0-9.-]/g, ''),
                products: orderProducts.map(product => product.product),
                order: {
                    products: orderProducts,
                    orderStatus: "Pending"
                },
                customer: selectedClient
            };

            console.log("Final Invoice Data:", invoiceData); // Debugging before sending

            const token = localStorage.getItem("token");
            const response = await axios.post(endpoints.CreateInvoice, invoiceData, {
                headers: { Authorization: `Token ${token}` },
            });

            console.log('API Response check URL:', response.data.data.pdfUrl);
            localStorage.setItem("PdfURL", response.data.data.pdfUrl);

            toast.success(response.data.message);
            add();
        } catch (error) {
            console.error("Invoice creation error:", error);
            toast.error(error.response?.data?.message || "Failed to create invoice");
        }
    };

    const [discountAmount, setDiscountAmount] = useState(0);


    const handleDiscountChange = (e) => {
        const inputValue = e.target.value;
        const cleanedValue = inputValue.replace(/[^0-9.%]/g, '');
        setDiscount(cleanedValue);


        const subtotalValue = parseFloat(overallTotalPrice.replace(/[^0-9.-]/g, '')) || 0;
        const isPercentage = cleanedValue.includes('%');
        let amount = 0;

        if (isPercentage) {
            const discountValue = parseFloat(cleanedValue.replace('%', '')) || 0;
            amount = (subtotalValue * discountValue) / 100;
        } else {
            amount = parseFloat(cleanedValue) || 0;
        }

        setDiscountAmount(amount);
    };




    const DownloadPDF = () => {
        const PDFURL = localStorage.getItem("PdfURL");

        if (PDFURL) {
            const fullPDFUrl = `${url}${PDFURL}`;


            fetch(fullPDFUrl)
                .then(response => response.blob())
                .then(blob => {
                    const blobURL = window.URL.createObjectURL(blob);
                    const link = document.createElement("a");
                    link.href = blobURL;
                    link.download = "document.pdf";
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    window.URL.revokeObjectURL(blobURL);
                })
                .catch(() => alert("Failed to download PDF!"));
        } else {
            alert("PDF URL not found!");
        }
    };

    function getSecondHalf(name) {
        const parts = name.split(' - '); 
        const midPoint = Math.floor(parts.length / 2); 
        return parts.slice(midPoint).join(' - '); 
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
                    {`${"Dashboard>Invoice>"}`}
                    <span style={{
                        color: "#2B2B2B"
                    }}>Create Invoice</span>
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
                    Add Details
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
                                <FormControl fullWidth>
                                    <Select
                                        displayEmpty
                                        value={selectedCompany}
                                        onChange={(e) => {
                                            const selectedCompanyName = e.target.value;
                                            setSelectedCompany(selectedCompanyName);
                                            const filteredClients = ClientName.filter(
                                                client => client.companyName === selectedCompanyName
                                            );
                                            setSelectedClient('');
                                        }}
                                    >
                                        <MenuItem disabled value="">Select company</MenuItem>
                                        {CompanyName.map((companyName, index) => (
                                            <MenuItem key={index} value={companyName}>
                                                {companyName}
                                            </MenuItem>
                                        ))}
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
                                    Client Name*
                                </Typography>
                                <FormControl fullWidth>
                                    <Select
                                        displayEmpty
                                        value={selectedClient}
                                        onChange={(e) => {
                                            const clientId = e.target.value;
                                            setSelectedClient(clientId);
                                            const filteredClients = ClientName.filter(
                                                client => client.companyName === selectedCompany
                                            );

                                            const selectedClientObj = ClientName.find(
                                                client => client._id === clientId
                                            );

                                            if (selectedClientObj) {
                                                setformData(prevData => ({
                                                    ...prevData,
                                                    clientName: selectedClientObj.clientName,
                                                    companyName: selectedClientObj.companyName,
                                                }));
                                            }
                                        }}
                                    >
                                        <MenuItem disabled value="">Select Client</MenuItem>
                                        {(() => {

                                            const filteredClients = ClientName.filter(
                                                client => client.companyName.toLowerCase() === selectedCompany.toLowerCase()
                                            );

                                            console.log("Rendering Clients - Filtered:", filteredClients);

                                            return filteredClients.length > 0
                                                ? filteredClients.map((client) => (
                                                    <MenuItem key={client._id} value={client._id}>
                                                        {client.clientName}
                                                    </MenuItem>
                                                ))
                                                : [
                                                    <MenuItem key="no-clients" disabled>
                                                        No clients for this company
                                                    </MenuItem>
                                                ];
                                        })()}
                                    </Select>
                                </FormControl>
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
                                    Date*
                                </Typography>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                        name="date"
                                        value={formData.date}
                                        onChange={handleChange}

                                    />
                                </LocalizationProvider>
                            </Grid>

                        </Grid>
                    </Box>
                    <Box>
                        <Typography style={{
                            fontFamily: "Outfit",
                            fontWeight: 500,
                            fontSize: "18px",
                            lineHeight: "31px",
                            color: "#2B2B2B",
                            margin: "15px 0px 15px 0px"
                        }}>
                            Product*
                        </Typography>

                        {productEntries.map((entry, entryIndex) => (
                            <Box key={entryIndex} mb={3}>
                                <Box>
                                    <Grid container spacing={2}>
                                        {productData?.map((item) => (
                                            <Grid item size={{ xs: 12, sm: 6, md: 2 }} key={item.id}>
                                                <Box
                                                    onClick={() => handleProductSelect(item, entryIndex)}
                                                    sx={{
                                                        cursor: 'pointer',
                                                        height: "280px",
                                                        border: entry.selectedProduct?._id === item._id
                                                            ? '3px solid #4CAF50'
                                                            : '2px solid #0F75BC',
                                                        position: 'relative',
                                                        padding: "10px 20px",
                                                        boxShadow: "0px 4px 30px 0px #0000001A",
                                                        borderRadius: "10px",
                                                        backgroundColor: "white",
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        justifyContent: "space-between",
                                                        transition: 'border 0.3s ease',
                                                    }}
                                                >
                                                    {/* Checkmark overlay */}
                                                    {entry.selectedProduct?._id === item._id && (
                                                        <CheckCircleIcon
                                                            sx={{
                                                                position: 'absolute',
                                                                top: 8,
                                                                right: 8,
                                                                color: '#4CAF50',
                                                                fontSize: '2rem',
                                                                backgroundColor: 'white',
                                                                borderRadius: '50%',
                                                                zIndex: 2,
                                                            }}
                                                        />
                                                    )}

                                                    {/* Image container */}
                                                    <Box sx={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        height: "220px",
                                                        overflow: "hidden",
                                                        position: 'relative',
                                                    }}>
                                                        <img
                                                            src={`${BASE_URL}${item.image}`}
                                                            alt={item.name}
                                                            style={{
                                                                width: "100%",
                                                                height: "100%",
                                                                objectFit: "contain",
                                                                filter: entry.selectedProduct?._id === item._id
                                                                    ? 'opacity(0.8)'
                                                                    : 'none',
                                                            }}
                                                        />
                                                    </Box>

                                                    <Divider sx={{ backgroundColor: "#737373" }} />

                                                    <Box sx={{ textAlign: "center", padding: "10px 0" }}>
                                                        <Typography sx={{
                                                            fontFamily: "Outfit",
                                                            fontWeight: 500,
                                                            fontSize: "18px",
                                                            lineHeight: "31px",
                                                            color: "#0F75BC"
                                                        }}>
                                                            {`$${item.price}`}
                                                        </Typography>
                                                        <Typography sx={{
                                                            fontFamily: "Outfit",
                                                            fontWeight: 500,
                                                            fontSize: "18px",
                                                            lineHeight: "31px",
                                                            color: "#0F75BC"
                                                        }}>
                                                            {getSecondHalf(item.name)}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Box>
                                <Box>
                                    <Grid container spacing={2} mt={2}>
                                        <Grid size={{ xs: 12, md: 4 }}>
                                            <Typography style={{
                                                fontFamily: "Outfit",
                                                fontWeight: 500,
                                                fontSize: "18px",
                                                lineHeight: "31px",
                                                color: "#2B2B2B",
                                                margin: "0px 0px 15px 0px"
                                            }}>
                                                Qty
                                            </Typography>
                                            <TextField
                                                fullWidth
                                                placeholder="Enter Qty"
                                                value={entry.quantity}
                                                onChange={(e) => handleQuantityChange(e, entryIndex)}
                                                type="number"
                                            />
                                        </Grid>
                                        <Grid size={{ xs: 12, md: 4 }}>
                                            <Typography style={{
                                                fontFamily: "Outfit",
                                                fontWeight: 500,
                                                fontSize: "18px",
                                                lineHeight: "31px",
                                                color: "#2B2B2B",
                                                margin: "0px 0px 15px 0px"
                                            }}>
                                                Unit Price
                                            </Typography>
                                            <TextField
                                                type="text"
                                                fullWidth
                                                placeholder="00.00"
                                                value={`$ ${entry.unitPrice}`}
                                                onChange={(e) => handleUnitPriceChange(e, entryIndex)}

                                            />
                                        </Grid>
                                        <Grid size={{ xs: 12, md: 4 }}>
                                            <Typography style={{
                                                fontFamily: "Outfit",
                                                fontWeight: 500,
                                                fontSize: "18px",
                                                lineHeight: "31px",
                                                color: "#2B2B2B",
                                                margin: "0px 0px 15px 0px"
                                            }}>
                                                Total Price
                                            </Typography>
                                            <TextField
                                                fullWidth
                                                placeholder="$ 00.00*"
                                                value={entry.totalPrice}
                                                InputProps={{
                                                    readOnly: true,
                                                }}
                                            />
                                        </Grid>
                                    </Grid>
                                </Box>


                                <Box sx={{ display: 'flex', flexFlow: "row", justifyContent: 'space-between', width: '100%', }}>
                                    <Button
                                        style={{
                                            backgroundColor: "#0F75BC",
                                            fontFamily: "Outfit",
                                            fontSize: "14px",
                                            lineHeight: "16px",
                                            fontWeight: 500,
                                            textTransform: "none",
                                            width: "180px",
                                            height: "50px",
                                            margin: "20px 0px 50px 0px"
                                        }}
                                        variant="contained"
                                        startIcon={<AddIcon />}
                                        onClick={handleAddProduct}
                                    >
                                        Add More Product
                                    </Button>
                                    <Box sx={{ display: 'flex', }}>
                                        <Button
                                           style={{
                                            border: "1px solid rgba(154, 25, 21, 1)",
                                            color: "rgba(154, 25, 21, 1)",
                                            fontSize: "14px",
                                            lineHeight: "16px",
                                            fontWeight: 500,
                                            textTransform: "none",
                                            width: "130px",
                                            height: "40px",
                                            margin: "20px 0px 50px 15px"
                                        }}
                                            onClick={() => handleRemoveProduct(entryIndex)}
                                        >
                                            Cancel
                                        </Button>
                                    </Box>
                                </Box>


                            </Box>
                        ))}

                    </Box>

                </Box>
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

                    <Box >
                        <Grid container spacing={2} mt={2}>
                            <Grid size={{ xs: 12, md: 8 }} >
                                <Typography style={{
                                    fontFamily: "Outfit",
                                    fontWeight: 500,
                                    fontSize: "18px",
                                    lineHeight: "31px",
                                    color: "#2B2B2B",
                                    margin: "0px 0px 15px 0px",
                                }}

                                    sx={{
                                        textAlign: { xs: "left", md: "right" }
                                    }}>
                                    Sub Total
                                </Typography>
                            </Grid>
                            <Grid size={{ xs: 12, md: 4 }}>
                                <TextField
                                    fullWidth
                                    placeholder="$ 00.00"
                                    value={overallTotalPrice}
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            </Grid>

                        </Grid>
                    </Box>
                    <Box >
                        <Grid container spacing={2} mt={2}>
                            <Grid size={{ xs: 12, md: 8 }} >
                                <Typography style={{
                                    fontFamily: "Outfit",
                                    fontWeight: 500,
                                    fontSize: "18px",
                                    lineHeight: "31px",
                                    color: "#2B2B2B",
                                    margin: "0px 0px 15px 0px",
                                }}

                                    sx={{
                                        textAlign: { xs: "left", md: "right" }
                                    }}>
                                    Discount
                                </Typography>
                            </Grid>
                            <Grid size={{ xs: 12, md: 4 }}>
                                <TextField
                                    fullWidth
                                    placeholder="Enter discount (e.g., 5%)"
                                    value={discount}
                                    onChange={handleDiscountChange}
                                />
                            </Grid>

                        </Grid>
                    </Box>
                    <Box >
                        <Grid container spacing={2} mt={2}>
                            <Grid size={{ xs: 12, md: 8 }} >
                                <Typography style={{
                                    fontFamily: "Outfit",
                                    fontWeight: 500,
                                    fontSize: "18px",
                                    lineHeight: "31px",
                                    color: "#2B2B2B",
                                    margin: "0px 0px 15px 0px",
                                }}

                                    sx={{
                                        textAlign: { xs: "left", md: "right" }
                                    }}>
                                    Discount Amount
                                </Typography>
                            </Grid>
                            <Grid size={{ xs: 12, md: 4 }}>
                                <TextField
                                    fullWidth
                                    placeholder="Enter Discount Amount"
                                    value={`$ ${discountAmount.toFixed(2)}`} // Format to two decimal places
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            </Grid>

                        </Grid>
                    </Box>
                    <Box >
                        <Grid container spacing={2} mt={2}>
                            <Grid size={{ xs: 12, md: 8 }} >
                                <Typography style={{
                                    fontFamily: "Outfit",
                                    fontWeight: 500,
                                    fontSize: "18px",
                                    lineHeight: "31px",
                                    color: "#2B2B2B",
                                    margin: "0px 0px 15px 0px",
                                }}

                                    sx={{
                                        textAlign: { xs: "left", md: "right" }
                                    }}>
                                    Shipping Fee
                                </Typography>
                            </Grid>
                            <Grid size={{ xs: 12, md: 4 }}>
                                <TextField
                                    fullWidth
                                    placeholder="Enter shipping fee"
                                    value={`$ ${shippingFees}`}
                                    onChange={handleShippingFeesChange}
                                />
                            </Grid>

                        </Grid>
                    </Box>
                    <Box >
                        <Grid container spacing={2} mt={2}>
                            <Grid size={{ xs: 12, md: 8 }} >
                                <Typography style={{
                                    fontFamily: "Outfit",
                                    fontWeight: 500,
                                    fontSize: "18px",
                                    lineHeight: "31px",
                                    color: "#2B2B2B",
                                    margin: "0px 0px 15px 0px",
                                }}

                                    sx={{
                                        textAlign: { xs: "left", md: "right" }
                                    }}>
                                    Total
                                </Typography>
                            </Grid>
                            <Grid size={{ xs: 12, md: 4 }}>
                                <TextField
                                    fullWidth
                                    placeholder="$ 00.00"
                                    value={finalTotal}
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            </Grid>

                        </Grid>
                    </Box>

                </Box>
                <Box sx={{ display: 'flex', flexFlow: "row", justifyContent: 'space-between', width: '100%', }}>

                    <Button style={{
                        backgroundColor: "#0F75BC",
                        fontFamily: "Outfit",
                        fontSize: "14px",
                        lineHeight: "16px",
                        fontWeight: 500,
                        textTransform: "none",
                        width: "130px",
                        height: "50px",
                        margin: "0px 0px 20px 20px"

                    }}
                        variant="contained"


                    >Cancel</Button>

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
                            margin: "0px 25px 20px 0px"

                        }}
                            variant="contained"
                            onClick={Createinvoice}
                        >Create Invoice</Button>
                    </Box>
                </Box>

                {/* Min Grid End */}
            </Box>

        </>
    )
}


export default AddInvoices;





