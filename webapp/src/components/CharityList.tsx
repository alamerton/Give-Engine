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

function toTitleCase(str: string) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

const CharityList: React.FC = () => {
  const [charities, setCharities] = useState<ICharity[]>([]);

  useEffect(() => {
    const getCharities = async () => {
      const response = await axios.get<{ charities: ICharity[] }>(
        "http://localhost:5000/charities"
      );
      setCharities(response.data.charities);
    };
    getCharities();
  }, []);

  return (
    <Box
      sx={{
        width: "80%",
        margin: "auto",
      }}
    >
      <List>
        {charities.map((charity) => (
          <Card
            sx={{
              padding: "2rem",
              margin: "1rem",
              display: "flex",
            }}
          >
            <Box>
              <Typography variant="h5">{toTitleCase(charity.name)}</Typography>
              {/* Icon row goes here, number of grey icons depends on rating
              create an enumeration for each rating such as: 1 = 1 star 4 star borders, 3.5 = 3 stars 1 starhalf 1 star border */}
              {/* Logic like 'if charity has rating...' to do the star system. For now the stars are just there for show */}
              <Box sx={{ margin: "auto", display: "flex" }}>
                <StarIcon sx={{ color: "green" }} />
                <StarIcon sx={{ color: "green" }} />
                <StarIcon sx={{ color: "green" }} />
                <StarIcon sx={{ color: "green" }} />
                <StarBorderIcon sx={{ color: "green" }} />
              </Box>
            </Box>
            <Box
              sx={{
                marginLeft: "auto",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box sx={{}}>
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
