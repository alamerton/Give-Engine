import {
  Box,
  Card,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarHalfIcon from "@mui/icons-material/StarHalf";

import React from "react";

function returnCharityList(element: React.ReactElement) {
  return [0, 1, 2, 3, 4, 5, 6, 7, 8].map(
    // Imagine the list being mapped here is the list of charities
    (value) =>
      React.cloneElement(element, {
        key: value,
      })
  );
}

const CharityList = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <List sx={{ width: "80%" }}>
        {returnCharityList(
          <Card
            sx={{
              padding: "2rem",
              margin: "2rem",
              backgroundColor: "#EDF5FD",
              display: "flex",
            }}
          >
            <Box>
              <Typography variant="h5">Charity Name.</Typography>
              <Typography variant="body1">Description</Typography>
            </Box>
            <Box sx={{ marginLeft: "auto" }}>
              <Typography variant="h5">Give Engine Rating</Typography>
              <Box sx={{ margin: "auto", display: "flex" }}>
                {/* Icon row goes here, number of grey icons depends on rating
                create an enumeration for each rating such as: 1 = 1 star 4 star borders, 3.5 = 3 stars 1 starhalf 1 star border */}
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarBorderIcon />
              </Box>
            </Box>
          </Card>
        )}
      </List>
    </Box>
  );
};

export default CharityList;
