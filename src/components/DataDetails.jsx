import React, { useState, useEffect } from "react";
import { Box, Typography, Button, CircularProgress } from "@mui/material";
import axios from "axios";
import { useMediaQuery } from "@mui/material/";

const DataDetails = () => {
  const [drugData, setDrugData] = useState(null);
  const [drugDetails, setDrugDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);

  const isMobile = useMediaQuery("(max-width: 1233px)");

  // api call
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.post(
          "https://hidocdr.com/api/hidoc-us/drug/getDrugList",
          {}
        );

        console.log(response.data.data);

        setDrugData(response.data.data.drugData);
        // setDrugDetails(response.data.drugDetails);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message || "An error occurred while fetching data.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // handle button click
  const handleButtonClick = (index) => {
    setActiveButtonIndex(index);
  };

  return (
    <Box
      display="flex"
      flexDirection={isMobile ? "column" : "row"}
      justifyContent="center"
      alignItems="center"
      minHeight="50vh"
      gap={2}
      mt={3}
    >
      {isLoading ? (
        <CircularProgress />
      ) : error ? (
        <Typography variant="body1" color="error">
          {error}
        </Typography>
      ) : (
        <>
          {/* drug data */}
          <Box
            sx={{
              border: "3px solid black",
              width: "400px",
              minHeight: "310px",
            }}
          >
            <Box
              display={"flex"}
              justifyContent={"center"}
              borderBottom={"3px solid black"}
            >
              <Typography variant="h6" gutterBottom>
                Drug Data
              </Typography>
            </Box>

            {/* drug data content */}
            {drugData && (
              <Box>
                {drugData.map((drug, index) => (
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    mt={2}
                  >
                    <Button
                      key={index}
                      width={"150px"}
                      textTransform={"none"}
                      sx={{
                        backgroundColor:
                          activeButtonIndex === index ? "#56C6DC" : "white",
                      }}
                      onClick={() => handleButtonClick(index)}
                    >
                      <Typography color={"black"}>{drug.drugName}</Typography>
                    </Button>
                  </Box>
                ))}
              </Box>
            )}
          </Box>

          {/* drug details */}
          <Box
            sx={{
              border: "3px solid black",
              width: "400px",
              minHeight: "310px",
            }}
          >
            <Box
              display={"flex"}
              justifyContent={"center"}
              borderBottom={"3px solid black"}
            >
              <Typography variant="h6" gutterBottom>
                Drug Details
              </Typography>
            </Box>

            {/* topic */}
            <Box display="flex" justifyContent="center">
              <Typography variant="h6" color="#73B8CE" gutterBottom>
                {drugData && drugData[activeButtonIndex]?.drugName}
              </Typography>
            </Box>

            {/* drug details content */}
            {drugData && (
              <Box>
                {activeButtonIndex !== null && (
                  <Box m={1}>
                    <Typography variant="body1" textAlign="center">
                      {drugData[activeButtonIndex].drugDetails}
                    </Typography>
                  </Box>
                )}
              </Box>
            )}
          </Box>
        </>
      )}
    </Box>
  );
};

export default DataDetails;
