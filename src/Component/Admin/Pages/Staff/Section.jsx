import React from "react";
import { useState } from "react";
import { Box, Typography, Button, Tabs, Tab } from "@mui/material";
import Report from "./Report";
import Customer from "./Customer";
import Invoices from "./Invoices";
import { useLocation, useNavigate } from 'react-router-dom';




const Section = () => {
    const location = useLocation();
    const { _id } = location.state || {};

    const [selectedTab, setSelectedTab] = useState(0);


    // const handleChange = (event, newValue) => {
    //     setSelectedTab(newValue);
    // };

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
        navigate(location.pathname, { state: { _id } }); // Navigate with _id
    };

    const TabPanel = ({ children, value, index }) => (
        <div role="tabpanel" hidden={value !== index} id={`tabpanel-${index}`} aria-labelledby={`tab-${index}`}>
            {value === index && <Box sx={{ padding: "50px 0px 0px 0px" }}>{children}</Box>}
        </div>
    );

    const a11yProps = index => ({
        id: `tab-${index}`,
        'aria-controls': `tabpanel-${index}`,
    });



    return (
        <>
            <Box>
                {/* Tentants Data */}
                {selectedTab === 0 && <>
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
                                {`${"Dashboard>"}`}
                                <span style={{
                                    color: "#2B2B2B"
                                }}>Reports</span>
                            </Typography>
                        </Box>

                    </>
                </>}
                {/* Landlord Data */}
                {selectedTab === 1 &&
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
                                {`${"Dashboard>"}`}
                                <span style={{
                                    color: "#2B2B2B"
                                }}>Customers</span>
                            </Typography>
                        </Box>
                    </>

                }
                {selectedTab === 2 &&
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
                                {`${"Dashboard>"}`}
                                <span style={{
                                    color: "#2B2B2B"
                                }}>Invoice</span>
                            </Typography>
                        </Box>

                    </>

                }
            </Box>
            <Box style={{ margin: "8px 0px 0px 0px", }}>
                <Tabs value={selectedTab} onChange={handleChange} aria-label="navigation tabs" indicatorColor="transparent" // Remove underline
                    sx={{ borderBottom: 'none', display: 'flex' , }} >
                    <Tab style={{ color: selectedTab === 0 ? '#0F75BC' : 'inherit', border: selectedTab === 0 ? '2px solid #0F75BC' : '1px solid #2B2B2B', borderRadius: selectedTab === 0 ? '39px' : '39px' }} label="Report" {...a11yProps(0)} />
                    <Tab style={{ color: selectedTab === 1 ? '#0F75BC' : 'inherit', border: selectedTab === 1 ? '2px solid #0F75BC' : '1px solid #2B2B2B', borderRadius: selectedTab === 1 ? '39px' : '39px', }} label="Customers" {...a11yProps(1)} />
                    <Tab style={{ color: selectedTab === 2 ? '#0F75BC' : 'inherit', border: selectedTab === 2 ? '2px solid #0F75BC' : '1px solid #2B2B2B', borderRadius: selectedTab === 2 ? '39px' : '39px' }} label="Invoice" {...a11yProps(2)} />
                </Tabs>
                <TabPanel value={selectedTab} index={0}>
                    <Report />
                </TabPanel>
                <TabPanel value={selectedTab} index={1}>
                    <Customer />

                </TabPanel>
                <TabPanel value={selectedTab} index={2}>
                    <Invoices />

                </TabPanel>

            </Box>
        </>
    )
}

export default Section;


