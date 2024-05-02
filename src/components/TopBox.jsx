import React from "react";
import {
  Box,
  Typography,
  InputBase,
  IconButton,
  InputAdornment,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

const TopBox = () => {
  return (
    <Box>
      {/* first box */}
      <Box
        backgroundColor={"#DBEEF2"}
        width={"100%"}
        height={"80px"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography variant="h4">
          Your one-stop Solution for{" "}
          <span style={{ color: "#3FADB2" }}>MEDICAL LEARNING & UPDATES</span>
        </Typography>
      </Box>

      {/* second box */}
      <Box
        backgroundColor={"#EFF4F8"}
        width={"100%"}
        height={"120px"}
        display={"flex"}
        justifyContent={"space-around"}
        alignItems={"center"}
      >
        <Typography variant="h4" ml={3}>
          Get knowledge of the{" "}
          <span style={{ color: "#3FADB2" }}>APPROVED DRUGS</span>
        </Typography>

        {/* Search Input Field */}
        <Box
          mr={3}
          sx={{
            display: "flex",
          }}
        >
          <InputBase
            sx={{
              width: "300px",
              backgroundColor: "white",
              borderRadius: "25px",
            }}
            size="large"
            placeholder="Enter drug type"
            inputProps={{
              "aria-label": "search drugs",
              style: { textAlign: "center" },
            }}
          />
          {/* icon */}
          <InputAdornment
            position="end"
            sx={{
              position: "absolute",
              marginTop: "17px",
              marginLeft: "255px",
            }}
          >
            <IconButton>
              <SearchIcon fontSize="small" />
            </IconButton>
          </InputAdornment>
        </Box>
      </Box>
    </Box>
  );
};

export default TopBox;
