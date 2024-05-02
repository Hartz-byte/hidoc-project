import React from "react";
import { Box } from "@mui/material";
import Header from "../components/Header";
import TopBox from "../components/TopBox";
import TextButtons from "../components/TextButtons";

const MainPage = () => {
  return (
    <Box>
      {/* header */}
      <Header />

      {/* top colored box */}
      <TopBox />

      {/* text and buttons */}
      <TextButtons />
    </Box>
  );
};

export default MainPage;
