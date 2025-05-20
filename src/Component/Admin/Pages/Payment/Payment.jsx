import React from "react";
import { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Tooltip,
} from "@mui/material";
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import { styled } from "@mui/material/styles";
import AddPayment from "./AddPayment";




const Data = [
    {
        id: "1",
        Id: "12",
        Company: "Moody moon",
        client: "Shyamal Patel",
        phone: "(248) 571-2790",
        email: "muraddahche@gmail.com",
        Amount: "3$",
        Tax: "0$",
    },
    {
        id: "2",
        Id: "13",
        Company: "Moody moon",
        client: "Shyamal Patel",
        phone: "(248) 571-2790",
        email: "muraddahche@gmail.com",
        Amount: "3$",
        Tax: "0$",
    },
    {
        id: "3",
        Id: "14",
        Company: "Moody moon",
        client: "Shyamal Patel",
        phone: "(248) 571-2790",
        email: "muraddahche@gmail.com",
        Amount: "3$",
        Tax: "0$",
    },
    {
        id: "4",
        Id: "15",
        Company: "Moody moon",
        client: "Shyamal Patel",
        phone: "(248) 571-2790",
        email: "muraddahche@gmail.com",
        Amount: "3$",
        Tax: "0$",
    },
    {
        id: "5",
        Id: "16",
        Company: "Moody moon",
        client: "Shyamal Patel",
        phone: "(248) 571-2790",
        email: "muraddahche@gmail.com",
        Amount: "3$",
        Tax: "0$",
    },
    {
        id: "6",
        Id: "17",
        Company: "Moody moon",
        client: "Shyamal Patel",
        phone: "(248) 571-2790",
        email: "muraddahche@gmail.com",
        Amount: "3$",
        Tax: "0$",

    },
]


const Payment = () => {

    const [open, setopen] = useState(false);


    const add = () => {
        setopen(true)
    }
    if (open) {

        return <AddPayment />
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
                    }}>Charge Payment</span>

                </Typography>
                <Box sx={{ display: 'flex', }}>
                    <Button style={{
                        backgroundColor: "#0F75BC",
                        fontFamily: "Outfit",
                        fontSize: "14px",
                        lineHeight: "16px",
                        fontWeight: 500,
                        textTransform: "none",
                        width: "115px",
                        height: "50px",
                        margin: "0px 0px 50px 0px"

                    }}
                        variant="contained"
                        startIcon={<AddIcon />}
                        onClick={add}

                    >Add</Button>
                </Box>
            </Box>
            <Box sx={{
                boxShadow: "0px 4px 30px 0px #0000001A",
                borderRadius: "10px",
                backgroundColor: "white"
            }}>
                <Box style={{ overflowX: "auto" }}>
                    <Table sx={{ border: "1px solid #EFEFEF", minWidth: "70rem" }}>
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: "14px", lineHeight: "21px" }}>Id</TableCell>
                                <TableCell style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: "14px", lineHeight: "21px" }}>Company Name</TableCell>
                                <TableCell style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: "14px", lineHeight: "21px" }}>Client name</TableCell>
                                <TableCell style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: "14px", lineHeight: "21px" }}>Phone#</TableCell>
                                <TableCell style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: "14px", lineHeight: "21px" }}>Email</TableCell>
                                <TableCell style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: "14px", lineHeight: "21px" }}>Amount</TableCell>
                                <TableCell style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: "14px", lineHeight: "21px" }}>Tax</TableCell>
                                <TableCell style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: "14px", lineHeight: "21px" }}>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        {/* <TableBody>
                            {Data?.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell>{row.id}</TableCell>
                                    <TableCell>{row.Company}</TableCell>
                                    <TableCell>{row.client}</TableCell>
                                    <TableCell>{row.phone}</TableCell>
                                    <TableCell>{row.email}</TableCell>
                                    <TableCell>{row.Amount}</TableCell>
                                    <TableCell>{row.Tax}</TableCell>
                                    <TableCell><CreateOutlinedIcon
                                        style={{ color: "#0F75BC" }}
                                    /></TableCell>
                                </TableRow>
                            ))}
                        </TableBody> */}
                    </Table>

                </Box>


            </Box>








        </>
    )
}


export default Payment;