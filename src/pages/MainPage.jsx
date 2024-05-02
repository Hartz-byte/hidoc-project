import React from "react";
import { Box } from "@mui/material";
import Header from "../components/Header";
import TopBox from "../components/TopBox";
import TextButtons from "../components/TextButtons";
import DataDetails from "../components/DataDetails";
import Footer from "../components/Footer";

const MainPage = () => {
  return (
    <Box>
      {/* header */}
      <Header />

      {/* top colored box */}
      <TopBox />

      {/* text and buttons */}
      <TextButtons />

      {/* data/details table and explore more */}
      <DataDetails />

      {/* footer */}
      <Footer />
    </Box>
  );
};

export default MainPage;
