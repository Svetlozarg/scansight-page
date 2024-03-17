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
      "https://ik.imagekit.io/obelussoft/VisitPetrich/HOR09006_vicgp-nL9.jpg",
  },
  {
    title: "3. Исторически  музей",
    image:
      "https://ik.imagekit.io/obelussoft/VisitPetrich/petrich-museum_7VZpceUwp.jpg",
  },
  {
    title: "4. Самуилова Крепост",
    image:
      "https://ik.imagekit.io/obelussoft/VisitPetrich/HOR09102%20(1)_5qRy2wlXs.jpg",
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
        Сканирай Туристически Обект
      </Typography>
      <Stack
        width="100%"
        maxWidth="1800px"
        direction="row"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        gap={4}
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
      <Stack bgcolor="common.white" borderRadius="10px">
        <Image
          src={image}
          alt="image"
          width={100}
          height={100}
          style={{
            width: "300px",
            height: "300px",
            objectFit: "cover",
            objectPosition: "center",
            borderRadius: "10px",
            border: "6px solid #ffffff",
          }}
        />

        <Stack width="100%" justifyContent="center" alignItems="center" gap={2}>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            gap={1}
            py={2}
          >
            <LocationOnIcon color="error" sx={{ fontSize: "2rem" }} />

            <Typography component="h4" variant="h5">
              {title}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Button message="Сканирай QR" />
    </Stack>
  );
};
