import { Box } from "@mui/material";
import NavBar from "../components/NavBar";
import RegisterForm from "../components/RegisterForm";

export default function Register() {
  return (
    <Box sx={{ background: "whitesmoke" }}>
      <NavBar />
      <RegisterForm />
    </Box>
  );
}
