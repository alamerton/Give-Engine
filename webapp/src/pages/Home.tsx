import { Box } from "@mui/material";
import Banner from "../components/Banner";
import CharityList from "../components/CharityList";

export default function Home() {
  return (
    <Box sx={{ background: "whitesmoke" }}>
      <Banner />
      <CharityList />
    </Box>
  );
}
