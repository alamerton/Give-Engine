import { CssBaseline } from "@mui/material";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import CharityList from "./components/CharityList";

function App() {
  return (
    <div>
      <CssBaseline />
      <NavBar />
      <Banner />
      <CharityList />
    </div>
  );
}

export default App;
