import Link from "next/link";

import logo from "../../../public/assets/logo-black.png";
import Image from "next/image";
import { Box } from "@mui/material";

const Logo = () => {
  return (
    <Box
      width="100%"
      maxWidth={{ xs: "90px", sm: "100px", md: "120px" }}
      mt="10px"
    >
      <Link href="/">
        <Image
          src={logo}
          width={100}
          height={100}
          alt="scan sight logo"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
          }}
        />
      </Link>
    </Box>
  );
};

export default Logo;
