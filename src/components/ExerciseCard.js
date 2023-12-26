import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";
import { green } from "@mui/material/colors";

const ExerciseCard = ({ exercise }) => (
  <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
    <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
    <Stack direction="row">
      <Button
        sx={{
          ml: "21px",
          color: "green",
          background: "#FFA9A9",
          fontSize: "14px",
          borderRadius: "20px",
          textTransform: "capitalize",
          color: "#3A1212"
        }}
      >
        {exercise.bodyPart}
      </Button>
      <Button
        sx={{
          ml: "21px",
          color: "#fff",
          background: "rgb(186, 176, 176)",
          fontSize: "14px",
          borderRadius: "20px",
          textTransform: "capitalize",
        }}
      >
        {exercise.target}
      </Button>
    </Stack>
    <Typography
      ml="21px"
      color="blue"
      fontWeight="bold"
      sx={{ fontSize: { lg: "24px", xs: "20px" } }}
      mt="11px"
      pb="10px"
      textTransform="capitalize"
    >
      {exercise.name}
    </Typography>
  </Link>
);

export default ExerciseCard;
