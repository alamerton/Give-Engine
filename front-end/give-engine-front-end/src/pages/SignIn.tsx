import { Box } from "@mui/material";
import SignInForm from "../components/SignInForm";
import NavBar from "../components/NavBar";

export default function SignIn() {
  return (
    <Box sx={{ background: "whitesmoke" }}>
      <NavBar/>
      <SignInForm />
    </Box>
  );
}
