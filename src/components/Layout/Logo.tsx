import Link from "next/link";

import logo from "../../../public/logo-black.png";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src={logo}
        width={100}
        height={100}
        alt="scan sight logo"
        style={{
          width: "150px",
          height: "auto",
          objectFit: "cover",
          marginTop: 70,
        }}
      />
    </Link>
  );
};

export default Logo;
