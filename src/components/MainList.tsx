import { Box, Button, Card, List, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import titleCase from "../helper/TitleCapitalisation";
import StarRating from "./StarRating";

interface ICharity {
  id: number;
  name: string;
  url: string;
}

const MainList: React.FC = () => {
  const [charities, setCharities] = useState<ICharity[]>([]);

  useEffect(() => {
    const getCharities = async () => {
      const response = await axios.get<{ charities: ICharity[] }>(
        "http://localhost:5000/"
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
            key={charity.id}
            sx={{
              padding: "2rem",
              margin: "1rem",
              display: "flex",
            }}
          >
            <Box>
              <Typography variant="h5">{titleCase(charity.name)}</Typography>
              <Box>
                <Typography sx={{ padding: "0 0 0.5em 0", fontSize: "1.2rem" }}>
                  Short charity description short charity description short
                  charity description short charity description
                </Typography>
              </Box>
              <StarRating />
            </Box>
            <Box
              sx={{
                marginLeft: "auto",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Button variant="contained" href={charity.url}>
                Donate
              </Button>
            </Box>
          </Card>
        ))}
      </List>
    </Box>
  );
};

export default MainList;
