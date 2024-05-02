import React from "react";
import { Box, Button, Divider, Typography } from "@mui/material";
import Logo from "../assets/logo.jpg";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const Header = () => {
  return (
    <Box display={"flex"} justifyContent={"space-between"}>
      {/* logo */}
      <img src={Logo} alt="Logo" style={{ width: "100px", height: "50px" }} />

      {/* navigation buttons */}
      <Box display={"flex"} alignItems={"center"}>
        <Button sx={{ textTransform: "none", color: "black" }}>Drugs</Button>
        <Divider sx={{ width: "1px", height: "15px", bgcolor: "black" }} />
        <Button sx={{ textTransform: "none", color: "black" }}>
          Calculators
        </Button>
        <Divider sx={{ width: "1px", height: "15px", bgcolor: "black" }} />
        <Button sx={{ textTransform: "none", color: "black" }}>Articles</Button>
        <Divider sx={{ width: "1px", height: "15px", bgcolor: "black" }} />
        <Button sx={{ textTransform: "none", color: "black" }}>News</Button>
        <Divider sx={{ width: "1px", height: "15px", bgcolor: "black" }} />
        <Button sx={{ textTransform: "none", color: "black" }}>Quizzes</Button>
        <Divider sx={{ width: "1px", height: "15px", bgcolor: "black" }} />
        <Button sx={{ textTransform: "none", color: "black" }}>Surveys</Button>
        <Divider sx={{ width: "1px", height: "15px", bgcolor: "black" }} />
        <Button sx={{ textTransform: "none", color: "black" }}>Webinars</Button>
        <Divider sx={{ width: "1px", height: "15px", bgcolor: "black" }} />
        <Button sx={{ textTransform: "none", color: "black" }}>
          Guidelines
        </Button>
      </Box>

      {/* profile */}
      <Box display={"flex"} alignItems={"center"} gap={1} mr={2}>
        <DensityMediumIcon fontSize="small" sx={{ cursor: "pointer" }} />

        {/* trophy */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "70px",
            height: "25px",
            backgroundColor: "white",
            borderRadius: "40% / 90%",
            border: "1px solid black",
            cursor: "pointer",
          }}
        >
          <EmojiEventsIcon
            fontSize="small"
            sx={{ fill: "none", stroke: "black", strokeWidth: "1" }}
          />

          <Typography color={"red"}>274</Typography>
        </Box>

        {/* A */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "25px",
            height: "25px",
            backgroundColor: "white",
            borderRadius: "50%",
            border: "1px solid black",
            cursor: "pointer",
          }}
        >
          <Typography>A</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
