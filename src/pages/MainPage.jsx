import React from "react";
import { Box } from "@mui/material";
import Header from "../components/Header";
import TopBox from "../components/TopBox";
import TextButtons from "../components/TextButtons";
import DataDetails from "../components/DataDetails";

const MainPage = () => {
  return (
    <Box>
      {/* header */}
      <Header />

      {/* top colored box */}
      <TopBox />

      {/* text and buttons */}
      <TextButtons />

      {/* data and details boxes */}
      <DataDetails />
    </Box>
  );
};

export default MainPage;
