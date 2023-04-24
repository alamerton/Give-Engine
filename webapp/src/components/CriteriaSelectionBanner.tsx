import { Box, Typography } from "@mui/material";
import UserProfile from "../helper/UserProfile";

const CharityListBanner = () => {
  return (
    <Box sx={{ padding: "2rem", margin: "auto", width: "80%" }}>
      <Typography variant="h4">
        Please select three or more charities
      </Typography>
    </Box>
  );
};

export default CharityListBanner;
