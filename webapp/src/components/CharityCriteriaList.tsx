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
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarHalfIcon from "@mui/icons-material/StarHalf";

import React, { useEffect, useState } from "react";
import axios from "axios";

interface ICharity {
  id: number;
  name: string;
  url: string;
  isLiked: boolean;
}

function toTitleCase(str: string) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

const CharityCriteriaList: React.FC = () => {
  const [charities, setCharities] = useState<ICharity[]>([]);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const getCharities = async () => {
      const response = await axios.get<{ charities: ICharity[] }>(
        "http://localhost:5000/charities" // this would be a different list of charities curated to gain insight on preference
      );
      setCharities(response.data.charities);
      for (let charity in charities) {
        charities[charity].isLiked = false;
      }
    };
    getCharities();
  }, []);

  return (
    <Box
      sx={{
        width: "90%",
        margin: "auto",
      }}
    >
      <List
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {charities.map((charity) => (
          <Card
            sx={{
              padding: "2rem",
              margin: "1rem",
              display: "flex",
              minWidth: "30rem",
            }}
          >
            <Box>
              <Typography variant="h5">{toTitleCase(charity.name)}</Typography>
            </Box>
            <Box
              sx={{
                marginLeft: "auto",
                display: "flex",
                alignItems: "center",
              }}
            >
              {charity.isLiked ? (
                <FavoriteBorderIcon
                  sx={{ color: "gold" }}
                  onClick={() => {
                    setIsLiked(!isLiked);
                    charity.isLiked = false;
                    // create like
                  }}
                />
              ) : (
                <FavoriteIcon
                  sx={{ color: "gold" }}
                  onClick={() => {
                    setIsLiked(!isLiked);
                    charity.isLiked = true;

                    // remove like
                  }}
                />
              )}
            </Box>
          </Card>
        ))}
      </List>
    </Box>
  );
};

export default CharityCriteriaList;
