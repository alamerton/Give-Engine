import { Box, Typography } from "@mui/material";
import MainList from "../components/MainList";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <Box sx={{ background: "whitesmoke" }}>
      <NavBar />
      <Box sx={{ padding: "2rem", margin: "auto", width: "80%" }}>
        <Typography variant="h3">Welcome</Typography>
      </Box>
      <MainList />
    </Box>
  );
}
