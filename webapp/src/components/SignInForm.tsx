import React, { useState } from "react";
import { useForm } from "../useForm";
import {
  Box,
  Button,
  Container,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

export default function SignInForm() {
  // defining the initial state for the form
  const initialState = {
    email: "",
    password: "",
  };

  // getting the event handlers from our custom hook
  const { onChange, onSubmit, values } = useForm(
    loginUserCallback,
    initialState
  );

  // a submit function that will execute upon form submission
  async function loginUserCallback() {
    // send "values" to database
  }

  return (
    <Box sx={{ paddingTop: "2rem" }}>
      <Paper
        sx={{
          top: "5rem",
          width: "30%",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{ fontSize: "1.5rem", margin: "auto", padding: "1rem 0 1rem 0" }}
        >
          Sign In
        </Typography>
        <form onSubmit={onSubmit}>
          <Container
            sx={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              width: "60%",
            }}
          >
            <TextField
              name="email"
              id="email"
              type="email"
              placeholder="Email"
              onChange={onChange}
              required
            />
            <TextField
              sx={{ padding: "0.5rem 0 1rem 0" }}
              name="password"
              id="password"
              type="password"
              placeholder="Password"
              onChange={onChange}
              required
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ width: "60%", margin: "auto" }}
            >
              Login
            </Button>
            <Link
              href="#"
              underline="hover"
              sx={{ padding: "1rem 0 1rem 0", margin: "auto" }}
            >
              Don't have an account? Register
            </Link>
          </Container>
        </form>
      </Paper>
    </Box>
  );
}
