import React from "react";
import { Box } from "@mui/material";
import Header from "../components/Header";
import TopBox from "../components/TopBox";

const MainPage = () => {
  return (
    <Box>
      {/* header */}
      <Header />

      {/* top colored box */}
      <TopBox />
    </Box>
  );
};

export default MainPage;
