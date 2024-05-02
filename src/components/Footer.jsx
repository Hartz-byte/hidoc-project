import React from "react";
import { Box, Typography } from "@mui/material";

import Logo from "../assets/logo.jpg";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import DescriptionIcon from "@mui/icons-material/Description";
import CalculateIcon from "@mui/icons-material/Calculate";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import AssignmentIcon from "@mui/icons-material/Assignment";

// features box component
const FeatureBox = ({ icon, color, backColor, title }) => (
  // main container
  <Box
    width={"140px"}
    height={"140px"}
    backgroundColor={color}
    display={"flex"}
    flexDirection={"column"}
    justifyContent={"center"}
    alignItems={"center"}
    gap={1}
    sx={{ cursor: "pointer" }}
  >
    {/* icon inclosed in a circle */}
    <Box
      width={"40px"}
      height={"40px"}
      borderRadius={"50%"}
      backgroundColor={backColor}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      {icon}
    </Box>

    {/* title */}
    <Typography color={backColor} fontSize={15}>
      {title}
    </Typography>
  </Box>
);

const Footer = () => {
  return (
    <Box>
      {/* blue box */}
      <Box
        width={"100%"}
        height={"400px"}
        backgroundColor={"#091734"}
        display={"flex"}
        gap={8}
      >
        {/* left section */}
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={2}
          ml={5}
        >
          {/* logo */}
          <img
            src={Logo}
            alt="Logo"
            style={{ width: "270px", height: "120px" }}
          />

          {/* text */}
          <Typography color={"white"} width={"270px"}>
            Fastest Growing Medical Platform for Doctors.
          </Typography>

          {/* icons */}
          <Box display={"flex"} gap={2}>
            <FacebookIcon sx={{ color: "white", cursor: "pointer" }} />
            <InstagramIcon sx={{ color: "white", cursor: "pointer" }} />
            <YouTubeIcon sx={{ color: "white", cursor: "pointer" }} />
            <LinkedInIcon sx={{ color: "white", cursor: "pointer" }} />
          </Box>
        </Box>

        {/* mid section */}
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          gap={3}
          width={"450px"}
        >
          <Typography fontWeight={"bold"} color={"white"} fontSize={18}>
            REACH US
          </Typography>

          <Typography color={"white"}>
            Please contact the below details for any other information.
          </Typography>

          <Box>
            <Typography color={"#0582B0"}>Email:</Typography>
            <Typography color={"white"}>info@hidoc.co</Typography>
          </Box>

          <Box>
            <Typography color={"#0582B0"}>Address:</Typography>
            <Typography color={"white"}>
              Hidoc Dr. Inc, 2055 Limestone Rd, STE 200-C, Wilmington, DE,
              19808, United States.
            </Typography>
          </Box>
        </Box>

        {/* right section */}
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
        >
          {/* text */}
          <Typography fontWeight={"bold"} color={"white"} mb={2}>
            HIDOC DR. FEATURES
          </Typography>

          {/* features box */}
          <Box>
            {/* upper row */}
            <Box display={"flex"}>
              {/* drug database */}
              <FeatureBox
                icon={<FolderOpenIcon sx={{ color: "white" }} />}
                color="#D9F3FF"
                title="Drug Database"
                backColor="#40C4FF"
              />

              {/* Webinars */}
              <FeatureBox
                icon={<VideoCallIcon sx={{ color: "white" }} />}
                color="#FDD9D6"
                title="Webinars"
                backColor="#F44336"
              />

              {/* drug interaction */}
              <FeatureBox
                icon={<DescriptionIcon sx={{ color: "white" }} />}
                color="#D9E8FF"
                title="Drug Interaction"
                backColor="#448AFF"
              />

              {/* medical calculator */}
              <FeatureBox
                icon={<CalculateIcon sx={{ color: "white" }} />}
                color="#DBEFDC"
                title="Medical Calculator"
                backColor="#4CAF50"
              />
            </Box>

            {/* down row */}
            <Box display={"flex"}>
              {/* Articles */}
              <FeatureBox
                icon={<DescriptionIcon sx={{ color: "white" }} />}
                color="#FFEACC"
                title="Articles"
                backColor="#FF9800"
              />

              {/* Quizzes */}
              <FeatureBox
                icon={<EmojiEventsIcon sx={{ color: "white" }} />}
                color="#D9E8FF"
                title="Quizzes"
                backColor="#448AFF"
              />

              {/* Diseases Database */}
              <FeatureBox
                icon={<DescriptionIcon sx={{ color: "white" }} />}
                color="#D9F3FF"
                title="Diseases Database"
                backColor="#40C4FF"
              />

              {/* surveys */}
              <FeatureBox
                icon={<AssignmentIcon sx={{ color: "white" }} />}
                color="#FDD9D6"
                title="Surveys"
                backColor="#F44336"
              />
            </Box>
          </Box>
        </Box>
      </Box>

      {/* gray box */}
      <Box
        width={"100%"}
        height={"70px"}
        backgroundColor={"#CFD8DC"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography>
          © Copyright 2022{" "}
          <span style={{ fontWeight: "bold" }}>Hidoc Dr. Inc.</span>
        </Typography>

        <Box display={"flex"}>
          <Typography borderRight={"1px solid black"} pr={1}>
            Terms & Conditions
          </Typography>

          <Typography pl={1}>Privacy Policy</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
