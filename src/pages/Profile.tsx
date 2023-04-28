import { Box, Typography } from "@mui/material";
import NavBar from "../components/NavBar";
import RecommendationList from "../components/RecommendationList";

export default function Profile() {
  return (
    <Box sx={{ background: "whitesmoke" }}>
      <NavBar />
      <Box sx={{ padding: "2rem", margin: "auto", width: "80%" }}>
        <Typography variant="h4">
          We think these charities might interest you
        </Typography>
      </Box>
      <RecommendationList />
    </Box>
  );
}
