import React from "react";
import {
  Box,
  Button,
  Divider,
  Typography,
  Grid,
  IconButton,
} from "@mui/material";
import Logo from "../assets/logo.jpg";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const Header = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      {/* Logo */}
      <Grid item xs={3}>
        <img src={Logo} alt="Logo" style={{ width: "100%", height: "50px" }} />
      </Grid>

      {/* Navigation Buttons */}
      <Grid item xs={9} display={"flex"} alignItems={"center"}>
        <Button sx={{ textTransform: "none", color: "black" }}>Drugs</Button>
        <Divider sx={{ height: 17, bgcolor: "black" }} orientation="vertical" />
        <Button sx={{ textTransform: "none", color: "black" }}>
          Calculators
        </Button>
        <Divider sx={{ height: 17, bgcolor: "black" }} orientation="vertical" />
        <Button sx={{ textTransform: "none", color: "black" }}>Articles</Button>
        <Divider sx={{ height: 17, bgcolor: "black" }} orientation="vertical" />
        <Button sx={{ textTransform: "none", color: "black" }}>News</Button>
        <Divider sx={{ height: 17, bgcolor: "black" }} orientation="vertical" />
        <Button sx={{ textTransform: "none", color: "black" }}>Quizzes</Button>
        <Divider sx={{ height: 17, bgcolor: "black" }} orientation="vertical" />
        <Button sx={{ textTransform: "none", color: "black" }}>Surveys</Button>
        <Divider sx={{ height: 17, bgcolor: "black" }} orientation="vertical" />
        <Button sx={{ textTransform: "none", color: "black" }}>Webinars</Button>
        <Divider sx={{ height: 17, bgcolor: "black" }} orientation="vertical" />
        <Button sx={{ textTransform: "none", color: "black" }}>
          Guidelines
        </Button>
      </Grid>

      {/* Profile Section */}
      <Grid item xs={3} display={"flex"} alignItems={"center"} gap={1}>
        {/* horizontal bar icon */}
        <IconButton sx={{ cursor: "pointer" }}>
          <DensityMediumIcon fontSize="small" />
        </IconButton>

        {/* Trophy */}
        <IconButton sx={{ cursor: "pointer" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "75px",
              height: "25px",
              backgroundColor: "white",
              borderRadius: "40% / 90%",
              border: "1px solid black",
            }}
          >
            <EmojiEventsIcon
              fontSize="small"
              sx={{ fill: "none", stroke: "black", strokeWidth: "1" }}
            />

            <Typography color={"red"} ml={0.5}>
              274
            </Typography>
          </Box>
        </IconButton>

        {/* A in a circle */}
        <IconButton sx={{ cursor: "pointer" }}>
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
            }}
          >
            <Typography>A</Typography>
          </Box>
        </IconButton>
      </Grid>
    </Box>
  );
};

export default Header;
