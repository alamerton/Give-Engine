import { Box } from "@mui/material";
import CharityFlexList from "../components/CharityCriteriaList";
import CriteriaSelectionBanner from "../components/CriteriaSelectionBanner";

export default function Criteria() {
  return (
    <Box sx={{ background: "whitesmoke" }}>
      <CriteriaSelectionBanner />
      <CharityFlexList />
    </Box>
  );
}
