import { Box, CssBaseline } from "@mui/material";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import CharityList from "./components/CharityList";
import Landing from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes as appRoutes } from "./routes";

function App() {
  return (
    <Box sx={{ background: "whitesmoke", height: "100vh" }}>
      <Router>
        <CssBaseline />
        <NavBar />
        <Routes>
          {appRoutes.map((route) => (
            <Route
              key={route.key}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
