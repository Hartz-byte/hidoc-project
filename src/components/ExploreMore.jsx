import React from "react";
import { Box, Typography } from "@mui/material";

const ExploreMore = ({ exploreData }) => {
  return (
    <Box>
      {exploreData && (
        <Box display={"flex"} justifyContent={"space-between"} m={6} gap={2}>
          {/* news */}
          <Box>
            <Typography
              fontWeight={"bold"}
              fontSize={35}
              width={"450px"}
              ml={20}
            >
              Explore more on Hidoc Dr.
            </Typography>

            <Box display={"flex"} width={"600px"} mt={3}>
              {/* image */}
              <Box>
                <img
                  src={exploreData.news.urlToImage}
                  alt="image"
                  style={{ width: "200px", height: "300px" }}
                />
              </Box>

              {/* news content */}
              <Box ml={2}>
                <Typography>News</Typography>

                <Typography fontWeight={"bold"} fontSize={20} mb={1}>
                  {exploreData.news.title}
                </Typography>

                <Typography fontSize={17}>
                  {exploreData.news.description}
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* article */}
          <Box width={"350px"}>
            <Typography mt={2}>
              CRITICAL CARE . {exploreData.article.createdAt}
            </Typography>

            <Box mt={7.5}>
              {/* article description */}
              <Typography fontWeight={"bold"} fontSize={18} mb={1}>
                {exploreData.article.articleTitle}
              </Typography>

              <Typography fontSize={17}>
                {exploreData.article.metaDescription}
              </Typography>
            </Box>
          </Box>

          {/* quiz and survey */}
          <Box width={"300px"}>
            {/* quiz title */}
            <Box borderBottom={"1px solid black"}>
              <Typography mt={2}>
                CRITICAL CARE . {exploreData.article.createdAt}
              </Typography>

              <Typography fontWeight={"bold"} fontSize={18} mb={3} mt={7.5}>
                {exploreData.quiz.quizTitle}
              </Typography>
            </Box>

            {/* survey description */}
            <Box mt={3}>
              <Typography>
                CRITICAL CARE . {exploreData.article.createdAt}
              </Typography>

              <Typography fontWeight={"bold"} fontSize={18} mt={2}>
                {exploreData.survey[0].metaDescription}
              </Typography>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ExploreMore;
