import { Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
// import Logo from "./Logo";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <a href="/">
            <Box
              component="img"
              sx={{
                height: 50,
                margin: "0 0.5rem 0 0",
              }}
              alt="Logo"
              src={process.env.PUBLIC_URL + "give-engine-logo.png"}
            />
          </a>

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
