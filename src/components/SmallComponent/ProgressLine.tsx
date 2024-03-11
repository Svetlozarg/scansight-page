"use client";
import {
  LinearProgress,
  Stack,
  Typography,
  linearProgressClasses,
  styled,
} from "@mui/material";
import React from "react";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.primary.main,
  },
}));

interface ProgressLineProps {
  value: number;
}

const ProgressLine: React.FC<ProgressLineProps> = ({ value }) => {
  return (
    <Stack my={6}>
      <BorderLinearProgress variant="determinate" value={value} />

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        my={1}
      >
        <Typography component="p" variant="body1">
          0 т.
        </Typography>
        <Typography component="p" variant="body1">
          20 т.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default ProgressLine;
