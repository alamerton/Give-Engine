import { Box, Button, Card, List, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import React, { useEffect, useState } from "react";
import axios from "axios";
import titleCase from "../helper/TitleCapitalisation";

interface ICharity {
  id: number;
  name: string;
  url: string;
}

const RecommendationList: React.FC = () => {
  const [charities, setCharities] = useState<ICharity[]>([]);

  useEffect(() => {
    const getCharities = async () => {
      // call likes api to get most significant charity (this is the best I can do)
      // TODO: make into a method
      // gets a liked charity by the user id
      const request1 = {
        userId: sessionStorage.getItem("userId"),
      };
      const response1 = await axios
        // const like = await axios
        .post("http://localhost:5002/likes/getLikeByUserId/", request1)
        .catch(function (error) {
          alert("Error: " + error.response.statusText);
        });

      // get charity name by id
      // make a call to the charity api to get a charity's name
      const response2 = await axios
        // .post("charity endpoint", like)
        .post("http://localhost:5000/charities/", response1)
        .catch(function (error) {
          alert("Error: " + error.response.statusText);
        });
      const charity: ICharity = { // TODO: refactor
        id: response2?.data.id,
        name: response2?.data.name,
        url: response2?.data.url
      }
      // call recommender api to get recommendations using that charity as the key
      // TODO: make into a method
      // const response = await axios.post<{ charities: ICharity[] }>(
      const request3 = {
        charityName: charity.name,
      };
      const response = await axios.post("http://127.0.0.1:8001/", request3);

      console.log(response.data);
      setCharities(response.data.charities);
    };
    // call charity api to get charity information recommended charities?

    // use names to call database and get charity objects?
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

export default RecommendationList;
