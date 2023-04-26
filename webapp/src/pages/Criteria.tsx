import { Box, Typography } from "@mui/material";
import CharityFlexList from "../components/CharityCriteriaList";
import FinishButton from "../components/FinishButton";
import NavBar from "../components/NavBar";

export default function Criteria() {
  return (
    <Box sx={{ background: "whitesmoke" }}>
      <NavBar />
      <Box sx={{ padding: "2rem", margin: "auto", width: "80%" }}>
        <Typography variant="h4">
          Please select three or more charities
        </Typography>
      </Box>
      <CharityFlexList />
      <FinishButton />
    </Box>
  );
}
