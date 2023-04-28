import { Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarHalfIcon from "@mui/icons-material/StarHalf";

const StarRating: React.FC = () => {
  // this would get a charity's rating from the charities api, but for now its value is generated
  const rating = Math.round(Math.ceil(Math.random() * 5 * 2)) / 2;
  console.log(rating);
  if (rating === 0.5) {
  } else if (rating === 1) {
    return (
      <Box sx={{ margin: "auto", display: "flex" }}>
        <StarIcon sx={{ color: "green" }} />
        <StarBorderIcon sx={{ color: "green" }} />
        <StarBorderIcon sx={{ color: "green" }} />
        <StarBorderIcon sx={{ color: "green" }} />
        <StarBorderIcon sx={{ color: "green" }} />
      </Box>
    );
  } else if (rating === 1.5) {
    return (
      <Box sx={{ margin: "auto", display: "flex" }}>
        <StarIcon sx={{ color: "green" }} />
        <StarHalfIcon sx={{ color: "green" }} />
        <StarBorderIcon sx={{ color: "green" }} />
        <StarBorderIcon sx={{ color: "green" }} />
        <StarBorderIcon sx={{ color: "green" }} />
      </Box>
    );
  } else if (rating === 2) {
    return (
      <Box sx={{ margin: "auto", display: "flex" }}>
        <StarIcon sx={{ color: "green" }} />
        <StarIcon sx={{ color: "green" }} />
        <StarBorderIcon sx={{ color: "green" }} />
        <StarBorderIcon sx={{ color: "green" }} />
        <StarBorderIcon sx={{ color: "green" }} />
      </Box>
    );
  } else if (rating === 2.5) {
    return (
      <Box sx={{ margin: "auto", display: "flex" }}>
        <StarIcon sx={{ color: "green" }} />
        <StarIcon sx={{ color: "green" }} />
        <StarHalfIcon sx={{ color: "green" }} />
        <StarBorderIcon sx={{ color: "green" }} />
        <StarBorderIcon sx={{ color: "green" }} />
      </Box>
    );
  } else if (rating === 3) {
    return (
      <Box sx={{ margin: "auto", display: "flex" }}>
        <StarIcon sx={{ color: "green" }} />
        <StarIcon sx={{ color: "green" }} />
        <StarIcon sx={{ color: "green" }} />
        <StarBorderIcon sx={{ color: "green" }} />
        <StarBorderIcon sx={{ color: "green" }} />
      </Box>
    );
  } else if (rating === 3.5) {
    return (
      <Box sx={{ margin: "auto", display: "flex" }}>
        <StarIcon sx={{ color: "green" }} />
        <StarIcon sx={{ color: "green" }} />
        <StarIcon sx={{ color: "green" }} />
        <StarHalfIcon sx={{ color: "green" }} />
        <StarBorderIcon sx={{ color: "green" }} />
      </Box>
    );
  } else if (rating === 4) {
    return (
      <Box sx={{ margin: "auto", display: "flex" }}>
        <StarIcon sx={{ color: "green" }} />
        <StarIcon sx={{ color: "green" }} />
        <StarIcon sx={{ color: "green" }} />
        <StarIcon sx={{ color: "green" }} />
        <StarBorderIcon sx={{ color: "green" }} />
      </Box>
    );
  } else if (rating === 4.5) {
    return (
      <Box sx={{ margin: "auto", display: "flex" }}>
        <StarIcon sx={{ color: "green" }} />
        <StarIcon sx={{ color: "green" }} />
        <StarIcon sx={{ color: "green" }} />
        <StarIcon sx={{ color: "green" }} />
        <StarHalfIcon sx={{ color: "green" }} />
      </Box>
    );
  } else if (rating === 5) {
    return (
      <Box sx={{ margin: "auto", display: "flex" }}>
        <StarIcon sx={{ color: "green" }} />
        <StarIcon sx={{ color: "green" }} />
        <StarIcon sx={{ color: "green" }} />
        <StarIcon sx={{ color: "green" }} />
        <StarIcon sx={{ color: "green" }} />
      </Box>
    );
  }
  return null;
};

export default StarRating