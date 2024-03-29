"use client";
import { useState } from "react";
import { Stack, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Image, { StaticImageData } from "next/image";
import Button from "@/components/MUIComponents/Button";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import StarsIcon from "@mui/icons-material/Stars";
import Modal from "@/components/MUIComponents/Modal";
import { useTranslation } from "next-i18next";
import house from "../../../../public/assets/house.jpg";
import museum from "../../../../public/assets/museum.jpg";
import sintica from "../../../../public/assets/sintika.jpg";
import samuil from "../../../../public/assets/samuil.jpg";

const MAP_CARDS_DATA = [
  {
    title: "1. Хераклея Синтика",
    image: sintica,
  },
  {
    title: "2. Къща Ванга",
    image: house,
  },
  {
    title: "3. Исторически  музей",
    image: museum,
  },
  {
    title: "4. Самуилова Крепост",
    image: samuil,
  },
];

const HomeMap = () => {
  const { t } = useTranslation();
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
        {t("sightseeing.title")}
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
          <HomeMapCard
            t={t}
            key={index}
            title={card.title}
            image={card.image}
          />
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
          {t("sightseeing.rulesPrizes.title")}
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
              {t("sightseeing.rulesPrizes.points")}
            </Typography>
          </Stack>

          <ul>
            <li>{t("sightseeing.rulesPrizes.pointsListItem1")}</li>
            <li>{t("sightseeing.rulesPrizes.pointsListItem2")}</li>
            <li>{t("sightseeing.rulesPrizes.pointsListItem3")}</li>
            <li>{t("sightseeing.rulesPrizes.pointsListItem4")}</li>
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
              {t("sightseeing.rulesPrizes.prizes")}
            </Typography>
          </Stack>

          <ul>
            <li>{t("sightseeing.rulesPrizes.prizesListItem1")}</li>
            <li>{t("sightseeing.rulesPrizes.prizesListItem2")}</li>
          </ul>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default HomeMap;

interface HomeMapCardProps {
  title: string;
  image: StaticImageData;
  t: any;
}

const HomeMapCard: React.FC<HomeMapCardProps> = ({ title, image, t }) => {
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
      <Button
        message={t("sightseeing.button")}
        onClick={() => setOpenModal(true)}
      />

      <Modal
        modalTitle={t("scanQr.title")}
        open={openModal}
        setOpen={setOpenModal}
      >
        <Stack mt={2} gap={4}>
          <Typography component="p" variant="body1" textAlign="justify">
            {t("scanQr.text1")}
          </Typography>

          <Typography component="p" variant="body1" textAlign="justify">
            {t("scanQr.text2")}
          </Typography>

          <Typography component="p" variant="body1" textAlign="justify">
            {t("scanQr.text3")}
          </Typography>

          <Button
            message={t("scanQr.button")}
            onClick={() => setOpenModal(false)}
          />
        </Stack>
      </Modal>
    </Stack>
  );
};
