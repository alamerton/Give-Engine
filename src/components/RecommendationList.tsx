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
  const navigate = useNavigate();
  const [recommendations, setRecommendations] = useState<ICharity[]>([]);

  useEffect(() => {
    const getRecommendations = async () => {
      // TODO: make into a method
      // gets a liked charity by the user id

      const request1 = {
        userId: sessionStorage.getItem("userId"),
      };
      const response1 = await axios
        // const like = await axios
        .post("http://localhost:5002/likes/getLikeByUserId/", request1)
        .catch(function (error) {
          console.log("Requested user has no likes", error.message);
          navigate("/criteria");
        });

      const like: Like = response1?.data.like;

      const charityId = like.charityId;

      console.log("charityId", charityId);

      if (!charityId) {
        console.log("User has no likes, but got through the first handler");
        navigate("/criteria");
      } else {
        // get charity name by id
        // make a call to the charity api to get a charity's name
        const response2 = await axios
          // .post("charity endpoint", like)
          .get(`http://localhost:5000/${charityId}`) // this can be a get request that sends the charityId through the url
          .catch(function (error) {
            console.log("Error: " + error);
          });

        const charity: ICharity = {
          // TODO: refactor
          id: response2?.data.charity.id,
          name: response2?.data.charity.name,
          url: response2?.data.charity.url,
        };
        // call recommender api to get recommendations using that charity as the key
        // TODO: make into a method
        // const response = await axios.post<{ charities: ICharity[] }>(

        const request3 = {
          charityName: charity.name,
        };
        // returns list of ids
        const recommendedCharityIDs = await axios.post(
          "http://127.0.0.1:8001/",
          request3
        );

        // get charities by these ids and return a list containing their respective charity objects
        const recommendedCharities: ICharity[] = [];
        for (let i = 0; i < 10; i++) {
          let id = recommendedCharityIDs.data[i];
          const charityObject = await axios.get(`http://localhost:5000/${id}`);
          // .catch(function (error) {
          //   console.log("Error: " + error);
          // });
          const charityX: ICharity = {
            id: charityObject?.data.charity.id,
            name: charityObject?.data.charity.name,
            url: charityObject?.data.charity.url,
          };
          recommendedCharities.push(charityX);
        }
        console.log("The recommended charity list: ", recommendedCharities);

        // maybe by saving the charities to a list and saving that list to setRecommendations

        setRecommendations(recommendedCharities);
        console.log("Once set looks like this: ", recommendations);
      }
    };
    // call charity api to get charity information recommended charities?

    // use names to call database and get charity objects?
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
