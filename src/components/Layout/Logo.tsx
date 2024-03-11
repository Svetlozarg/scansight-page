import { Typography } from "@mui/material";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Typography component="h1" variant="h3" color="common.white">
        ScanSight
      </Typography>
    </Link>
  );
};

export default Logo;
