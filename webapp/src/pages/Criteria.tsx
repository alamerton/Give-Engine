import { Box } from "@mui/material";
import Banner from "../components/Banner";
import CharityFlexList from "../components/CharityCriteriaList";

export default function Criteria() {
  return (
    <Box sx={{ background: "whitesmoke" }}>
      <Banner />
      <CharityFlexList />
    </Box>
  );
}
