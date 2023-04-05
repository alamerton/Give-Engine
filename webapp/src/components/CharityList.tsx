import {
  Box,
  Button,
  Card,
  Link,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarHalfIcon from "@mui/icons-material/StarHalf";

import React, { useEffect, useState } from "react";
import axios from "axios";

interface ICharity {
  id: number;
  name: string;
  url: string;
}

const CharityList: React.FC = () => {
  const [charities, setCharities] = useState<ICharity[]>([]);

  useEffect(() => {
    const fetchCharities = async () => {
      const response = await axios.get<{ charities: ICharity[] }>(
        "http://localhost:5000/charities"
      );
      setCharities(response.data.charities);
    };
    fetchCharities();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <List sx={{ width: "80%" }}>
        {charities.map((charity) => (
          <Card
            sx={{
              padding: "2rem",
              margin: "2rem",
              backgroundColor: "#EDF5FD",
              display: "flex",
            }}
          >
            <Box>
              <Typography variant="h5">{charity.name}</Typography>
              <Box sx={{ margin: "auto", display: "flex" }}>
                {/* Icon row goes here, number of grey icons depends on rating
                create an enumeration for each rating such as: 1 = 1 star 4 star borders, 3.5 = 3 stars 1 starhalf 1 star border */}
                <StarIcon sx={{ color: "green" }} />
                <StarIcon sx={{ color: "green" }} />
                <StarIcon sx={{ color: "green" }} />
                <StarIcon sx={{ color: "green" }} />
                <StarBorderIcon sx={{ color: "green" }} />
              </Box>
            </Box>
            <Box sx={{ marginLeft: "auto" }}>
              <Box sx={{ margin: "auto", alignItems: "center" }}>
                <Button variant="contained" href={charity.url}>
                  Donate
                </Button>
              </Box>
            </Box>
          </Card>
        ))}
      </List>
    </Box>
  );
};

export default CharityList;
