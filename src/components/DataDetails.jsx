import React, { useState, useEffect } from "react";
import { Box, Typography, Button, CircularProgress } from "@mui/material";
import axios from "axios";

const DataDetails = () => {
  const [drugData, setDrugData] = useState(null);
  const [drugDetails, setDrugDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeButton, setActiveButton] = useState(null);

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
  const handleClick = (index) => {
    setActiveButton(index);
  };

  // setting default option active
  useEffect(() => {
    setActiveButton(2);
  }, []);

  return (
    <Box
      display="flex"
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
              minHeight: "265px",
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
                    <Button key={index} width={"150px"} textTransform={"none"}>
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
              minHeight: "265px",
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

            {/* drug details content */}
            <Box></Box>
          </Box>
        </>
      )}
    </Box>
  );
};

export default DataDetails;
