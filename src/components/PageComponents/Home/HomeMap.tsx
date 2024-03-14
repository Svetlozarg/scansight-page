import { Stack, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Image from "next/image";
import Button from "@/components/MUIComponents/Button";

const MAP_CARDS_DATA = [
  {
    title: "1. Хераклея Синтика",
    image:
      "https://ik.imagekit.io/obelussoft/VisitPetrich/%D0%A5%D0%B5%D1%80%D0%B0%D0%BA%D0%BB%D0%B5%D1%8F/%D0%A5%D0%B5%D1%80%D0%B0%D0%BA%D0%BB%D0%B5%D1%8F%20%D0%A1%D0%B8%D0%BD%D1%82%D0%B8%D0%BA%D0%B0%20(1)-min_eDDWNTLPh.jpg",
  },
  {
    title: "2. Къща Ванга",
    image:
      "https://ik.imagekit.io/obelussoft/VisitPetrich/%D0%A5%D0%B5%D1%80%D0%B0%D0%BA%D0%BB%D0%B5%D1%8F/%D0%A5%D0%B5%D1%80%D0%B0%D0%BA%D0%BB%D0%B5%D1%8F%20%D0%A1%D0%B8%D0%BD%D1%82%D0%B8%D0%BA%D0%B0%20(1)-min_eDDWNTLPh.jpg",
  },
  {
    title: "3. Исторически  музей",
    image:
      "https://ik.imagekit.io/obelussoft/VisitPetrich/%D0%A5%D0%B5%D1%80%D0%B0%D0%BA%D0%BB%D0%B5%D1%8F/%D0%A5%D0%B5%D1%80%D0%B0%D0%BA%D0%BB%D0%B5%D1%8F%20%D0%A1%D0%B8%D0%BD%D1%82%D0%B8%D0%BA%D0%B0%20(1)-min_eDDWNTLPh.jpg",
  },
  {
    title: "4. Самуилова Крепост",
    image:
      "https://ik.imagekit.io/obelussoft/VisitPetrich/%D0%A5%D0%B5%D1%80%D0%B0%D0%BA%D0%BB%D0%B5%D1%8F/%D0%A5%D0%B5%D1%80%D0%B0%D0%BA%D0%BB%D0%B5%D1%8F%20%D0%A1%D0%B8%D0%BD%D1%82%D0%B8%D0%BA%D0%B0%20(1)-min_eDDWNTLPh.jpg",
  },
  {
    title: "5. Гяур Калеси",
    image:
      "https://ik.imagekit.io/obelussoft/VisitPetrich/%D0%A5%D0%B5%D1%80%D0%B0%D0%BA%D0%BB%D0%B5%D1%8F/%D0%A5%D0%B5%D1%80%D0%B0%D0%BA%D0%BB%D0%B5%D1%8F%20%D0%A1%D0%B8%D0%BD%D1%82%D0%B8%D0%BA%D0%B0%20(1)-min_eDDWNTLPh.jpg",
  },
];

const HomeMap = () => {
  return (
    <Stack
      width="100%"
      borderTop="6px solid"
      borderBottom="6px solid"
      borderColor="primary.main"
      bgcolor="secondary.main"
      py={20}
    >
      <Typography component="h2" variant="h2" textAlign="center" mb={10}>
        Туристически Обекти
      </Typography>
      <Stack
        width="100%"
        maxWidth="1600px"
        direction="row"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        gap={8}
        px={2}
        m="0 auto"
      >
        {MAP_CARDS_DATA.map((card, index) => (
          <HomeMapCard key={index} title={card.title} image={card.image} />
        ))}
      </Stack>
    </Stack>
  );
};

export default HomeMap;

interface HomeMapCardProps {
  title: string;
  image: string;
}

const HomeMapCard: React.FC<HomeMapCardProps> = ({ title, image }) => {
  return (
    <Stack justifyContent="center" alignItems="center" gap={2}>
      <LocationOnIcon color="error" sx={{ fontSize: "4rem" }} />

      <Typography component="h4" variant="h4">
        {title}
      </Typography>

      <Image
        src={image}
        alt="image"
        width={100}
        height={100}
        style={{
          width: "250px",
          height: "250px",
          objectFit: "cover",
          objectPosition: "center",
          borderRadius: "50%",
          border: "6px solid #ffffff",
          margin: "1rem 0",
        }}
      />

      <Button message="Сканирай QR" />
    </Stack>
  );
};
