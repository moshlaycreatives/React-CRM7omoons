import React from "react";
import { useState } from "react";
import { Box, Button, Modal, Typography } from "@mui/material";
import { PopRoot, Img, Heading, BtnContainer, Graph, Our } from "./PopupStyle";
import { useNavigate } from "react-router-dom";





const Popup = ({ onClose }) => {

    const [backcom, setbackcom] = useState(false);
    const navigate = useNavigate();




    return (
        <Modal
            open={true}
            onClose={onClose}
            aria-labelledby="popup-modal-title"
            aria-describedby="popup-modal-description"
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <PopRoot style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                backgroundColor: '#fff',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
            }}>
                <Typography
                    style={{
                        fontFamily: "Outfit",
                        fontWeight: 500,
                        fontSize: "38px",
                        lineHeight: "47px",
                        color: "#55BB36",
                        textAlign: "center",
                        marginTop: "5px"
                    }}
                >
                    Thank You
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: "20px"
                    }}
                >
                    <img
                        src="/image/popup.png"
                        alt="popup image"
                        width={100}
                    />
                </Box>

                <Typography
                    style={{
                        fontFamily: "Outfit",
                        fontWeight: 500,
                        fontSize: "25px",
                        lineHeight: "31px",
                        color: "#2B2B2B",
                        textAlign: "center",
                        marginTop: "15px"
                    }}
                >
                    Successful Payment
                </Typography>
            </PopRoot>


        </Modal>
    );
};

export default Popup;