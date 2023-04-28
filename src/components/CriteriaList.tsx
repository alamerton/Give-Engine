import { Box, Card, List, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import React, { useEffect, useState } from "react";
import axios from "axios";
import titleCase from "../helper/TitleCapitalisation";

type Charity = {
  id: number;
  name: string;
  url: string;
  isLiked: boolean;
};

async function createLike(charity: Charity) {
  try {
    const userId = sessionStorage.getItem("userId");
    await axios.post("http://localhost:5002/", {
      userId: userId,
      charityId: charity.id,
    });
  } catch (error) {
    console.log(error);
  }
}

async function removeLike(charity: Charity) {
  try {
    const userId = sessionStorage.getItem("userId");
    await axios.delete("http://localhost:5002/", {
      data: {
        userId: userId,
        charityId: charity.id,
      },
    });
  } catch (error) {
    console.log(error);
  }
}

const CriteriaList: React.FC = () => {
  const [charities, setCharities] = useState<Charity[]>([]);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const getCharities = async () => {
      const response = await axios.get<{ charities: Charity[] }>(
        "http://localhost:5000/"
      );
      setCharities(response.data.charities.slice(0, 9));
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
            key={charity.id}
            sx={{
              padding: "2rem",
              margin: "1rem",
              display: "flex",
              minWidth: "32rem",
            }}
          >
            <Box sx={{ maxWidth: "25rem" }}>
              <Typography variant="h6">{titleCase(charity.name)}</Typography>
            </Box>
            <Box
              sx={{
                marginLeft: "auto",
                display: "flex",
                alignItems: "center",
              }}
            >
              {charity.isLiked ? (
                <FavoriteIcon
                  sx={{ color: "gold" }}
                  onClick={() => {
                    setIsLiked(!isLiked);
                    charity.isLiked = false;
                    removeLike(charity);
                  }}
                />
              ) : (
                <FavoriteBorderIcon
                  sx={{ color: "gold" }}
                  onClick={() => {
                    setIsLiked(!isLiked);
                    charity.isLiked = true;
                    createLike(charity);
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

export default CriteriaList;
