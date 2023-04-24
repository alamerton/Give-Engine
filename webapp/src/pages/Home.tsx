import { Box } from "@mui/material";
import Banner from "../components/CharityListBanner";
import CharityList from "../components/CharityList";

export default function Home() {
  return (
    <Box sx={{ background: "whitesmoke" }}>
      <Banner />
      <CharityList />
    </Box>
  );
}
