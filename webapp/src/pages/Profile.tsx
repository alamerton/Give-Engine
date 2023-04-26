import { Box, Typography } from "@mui/material";
import NavBar from "../components/NavBar";

export default function Profile() {
  const userId = sessionStorage.getItem("userId");
  return (
    <Box sx={{ background: "whitesmoke" }}>
      <NavBar />
      <Box sx={{ padding: "2rem", margin: "auto", width: "80%" }}>
        <Typography variant="h4">Hello, {userId}</Typography>
      </Box>
    </Box>
  );
}
