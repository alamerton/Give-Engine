import { Box, Typography } from "@mui/material";
import UserProfile from "../helper/UserProfile";

const Banner = () => {
  return (
    <Box sx={{ padding: "2rem", margin: "auto", width: "80%" }}>
      <Typography variant="h3">Charities</Typography>
      <Typography variant="h6">Hello {UserProfile.getName()}</Typography>
    </Box>
  );
};

export default Banner;
