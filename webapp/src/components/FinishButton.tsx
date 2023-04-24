import { Box, Button } from "@mui/material";

export default function FinishButton() {
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
        // onClick={}
      >
        Finish
      </Button>
    </Box>
  );
}
