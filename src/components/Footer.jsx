import React from "react";
import { Box, Typography } from "@mui/material";
import Logo from "../assets/logo.jpg";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Box
      width={"100%"}
      height={"300px"}
      backgroundColor={"#091734"}
      display={"flex"}
    >
      {/* left and mid sections */}
      <Box maxWidth={"50%"} display={"flex"} ml={5} gap={10}>
        {/* left section */}
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={2}
        >
          {/* logo */}
          <img
            src={Logo}
            alt="Logo"
            style={{ width: "270px", height: "100px" }}
          />

          {/* text */}
          <Typography color={"white"} width={"270px"}>
            Fastest Growing Medical Platform for Doctors.
          </Typography>

          {/* icons */}
          <Box display={"flex"} gap={2}>
            <FacebookIcon sx={{ color: "white" }} />
            <InstagramIcon sx={{ color: "white" }} />
            <YouTubeIcon sx={{ color: "white" }} />
            <LinkedInIcon sx={{ color: "white" }} />
          </Box>
        </Box>

        {/* mid section */}
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          gap={2}
        >
          <Typography fontWeight={"bold"} color={"white"} fontSize={18}>
            REACH US
          </Typography>

          <Typography color={"white"}>
            Please contact the below details for any other information.
          </Typography>

          <Typography color={"#0582B0"}>Email:</Typography>

          <Typography color={"white"}>info@hidoc.co</Typography>

          <Typography color={"#0582B0"}>Address:</Typography>

          <Typography color={"white"}>
            Hidoc Dr. Inc, 2055 Limestone Rd, STE 200-C, Wilmington, DE, 19808,
            United States.
          </Typography>
        </Box>
      </Box>

      {/* right section */}
      <Box
        width={"50%"}
        ml={5}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
      >
        {/* text */}
        <Typography fontWeight={"bold"} color={"white"}>
          HIDOC DR. FEATURES
        </Typography>

        {/* features box */}
        <Box></Box>
      </Box>
    </Box>
  );
};

export default Footer;
