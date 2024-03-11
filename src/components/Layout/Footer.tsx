import { Stack, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Stack
      width="100%"
      bgcolor="common.black"
      direction="row"
      justifyContent="center"
      alignItems="center"
      p={2}
    >
      <Typography component="p" variant="body1" color="common.white">
        © 2024 ScanSight. All Rights Reserved
      </Typography>
    </Stack>
  );
};

export default Footer;
