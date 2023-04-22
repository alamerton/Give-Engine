import { Box } from "@mui/material";
import Banner from "../components/Banner";
import CharityList from "../components/CharityList";
import NavBar from "../components/NavBar";

export default function LandingPage() {
  return (
    <Box>
      <Banner />
      <CharityList />
    </Box>
  );
}
