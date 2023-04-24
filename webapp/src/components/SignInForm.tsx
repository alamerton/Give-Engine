import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserProfile from "../helper/UserProfile";

export default function SignInForm() {
  const navigate = useNavigate();
  async function handleSubmit(email: string, password: string) {
    await axios
      .post("http://localhost:5001/users/", {
        email: email,
        password: password,
      })
      .catch(function (error) {
        if (error.response.status === 401) {
          alert("Incorrect password");
        } else {
          console.log(error.message);
        }
      });
    UserProfile.setEmail(email);
    navigate("/");
  }

  return (
    <Box sx={{ paddingTop: "2rem" }}>
      <Paper
        sx={{
          top: "5rem",
          width: {
            xs: "90%",
            sm: "60%",
            md: "50%",
            lg: "40%",
            xl: "30%",
          },
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
        <form
          onSubmit={async (event: React.SyntheticEvent) => {
            event.preventDefault();
            const target = event.target as typeof event.target & {
              email: { value: string };
              password: { value: string };
            };
            const email = target.email.value;
            const password = target.password.value;
            await handleSubmit(email, password);
          }}
        >
          <Container
            sx={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              width: "80%",
            }}
          >
            <TextField
              name="email"
              id="email"
              type="email"
              placeholder="Email"
              required
            />
            <TextField
              sx={{ padding: "0.5rem 0 1rem 0" }}
              name="password"
              id="password"
              type="password"
              placeholder="Password"
              required
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                width: {
                  xs: "60%",
                  sm: "50%",
                  md: "40%",
                },
                margin: "auto",
              }}
            >
              Login
            </Button>
            <Link
              href="/register"
              underline="hover"
              sx={{
                padding: "1rem 0 1rem 0",
                margin: "auto",
                textAlign: "center",
              }}
            >
              Don't have an account? Register
            </Link>
          </Container>
        </form>
      </Paper>
    </Box>
  );
}
