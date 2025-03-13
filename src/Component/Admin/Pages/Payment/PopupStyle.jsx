import { styled } from "@mui/system";
import { Box, Typography, Button } from "@mui/material";

export const PopRoot = styled(Box)(({ theme }) => ({
  width: "300px",
  height: "250px",
  transform: "translate(-70%, -50%)",
  border: "1px solid #FFFFFF",
  borderRadius: "30px",
  margin: "0px 0px 40px 220px",
  [theme.breakpoints.down("sm")]: {
    width: "350px",
    transform: "translate(-50%, -50%)",
    margin: "0px 0px 0px 0px",
  },
}));

export const Img = styled("img")(({ theme }) => ({
  width: "60px",
  margin: "35px 0px 0px 150px",
  [theme.breakpoints.down("sm")]: {
    margin: "30px 0px 5px 125px",
  },
}));

export const Heading = styled(Typography)(({ theme }) => ({
  fontFamily: "Outfit",
  fontWeight: 400,
  fontSize: "15px",
  lineHeight: "15px",
  color: "rgba(0, 0, 0, 1)",
  margin: "0px 0px 0px 90px",
  [theme.breakpoints.down("sm")]: {
    margin: "0px 0px 0px 30px",
  },
}));

export const BtnContainer = styled(Box)(({ theme }) => ({
  margin: "15px 0px 0px 88px",
  [theme.breakpoints.down("sm")]: {
    margin: "15px 0px 0px 60px",
  },
}));

export const Graph = styled(Box)(({ theme }) => ({
  backgroundColor: "rgb(255,255,255)",
  border: "1px solid rgb(235,235,235)",
  borderRadius: "5.8px",
  boxShadow: "0px 4px 2px rgba(0, 0, 0, 0.1)",
  margin: "25px 0px 0px 0px",
  padding: "0px 22px 22px 22px",
}));

export const Our = styled(Box)({
  padding: "10px 0px 10px 20px",
});
