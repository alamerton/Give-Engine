import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function FinishButton() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      <Button
        variant="contained"
        sx={{
          width: "12rem",
          height: "4rem",
          fontSize: "1.5rem",
          textTransform: "none",
        }}
        onClick={() => {
          navigate("/");
        }}
      >
        Finish
      </Button>
    </Box>
  );
}
