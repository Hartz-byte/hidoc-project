import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material/";

const TextButtons = () => {
  const [activeButton, setActiveButton] = useState(2);

  // handle button click
  const handleClick = (index) => {
    setActiveButton(index);
  };

  const isMobile = useMediaQuery("(max-width: 1233px)");

  return (
    <Box
      display={isMobile ? "" : "flex"}
      justifyContent="space-between"
      alignItems="center"
      mt={2}
      mb={2}
      gap={5}
    >
      {/* Text */}
      <Box ml={30} mr={isMobile ? 30 : ""} mb={isMobile ? 2 : 0}>
        <Typography textAlign="center">
          Dailymed Drug Database: The DailyMed database contains 143072
          labelling submitted to the Food and Drug Administration (DFA) by
          companies. DailyMed does not contain a complete listing of labelling
          for DFA-regulated products (e.g. labelling that is not submitted to
          the FDA).
        </Typography>
      </Box>

      {/* Buttons */}
      <Box
        width={"100%"}
        display="flex"
        flexDirection={"column"}
        alignItems={isMobile ? "center" : ""}
        gap={1}
        mr={20}
        mb={isMobile ? 7 : 0}
      >
        {/* upper section button */}
        <Box display="flex" gap={1}>
          {/* Anesthesisa */}
          <Button
            variant="outlined"
            sx={{
              width: "150px",
              color: "black",
              borderColor: "black",
              textTransform: "none",
              backgroundColor: activeButton === 0 ? "#DBF2FF" : "white",
            }}
            onClick={() => handleClick(0)}
          >
            Anesthesisa
          </Button>

          {/* Cardiology */}
          <Button
            variant="outlined"
            sx={{
              width: "150px",
              color: "black",
              borderColor: "black",
              textTransform: "none",
              backgroundColor: activeButton === 1 ? "#DBF2FF" : "white",
            }}
            onClick={() => handleClick(1)}
          >
            Cardiology
          </Button>

          {/* Critical Care */}
          <Button
            variant="outlined"
            sx={{
              width: "150px",
              color: "black",
              borderColor: "black",
              textTransform: "none",
              backgroundColor: activeButton === 2 ? "#DBF2FF" : "white",
            }}
            onClick={() => handleClick(2)}
          >
            Critical Care
          </Button>
        </Box>

        {/* lower section buttons */}
        <Box display="flex" gap={1}>
          {/* Dentistry */}
          <Button
            variant="outlined"
            sx={{
              width: "150px",
              color: "black",
              borderColor: "black",
              textTransform: "none",
              backgroundColor: activeButton === 3 ? "#DBF2FF" : "white",
            }}
            onClick={() => handleClick(3)}
          >
            Dentistry
          </Button>

          {/* Dermatology */}
          <Button
            variant="outlined"
            sx={{
              width: "150px",
              color: "black",
              borderColor: "black",
              textTransform: "none",
              backgroundColor: activeButton === 4 ? "#DBF2FF" : "white",
            }}
            onClick={() => handleClick(4)}
          >
            Dermatology
          </Button>

          {/* Diabetology */}
          <Button
            variant="outlined"
            sx={{
              width: "150px",
              color: "black",
              borderColor: "black",
              textTransform: "none",
              backgroundColor: activeButton === 5 ? "#DBF2FF" : "white",
            }}
            onClick={() => handleClick(5)}
          >
            Diabetology
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default TextButtons;
