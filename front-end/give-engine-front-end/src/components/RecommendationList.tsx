import { Box, Button, Card, List, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import titleCase from "../helper/TitleCapitalisation";
import { Like } from "../types/like.type";
import { useNavigate } from "react-router-dom";
import StarRating from "./StarRating";

interface ICharity {
  id: number;
  name: string;
  url: string;
}

const RecommendationList: React.FC = () => {
  const [recommendations, setRecommendations] = useState<ICharity[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getRecommendations = async () => {
      const userId = {
        userId: sessionStorage.getItem("userId"),
      };
      const likeEndpointResponse = await axios
        .post("http://localhost:5000/likes/getLikeByUserId", userId)
        .catch(function (error) {
          console.log("Requested user has no likes", error.message);
          navigate("/criteria");
        });
      const charityId = likeEndpointResponse?.data.like.charityId;
      const charityEndpointResponse = await axios
        .get(`http://localhost:5000/getCharityById/${charityId}`) // throwing error
        .catch(function (error) {
          console.log("Error: " + error);
        });
      const charity: ICharity = {
        id: charityEndpointResponse?.data.charity.id,
        name: charityEndpointResponse?.data.charity.name,
        url: charityEndpointResponse?.data.charity.url,
      };
      const charityNameObject = {
        charityName: charity.name,
      };
      console.log("Charity name object: ", charityNameObject);

      const recommendedCharityIDs = await axios.post(
        "http://127.0.0.1:8001/",
        charityNameObject
      );
      const recommendedCharities: ICharity[] = [];
      for (let i = 0; i < 10; i++) {
        let id = recommendedCharityIDs.data[i];
        const charityObject = await axios.get(
          `http://localhost:5000/getCharityById/${id}`
        );
        console.log("CHARITY OBJECT: ", charityObject);
        const charity: ICharity = {
          id: charityObject?.data.charity.id,
          name: charityObject?.data.charity.name,
          url: charityObject?.data.charity.url,
        };
        recommendedCharities.push(charity);
      }
      setRecommendations(recommendedCharities);
    };
    getRecommendations();
  }, []);

  return (
    <Box
      sx={{
        width: "80%",
        margin: "auto",
      }}
    >
      <List>
        {recommendations.map((charity) => (
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
              <Typography sx={{ padding: "0 0 0.5em 0", fontSize: "1.2rem" }}>
                Short charity description short charity description short
                charity description short charity description
              </Typography>
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

export default RecommendationList;
