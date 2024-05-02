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

const Footer = () => {
  return (
    <Box
      width={"100%"}
      height={"400px"}
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
            style={{ width: "270px", height: "120px" }}
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
        <Typography fontWeight={"bold"} color={"white"} mb={2}>
          HIDOC DR. FEATURES
        </Typography>

        {/* features box */}
        <Box>
          {/* upper row */}
          <Box display={"flex"}>
            {/* drug database */}
            <Box
              width={"140px"}
              height={"140px"}
              backgroundColor={"#D9F3FF"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={1}
              sx={{cursor: "pointer"}}
            >
              <Box
                width={"40px"}
                height={"40px"}
                borderRadius={"50%"}
                backgroundColor={"#40C4FF"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <FolderOpenIcon sx={{ color: "white" }} />
              </Box>

              <Typography color={"#40C4FF"} fontSize={15}>
                Drug Database
              </Typography>
            </Box>

            {/* Webinars */}
            <Box
              width={"140px"}
              height={"140px"}
              backgroundColor={"#FDD9D6"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={1}
              sx={{cursor: "pointer"}}
            >
              <Box
                width={"40px"}
                height={"40px"}
                borderRadius={"50%"}
                backgroundColor={"#F44336"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <VideoCallIcon sx={{ color: "white" }} />
              </Box>

              <Typography color={"#F44336"} fontSize={15}>
                Webinars
              </Typography>
            </Box>

            {/* drug interaction */}
            <Box
              width={"140px"}
              height={"140px"}
              backgroundColor={"#D9E8FF"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={1}
              sx={{cursor: "pointer"}}
            >
              <Box
                width={"40px"}
                height={"40px"}
                borderRadius={"50%"}
                backgroundColor={"#448AFF"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <DescriptionIcon sx={{ color: "white" }} />
              </Box>

              <Typography color={"#448AFF"} fontSize={15}>
                Drug Interaction
              </Typography>
            </Box>

            {/* medical calculator */}
            <Box
              width={"140px"}
              height={"140px"}
              backgroundColor={"#DBEFDC"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={1}
              sx={{cursor: "pointer"}}
            >
              <Box
                width={"40px"}
                height={"40px"}
                borderRadius={"50%"}
                backgroundColor={"#4CAF50"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <CalculateIcon sx={{ color: "white" }} />
              </Box>

              <Typography color={"#4CAF50"} fontSize={15}>
                Medical Calculator
              </Typography>
            </Box>
          </Box>

          {/* down row */}
          <Box display={"flex"}>
            {/* Articles */}
            <Box
              width={"140px"}
              height={"140px"}
              backgroundColor={"#FFEACC"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={1}
              sx={{cursor: "pointer"}}
            >
              <Box
                width={"40px"}
                height={"40px"}
                borderRadius={"50%"}
                backgroundColor={"#40C4FF"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <DescriptionIcon sx={{ color: "white" }} />
              </Box>

              <Typography color={"#40C4FF"} fontSize={15}>
                Articles
              </Typography>
            </Box>

            {/* Quizzes */}
            <Box
              width={"140px"}
              height={"140px"}
              backgroundColor={"#D9E8FF"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={1}
              sx={{cursor: "pointer"}}
            >
              <Box
                width={"40px"}
                height={"40px"}
                borderRadius={"50%"}
                backgroundColor={"#40C4FF"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <EmojiEventsIcon sx={{ color: "white" }} />
              </Box>

              <Typography color={"#40C4FF"} fontSize={15}>
                Quizzes
              </Typography>
            </Box>

            {/* Diseases Database */}
            <Box
              width={"140px"}
              height={"140px"}
              backgroundColor={"#D9F3FF"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={1}
              sx={{cursor: "pointer"}}
            >
              <Box
                width={"40px"}
                height={"40px"}
                borderRadius={"50%"}
                backgroundColor={"#40C4FF"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <DescriptionIcon sx={{ color: "white" }} />
              </Box>

              <Typography color={"#40C4FF"} fontSize={15}>
                Diseases Database
              </Typography>
            </Box>

            {/* surveys */}
            <Box
              width={"140px"}
              height={"140px"}
              backgroundColor={"#FDD9D6"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={1}
              sx={{cursor: "pointer"}}
            >
              <Box
                width={"40px"}
                height={"40px"}
                borderRadius={"50%"}
                backgroundColor={"#F44336"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <AssignmentIcon sx={{ color: "white" }} />
              </Box>

              <Typography color={"#F44336"} fontSize={15}>
                Surveys
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
