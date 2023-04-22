import { Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import Logo from "./Logo";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box
            component="img"
            sx={{
              height: 50,
              margin: "0 1rem 0 1rem",
            }}
            alt="Logo"
            src={process.env.PUBLIC_URL + "give-engine-logo.png"}
          />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Give Engine
          </Typography>
          <Button color="inherit" href="/signin">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
