"use client";
import { useState } from "react";
import { Stack, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Image from "next/image";
import Button from "@/components/MUIComponents/Button";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import StarsIcon from "@mui/icons-material/Stars";
import Modal from "@/components/MUIComponents/Modal";

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

      <Stack
        id="points-and-prizes"
        width="100%"
        maxWidth="1400px"
        margin="0 auto"
        mt={16}
        px={4}
      >
        <Typography component="h2" variant="h2" textAlign="center" mb={4}>
          Точки и Награди
        </Typography>

        <Stack>
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-end"
            gap={0.5}
          >
            <StarsIcon
              sx={{
                color: "#FEC50F",
              }}
            />
            <Typography component="p" variant="h5" textAlign="justify">
              Точки:
            </Typography>
          </Stack>

          <ul>
            <li>
              Всеки посетен{" "}
              <Typography component="span" variant="body1" color="primary.main">
                туристически обект
              </Typography>
              , който има стикер с логото на ‘ScanSight’ в Община Петрич носи{" "}
              <Typography component="span" variant="body1" color="primary.main">
                5 точки
              </Typography>{" "}
              в акаунта на своя потребител.
            </li>
            <li>
              Местата за посещение, които влизат в графа{" "}
              <Typography component="span" variant="body1" color="primary.main">
                туристически обекти{" "}
              </Typography>
              са следните: Хераклея Синтика, Къща Ванга, Исторически музей
              Петрич и Самуилова Крепост.{" "}
            </li>
            <li>
              Всеки посетен обект от секция хобита и свободно време, който има
              стикер с логото на &apos;ScanSight&apos; в Община Петрич носи{" "}
              <Typography component="span" variant="body1" color="primary.main">
                3 точки
              </Typography>{" "}
              в акаунта на своя потребител.
            </li>
            <li>
              Местата за посещение, които влизат в графа{" "}
              <Typography component="span" variant="body1" color="primary.main">
                хобита и свободно време
              </Typography>{" "}
              са следните: кино, билярд клуб
            </li>
          </ul>
        </Stack>

        <Stack>
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-end"
            gap={0.5}
          >
            <EmojiEventsIcon sx={{ color: "#FEC50F" }} />
            <Typography component="p" variant="h5" textAlign="justify">
              Награди:
            </Typography>
          </Stack>

          <ul>
            <li>
              <Typography component="span" variant="body1" color="primary.main">
                20{" "}
              </Typography>
              събрани точки отговарят на{" "}
              <Typography component="span" variant="body1" color="primary.main">
                Сертификат за Турист на Годината
              </Typography>{" "}
              .
            </li>
            <li>
              <Typography component="span" variant="body1" color="primary.main">
                50{" "}
              </Typography>
              събрани точки отговарят на предметна награда{" "}
              <Typography component="span" variant="body1" color="primary.main">
                тениска, шапка или изненада
              </Typography>{" "}
              предоставена от Община Петрич.
            </li>
          </ul>
        </Stack>
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
  const [openModal, setOpenModal] = useState<boolean>(false);

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
      <Button message="Сканирай QR" onClick={() => setOpenModal(true)} />

      <Modal
        modalTitle="Как да сканирам код?"
        open={openModal}
        setOpen={setOpenModal}
      >
        <Stack mt={2} gap={4}>
          <Typography component="p" variant="body1" textAlign="justify">
            Трябва да се намирате на локацията и пред вас да се намира
            обозначеният QR код. За да сканирате QR кода, трябва да използвате
            камерата на вашия телефон. Насочете камерата към QR кода. След като
            устройството ви разпознае QR кода, ще ви пренасочи към нашата
            страница и ще ви покаже информация за това дали успешно сте
            сканирали QR кода и колко точки сте получили.
          </Typography>

          <Typography component="p" variant="body1" textAlign="justify">
            Пълните правила за точки и награди може да намерите в нашата начална
            страница под секция &quot;Точки и Награди&quot;
          </Typography>

          <Typography component="p" variant="body1" textAlign="justify">
            Екипът на ‘ScanSight’ и Община Петрич Ви пожелава успех и приятна
            игра!
          </Typography>

          <Button message="Затвори" onClick={() => setOpenModal(false)} />
        </Stack>
      </Modal>
    </Stack>
  );
};
