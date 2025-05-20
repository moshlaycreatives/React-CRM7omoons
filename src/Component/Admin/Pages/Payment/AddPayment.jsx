// import React from "react";
// import { useState } from "react";
// import { Box, Typography, Divider, TextField, Button } from "@mui/material";
// import Grid from '@mui/material/Grid2';
// import Popup from "./Popup";





// const AddPayment = () => {
//     const [showPopup, setShowPopup] = useState(false);


//     const handleopenPopup = () => {
//         setShowPopup(true);
//     };

//     const handleClosePopup = () => {
//         setShowPopup(false);
//     };

//     return (
//         <>
//             {showPopup && (
//                 <Popup onClose={handleClosePopup} />
//             )}

//             <Box sx={{ display: 'flex', flexFlow: "row", justifyContent: 'space-between', width: '100%', }}>
//                 <Typography

//                     style={{
//                         fontFamily: "Outfit",
//                         fontWeight: 500,
//                         fontSize: "25px",
//                         lineHeight: "31px",
//                         color: "#0F75BC",
//                         margin: "0px 0px 40px 0px"
//                     }}>
//                     {`${"Dashboard>"}`}
//                     <span style={{
//                         color: "#2B2B2B"
//                     }}>Customer</span>
//                 </Typography>
//             </Box>
//             <Grid container spacing={3}>
//                 <Grid size={{ xs: 12, md: 4 }}>
//                     <Box sx={{

//                         boxShadow: "0px 4px 30px 0px #0000001A",
//                         borderRadius: "10px",
//                         backgroundColor: "white"
//                     }}>

//                         <Typography style={{
//                             fontFamily: "Outfit",
//                             fontWeight: 500,
//                             fontSize: "25px",
//                             lineHeight: "31px",
//                             color: "#2B2B2B",
//                             padding: "20px"
//                         }}>
//                             Client Information
//                         </Typography>
//                         <Box>
//                             <Divider
//                                 sx={{
//                                     backgroundColor: "#737373",
//                                 }}
//                             />
//                         </Box>

//                         <Box
//                             sx={{
//                                 padding: "20px"
//                             }}
//                         >
//                             <Typography style={{
//                                 fontFamily: "Outfit",
//                                 fontWeight: 500,
//                                 fontSize: "18px",
//                                 lineHeight: "31px",
//                                 color: "#2B2B2B",
//                                 margin: "0px 0px 15px 0px"
//                             }}>
//                                 Client Name
//                             </Typography>
//                             <TextField fullWidth
//                                 placeholder="Enter client name"
//                             />
//                             <Typography style={{
//                                 fontFamily: "Outfit",
//                                 fontWeight: 500,
//                                 fontSize: "18px",
//                                 lineHeight: "31px",
//                                 color: "#2B2B2B",
//                                 margin: "15px 0px 15px 0px"
//                             }}>
//                                 Email
//                             </Typography>
//                             <TextField fullWidth
//                                 placeholder="Enter email"
//                             />
//                             <Typography style={{
//                                 fontFamily: "Outfit",
//                                 fontWeight: 500,
//                                 fontSize: "18px",
//                                 lineHeight: "31px",
//                                 color: "#2B2B2B",
//                                 margin: "15px 0px 15px 0px"
//                             }}>
//                                 Phone
//                             </Typography>
//                             <TextField fullWidth
//                                 placeholder="Enter phone"
//                             />
//                             <Typography style={{
//                                 fontFamily: "Outfit",
//                                 fontWeight: 500,
//                                 fontSize: "18px",
//                                 lineHeight: "31px",
//                                 color: "#2B2B2B",
//                                 margin: "15px 0px 15px 0px"
//                             }}>
//                                 Company
//                             </Typography>
//                             <TextField fullWidth
//                                 placeholder="Enter Company name"
//                             />
//                         </Box>




//                     </Box>
//                 </Grid>
//                 <Grid size={{ xs: 12, md: 4 }}>

//                     <Box sx={{
//                         boxShadow: "0px 4px 30px 0px #0000001A",
//                         borderRadius: "10px",
//                         backgroundColor: "white"
//                     }}>
//                         <Typography style={{
//                             fontFamily: "Outfit",
//                             fontWeight: 500,
//                             fontSize: "25px",
//                             lineHeight: "31px",
//                             color: "#2B2B2B",
//                             padding: "20px"
//                         }}>
//                             Payment Method
//                         </Typography>
//                         <Box>
//                             <Divider
//                                 sx={{
//                                     backgroundColor: "#737373",
//                                 }}
//                             />
//                         </Box>

//                         <Box
//                             sx={{
//                                 padding: "20px"
//                             }}
//                         >
//                             <Typography style={{
//                                 fontFamily: "Outfit",
//                                 fontWeight: 500,
//                                 fontSize: "18px",
//                                 lineHeight: "31px",
//                                 color: "#2B2B2B",
//                                 margin: "0px 0px 15px 0px"
//                             }}>
//                                 Enter Amount
//                             </Typography>
//                             <TextField fullWidth
//                                 placeholder="Enter Amount"
//                             />
//                             <Typography style={{
//                                 fontFamily: "Outfit",
//                                 fontWeight: 500,
//                                 fontSize: "18px",
//                                 lineHeight: "31px",
//                                 color: "#2B2B2B",
//                                 margin: "15px 0px 15px 0px"
//                             }}>
//                                 Cardholder Name
//                             </Typography>
//                             <TextField fullWidth
//                                 placeholder="Enter Cardholder Name"
//                             />
//                             <Typography style={{
//                                 fontFamily: "Outfit",
//                                 fontWeight: 500,
//                                 fontSize: "18px",
//                                 lineHeight: "31px",
//                                 color: "#2B2B2B",
//                                 margin: "15px 0px 15px 0px"
//                             }}>
//                                 Card Number
//                             </Typography>
//                             <TextField fullWidth
//                                 placeholder="0000 0000 0000 0000"
//                             />
//                             <Typography style={{
//                                 fontFamily: "Outfit",
//                                 fontWeight: 500,
//                                 fontSize: "18px",
//                                 lineHeight: "31px",
//                                 color: "#2B2B2B",
//                                 margin: "15px 0px 15px 0px"
//                             }}>
//                                 Expiration Date
//                             </Typography>
//                             <TextField fullWidth
//                                 placeholder="MM/YY"
//                             />
//                             <Typography style={{
//                                 fontFamily: "Outfit",
//                                 fontWeight: 500,
//                                 fontSize: "18px",
//                                 lineHeight: "31px",
//                                 color: "#2B2B2B",
//                                 margin: "15px 0px 15px 0px"
//                             }}>
//                                 Security code
//                             </Typography>
//                             <TextField fullWidth
//                                 placeholder="CVV"
//                             />
//                         </Box>




//                     </Box>
//                 </Grid>
//                 <Grid size={{ xs: 12, md: 4 }}>
//                     <Box sx={{

//                         boxShadow: "0px 4px 30px 0px #0000001A",
//                         borderRadius: "10px",
//                         backgroundColor: "white"
//                     }}>

//                         <Typography style={{
//                             fontFamily: "Outfit",
//                             fontWeight: 500,
//                             fontSize: "25px",
//                             lineHeight: "31px",
//                             color: "#2B2B2B",
//                             padding: "20px"
//                         }}>
//                             Confirm and Pay
//                         </Typography>
//                         <Box>
//                             <Divider
//                                 sx={{
//                                     backgroundColor: "#737373",
//                                 }}
//                             />
//                         </Box>

//                         <Box
//                             sx={{
//                                 padding: "20px"
//                             }}
//                         >
//                             <Box sx={{ display: 'flex', flexFlow: "row", justifyContent: 'space-between', width: '100%', }}>
//                                 <Typography
//                                     style={{
//                                         fontFamily: "Outfit",
//                                         fontWeight: 500,
//                                         fontSize: "18px",
//                                         lineHeight: "31px",
//                                         color: "#2B2B2B"
//                                     }}>
//                                     Order Amount
//                                 </Typography>
//                                 <Box sx={{ display: 'flex', }}>
//                                     <Typography
//                                         style={{
//                                             fontFamily: "Outfit",
//                                             fontWeight: 500,
//                                             fontSize: "18px",
//                                             lineHeight: "31px",
//                                             color: "#2B2B2B"
//                                         }}>
//                                         $0
//                                     </Typography>
//                                 </Box>
//                             </Box>
//                             <Box mt={3} sx={{ display: 'flex', flexFlow: "row", justifyContent: 'space-between', width: '100%', }}>
//                                 <Typography
//                                     style={{
//                                         fontFamily: "Outfit",
//                                         fontWeight: 500,
//                                         fontSize: "18px",
//                                         lineHeight: "31px",
//                                         color: "#2B2B2B",

//                                     }}>
//                                     VAT/GST/Sales Taxes (0%)
//                                 </Typography>
//                                 <Box sx={{ display: 'flex', }}>
//                                     <Typography
//                                         style={{
//                                             fontFamily: "Outfit",
//                                             fontWeight: 500,
//                                             fontSize: "18px",
//                                             lineHeight: "31px",
//                                             color: "#2B2B2B"
//                                         }}>
//                                         $0
//                                     </Typography>
//                                 </Box>
//                             </Box>
//                             <Box>
//                                 <Divider
//                                     sx={{
//                                         backgroundColor: "#737373",
//                                         marginTop: "20px"
//                                     }}
//                                 />
//                             </Box>
//                             <Box mt={3} sx={{ display: 'flex', flexFlow: "row", justifyContent: 'space-between', width: '100%', }}>
//                                 <Typography
//                                     style={{
//                                         fontFamily: "Outfit",
//                                         fontWeight: 500,
//                                         fontSize: "18px",
//                                         lineHeight: "31px",
//                                         color: "#2B2B2B",

//                                     }}>
//                                     Order Amount
//                                 </Typography>
//                                 <Box sx={{ display: 'flex', }}>
//                                     <Typography
//                                         style={{
//                                             fontFamily: "Outfit",
//                                             fontWeight: 500,
//                                             fontSize: "18px",
//                                             lineHeight: "31px",
//                                             color: "#2B2B2B"
//                                         }}>
//                                         $0
//                                     </Typography>
//                                 </Box>
//                             </Box>
//                             <Box>
//                                 <Typography
//                                     style={{
//                                         fontFamily: "Outfit",
//                                         fontWeight: 400,
//                                         fontSize: "16px",
//                                         lineHeight: "25px",
//                                         color: "#737373",
//                                         marginTop: "30px"
//                                     }}>
//                                     Lörem ipsum makrokrode regulig karen. Pronafubel furen va
//                                     hid i irade, bådoren vahid i irade, kare bådoren karen. Pronaf
//                                     ubel furen vahid i...
//                                 </Typography>
//                             </Box>
//                             <Box>
//                                 <Button
//                                     sx={{
//                                         fontFamily: "Outfit",
//                                         fontWeight: 500,
//                                         fontSize: "20px",
//                                         lineHeight: "31px",
//                                         color: "#FFFFFF",
//                                         backgroundColor: "#0F75BC",
//                                         textTransform: "none",
//                                         width: "100%",
//                                         height: "56px",
//                                         borderRadius: "12px",
//                                         margin: "40px 0px 10px 0px"
//                                     }}
//                                     onClick={handleopenPopup}
//                                 >
//                                     Confirm and Pay
//                                 </Button>
//                             </Box>
//                         </Box>




//                     </Box>
//                 </Grid>

//             </Grid>




//         </>
//     )
// }

// export default AddPayment;






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
        price: "",
        cardNumber: "",
        expiry: "",
        cvc: ""
    })



    console.log("this is formdata", formData)

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




    const CreatePayment = async () => {
        try {
            const token = localStorage.getItem("token");

            const payload = {
                price: formData.price,
                cardDetails: {
                    cardNumber: formData.cardNumber,
                    expiry: formData.expiry,
                    cvc: formData.cvc,
                }
            };

            console.log("this is paylord data", payload)

            const response = await axios.post(endpoints.CreatePayment, payload, {
                headers: { Authorization: `Token ${token}` },
            });

            if (response.status === 200) {
                // Handle success (e.g. show a success message or redirect)
                console.log("Payment successful");
            }
        } catch (error) {
            // Handle error (e.g. show error message)
            console.error("Payment error", error);
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
                            Payment Information
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
                                Price
                            </Typography>
                            <TextField fullWidth
                                placeholder="Enter Price"
                                name="price"
                                value={formData.price}
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
                                Card number
                            </Typography>
                            <TextField fullWidth
                                placeholder="Enter Card number"
                                name="cardNumber"
                                value={formData.cardNumber}
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
                                Expiry date
                            </Typography>
                            <TextField fullWidth
                                placeholder="Enter Expiry Data"
                                name="expiry"
                                value={formData.expiry}
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
                                Cvc
                            </Typography>
                            <TextField fullWidth
                                placeholder="Enter CVc"
                                name="cvc"
                                value={formData.cvc}
                                onChange={handleChange}
                            />
                            {/* <Typography style={{
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
                            /> */}
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









