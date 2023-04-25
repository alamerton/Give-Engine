import { Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";

const CornerButton: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    const handleStorageChange = () => {
      console.log("Session storage changed:", sessionStorage.getItem("id"));
      setLoggedIn(!!sessionStorage.getItem("id"));
    };
    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);
  const buttonKey = loggedIn ? "profile" : "signin";
  if (loggedIn) {
    return (
      <Button key={buttonKey} color="inherit" href="/profile">
        Profile
      </Button>
    );
  } else {
    return (
      <Button key={buttonKey} color="inherit" href="/signin">
        Login
      </Button>
    );
  }
};

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
          <CornerButton />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
